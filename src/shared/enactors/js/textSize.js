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

	fluid.defaults("gpii.enactor.textSize", {
        gradeNames: ["fluid.viewComponent", "fluid.prefs.enactor", "fluid.prefs.enactor.textSize", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.fontSize": {
                "model.value": "default"
            }
        },
        invokers: {
            set: {
                funcName: "gpii.enactor.textSize.set",
                args: ["{arguments}.0", "{that}.container"]
            }
        }
    });

	gpii.enactor.textSize.set = function (sizeInPt, that) {
        that.css("font-size", sizeInPt + "pt");
    };

})(jQuery, fluid);
