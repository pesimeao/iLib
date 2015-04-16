/* jshint node: true */
/*
 * ilib-node.js - glue code for node to load local ilib code and 
 * data dynamically 
 * 
 * Copyright © 2015, JEDLSoft
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

var NodeLoader = require("../lib/NodeLoader.js");

var ilib = require("../lib/ilib.js");
ilib.setLoaderCallback(NodeLoader(ilib));

ilib._dyncode = true; // indicate that we are using dynamically loaded code

// Define stubs for all the ilib classes so that they are loaded automatically 
// the first time you use them
require("../lib/ilib-stubs.js");

module.exports = ilib;

