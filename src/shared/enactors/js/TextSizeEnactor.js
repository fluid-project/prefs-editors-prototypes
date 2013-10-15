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
    
	fluid.defaults("gpii.uiOptions.enactors.textSize", {
        gradeNames: ["fluid.viewComponent", "fluid.uiOptions.enactors", "fluid.uiOptions.enactors.textSize", "autoInit"],
        preferenceMap: {
            "http://registry.gpii.org/common/fontSize": {
                "model.value": "default"
            }
        },
        invokers: {
            set: {
                funcName: "gpii.uiOptions.enactors.textSize.set",
                args: ["{arguments}.0", "{that}"]
            }
        },
        listeners: {
            "onCreate.init": {
                listener: "{that}.applier.modelChanged.addListener",
                args: ["value", "{that}.set"]
            }
        }
    });

	gpii.uiOptions.enactors.textSize.set = function (sizeInPt, that) {
        that.container.css("font-size", sizeInPt + "pt");
    };
    
})(jQuery, fluid);
