/*
 * VolumeUnit.js - Unit conversions for volume measurements
 *
 * Copyright © 2014-2015, 2018 JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
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
Measurement.js
*/

var Measurement = require("./Measurement.js");

/**
 * @class
 * Create a new Volume measurement instance.
 *
 * @constructor
 * @extends Measurement
 * @param options {{unit:string,amount:number|string|undefined}} Options controlling
 * the construction of this instance
 */
var VolumeUnit = function (options) {
    this.unit = "cubic-meter";
    this.amount = 0;

    this.ratios = VolumeUnit.ratios;
    this.aliases = VolumeUnit.aliases;
    this.aliasesLower = VolumeUnit.aliasesLower;
    this.systems = VolumeUnit.systems;

    this.parent(options);
};

VolumeUnit.prototype = new Measurement();
VolumeUnit.prototype.parent = Measurement;
VolumeUnit.prototype.constructor = VolumeUnit;

VolumeUnit.ratios = {
    /*                     index, tsp,      tbsp,          cubic inch  us ounce, cup,        pint,       quart,      gallon,      cubic foot,  milliliter  liter,      cubic meter, imperial tsp,  imperial tbsp, imperial ounce,  imperial pint,  imperial quart, imperial gal, */
    "teaspoon" :           [1,    1,        0.333333,      0.300781,   0.166667, 0.0208333,  0.0104167,  0.00520833, 0.00130208,  0.000174063, 4.92892,    0.00492892, 4.9289e-6,   0.832674,      0.277558,      0.173474,        0.00867369,     0.00433684,     0.00108421          ],
    "tablespoon":          [2,    3,        1,             0.902344,   0.5,      0.0625,     0.0312,     0.015625,   0.00390625,  0.00052219,  14.7868,    0.0147868,  1.4787e-5,   2.49802,       0.832674,      0.520421,        0.0260211,      0.0130105,      0.00325263          ],
    "cubic-inch":          [3,    3.32468,  1.10823,       1,          0.554113, 0.0692641,  0.034632,   0.017316,   0.004329,    0.000578704, 16.3871,    0.0163871,  1.6387e-5,   2.76837,       0.92279,       0.576744,        0.0288372,      0.0144186,      0.00360465          ],
    "fluid-ounce":         [4,    6,        2,             1.80469,    1,        0.125,      0.0625,     0.03125,    0.0078125,   0.00104438,  29.5735,    0.0295735,  2.9574e-5,   4.99604,       1.04084,       1.04084,         0.0520421,      0.0260211,      0.00650526          ],
    "cup":                 [5,    48,       16,            14.4375,    8,        1,          0.5,        0.25,       0.0625,      0.00835503,  236.588,    0.236588,   0.000236588, 39.9683,       13.3228,       8.32674,         0.416337,       0.208168,       0.0520421           ],
    "pint":                [6,    96,       32,            28.875,     16,       2,          1,          0.5,        0.125,       0.0167101,   473.176,    0.473176,   0.000473176, 79.9367,       26.6456,       16.6535,         0.832674,       0.416337,       0.104084            ],
    "quart":               [7,    192,      64,            57.75,      32,       4,          2,          1,          0.25,        0.0334201,   946.353,    0.946353,   0.000946353, 159.873,       53.2911,       33.307,          1.66535,        0.832674,       0.208168            ],
    "gallon":              [8,    768,      256,           231,        128,      16,         8,          4,          1,           0.133681,    3785.41,    3.78541,    0.00378541,  639.494,       213.165,       133.228,         6.66139,        3.3307,         0.832674            ],
    "cubic-foot":          [9,    5745.04,  1915.01,       1728,       957.506,  119.688,    59.8442,    29.9221,    7.48052,     1,           28316.8,    28.3168,    0.0283168,   4783.74,       1594.58,       996.613,         49.8307,        24.9153,        6.22883             ],
    "milliliter":          [10,   0.202884, 0.067628,      0.0610237,  0.033814, 0.00422675, 0.00211338, 0.00105669, 0.000264172, 3.5315e-5,   1,          0.001,      1e-6,        0.168936,      0.0563121,     0.0351951,       0.00175975,     0.000879877,    0.000219969         ],
    "liter":               [11,   202.884,  67.628,        61.0237,    33.814,   4.22675,    2.11338,    1.05669,    0.264172,    0.0353147,   1000,       1,          0.001,       56.3121,       56.3121,       35.191,          1.75975,        0.879877,       0.219969            ],
    "cubic-meter":         [12,   202884,   67628,         61023.7,    33814,    4226.75,    2113.38,    1056.69,    264.172,     35.3147,     1e+6,       1000,       1,           168936,        56312.1,       35195.1,         1759.75,        879.877,        219.969             ],
    "teaspoon-imperial":   [13,   1.20095,  0.200158,      0.361223,   0.600475, 0.0250198,  0.0125099,  0.00625495, 0.00156374,  0.000209041, 5.91939,    0.00591939, 5.9194e-6,   1,             0.333333,      0.208333,        0.0104167,      0.00520833,     0.00130208          ],
    "tablespoon-imperial": [14,   3.60285,  1.20095,       1.08367,    0.600475, 0.0750594,  0.0375297,  0.0187649,  0.00469121,  0.000627124, 17.7582,    0.0177582,  1.7758e-5,   3,             1,             0.625,           0.03125,        0.015625,       0.00390625          ],
    "ounce-imperial":      [15,   5.76456,  1.92152,       1.73387,    0.96076,  0.120095,   0.0600475,  0.0300238,  0.00750594,  0.0010034,   28.4131,    0.0284131,  2.8413e-5,   4.8,           1.6,           1,               0.05,           0.025,          0.00625             ],
    "pint-imperial":       [16,   115.291,  38.4304,       34.6774,    19.2152,  2.4019,     1.20095,    0.600475,   0.150119,    0.020068,    568.261,    0.568261,   0.000568261, 96,            32,            20,              1,              0.5,            0.125               ],
    "quart-imperial":      [17,   230.582,  76.8608,       69.3549,    38.4304,  4.8038,     2.4019,     1.20095,    0.300238,    0.0401359,   1136.52,    1.13652,    0.00113652,  192,           64,            40,              2,              1,              0.25                ],
    "gallon-imperial":     [18,   922.33,   307.443,       277.42,     153.722,  19.2152,    9.6076,     4.8038,     1.20095,     0.160544,    4546.09,    4.54609,    0.00454609,  768,           256,           160,             8,              4,              1                   ]
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
VolumeUnit.prototype.getMeasure = function() {
    return "volume";
};

VolumeUnit.aliases = {
    "US gal": "gallon",
    "US gallon": "gallon",
    "US Gal": "gallon",
    "US Gallons": "gallon",
    "Gal(US)": "gallon",
    "gal(US)": "gallon",
    "gallon": "gallon",
    "quart": "quart",
    "US quart": "quart",
    "US quarts": "quart",
    "US Quart": "quart",
    "US Quarts": "quart",
    "US qt": "quart",
    "Qt(US)": "quart",
    "qt(US)": "quart",
    "US pint": "pint",
    "US Pint": "pint",
    "pint": "pint",
    "pint(US)": "pint",
    "Pint(US)": "pint",
    "US cup": "cup",
    "US Cup": "cup",
    "cup(US)": "cup",
    "Cup(US)": "cup",
    "cup": "cup",
    "us ounce": "fluid-ounce",
    "US ounce": "fluid-ounce",
    "fluid ounce": "fluid-ounce",
    "fluid ounces": "fluid-ounce",
    "Fluid Ounce": "fluid-ounce",
    "Fluid Ounces": "fluid-ounce",
    "℥": "fluid-ounce",
    "US Oz": "fluid-ounce",
    "oz(US)": "fluid-ounce",
    "Oz(US)": "fluid-ounce",
    "US tbsp": "tablespoon",
    "tbsp": "tablespoon",
    "tbsp(US)": "tablespoon",
    "US tablespoon": "tablespoon",
    "US tsp": "teaspoon",
    "US teaspoon": "teaspoon",
    "tsp(US)": "teaspoon",
    "tsp": "teaspoon",
    "Cubic meter": "cubic-meter",
    "cubic meter": "cubic-meter",
    "Cubic metre": "cubic-meter",
    "cubic metre": "cubic-meter",
    "cu meter": "cubic-meter",
    "cu metre": "cubic-meter",
    "cu m": "cubic-meter",
    "m3": "cubic-meter",
    "m³": "cubic-meter",
    "Liter": "liter",
    "Liters": "liter",
    "liter": "liter",
    "L": "liter",
    "l": "liter",
    "Milliliter": "milliliter",
    "ML": "milliliter",
    "ml": "milliliter",
    "milliliter": "milliliter",
    "mL": "milliliter",
    "Imperial gal": "gallon-imperial",
    "imperial gallon": "gallon-imperial",
    "Imperial gallon": "gallon-imperial",
    "gallon(imperial)": "gallon-imperial",
    "gal(imperial)": "gallon-imperial",
    "Imperial quart": "quart-imperial",
    "imperial quart": "quart-imperial",
    "Imperial Quart": "quart-imperial",
    "IMperial qt": "quart-imperial",
    "qt(Imperial)": "quart-imperial",
    "quart(imperial)": "quart-imperial",
    "Imperial pint": "pint-imperial",
    "imperial pint": "pint-imperial",
    "pint(Imperial)": "pint-imperial",
    "imperial oz": "ounce-imperial",
    "imperial ounce": "ounce-imperial",
    "Imperial Ounce": "ounce-imperial",
    "Imperial tbsp": "tablespoon-imperial",
    "imperial tbsp": "tablespoon-imperial",
    "tbsp(Imperial)": "tablespoon-imperial",
    "Imperial tsp": "teaspoon-imperial",
    "imperial tsp": "teaspoon-imperial",
    "tsp(Imperial)": "teaspoon-imperial",
    "Cubic foot": "cubic-foot",
    "cubic foot": "cubic-foot",
    "Cubic Foot": "cubic-foot",
    "Cubic feet": "cubic-foot",
    "cubic Feet": "cubic-foot",
    "cubic ft": "cubic-foot",
    "ft3": "cubic-foot",
    "Cubic inch": "cubic-inch",
    "Cubic inches": "cubic-inch",
    "cubic inches": "cubic-inch",
    "cubic inch": "cubic-inch",
    "cubic in": "cubic-inch",
    "cu in": "cubic-inch",
    "cu inch": "cubic-inch",
    "inch³": "cubic-inch",
    "in³": "cubic-inch",
    "inch^3": "cubic-inch",
    "in^3": "cubic-inch",
    "c.i": "cubic-inch",
    "CI": "cubic-inch",
    "cui": "cubic-inch"
};

VolumeUnit.aliasesLower = {};
for (var a in this.aliases) {
    VolumeUnit.aliasesLower[a.toLowerCase()] = VolumeUnit.aliases[a];
}


/**
 * Convert a volume to another measure.
 * @static
 * @param to {string} unit to convert to
 * @param from {string} unit to convert from
 * @param volume {number} amount to be convert
 * @returns {number|undefined} the converted amount
 */
VolumeUnit.convert = function(to, from, volume) {
    from = Measurement.getUnitIdCaseInsensitive(VolumeUnit, from) || from;
    to = Measurement.getUnitIdCaseInsensitive(VolumeUnit, to) || to;
    var fromRow = VolumeUnit.ratios[from];
    var toRow = VolumeUnit.ratios[to];
    if (typeof(from) === 'undefined' || typeof(to) === 'undefined') {
        return undefined;
    }
    var result = volume * fromRow[toRow[0]];
    return result;
};

/**
 * Return a new instance of this type of measurement.
 * 
 * @param {Object} params parameters to the constructor
 * @return {Measurement} a measurement subclass instance
 */
VolumeUnit.prototype.newUnit = function(params) {
    return new VolumeUnit(params);
};

/**
 * @private
 * @static
 */
VolumeUnit.getMeasures = function () {
    return Object.keys(VolumeUnit.ratios);
};

VolumeUnit.systems = {
    "metric": [
        "milliliter",
        "liter",
        "cubic-meter"
    ],
    "uscustomary": [
        "teaspoon",
        "tablespoon",
        "cubic-inch",
        "fluid-ounce",
        "cup",
        "pint",
        "quart",
        "gallon",
        "cubic-foot"
    ],
    "imperial": [
        "teaspoon-imperial",
        "tablespoon-imperial",
        "ounce-imperial",
        "pint-imperial",
        "quart-imperial",
        "gallon-imperial"
    ],
    "conversions": {
        "metric": {
            "uscustomary": {
                "milliliter": "teaspoon",
                "liter": "quart",
                "cubic-meter": "cubic-foot"
            },
            "imperial": {
                "milliliter": "teaspoon-imperial",
                "liter": "quart-imperial",
                "cubic-meter": "gallon-imperial"
            }
        },
        "imperial": {
            "metric": {
                "teaspoon-imperial": "milliliter",
                "tablespoon-imperial": "milliliter",
                "ounce-imperial": "milliliter",
                "pint-imperial": "liter",
                "quart-imperial": "liter",
                "gallon-imperial": "cubic-meter"
            },
            "uscustomary": {
                "teaspoon-imperial": "teaspoon",
                "tablespoon-imperial": "tablespoon",
                "ounce-imperial": "fluid-ounce",
                "pint-imperial": "pint",
                "quart-imperial": "quart",
                "gallon-imperial": "gallon"
            }
        },
        "uscustomary": {
            "imperial": {
                "teaspoon": "teaspoon-imperial",
                "tablespoon": "tablespoon-imperial",
                "cubic-inch": "tablespoon-imperial",
                "fluid-ounce": "ounce-imperial",
                "cup": "ounce-imperial",
                "pint": "pint-imperial",
                "quart": "quart-imperial",
                "gallon": "gallon-imperial",
                "cubic-foot": "gallon-imperial"
            },
            "metric": {
                "teaspoon": "milliliter",
                "tablespoon": "milliliter",
                "cubic-inch": "milliliter",
                "fluid-ounce": "milliliter",
                "cup": "milliliter",
                "pint": "liter",
                "quart": "liter",
                "gallon": "cubic-meter",
                "cubic-foot": "cubic-meter"
            }
        }
    }
};

//register with the factory method
Measurement._constructors["volume"] = VolumeUnit;

module.exports = VolumeUnit;
