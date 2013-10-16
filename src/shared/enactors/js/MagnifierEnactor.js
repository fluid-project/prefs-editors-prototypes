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
    
    fluid.defaults("gpii.uiOptions.enactors.magnifier", {
        gradeNames: ["fluid.viewComponent", "fluid.uiOptions.enactors", "autoInit"],
        preferenceMap: {
            "http://registry.gpii.org/common/magnification": {
                "model.value": "default"
            }
        },
        invokers: {
            set: {
                funcName: "gpii.uiOptions.enactors.magnifier.set",
                args: ["{that}.model.value", "{that}.container"]
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

    gpii.uiOptions.enactors.magnifier.set = function (times, that) {
        that.css({"transform": "scale(" + times / 100 + ")", "-webkit-transform": "scale(" + times / 100 + ")"});
    };
    
})(jQuery, fluid);
