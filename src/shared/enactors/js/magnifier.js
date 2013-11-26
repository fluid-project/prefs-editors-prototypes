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
    
    fluid.defaults("gpii.enactor.magnifier", {
        gradeNames: ["fluid.viewComponent", "fluid.prefs.enactor", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.magnification": {
                "model.value": "default"
            },
            "gpii.primarySchema.magnifierEnabled": {
                "model.enabled": "default"
            }
        },
        invokers: {
            set: {
                funcName: "gpii.enactor.magnifier.set",
                args: ["{that}.model.enabled", "{that}.model.value", "{that}.container"],
                dynamic: true
            }
        },
        listeners: {
            onCreate: {
                listener: "{that}.set"
            },
            "onCreate.init": {
                listener: "{that}.applier.modelChanged.addListener",
                args: ["value", "{that}.set"]
            }
        }
    });

    gpii.enactor.magnifier.set = function (enabled, times, that) {
        if (enabled) {
            that.css({"transform": "scale(" + times / 100 + ")", "-webkit-transform": "scale(" + times / 100 + ")"});
        } else {
            that.css({"transform": "scale(1)", "-webkit-transform": "scale(1)"});
        }
    };
    
})(jQuery, fluid);
