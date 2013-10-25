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

    fluid.defaults("gpii.uiOptions.enactors.cursorSize", {
        gradeNames: ["fluid.viewComponent", "fluid.uiOptions.enactors", "autoInit"],
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
                funcName: "gpii.uiOptions.enactors.cursorSize.set",
                args: ["{that}.model.value", "{that}.dom.cursorDiv"]
            }
        },
        listeners: {
            "onCreate.init": {
                listener: "{that}.applier.modelChanged.addListener",
                args: ["value", "{that}.set"]
            }
        }
    });

    gpii.uiOptions.enactors.cursorSize.set = function (times, that) {
        that.css("font-size", times + "em");
    };

})(jQuery, fluid);
