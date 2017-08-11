/*
 * AlphabeticIndex.js - Represent an alphabetic index
 * 
 * Copyright © 2017, JEDLSoft
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

/*globals console RegExp */

/* !depends 
ilib.js
Locale.js 
IString.js
Collator.js
*/

// !data collation

var ilib = require("./ilib.js");
// var Utils = require("./Utils.js");
//var JSUtils = require("./JSUtils.js");
var Locale = require("./Locale.js");
// var CType = require("./CType.js");
var IString = require("./IString.js");

// index uses the same data as the collator
var Collator = require("./Collator.js");

/**
 * @class Create a new alphabetic index instance.
 * 
 * This class handles alphabetic indexes which are collated sequences of 
 * buckets into which elements are placed, sorted appropriate to the given 
 * language. An example would be an index of person names in a contact 
 * list, organized by the first letter of the family name.<p>
 * 
 * Example in English:
 * Buckets: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z #<p>
 * 
 * <code>
 * A
 *    Adams
 *    Albers
 *    Alvarez
 * B
 *    Baker
 *    Banerjee
 *    Brunshteyn
 * ...
 * </code>
 * 
 * This class can give you the sorted list of labels to show in the UI. It can
 * also organize a list of string elements into buckets for each 
 * label so that you can display the correctly sorted elements. This depends
 * on the {@link Collator} class to perform the sorting/collation.<p>
 * 
 * The class also supports having buckets for strings before the first (underflow), 
 * after the last (overflow), and between scripts (inflow). For example, if the 
 * index is constructed with labels for Russian and English, Greek characters 
 * would fall into an inflow bucket between the other two scripts. <p>
 * 
 * The buckets can be case-sensitive or insensitive, and accent-insensitive or
 * sensitive. The default is to be case- and accent-insensitive. For example
 * in English, both "a" and "A" will be put into the same "A" bucket. If 
 * the options are given to be case-sensitive, then the list of bucket labels
 * will include both "A" and "a".<p>
 * 
 * If you have a lot of characters that are not commonly used in the current
 * locale, you can add more labels for those characters as well. Elements will
 * match those buckets only if they have the same first character as the
 * bucket label.<p>
 * 
 * The options object may contain any (or none) of the following properties:
 * 
 * <ul>
 * <li><i>locale</i> - locale or localeSpec to use to parse the address. If not 
 * specified, this function will use the current ilib locale
 * 
 * <li><i>caseSensitive</a> - set to true if you want this index to be
 * case-sensitive. Default: false
 * 
 * <li><i>accentSensitive</a> - set to true if you want this index to be
 * case- and accent-sensitive. (Both must be together.) Default: false
 * 
 * <li><i>overflowLabel</i> - the label to use for the overflow bucket. 
 * Default: "#"
 * 
 * <li><i>inflowLabel</i> - the label to use for the inflow bucket. 
 * Default: "#"
 * 
 * <li><i>underflowLabel</i> - the label to use for the underflow bucket. 
 * Default: "#"
 * 
 * <li><i>onLoad</i> - a callback function to call when the address info for the
 * locale is fully loaded and the address has been parsed. When the onLoad 
 * option is given, the address object 
 * will attempt to load any missing locale data using the ilib loader callback.
 * When the constructor is done (even if the data is already preassembled), the 
 * onLoad function is called with the current instance as a parameter, so this
 * callback can be used with preassembled or dynamic loading or a mix of the two. 
 * 
 * <li><i>sync</i> - tell whether to load any missing locale data synchronously or 
 * asynchronously. If this option is given as "false", then the "onLoad"
 * callback must be given, as the instance returned from this constructor will
 * not be usable for a while.
 *
 * <li><i>loadParams</i> - an object containing parameters to pass to the 
 * loader callback function when locale data is missing. The parameters are not
 * interpretted or modified in any way. They are simply passed along. The object 
 * may contain any property/value pairs as long as the calling code is in
 * agreement with the loader callback function as to what those parameters mean.
 * </ul>
 * 
 * @constructor
 * @param {Object} options options to the parser
 */
var AlphabeticIndex = function (options) {
	this.sync = true;
	this.loadParams = {};
	
	if (options) {
		if (options.locale) {
			this.locale = (typeof(options.locale) === 'string') ? new Locale(options.locale) : options.locale;
		}
		
		if (typeof(options.sync) !== 'undefined') {
			this.sync = (options.sync == true);
		}
		
		if (options.loadParams) {
			this.loadParams = options.loadParams;
		}
	}

	this.locale = this.locale || new Locale();

	//console.log("implemented in pure JS");
	if (!Collator.cache) {
		Collator.cache = {};
	}

	Utils.loadData({
		object: Collator, 
		locale: this.locale, 
		name: "collation.json",
		sync: sync,
		loadParams: loadParams, 
		callback: ilib.bind(this, function (collation) {
			if (!collation) {
				collation = ilib.data.collation;
				var spec = this.locale.getSpec().replace(/-/g, '_');
				Collator.cache[spec] = collation;
			}
			this._init(collation);
			new LocaleInfo(this.locale, {
				sync: sync,
				loadParams: loadParams,
				onLoad: ilib.bind(this, function(li) {
					this.li = li;
					if (this.ignorePunctuation) {
		    			isPunct._init(sync, loadParams, ilib.bind(this, function() {
							if (options && typeof(options.onLoad) === 'function') {
								options.onLoad(this);
							}
		    			}));
	    			} else {
						if (options && typeof(options.onLoad) === 'function') {
							options.onLoad(this);
						}
	    			}
	    		})
			});
		})
	});
};

