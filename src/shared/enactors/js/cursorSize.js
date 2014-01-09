/*!
Cloud4all Preferences Management Tools

Copyright 2013 OCAD University
Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global fluid, jQuery, gpii*/
/*jslint white: true, onevar: true, funcinvoke: true, forvar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

(function ($, fluid) {

    fluid.defaults("gpii.enactor.cursorSize", {
        gradeNames: ["fluid.viewComponent", "fluid.prefs.enactor", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.cursorSize": {
                "model.value": "default"
            }
        },
        selectors: {
            cursorDiv: ".gpiic-increaseSize-previewPerSettingCursorDiv"
        },
        invokers: {
            set: {
                funcName: "gpii.enactor.cursorSize.set",
                args: ["{arguments}.0", "{that}.dom.cursorDiv"]
            }
        },
        modelListeners: {
            "value": {
                func: "{that}.set",
                args: ["{change}.value"]
            }
        }
    });

    gpii.enactor.cursorSize.set = function (times, cursorDiv) {
        cursorDiv.css("font-size", times + "em");
    };

})(jQuery, fluid);
