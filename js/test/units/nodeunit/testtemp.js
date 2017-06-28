/*
 * testtemp.js - test the temperature object
 * 
 * Copyright © 2014-2015,2017, JEDLSoft
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

if (typeof(TemperatureUnit) === "undefined") {
    var TemperatureUnit = require("../.././../lib/TemperatureUnit.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testtemp = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testTemperatureConstructor: function(test) {
        var m = new TemperatureUnit({
            unit: "celsius",
            amount: 2
        });
    
        test.expect(1);
        test.ok(m !== null);
        test.done();
    },
    
    testTemperatureConvertCelciusToFahrenheit1: function(test) {
        var m1 = new TemperatureUnit({
            unit: "celsius",
            amount: 0
        });
        var m2 = new TemperatureUnit({
            unit: "fahrenheit",
            amount: m1
        });
    
        test.expect(3);
        test.ok(m1 !== null);
        test.ok(m2 !== null);
    
        test.roughlyEqual(0.001, m2.getAmount(), 32);
        test.done();
    },
    
    testTemperatureConvertCelciusToFahrenheit2: function(test) {
        var m1 = new TemperatureUnit({
            unit: "celsius",
            amount: 100
        });
        var m2 = new TemperatureUnit({
            unit: "fahrenheit",
            amount: m1
        });
    
        test.expect(3);
        test.ok(m1 !== null);
        test.ok(m2 !== null);
    
        test.roughlyEqual(0.001, m2.getAmount(), 212);
        test.done();
    },
    
    testTemperatureConvertCelciusToFahrenheit3: function(test) {
        var m1 = new TemperatureUnit({
            unit: "celsius",
            amount: 30
        });
        var m2 = new TemperatureUnit({
            unit: "fahrenheit",
            amount: m1
        });
    
        test.expect(3);
        test.ok(m1 !== null);
        test.ok(m2 !== null);
    
        test.roughlyEqual(0.001, m2.getAmount(), 86);
        test.done();
    },
    
    testTemperatureConvertFahrenheitToCelcius1: function(test) {
        var m1 = new TemperatureUnit({
            unit: "fahrenheit",
            amount: 50
        });
        var m2 = new TemperatureUnit({
            unit: "celsius",
            amount: m1
        });
    
        test.expect(3);
        test.ok(m1 !== null);
        test.ok(m2 !== null);
    
        test.roughlyEqual(0.001, m2.getAmount(), 10);
        test.done();
    },
    
    testTemperatureConvertFahrenheitToCelcius2: function(test) {
        var m1 = new TemperatureUnit({
            unit: "fahrenheit",
            amount: 100
        });
        var m2 = new TemperatureUnit({
            unit: "celsius",
            amount: m1
        });
    
        test.expect(3);
        test.ok(m1 !== null);
        test.ok(m2 !== null);
    
        test.roughlyEqual(0.001, m2.getAmount(), 37.778);
        test.done();
    },
    
    testTemperatureConvertCelciusToKelvin1: function(test) {
        var m1 = new TemperatureUnit({
            unit: "celsius",
            amount: 0
        });
        var m2 = new TemperatureUnit({
            unit: "kelvin",
            amount: m1
        });
    
        test.expect(3);
        test.ok(m1 !== null);
        test.ok(m2 !== null);
    
        test.roughlyEqual(0.001, m2.getAmount(), 273.15);
        test.done();
    },
    
    testTemperatureConvertCelciusToKelvin2: function(test) {
        var m1 = new TemperatureUnit({
            unit: "celsius",
            amount: 100
        });
        var m2 = new TemperatureUnit({
            unit: "kelvin",
            amount: m1
        });
    
        test.expect(3);
        test.ok(m1 !== null);
        test.ok(m2 !== null);
    
        test.roughlyEqual(0.001, m2.getAmount(), 373.15);
        test.done();
    },
    
    testTemperatureConvertKelvinToCelcius1: function(test) {
        var m1 = new TemperatureUnit({
            unit: "kelvin",
            amount: 0
        });
        var m2 = new TemperatureUnit({
            unit: "celsius",
            amount: m1
        });
    
        test.expect(3);
        test.ok(m1 !== null);
        test.ok(m2 !== null);
    
        test.roughlyEqual(0.001, m2.getAmount(),  -273.15);
        test.done();
    },
    
    testTemperatureConvertKelvinToCelcius2: function(test) {
        var m1 = new TemperatureUnit({
            unit: "kelvin",
            amount: 285.3
        });
        var m2 = new TemperatureUnit({
            unit: "celsius",
            amount: m1
        });
    
        test.expect(3);
        test.ok(m1 !== null);
        test.ok(m2 !== null);
    
        test.roughlyEqual(0.001, m2.getAmount(), 12.15);
        test.done();
    },
    
    testTemperatureConvertFahrenheitToKelvin1: function(test) {
        var m1 = new TemperatureUnit({
            unit: "fahrenheit",
            amount: 0
        });
        var m2 = new TemperatureUnit({
            unit: "kelvin",
            amount: m1
        });
    
        test.expect(3);
        test.ok(m1 !== null);
        test.ok(m2 !== null);
    
        test.roughlyEqual(0.001, m2.getAmount(), 255.372);
        test.done();
    },
    
    testTemperatureConvertFahrenheitToKelvin2: function(test) {
        var m1 = new TemperatureUnit({
            unit: "fahrenheit",
            amount: 100
        });
        var m2 = new TemperatureUnit({
            unit: "kelvin",
            amount: m1
        });
    
        test.expect(3);
        test.ok(m1 !== null);
        test.ok(m2 !== null);
    
        test.roughlyEqual(0.001, m2.getAmount(), 310.928);
        test.done();
    },
    
    testTemperatureConvertKelvinToFahrenheit1: function(test) {
        var m1 = new TemperatureUnit({
            unit: "kelvin",
            amount: 0
        });
        var m2 = new TemperatureUnit({
            unit: "fahrenheit",
            amount: m1
        });
    
        test.expect(3);
        test.ok(m1 !== null);
        test.ok(m2 !== null);
    
        test.roughlyEqual(0.001, m2.getAmount(),  -459.67);
        test.done();
    },
    
    testTemperatureConvertKelvinToFahrenheit2: function(test) {
        var m1 = new TemperatureUnit({
            unit: "kelvin",
            amount: 285.3
        });
        var m2 = new TemperatureUnit({
            unit: "fahrenheit",
            amount: m1
        });
    
        test.expect(3);
        test.ok(m1 !== null);
        test.ok(m2 !== null);
    
        test.roughlyEqual(0.001, m2.getAmount(), 53.87);
        test.done();
    },
    
    testTemperatureAliasCelcius1: function(test) {
        var m = new TemperatureUnit({
            unit: "Celsius",
            amount: 0
        });
    
        test.expect(2);
        test.ok(m !== null);
    
        test.equal(m.getUnit(), "celsius");
        test.done();
    },
    
    testTemperatureAliasCelcius2: function(test) {
        var m = new TemperatureUnit({
            unit: "°C",
            amount: 0
        });
    
        test.expect(2);
        test.ok(m !== null);
    
        test.equal(m.getUnit(), "celsius");
        test.done();
    },
    
    testTemperatureAliasCelcius3: function(test) {
        var m = new TemperatureUnit({
            unit: "℃",
            amount: 0
        });
    
        test.expect(2);
        test.ok(m !== null);
    
        test.equal(m.getUnit(), "celsius");
        test.done();
    },
    
    testTemperatureAliasCelcius4: function(test) {
        var m = new TemperatureUnit({
            unit: "C",
            amount: 0
        });
    
        test.expect(2);
        test.ok(m !== null);
    
        test.equal(m.getUnit(), "celsius");
        test.done();
    },
    
    testTemperatureAliasFahrenheit1: function(test) {
        var m = new TemperatureUnit({
            unit: "Fahrenheit",
            amount: 0
        });
    
        test.expect(2);
        test.ok(m !== null);
    
        test.equal(m.getUnit(), "fahrenheit");
        test.done();
    },
    
    testTemperatureAliasFahrenheit2: function(test) {
        var m = new TemperatureUnit({
            unit: "°F",
            amount: 0
        });
    
        test.expect(2);
        test.ok(m !== null);
    
        test.equal(m.getUnit(), "fahrenheit");
        test.done();
    },
    
    testTemperatureAliasFahrenheit3: function(test) {
        var m = new TemperatureUnit({
            unit: "℉",
            amount: 0
        });
    
        test.expect(2);
        test.ok(m !== null);
    
        test.equal(m.getUnit(), "fahrenheit");
        test.done();
    },
    
    testTemperatureAliasFahrenheit4: function(test) {
        var m = new TemperatureUnit({
            unit: "F",
            amount: 0
        });
    
        test.expect(2);
        test.ok(m !== null);
    
        test.equal(m.getUnit(), "fahrenheit");
        test.done();
    },
    
    testTemperatureAliasKelvin1: function(test) {
        var m = new TemperatureUnit({
            unit: "Kelvin",
            amount: 0
        });
    
        test.expect(2);
        test.ok(m !== null);
    
        test.equal(m.getUnit(), "kelvin");
        test.done();
    },
    
    testTemperatureAliasKelvin2: function(test) {
        var m = new TemperatureUnit({
            unit: "K",
            amount: 0
        });
    
        test.expect(2);
        test.ok(m !== null);
    
        test.equal(m.getUnit(), "kelvin");
        test.done();
    },
    
    testGetMeasures: function(test) {
        var measures = TemperatureUnit.getMeasures();
        var expected = [
            "celsius",
            "fahrenheit",
            "kelvin"
        ];
        test.expect(1);
        test.equalIgnoringOrder(measures, expected);
        test.done();
    }
    
};