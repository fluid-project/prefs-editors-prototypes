/*!
Cloud4all Preferences Management Tools

Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global fluid, jQuery, gpii*/
/*jslint white: true, onevar: true, funcinvoke: true, forvar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

(function ($, fluid) {
    
    gpii.prefs.panel.arrayOverridePolicy = function (target, source) {
        source = fluid.makeArray(source);
        return source;
    };
    
    fluid.defaults("gpii.prefs.panel.contrastTheme", {
        gradeNames: ["fluid.prefs.panel.contrast", "autoInit"],
        mergePolicy: {
            "controlValues.theme": gpii.prefs.panel.arrayOverridePolicy
        },
        preferenceMap: {
            "contrast.theme": {
                "model.value": "default"
            }
        },
        controlValues: {
            theme: ["bw", "yb", "by", "wb"]
        }
    });
})(jQuery, fluid);
