/*
 * testutils.js - test the utility routines
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

function testBsearch() {
    var array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    
    assertEquals(5, ilib.bsearch(10, array));
}

function testBsearchEmptyArray() {
    var array = [];
    
    assertEquals(0, ilib.bsearch(10, array));
}

function testBsearchUndefinedArray() {
    assertEquals(-1, ilib.bsearch(10, undefined));
}

function testBsearchUndefinedTarget() {
    var array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    
    assertEquals(-1, ilib.bsearch(undefined, array));
}

function testBsearchBefore() {
    var array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    
    assertEquals(0, ilib.bsearch(0, array));
}

function testBsearchAfter() {
    var array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    
    assertEquals(10, ilib.bsearch(20, array));
}

function testBsearchExact() {
    var array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    
    // place it right after the exact match
    assertEquals(7, ilib.bsearch(15, array));
}

function testBsearchExactBeginning() {
    var array = [0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    
    // place it right after the exact match
    assertEquals(0, ilib.bsearch(0, array));
}

function testBsearchExactEnd() {
    var array = [0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    
    // place it right after the exact match
    assertEquals(10, ilib.bsearch(19, array));
}

function testBsearchMonthEdge() {
    var array = [0,31,60,91,121,152,182,213,244,274,305,335,366];
    
    assertEquals(6, ilib.bsearch(182, array));
}

function strcmp(left, right) {
    return left.localeCompare(right);
}
   
function testBsearchStrings() {
    var array = [
        "barley", 
        "cardomum", 
        "eggs", 
        "garlic", 
        "jackfruit", 
        "limes", 
        "orange", 
        "quince", 
        "spaghetti", 
        "veal"
    ];
    
    assertEquals(6, ilib.bsearch("mango", array, strcmp));
}

function testBsearchStringsBefore() {
    var array = [
        "barley", 
        "cardomum", 
        "eggs", 
        "garlic", 
        "jackfruit", 
        "limes", 
        "orange", 
        "quince", 
        "spaghetti", 
        "veal"
    ];
    
    assertEquals(0, ilib.bsearch("apple", array, strcmp));
}

function testBsearchStringsAfter() {
    var array = [
        "barley", 
        "cardomum", 
        "eggs", 
        "garlic", 
        "jackfruit", 
        "limes", 
        "orange", 
        "quince", 
        "spaghetti", 
        "veal"
    ];
    
    assertEquals(10, ilib.bsearch("zucchini", array, strcmp));
}

function testModSimple() {
    assertObjectEquals(2, ilib.mod(2, 4));
}

function testModWrap() {
    assertObjectEquals(2, ilib.mod(6, 4));
}

function testModWrapNeg() {
    assertObjectEquals(2, ilib.mod(-6, 4));
}

function testModZeroModulus() {
    assertObjectEquals(0, ilib.mod(6, 0));
}

function testModZeroNum() {
    assertObjectEquals(0, ilib.mod(0, 6));
}

function testModReal() {
    assertRoughlyEquals(2.234231, ilib.mod(2.234231, 4), 0.0000001);
}
function testModRealWrap() {
    assertRoughlyEquals(2.234231, ilib.mod(6.234231, 4), 0.0000001);
}
function testModRealNeg() {
    assertRoughlyEquals(1.7, ilib.mod(-6.3, 4), 0.0000001);
}

function testMergeSimple() {
    var object1 = {"a": "A", "b": "B"},
        object2 = {"c": "C", "d": "D"};
    
    assertObjectEquals({"a": "A", "b": "B", "c": "C", "d": "D"}, ilib.merge(object1, object2));
}

function testMergeSimpleNoSideEffects() {
    var object1 = {"a": "A", "b": "B"},
        object2 = {"c": "C", "d": "D"};
    
    var x = ilib.merge(object1, object1);
    
    assertObjectEquals({"a": "A", "b": "B"}, object1);
}

function testMergeArrays() {
    var object1 = {"a": ["b", "c"]},
        object2 = {"a": ["d"]};
    assertObjectEquals({"a": ["b", "c", "d"]}, ilib.merge(object1, object2));
}

function testMergeArraysDups() {
    var object1 = {"a": ["b", "c"]},
        object2 = {"a": ["c", "d"]};
    
    assertObjectEquals({"a": ["b", "c", "c", "d"]}, ilib.merge(object1, object2));
}

function testMergeArraysEmptySource() {
    var object1 = {"a": []},
        object2 = {"a": ["d"]};
    
    assertObjectEquals({"a": ["d"]}, ilib.merge(object1, object2));
}

function testMergeArraysEmptyTarget() {
    var object1 = {"a": ["b", "c"]},
        object2 = {"a": []};
    
    assertObjectEquals({"a": ["b", "c"]}, ilib.merge(object1, object2));
}

function testMergeArraysIncongruentTypes1() {
    var object1 = {"a": ["b", "c"]},
        object2 = {"a": "d"};
    
    assertObjectEquals({"a": "d"}, ilib.merge(object1, object2));
}

function testMergeArraysIncongruentTypes2() {
    var object1 = {"a": "b"},
        object2 = {"a": ["d"]};
    
    assertObjectEquals({"a": ["d"]}, ilib.merge(object1, object2));
}

function testMergeSimpleProperty() {
    var object1 = {"a": "A", "b": "B"},
        object2 = {"b": "X"};
    
    assertObjectEquals({"a": "A", "b": "X"}, ilib.merge(object1, object2));
}

function testMergeComplexProperty() {
    var object1 = {"a": "A", "b": {"x": "B"}},
        object2 = {"b": "X"};
    
    assertObjectEquals({"a": "A", "b": "X"}, ilib.merge(object1, object2));
}

function testMergeSubobjects() {
    var object1 = {"b": {"x": "X", "y": "Y"}},
        object2 = {"b": {"x": "M", "y": "N"}};
    
    assertObjectEquals({"b": {"x": "M", "y": "N"}}, ilib.merge(object1, object2));
}

function testMergeSubobjectsLeaveObj1PropsUntouched() {
    var object1 = {"a": "A", "b": {"x": "X", "y": "Y", "z": "Z"}},
        object2 = {"b": {"x": "M", "y": "N"}};
    
    assertObjectEquals({"a": "A", "b": {"x": "M", "y": "N", "z": "Z"}}, ilib.merge(object1, object2));
}

function testMergeSubobjectsAddProps() {
    var object1 = {"a": "A", "b": {"x": "X", "y": "Y"}},
        object2 = {"b": {"x": "M", "y": "N", "z": "Z"}};
    
    assertObjectEquals({"a": "A", "b": {"x": "M", "y": "N", "z": "Z"}}, ilib.merge(object1, object2));
}

function testMergeSubobjectsAddProps() {
    var object1 = {"a": "A", "b": {"x": "X", "y": "Y"}},
        object2 = {"b": {"x": "M", "y": "N", "z": "Z"}};
    
    assertObjectEquals({"a": "A", "b": {"x": "M", "y": "N", "z": "Z"}}, ilib.merge(object1, object2));
}

function testMergeBooleans() {
    var object1 = {"a": true, "b": true},
        object2 = {"b": false};
    
    assertObjectEquals({"a": true, "b": false}, ilib.merge(object1, object2));
}

function testMergeAddBooleans() {
    var object1 = {"a": true, "b": true},
        object2 = {"c": false};
    
    assertObjectEquals({"a": true, "b": true, "c": false}, ilib.merge(object1, object2));
}

function testMergeNumbers() {
    var object1 = {"a": 1, "b": 2},
        object2 = {"b": 3};
    
    assertObjectEquals({"a": 1, "b": 3}, ilib.merge(object1, object2));
}

function testMergeNumbersWithZero() {
    var object1 = {"a": 1, "b": 2},
        object2 = {"b": 0};
    
    assertObjectEquals({"a": 1, "b": 0}, ilib.merge(object1, object2));
}

function testMergeNumbersAddZero() {
    var object1 = {"a": 1, "b": 2},
        object2 = {"c": 0};
    
    assertObjectEquals({"a": 1, "b": 2, "c": 0}, ilib.merge(object1, object2));
}

function testIsEmptyFalse() {
    var object = {"a": "A"};
    
    assertFalse(ilib.isEmpty(object));
}

function testIsEmptyTrue() {
    var object = {};
    
    assertTrue(ilib.isEmpty(object));
}

function testIsEmptyUndefined() {
    assertTrue(ilib.isEmpty(undefined));
}

function testIsEmptyUndefinedProperties() {
    var object = {"a": undefined};
    
    assertTrue(ilib.isEmpty(object));
}


function testShallowCopy() {
    var src = {"a": "b"};
    var tgt = {};
    
    assertTrue(typeof(tgt.a) === "undefined");
    
    ilib.shallowCopy(src, tgt);
    
    assertFalse(typeof(tgt.a) === "undefined");
}

function testShallowCopyRightValues() {
    var src = {
    	"a": "b", 
    	"c": {
    		"d": "e", 
    		"f": 23
    	}
    };
    var tgt = {};
    
    assertTrue(typeof(tgt.a) === "undefined");
    
    ilib.shallowCopy(src, tgt);
    
    assertEquals("b", tgt.a);
    assertEquals("e", tgt.c.d);
    assertEquals(23, tgt.c.f);
}

function testShallowCopyUndefined() {
    var src = undefined;
    var tgt = {};
    
    assertTrue(typeof(tgt) !== undefined);
    assertTrue(ilib.isEmpty(tgt));
    
    ilib.shallowCopy(src, tgt);
    
    assertTrue(typeof(tgt) !== undefined);
    assertTrue(ilib.isEmpty(tgt));
}

function testShallowCopyToUndefined() {
    var src = {
    	"a": "b", 
    	"c": {
    		"d": "e", 
    		"f": 23
    	}
    };
    var tgt = undefined;
    
    assertUndefined(tgt);
    
    try {
    	ilib.shallowCopy(src, tgt);
    	assertUndefined(tgt);
    } catch (e) {
    	fail();
    }
}

function testShallowCopyEmpty() {
    var src = {};
    var tgt = {};
    
    assertTrue(ilib.isEmpty(tgt));
    ilib.shallowCopy(src, tgt);
    assertTrue(ilib.isEmpty(tgt));
}