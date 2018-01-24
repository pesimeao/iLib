/**
 * ilibdata-webpack-loader.js - A Webpack loader to process js files and insert
 * requires for all of the data that is needed for all the locales
 *
 * @license
 * Copyright © 2018, JEDLSoft
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

const getOptions = require('loader-utils').getOptions;
// import validateOptions from 'schema-utils';

var path = require('path');
var fs = require('fs');
var Locale = require('./Locale.js');

const schema = {
    type: 'object',
    properties: {
        locales: {
            type: 'array'
        }
    }
};

let dataPatternSlashStar = /\/\*\s*!data\s*([^\*]+)\*\//g;
let dataPatternSlashSlash = /\/\/\s*!data\s*([^\n]+)/g;

let macroPatternSlashSlash = /\/\/\s*!macro\s*(\S*)/g;
let macroPatternQuoted = /["']!macro\s*(\S*)["']/g;

/**
 * Find ilib locale data files that are required by the
 * module for the given set of locales and put an
 * explicit require call for each of the the ones that
 * actually exist on disk.
 */
function findLocaleData(datafiles, locales) {
    var output = "";
    

    return output;
}

function toArray(set) {
    var ret = [];
    set.forEach(function(element) {
        ret.push(element);
    });
    return ret;
}

var ilibDataLoader = function(source) {
    const options = getOptions(this);
    var match;
    var partial = source;
    var output = "";

    // validateOptions(schema, options, 'Ilib data loader');

    // first find all the locale parts we need to search
    var locales = options.locales;

    var parts = new Set();
    parts.add("."); // always search the root!
    locales.forEach(function(spec) {
        var locale = new Locale(spec);
        parts.add(locale.language);
        if (locale.script) {
            parts.add(locale.language + "/" + locale.script);
            if (locale.region) {
                parts.add(locale.language + "/" + locale.script + "/" + locale.region);
            }
        }
        if (locale.region) {
            parts.add(locale.language + "/" + locale.region);
            parts.add("und/" + locale.region);
        }
    });
    var localeDirs = toArray(parts);
    
    var resourceToCwd = path.relative(path.dirname(this.resource), process.cwd());
    // console.log("__dirname is " + __dirname + " base is " + base + " pathToLib is " + pathToLib);

    // now find all of the !data comments in the files and load in
    // the locale data files they list there for the given locales
    
    var processFile = function (re, text) {
        var partial = text;
        var output = "";
        
        re.lastIndex = 0;
        while ((match = re.exec(partial)) !== null) {
            // console.log(">>>>>>>>>> found a match");
            var datafiles = match[1].split(/\s+/g);
            output += partial.substring(0, match.index);
            var ilibPath = path.relative(path.dirname(this.resource), path.join(process.cwd(), "lib"));
            ilibPath = (ilibPath[0] !== ".") ? "./" + ilibPath : ilibPath;
            output += 'var ilib = require("' + ilibPath + '/ilib.js");\n';
            // remove any other instances so there is no conflict
            partial = partial.replace(/var ilib = require\(['"][\./]*ilib\.js['"]\);/g, "");
            datafiles.forEach(function(filename) {
                localeDirs.forEach(function(locale) {
                    try {
                        var cwdToData = path.join("data/locale", locale, filename + ".json");
                        var resourceToData = path.join(resourceToCwd, cwdToData);
                        if (resourceToData[0] !== ".") {
                            resourceToData = "./" + resourceToData; // make it relative for require()
                        }
                        if (fs.existsSync(cwdToData)) {
                            var line = "ilib.data." + filename.replace(/\//g, "_").replace(/-/g, "_");
                            if (locale !== ".") {
                                line += "_" + locale.replace(/\//g, "_");
                            }
                            line += " = require('" + resourceToData + "');\n";
                            // console.log(">>>>>>>>>>>>> Adding line: " + line);
                            output += line;
                            this.addDependency(filename)
                        }
                    } catch (e) {
                        console.log("Error: " + e);
                    }
                }.bind(this));
            }.bind(this));
    
            partial = partial.substring(match.index + match[0].length);
            re.lastIndex = 0;
        }
        
        return output + partial;
    }.bind(this);

    var processMacros = function (re, text) {
        var partial = text;
        var output = "";
        
        re.lastIndex = 0;
        while ((match = re.exec(partial)) !== null) {
            // console.log(">>>>>>>>>> found a match");
            var macroName = match[1];
            output += partial.substring(0, match.index);

            if (macroName) {
                if (macroName.toLowerCase() === "localelist") {
                    output += locales.map(function(locale) {
                        return '"' + locale + '"';
                    }).join(", ");
                } else if (macroName.toLowerCase() === "ilibversion") {
                    // the DefinePlugin in the config will replace this with the 
                    // actual version number from the project.json file
                    output += "__VERSION__"; 
                }
            }

            partial = partial.substring(match.index + match[0].length);
            re.lastIndex = 0;
        }
        
        return output + partial;
    }.bind(this);

    partial = processFile(dataPatternSlashStar, partial);
    partial = processFile(dataPatternSlashSlash, partial);
    partial = processMacros(macroPatternSlashSlash, partial);
    output  = processMacros(macroPatternQuoted, partial);

    // console.log("****************************************\nTransformed file to:\n" + output);
    return output;
};

module.exports = ilibDataLoader;