/*
 * testcollation_da.js - test the Collator object in Danish
 * 
 * Copyright © 2014, JEDLSoft
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

function testCollatorConstructorNative_da() {
	var col = new ilib.Collator({useNative: false, locale: "da-DK"});

	assertNotUndefined(col);
}

function testCollatorDefaultLowerPrimary_da() {
	var col = new ilib.Collator({
		locale: "da-DK",
		usage: "search",
		useNative: false, 
		sensitivity: "primary"
	});

	assertNotUndefined(col);

	// The Danish alphabet also has some extra letters, namely Æ and Ø and Å which appear
	// at the end of the alphabet as separate letters. 
	// a b c d e f g h i j k l m n o p q r s t u v w x y z æ ø å
	assertTrue("a < b", col.compare("a", "b") < 0);
	assertTrue("b < c", col.compare("b", "c") < 0);
	assertTrue("c < d", col.compare("c", "d") < 0);
	assertTrue("d < e", col.compare("d", "e") < 0);
	assertTrue("z < æ", col.compare("z", "æ") < 0);
	assertTrue("æ < ø", col.compare("æ", "ø") < 0);
	assertTrue("ø < å", col.compare("ø", "å") < 0);
}

function testCollatorDefaultUpperPrimary_da() {
	var col = new ilib.Collator({
		locale: "da-DK",
		usage: "search",
		useNative: false, 
		sensitivity: "primary"
	});

	assertNotUndefined(col);

	// The Danish alphabet also has some extra letters, namely Æ and Ø and Å which appear
	// at the end of the alphabet as separate letters. 
	// A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Æ Ø Å
	assertTrue("A < B", col.compare("A", "B") < 0);
	assertTrue("B < C", col.compare("B", "C") < 0);
	assertTrue("C < D", col.compare("C", "D") < 0);
	assertTrue("D < E", col.compare("D", "E") < 0);
	assertTrue("Z < Æ", col.compare("Z", "Æ") < 0);
	assertTrue("Æ < Ø", col.compare("Æ", "Ø") < 0);
	assertTrue("Ø < Å", col.compare("Æ", "Å") < 0);
}

function testCollatorDefaultLowerSecondary_da() {
	var col = new ilib.Collator({
		locale: "da-DK",
		usage: "search",
		useNative: false, 
		sensitivity: "secondary"
	});

	assertNotUndefined(col);

	// the accents are primary differences, so this is the same order as
	// the primary alphabet
	// a b c d e f g h i j k l m n o p q r s t u v w x y z æ ø å
	assertTrue("a < b", col.compare("a", "b") < 0);
	assertTrue("b < c", col.compare("b", "c") < 0);
	assertTrue("c < d", col.compare("c", "d") < 0);
	assertTrue("d < e", col.compare("d", "e") < 0);
	assertTrue("z < æ", col.compare("z", "æ") < 0);
	assertTrue("æ < ø", col.compare("æ", "ø") < 0);
	assertTrue("ø < å", col.compare("ø", "å") < 0);
}

function testCollatorDefaultCaseSecondary_da() {
	var col = new ilib.Collator({
		locale: "da-DK",
		usage: "search",
		useNative: false, 
		sensitivity: "secondary"
	});

	assertNotUndefined(col);

	// case is a tertiary difference, so no difference here
	assertTrue("A = a", col.compare("A", "a") === 0);
	assertTrue("Z = z", col.compare("Z", "z") === 0);
	assertTrue("Æ = æ", col.compare("Æ", "æ") === 0);
	assertTrue("Ø = ø", col.compare("Ø", "ø") === 0);
	assertTrue("Å = å", col.compare("Å", "å") === 0);
}

function testCollatorDefaultVariantsSecondary_da() {
	var col = new ilib.Collator({
		locale: "da-DK",
		usage: "search",
		useNative: false, 
		sensitivity: "secondary"
	});

	assertNotUndefined(col);

	// variants are a quaternary difference, so no difference here
	assertTrue("Å = Å", col.compare("Å", "Å") === 0);
	assertTrue("å = å", col.compare("å", "å") === 0);
}

function testCollatorDefaultUpperSecondary_da() {
	var col = new ilib.Collator({
		locale: "da-DK",
		usage: "search",
		useNative: false, 
		sensitivity: "secondary"
	});

	assertNotUndefined(col);

	// the accents are primary differences, so this is the same order as
	// the primary alphabet
	// A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Æ Ø Å
	assertTrue("A < B", col.compare("A", "B") < 0);
	assertTrue("B < C", col.compare("B", "C") < 0);
	assertTrue("C < D", col.compare("C", "D") < 0);
	assertTrue("D < E", col.compare("D", "E") < 0);
	assertTrue("Z < Æ", col.compare("Z", "Æ") < 0);
	assertTrue("Æ < Ø", col.compare("Æ", "Ø") < 0);
	assertTrue("Ø < Å", col.compare("Æ", "Å") < 0);
}

function testCollatorDefaultLowerTertiary_da() {
	var col = new ilib.Collator({
		locale: "da-DK",
		usage: "search",
		useNative: false, 
		sensitivity: "tertiary"
	});

	assertNotUndefined(col);

	// case is a tertiary difference, so now sort based on case
	assertTrue("a < b", col.compare("a", "b") < 0);
	assertTrue("b < c", col.compare("b", "c") < 0);
	assertTrue("c < d", col.compare("c", "d") < 0);
	assertTrue("d < e", col.compare("d", "e") < 0);
	assertTrue("z < æ", col.compare("z", "æ") < 0);
	assertTrue("æ < ø", col.compare("æ", "ø") < 0);
	assertTrue("ø < å", col.compare("ø", "å") < 0);
	
	assertTrue("A < a", col.compare("A", "a") < 0);
	assertTrue("Z < z", col.compare("Z", "z") < 0);
	assertTrue("Æ < æ", col.compare("Æ", "æ") < 0);
	assertTrue("Ø < ø", col.compare("Ø", "ø") < 0);
	assertTrue("Å < å", col.compare("Å", "å") < 0);

}

function testCollatorDefaultVariantsTertiary_da() {
	var col = new ilib.Collator({
		locale: "da-DK",
		usage: "search",
		useNative: false, 
		sensitivity: "tertiary"
	});

	assertNotUndefined(col);

	// variants are a quaternary difference, so no difference here
	assertTrue("Å = Å", col.compare("Å", "Å") === 0);
	assertTrue("å = å", col.compare("å", "å") === 0);
}

function testCollatorDefaultUpperTertiary_da() {
	var col = new ilib.Collator({
		locale: "da-DK",
		usage: "search",
		useNative: false, 
		sensitivity: "tertiary"
	});

	assertNotUndefined(col);

	// the accents are primary differences, so this is the same order as
	// the primary alphabet
	assertTrue("A < B", col.compare("A", "B") < 0);
	assertTrue("B < C", col.compare("B", "C") < 0);
	assertTrue("C < D", col.compare("C", "D") < 0);
	assertTrue("D < E", col.compare("D", "E") < 0);
	assertTrue("Z < Æ", col.compare("Z", "Æ") < 0);
	assertTrue("Æ < Ø", col.compare("Æ", "Ø") < 0);
	assertTrue("Ø < Å", col.compare("Æ", "Å") < 0);
}

function testCollatorDefaultLowerQuaternary_da() {
	var col = new ilib.Collator({
		locale: "da-DK",
		usage: "search",
		useNative: false, 
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	// case is a tertiary difference, so now sort based on case
	assertTrue("a < b", col.compare("a", "b") < 0);
	assertTrue("b < c", col.compare("b", "c") < 0);
	assertTrue("c < d", col.compare("c", "d") < 0);
	assertTrue("d < e", col.compare("d", "e") < 0);
	assertTrue("z < æ", col.compare("z", "æ") < 0);
	assertTrue("æ < ø", col.compare("æ", "ø") < 0);
	assertTrue("ø < å", col.compare("ø", "å") < 0);
	
	assertTrue("A < a", col.compare("A", "a") < 0);
	assertTrue("Z < z", col.compare("Z", "z") < 0);
	assertTrue("Æ < æ", col.compare("Æ", "æ") < 0);
	assertTrue("Ø < ø", col.compare("Ø", "ø") < 0);
	assertTrue("Å < å", col.compare("Å", "å") < 0);
}

function testCollatorDefaultVariantsQuaternary_da() {
	var col = new ilib.Collator({
		locale: "da-DK",
		usage: "search",
		useNative: false, 
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	// variants are a quaternary difference, so now sort these variants properly
	assertTrue("Å < Å", col.compare("Å", "Å") < 0);
	assertTrue("å < å", col.compare("å", "å") < 0);
}

function testCollatorDefaultUpperQuaternary_da() {
	var col = new ilib.Collator({
		locale: "da-DK",
		usage: "search",
		useNative: false, 
		sensitivity: "quaternary"
	});

	assertNotUndefined(col);

	assertTrue("A < B", col.compare("A", "B") < 0);
	assertTrue("B < C", col.compare("B", "C") < 0);
	assertTrue("C < D", col.compare("C", "D") < 0);
	assertTrue("D < E", col.compare("D", "E") < 0);
	assertTrue("Z < Æ", col.compare("Z", "Æ") < 0);
	assertTrue("Æ < Ø", col.compare("Æ", "Ø") < 0);
	assertTrue("Ø < Å", col.compare("Æ", "Å") < 0);
}

function testCollatorGetSortKeySimpleUpper_da() {
	var col = new ilib.Collator({
		locale: "da-DK",
		useNative: false
	});

	assertNotUndefined(col);

	assertEquals("000020040340360380", col.sortKey("ABCÆØÅ"));
}
function testCollatorGetSortKeySimpleLower_da() {
	var col = new ilib.Collator({
		locale: "da-DK",
		useNative: false
	});

	assertNotUndefined(col);

	assertEquals("002022042342362382", col.sortKey("abcæøå"));
}


function testCollatorWithSort_da() {
	var col = new ilib.Collator({
		locale: "da-DK",
		useNative: false,
		usage: "sort"
	});
	assertNotUndefined(col);

	var input = [ "æ", "p", "b", "w", "d", "h", "x", "ø", "j", "v", "z",
			"m", "o", "q", "å", "g", "a", "r", "f", "s", "e", "c", "t", "k",
			"u", "y", "i", "n", "l", ];

	input.sort(col.getComparator());

	var expected = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
			"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
			"y", "z", "æ", "ø", "å" ];

	assertArrayEquals(expected, input);
}


function testCollatorGetAvailableScripts_da() {
	assertArrayEquals(["Latn"], ilib.Collator.getAvailableScripts());
}

function testCollatorGetAvailableStyles_da() {
	assertArrayEquals(["standard"], ilib.Collator.getAvailableStyles());
}


function testJSCollatorNumeric_da() {
	var col = new ilib.Collator({
		locale: "da-DK",
		useNative: false,
		sensitivity: "case",
		numeric: true
	});

	assertNotUndefined(col);

	// period is the thousands separator and comma is the decimal separator
	assertEquals(0, col.compare("0.012.123,4", "12.123,4"));
	assertTrue(col.compare("00123,4", "123") > 0);
	assertTrue(col.compare("00123,4", "124") < 0);
}
