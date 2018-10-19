/*
 * index.js - top level entry point for ilib
 *
 * Copyright © 2018 JEDLSoft
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

var ilib = require("./lib/ilib.js");

if (!ilib._platform || (typeof(ilib._dyndata) !== 'boolean' && typeof(ilib._dyncode) !== 'boolean')) {
    if (typeof(__webpack_require__) !== 'undefined') {
        // The following will either require and then install the
        // WebpackLoader to dynamically load locale data bundles,
        // or it will statically require all of the locale data that
        // this build needs so that it can be included into this
        // webpack bundle.

        // !defineLocaleData
    } else {
        switch (ilib._getPlatform()) {
            case 'webos':
            case 'nodejs':
                require("./lib/ilib-node.js");
                break;

            case 'qt':
                require("./lib/ilib-qt.js");

            case 'rhino':
                require("./lib/ilib-rhino.js");
                break;

            case 'ringo':
                require("./lib/ilib-ringo.js");
                break;

            default:
                ilib._dyncode = false;
                ilib._dyndata = false;
                break;
        }
    }
}

module.exports = ilib;
