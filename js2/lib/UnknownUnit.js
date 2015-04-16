/*
 * Unknown.js - Dummy unit conversions for unknown types
 * 
 * Copyright © 2014-2015, JEDLSoft
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

// Do not inherit from Measurement.js because that creates a circular 
// dependency. Instead, make this look like a Measurement, but to not
// inherit from it.

/**
 * @class
 * Create a new unknown measurement instance.
 * 
 * @constructor
 * @extends Measurement
 * @param options {{unit:string,amount:number|string|undefined}} Options controlling 
 * the construction of this instance
 */
var UnknownUnit = function (options) {
	if (options) {
		this.unit = options.unit;
		this.amount = options.amount;
	}
};

UnknownUnit.aliases = {
	"unknown":"unknown"
};

/**
 * Return the type of this measurement. Examples are "mass",
 * "length", "speed", etc. Measurements can only be converted
 * to measurements of the same type.<p>
 * 
 * The type of the units is determined automatically from the 
 * units. For example, the unit "grams" is type "mass". Use the 
 * static call {@link Measurement.getAvailableUnits}
 * to find out what units this version of ilib supports.
 *  
 * @return {string} the name of the type of this measurement
 */
UnknownUnit.prototype.getMeasure = function() {
	return "unknown";
};

/**
 * Return a new measurement instance that is converted to a new
 * measurement unit. Measurements can only be converted
 * to measurements of the same type.<p>
 *  
 * @param {string} to The name of the units to convert to
 * @return {Measurement|undefined} the converted measurement
 * or undefined if the requested units are for a different
 * measurement type 
 */
UnknownUnit.prototype.convert = function(to) {
	return undefined;
};

/**
 * Convert a unknown to another measure.
 * @static
 * @param {string} to unit to convert to
 * @param {string} from unit to convert from
 * @param {number} unknown amount to be convert
 * @returns {number|undefined} the converted amount
 */
UnknownUnit.convert = function(to, from, unknown) {
    return undefined;
};

/**
 * Localize the measurement to the commonly used measurement in that locale. For example
 * If a user's locale is "en-US" and the measurement is given as "60 kmh", 
 * the formatted number should be automatically converted to the most appropriate 
 * measure in the other system, in this case, mph. The formatted result should
 * appear as "37.3 mph". 
 * 
 * @abstract
 * @param {string} locale current locale string
 * @returns {Measurement} a new instance that is converted to locale
 */
UnknownUnit.prototype.localize = function(locale) {
    return new UnknownUnit({
        unit: this.unit,
        amount: this.amount
    });
};

/**
 * Scale the measurement unit to an acceptable level. The scaling
 * happens so that the integer part of the amount is as small as
 * possible without being below zero. This will result in the 
 * largest units that can represent this measurement without
 * fractions. Measurements can only be scaled to other measurements 
 * of the same type.
 * 
 * @param {string=} measurementsystem system to use (uscustomary|imperial|metric),
 * or undefined if the system can be inferred from the current measure
 * @return {Measurement} a new instance that is scaled to the 
 * right level
 */
UnknownUnit.prototype.scale = function(measurementsystem) {
    return new UnknownUnit({
        unit: this.unit,
        amount: this.amount
    }); 
};

/**
 * @private
 * @static
 */
UnknownUnit.getMeasures = function () {
	return [];
};

module.exports = UnknownUnit;