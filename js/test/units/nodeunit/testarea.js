/*
 * testarea.js - test the area object
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

if (typeof(AreaUnit) === "undefined") {
    var AreaUnit = require("../.././../lib/AreaUnit.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testarea = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testAreaAreaConstructor: function(test) {
    
        var m = new AreaUnit({
            unit: "square km",
            amount: 2
        });
    
        test.expect(1);
        test.ok(m !== null);
        test.done();
    },
    
    testAreaAreaConvertKm2toMi2: function(test) {
        var m1 = new AreaUnit({
            unit: "square km",
            amount:5000
        });
        var m2 = new AreaUnit({
            unit: "square mile",
            amount: m1
        });
    
        test.expect(3);
        test.ok(m1 !== null);
        test.ok(m2 !== null);
    
        test.roughlyEqual(0.1, m2.getAmount(), 1930.511);
        test.done();
    },
    
    testAreaStaticConvert1: function(test) {
        var m = AreaUnit.convert("square mile","square km", 2.0);
    
        test.expect(1);
        test.equal(m, 0.772204);
        test.done();
    },
    
    testAreaStaticConvertWithString: function(test) {
        var m = AreaUnit.convert( "hectare","square km", 2.0);
    
        test.expect(1);
        test.equal(m, 200);
        test.done();
    },
    
    testAreaStaticConvert2: function(test) {
        var m = AreaUnit.convert( "square meter","square km", 2.0);
    
        test.expect(1);
        test.equal(m, 2e+6);
        test.done();
    },
    
    testAreaStaticConvert3: function(test) {
        var m = AreaUnit.convert( "square mile","square km", 2.0);
    
        test.expect(1);
        test.equal(m, 0.772204);
        test.done();
    },
    
    testAreaStaticConvert4: function(test) {
        var m = AreaUnit.convert( "hectare", "square km",2.0);
    
        test.expect(1);
        test.equal(m, 200);
        test.done();
    },
    
    testAreaStaticConvert5: function(test) {
        var m = AreaUnit.convert( "square yard","square km", 2.0);
    
        test.expect(1);
        test.equal(m, 2.392e+6);
        test.done();
    },
    testAreaStaticConvert6: function(test) {
        var m = AreaUnit.convert( "acre", "square km",2.0);
    
        test.expect(1);
        test.equal(m, 494.21);
        test.done();
    },
    testAreaStaticConvert7: function(test) {
        var m = AreaUnit.convert( "square foot","square km", 2.0);
    
        test.expect(1);
        test.roughlyEqual(1e+7, m, 2.153e+7);
        test.done();
    },
    testAreaStaticConvert8: function(test) {
        var m = AreaUnit.convert( "square inch","square km", 2.0);
    
        test.expect(1);
        test.equal(m, 3.1e+9);
        test.done();
    },
    
    testAreaStaticConvert9: function(test) {
        var m = AreaUnit.convert("square mile","hectare", 2.0);
    
        test.expect(1);
        test.roughlyEqual(0.001, m, 0.00772204);
        test.done();
    },
    
    
    testAreaStaticConvert10: function(test) {
        var m = AreaUnit.convert( "square meter","hectare",2.0);
    
        test.expect(1);
        test.equal(m, 20000);
        test.done();
    },
    
    testAreaStaticConvert11: function(test) {
        var m = AreaUnit.convert( "square mile","square meter", 2.0);
    
        test.expect(1);
        test.equal(m, 7.722e-7);
        test.done();
    },
    
    testAreaStaticConvert12: function(test) {
        var m = AreaUnit.convert( "hectare", "square meter",2.0);
    
        test.expect(1);
        test.equal(m, 0.0002);
        test.done();
    },
    
    testAreaStaticConvert13: function(test) {
        var m = AreaUnit.convert( "square yard","square inch", 2.0);
    
        test.expect(1);
        test.roughlyEqual(00000001, m, 0.00154321);
        test.done();
    },
    testAreaStaticConvert14: function(test) {
        var m = AreaUnit.convert( "acre", "square foot",2.0);
    
        test.expect(1);
        test.equal(m, 4.5914e-5);
        test.done();
    },
    testAreaStaticConvert15: function(test) {
        var m = AreaUnit.convert( "square foot","square mile", 2.0);
    
        test.expect(1);
        test.roughlyEqual(1e+7, m, 5.576e+7);
        test.done();
    },
    testAreaStaticConvert16: function(test) {
        var m = AreaUnit.convert( "square inch","acre", 2.0);
    
        test.expect(1);
        test.roughlyEqual(1e+7, m, 1.255e+7);
        test.done();
    },
    
    testAreaStaticConvert17: function(test) {
        var m = AreaUnit.convert( "square inch","square yard", 2.0);
    
        test.expect(1);
        test.equal(m, 2592);
        test.done();
    },
    
    testAreaScale1: function(test) {
        var m1 = new AreaUnit({
            unit: "square meter",
            amount: 100
        });
        var m2 = m1.scale("metric");
    
        test.expect(2);
        test.equal(m2.amount, 100);
        test.equal(m2.unit, "square meter");
        test.done();
    },
    
    testAreaScale2: function(test) {
        var m1 = new AreaUnit({
            unit: "square inch",
            amount: 100
        });
        var m2 = m1.scale("uscustomary");
    
        test.expect(2);
        test.equal(m2.amount, 100);
        test.equal(m2.unit, "square inch");
        test.done();
    },
    
    testAreaScale3: function(test) {
        var m1 = new AreaUnit({
            unit: "square km",
            amount: 100
        });
        var m2 = m1.scale("metric");
    
        test.expect(2);
        test.equal(m2.amount, 100);
        test.equal(m2.unit, "square km");
        test.done();
    },
    
    testAreaScale4: function(test) {
        var m1 = new AreaUnit({
            unit: "acre",
            amount: 100
        });
        var m2 = m1.scale("uscustomary");
    
        test.expect(2);
        test.equal(m2.amount, 100);
        test.equal(m2.unit, "acre");
        test.done();
    },
    
    testAreaScale5: function(test) {
        var m1 = new AreaUnit({
            unit: "hectare",
            amount: 100
        });
        var m2 = m1.scale("metric");
    
        test.expect(2);
        test.equal(m2.amount, 1);
        test.equal(m2.unit, "square km");
        test.done();
    },
    
    testAreaScale6: function(test) {
        var m1 = new AreaUnit({
            unit: "square foot",
            amount: 30000000
        });
        var m2 = m1.scale("uscustomary");
        test.expect(2);
        test.roughlyEqual(0.0001, m2.amount, 1.0761);
        test.equal(m2.unit, "square mile");
        test.done();
    },
    
    testAreaScale7: function(test) {
        var m1 = new AreaUnit({
            unit: "square km",
            amount: 0.0001
        });
        var m2 = m1.scale("metric");
    
        test.expect(2);
        test.equal(m2.amount, 100);
        test.equal(m2.unit, "square meter");
        test.done();
    },
    
    testAreaScale8: function(test) {
        var m1 = new AreaUnit({
            unit: "square mile",
            amount: 0.01
        });
        var m2 = m1.scale("uscustomary");
        test.expect(2);
        test.roughlyEqual(0.01, m2.amount, 6.4);
        test.equal(m2.unit, "acre");
        test.done();
    },
    
    testAreaLocalize1: function(test) {
        var m = new AreaUnit({
            unit: "square miles",
            amount: 1000
        });
    
        m = m.localize("en-IN");
    
        test.expect(2);
        test.roughlyEqual(0.01, m.amount, 2589.99);
        test.equal(m.unit, "square km");
        test.done();
    },
    
    testAreaLocalize2: function(test) {
        var m = new AreaUnit({
            unit: "square km",
            amount: 1000
        });
    
        m = m.localize("en-US");
    
        test.expect(2);
        test.roughlyEqual(0.001, m.amount, 386.102);
        test.equal(m.unit, "square mile");
        test.done();
    },
    
    testAreaLocalize3: function(test) {
        var m = new AreaUnit({
            unit: "square mile",
            amount: 1000
        });
    
        m = m.localize("en-GB");
    
        test.expect(2);
        test.equal(m.amount, 1000);
        test.equal(m.unit, "square mile");
        test.done();
    },
    testAreaGetMeasures: function(test) {
        var measures = AreaUnit.getMeasures();
        var expected = [
            "square centimeter",
            "square km",
            "square inch",
            "square foot",
            "acre",
            "square yard",
            "square mile",
            "square meter",
            "hectare",
        ];
    
        test.expect(1);
        test.equalIgnoringOrder(measures, expected);
        test.done();
    }
    
};