/*
 * currency.js - Currency definition
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

// !depends ilibglobal.js locale.js

// !data currency

/**
 * @class
 * Create a new currency information instance. Instances of this class encode 
 * information about a particular currency.<p> 
 * 
 * The options can contain any of the following properties:
 * 
 * <ul>
 * <li><i>locale</i> - specify the locale for this instance
 * <li><i>code</i> - find info on a specific currency with the given ISO 4217 code 
 * <li><i>sign</i> - search for a currency that uses this sign
 * </ul>
 * 
 * When searching for a currency by its sign, this class cannot guarantee 
 * that it will return info about a specific currency. The reason is that currency 
 * signs are sometimes shared between different currencies and the sign is 
 * therefore ambiguous. If you need a 
 * guarantee, find the currency using the code instead.<p>
 * 
 * The way this class finds a currency by sign is the following. If the sign is 
 * unambiguous, then
 * the currency is returned. If there are multiple currencies that use the same
 * sign, and the current locale uses that sign, then the default currency for
 * the current locale is returned. If there are multiple, but the current locale
 * does not use that sign, then the currency with the largest circulation is
 * returned. For example, if you are in the en-GB locale, and the sign is "$",
 * then this class will notice that there are multiple currencies with that
 * sign (USD, CAD, AUD, HKD, MXP, etc.) Since "$" is not used in en-GB, it will 
 * pick the one with the largest circulation, which in this case is the US Dollar
 * (USD).<p>
 * 
 * If neither the code or sign property is set, the currency that is most common 
 * for the locale
 * will be used instead. If the locale is not set, the default locale will be used.
 * If the code is given, but it is not found in the list of known currencies, this
 * constructor will throw an exception. If the sign is given, but it is not found,
 * this constructor will default to the currency for the current locale. If both
 * the code and sign properties are given, then the sign property will be ignored
 * and only the code property used. If the locale is given, but it is not a known
 * locale, this class will default to the default locale instead.<p>
 * 
 * Depends directive: !depends currency.js
 * 
 * @constructor
 * @param options {Object} a set of properties to govern how this instance is constructed.
 * @throws "currency xxx is unknown" when the given currency code is not in the list of 
 * known currencies. xxx is replaced with the requested code.
 */
ilib.Currency = function (options) {
	var li, currencies, currInfo, sign, cur;
	
	if (options) {
		if (options.code) {
			this.code = options.code;
		}
		if (options.locale) {
			this.locale = (typeof(options.locale) === 'string') ? new ilib.Locale(options.locale) : options.locale;
		}
		if (options.sign) {
			sign = options.sign;
		}
	}
	
	this.locale = this.locale || new ilib.Locale();
	li = new ilib.LocaleInfo(this.locale);
		
	currencies = new ilib.ResBundle({
		locale: this.locale,
		name: "currency"
	}).getResObj();

	if (this.code) {
		currInfo = currencies[this.code];
		if (!currInfo) {
			throw "currency " + this.code + " is unknown";
		}
	} else if (sign) {
		currInfo = currencies[sign]; // maybe it is really a code...
		if (typeof(currInfo) !== 'undefined') {
			this.code = sign;
		} else {
			this.code = li.getCurrency();
			currInfo = currencies[this.code];
			if (currInfo.sign !== sign) {
				// current locale does not use the sign, so search for it
				for (cur in currencies) {
					if (cur && currencies[cur]) {
						currInfo = currencies[cur];
						if (currInfo.sign === sign) {
							// currency data is already ordered so that the currency with the
							// largest circulation is at the beginning, so all we have to do
							// is take the first one in the list that matches
							this.code = cur;
							break;
						}
					}
				}
			}
		}
	}
	
	if (!currInfo || !this.code) {
		this.code = li.getCurrency();
		currInfo = currencies[this.code];
	}
	
	this.name = currInfo.name;
	this.fractionDigits = currInfo.decimals;
	this.sign = currInfo.sign;
};

ilib.Currency.prototype = {
	/**
	 * Return the ISO 4217 currency code for this instance.
	 * @returns {string} the ISO 4217 currency code for this instance
	 */
	getCode: function () {
		return this.code;
	},
	
	/**
	 * Return the default number of fraction digits that is typically used
	 * with this type of currency.
	 * @returns {number} the number of fraction digits for this currency
	 */
	getFractionDigits: function () {
		return this.fractionDigits;
	},
	
	/**
	 * Return the sign commonly used to represent this currency.
	 * @returns {string} the sign commonly used to represent this currency
	 */
	getSign: function () {
		return this.sign;
	},
	
	/**
	 * Return the name of the currency in English.
	 * @returns {string} the name of the currency in English
	 */
	getName: function () {
		return this.name;
	},
	
	/**
	 * Return the locale for this currency. If the options to the constructor 
	 * included a locale property in order to find the currency that is appropriate
	 * for that locale, then the locale is returned here. If the options did not
	 * include a locale, then this method returns undefined.
	 * @returns {ilib.Locale} the locale used in the constructor of this instance,
	 * or undefined if no locale was given in the constructor
	 */
	getLocale: function () {
		return this.locale;
	}
};