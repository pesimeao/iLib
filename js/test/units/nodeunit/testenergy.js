/*
 * testEnergys.js - test the Energy object
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

if (typeof(EnergyUnit) === "undefined") {
    var EnergyUnit = require("../.././../lib/EnergyUnit.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testenergy = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testEnergyEnergyConstructor: function(test) {
        test.expect(1);
        var m = new EnergyUnit({
            unit: "kJ",
            amount: 2
        });
    
        test.ok(m !== null);
        test.done();
    },
    
    testEnergyEnergyConvertCalorieToJoule: function(test) {
        test.expect(3);
        var m1 = new EnergyUnit({
            unit: "Cal",
            amount: 20
        });
        var m2 = new EnergyUnit({
            unit: "joule",
            amount: m1
        });
    
        test.ok(m1 !== null);
        test.ok(m2 !== null);
    
        test.equal(m2.getAmount(), 83736);
        test.done();
    },
    
    testEnergyStaticConvert1: function(test) {
        test.expect(1);
        var m = EnergyUnit.convert("gWh", "Cal", 1e+8);
    
        test.roughlyEqual(0.0001, m, 0.1163);
        test.done();
    },
    
    testEnergyStaticConvertWithString: function(test) {
        test.expect(1);
        var m = EnergyUnit.convert("MegaWh", "Wh", "5e+6");
    
        test.equal(m, 5);
        test.done();
    },
    
    testEnergyStaticConvert2: function(test) {
        test.expect(1);
        var m = EnergyUnit.convert("gigajoule", "kJ", 5e+6);
    
        test.equal(m, 5);
        test.done();
    },
    
    testEnergyStaticConvert3: function(test) {
        test.expect(1);
        var m = EnergyUnit.convert("MWh", "kJ", 5e+6);
    
        test.roughlyEqual(0.00001, m, 1.38889);
        test.done();
    },
    
    testEnergyStaticConvert4: function(test) {
        test.expect(1);
        var m = EnergyUnit.convert("cal", "btu", 200);
    
        test.roughlyEqual(0.001, m, 50.399);
        test.done();
    },
    
    testEnergyStaticConvert5: function(test) {
        test.expect(1);
        var m = EnergyUnit.convert("joule", "btu", 200);
    
        test.roughlyEqual(0.01, m, 211011.18);
        test.done();
    },
    
    testEnergyStaticConvert6: function(test) {
        test.expect(1);
        var m = EnergyUnit.convert("joule", "cal", 50);
    
        test.equal(m, 209340);
        test.done();
    },
    
    testEnergyScale1: function(test) {
        test.expect(2);
        var m1 = new EnergyUnit({
            unit: "watt hour",
            amount: 10000
        });
        var m2 = m1.scale("metric");
    
        test.equal(m2.amount, 10);
        test.equal(m2.unit, "kilowatt hour");
        test.done();
    },
    
    testEnergyScale2: function(test) {
        test.expect(2);
        var m1 = new EnergyUnit({
            unit: "kilowatt hour",
            amount: 1233453
        });
        var m2 = m1.scale("metric");
    
        test.equal(m2.amount, 1.233453);
        test.equal(m2.unit, "gigawatt hour");
        test.done();
    },
    
    testEnergyScale3: function(test) {
        test.expect(2);
        var m1 = new EnergyUnit({
            unit: "milli joule",
            amount: 5254578
        });
        var m2 = m1.scale("metric");
    
        test.roughlyEqual(0.000001, m2.amount, 5.254578);
        test.equal(m2.unit, "kilojoule");
        test.done();
    },
    
    testEnergyScale4: function(test) {
        test.expect(2);
        var m1 = new EnergyUnit({
            unit: "mega joule",
            amount: 5254578
        });
        var m2 = m1.scale("metric");
    
        test.equal(m2.amount, 5254.578);
        test.equal(m2.unit, "gigajoule");
        test.done();
    },
    
    testEnergyGetMeasures: function(test) {
        test.expect(1);
        var measures = EnergyUnit.getMeasures();
        var expected = [
            "millijoule",
            "joule",
            "BTU",
            "kilojoule",
            "watt hour",
            "calorie",
            "megajoule",
            "kilowatt hour",
            "gigajoule",
            "megawatt hour",
            "gigawatt hour"
    
        ];
        test.equalIgnoringOrder(measures, expected);
        test.done();
    }
    
};