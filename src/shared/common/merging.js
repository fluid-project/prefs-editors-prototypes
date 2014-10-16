/*!
Cloud4all Preferences Management Tools

Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

(function ($, fluid) {
    "use strict";
    
    fluid.registerNamespace("gpii.prefs.merging");

    gpii.prefs.merging.arrayOverridePolicy = function (target, source) {
        source = fluid.makeArray(source);
        return source;
    };
})(jQuery, fluid);
