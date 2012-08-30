/*
 * numprs.js - Parse a number in any locale
 * 
 * Copyright © 2012, JEDL Software, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
!depends 
ilibglobal.js 
locale.js 
strings.js 
resources.js 
ctype.isdigit.js 
ctype.isspace.js
*/

/**
 * @class
 * Parse a string as a number, ignoring all locale-specific formatting.<p>
 * 
 * This class is different from the standard Javascript parseInt() and parseFloat() 
 * functions in that the number to be parsed can have formatting characters in it 
 * that are not supported by those two
 * functions, and it handles numbers written in other locales properly. For example, 
 * if you pass the string "203,231.23" to the parseFloat() function in Javascript, it 
 * will return you the number 203. The ilib.Number class will parse it correctly and 
 * the value() function will return the number 203231.23. If you pass parseFloat() the 
 * string "203.231,23" with the locale set to de-DE, it will return you 203 again. This
 * class will return the correct number 203231.23 again.<p>
 * 
 * The options object may contain any of the following properties:
 * 
 * <ul>
 * <li><i>locale</i> - specify the locale of the string to parse. This is used to
 * figure out what the decimal point character is. If not specified, the default locale
 * for the app or browser is used.
 * <li><i>type</i> - specify whether this string should be interpretted as a number,
 * currency, or percentage amount. When the number is interpretted as a currency
 * amount, the getCurrency() method will return something useful, otherwise it will
 * return undefined. If
 * the number is to be interpretted as percentage amount and there is a percentage sign
 * in the string, then the number will be returned
 * as a fraction from the valueOf() method. If there is no percentage sign, then the 
 * number will be returned as a regular number. That is "58.3%" will be returned as the 
 * number 0.583 but "58.3" will be returned as 58.3. Valid values for this property 
 * are "number", "currency", and "percentage". Default if this is not specified is
 * "number".
 * </ul>
 * <p>
 * 
 * Depends directive: !depends numprs.js
 * 
 * @constructor
 * @param {string} str a string to parse as a number
 * @param {Object} options Options controlling how the instance should be created 
 */
ilib.Number = function (str, options) {
	var li, i, stripped = "";
	
	this.str = str || "0";
	this.locale = new ilib.Locale();
	this.type = "number";
	
	if (options) {
		if (options.locale) {
			this.locale = (typeof(options.locale) === 'string') ? new ilib.Locale(options.locale) : options.locale;
		}
		if (options.type) {
			switch (options.type) {
				case "number":
				case "currency":
				case "percentage":
					this.type = options.type;
					break;
				default:
					break;
			}
		}
	}
	
	
	li = new ilib.LocaleInfo(this.locale);
	this.decimal = li.getDecimalSeparator();
	
	// stripping should work for all locales, because you just ignore all the
	// formatting except the decimal char
	for (i = 0; i < this.str.length; i++) {
		if (ilib.CType.isDigit(this.str.charAt(i))) {
			stripped += this.str.charAt(i);
		} else if (this.str.charAt(i) === this.decimal) {
			stripped += "."; // always convert to period
		}
	}
	this.value = parseFloat(stripped);
	
	switch (this.type) {
		default:
			// don't need to do anything special for other types
			break;
		case "percentage":
			if (this.str.indexOf(li.getPercentageSymbol()) !== -1) {
				this.value /= 100;
			}
			break;
		case "currency":
			stripped = "";
			i = 0;
			while (i < this.str.length &&
				   !ilib.CType.isDigit(this.str.charAt(i)) &&
				   !ilib.CType.isSpace(this.str.charAt(i))) {
				stripped += this.str.charAt(i++);
			}
			if (stripped.length === 0) {
				while (i < this.str.length && 
					   ilib.CType.isDigit(this.str.charAt(i)) ||
					   ilib.CType.isSpace(this.str.charAt(i)) ||
					   this.str.charAt(i) === '.' ||
					   this.str.charAt(i) === ',' ) {
					i++;
				}
				while (i < this.str.length && 
					   !ilib.CType.isDigit(this.str.charAt(i)) &&
					   !ilib.CType.isSpace(this.str.charAt(i))) {
					stripped += this.str.charAt(i++);
				}
			}
			this.currency = new ilib.Currency({locale: this.locale, sign: stripped});
			break;
	}
};

ilib.Number.prototype = {
	/**
	 * Return the locale for this formatter instance.
	 * @returns {ilib.Locale} the locale instance for this formatter
	 */
	getLocale: function () {
		return this.locale;
	},
	
	/**
	 * Return the original string that this number instance was created with.
	 * @return {string} the original string
	 */
	toString: function () {
		return this.str;
	},
	
	/**
	 * If the type of this Number instance is "currency", then the parser will attempt
	 * to figure out which currency this amount represents. The amount can be written
	 * with any of the currency signs or ISO 4217 codes that are currently
	 * recognized by ilib, and the currency signs may occur before or after the
	 * numeric portion of the string. If no currency can be recognized, then the 
	 * default currency for the locale is returned. If multiple currencies can be
	 * recognized (for example if the currency sign is "$"), then this method 
	 * will prefer the one for the current locale. If multiple currencies can be
	 * recognized, but none are used in the current locale, then the first currency
	 * encountered will be used. This may produce random results, though the larger
	 * currencies occur earlier in the list. For example, if the sign found in the
	 * string is "$" and that is not the sign of the currency of the current locale
	 * then the US dollar will be recognized, as it is the largest currency that uses
	 * the "$" as its sign.
	 * 
	 * @return {ilib.Currency|undefined} the currency instance for this amount, or 
	 * undefined if this Number object is not of type currency
	 */
	getCurrency: function () {
		return this.currency;
	},
	
	/**
	 * Return the value of this number object as a primitive number instance.
	 * @return {number} the value of this number instance
	 */
	valueOf: function () {
		return this.value;
	}
};