/**
 * Add an element to the index. The element is added to the
 * appropriate bucket and sorted within that bucket according
 * to the collation for the locale set up within this index.
 * 
 * @param {String} element the element to add
 * @returns {String} the label of the bucket into which
 * this element was added
 */
AlphabeticIndex.prototype.addElement = function(element) {
};

/**
 * Add labels to this index for characters that are not
 * commonly used in the current locale. These are added
 * into the list of bucket labels at the given start
 * index. If start is not given, or is not within the 
 * range of 0 (the overflow bucket) to N (the underflow
 * bucket), then the default position is at the end of
 * the list right before the underflow bucket.
 * 
 * @param {Array.<String>} labels array of labels to add
 * in the order you would like to see them returned
 * @param {number=} start the position in the bucket
 * labels list to add these new labels
 */
AlphabeticIndex.prototype.addLabels = function(labels, start) {
};

/**
 * Clear all elements from the buckets. This index can be
 * reused for a new batch of elements by clearing it
 * first.
 */
AlphabeticIndex.prototype.clear = function() {
};

/**
 * Return a javascript hash containing all elements in
 * the index. The hash has a property for each bucket,
 * and the value of the property is an array of elements.
 * Example:
 * 
 * <code>
 * {
 *   "A": ["Adams", "Albers", "Alvarez],
 *   "B": ["Baker", "Banerjee", "Brunshteyn"],
 *   ...
 *   "#": ["3par.com", "@handle"]
 * }
 * </code>
 * 
 * All elements within a bucket are sorted per the collation
 * for the locale of this index.
 * 
 * @returns {Object} a hash of all buckets and elements
 * as per the description above.
 */
AlphabeticIndex.prototype.getAllBuckets = function() {
};

/**
 * Return the label of the bucket for a given element. This 
 * follows the rules set up when the index was instantiated to
 * find the bucket into which the element would go if it
 * were added to this index. The element is not added to
 * the index, however. (See addElement for that.)
 * 
 * @param {String} element the element to check
 * @returns {String} the label for the bucket for this element
 */
AlphabeticIndex.prototype.getBucket = function(element) {
};

/**
 * Return the total number of buckets in this index.
 * 
 * @returns {number} the number of buckets in this index
 */
AlphabeticIndex.prototype.getBucketCount = function() {
};

/**
 * Return the bucket labels for this index in order. This
 * will include the under-, in-, and overflow labels if
 * they are used in this index.
 * 
 * @returns {Array.<String>} the array of bucket labels
 * for this index in collation order
 */
AlphabeticIndex.prototype.getBucketLabels = function() {
};

/**
 * Return the collator used to sort elements in this
 * index.
 * 
 * @return {Collator} the ilib Collator instance used
 * in this index
 */
AlphabeticIndex.prototype.getCollator = function() {
};

/**
 * Get the default label used for abbreviated buckets 
 * between other labels.
 * 
 * @returns {String} the label for the inflow buckets
 */
AlphabeticIndex.prototype.getInflowLabel = function() {};

/**
 * Get the default label used in the for overflow bucket.
 * This is the first item in a list. eg. ... A B C
 * 
 * @return {String} the overflow bucket label
 */
AlphabeticIndex.prototype.getOverflowLabel = function() {};

/**
 * Return the total number of elements in the index. This includes
 * all elements across all buckets.
 * 
 * @returns {number} The number of elements in the index
 */
AlphabeticIndex.prototype.getElementCount = function() {};

/**
 * Get the default label used in underflow, 
 * This is the last item in a list. eg. the last 
 * item in: X Y Z #
 * 
 * @returns {String} the label used for underflow elements
 */
AlphabeticIndex.prototype.getUnderflowLabel = function() {};

/**
 * Set the inflow bucket label.
 * 
 * @param {String} inflowLabel the label to use for the inflow buckets
 */
AlphabeticIndex.prototype.setInflowLabel = function(inflowLabel) {};


/**
 * Set the overflow bucket label.
 * 
 * @param {String} overflowLabel the label to use for the overflow buckets
 */
AlphabeticIndex.prototype.setOverflowLabel = function(overflowLabel) {};


/**
 * Set the underflow bucket label.
 * 
 * @param {String} underflowLabel the label to use for the underflow buckets
 */
AlphabeticIndex.prototype.setUnderflowLabel = function(underflowLabel) {};

module.exports = AlphabeticIndex;
