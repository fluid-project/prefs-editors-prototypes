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

    fluid.defaults("gpii.adjuster.activatableLabels", {
        gradeNames: ["fluid.littleComponent", "autoInit"],
        activatableLabelsSelector: "",   // to be provided by implementors
        listeners: {
            "onDomBind.makeLabelsActivatable": {
                "this": "fluid",
                "method": "activatable",
                "args": ["{that}.options.activatableLabelsSelector", "{that}.makeLabelsActivatable"]
            },
            "onDomBind.console": {
                "this": "console",
                "method": "log",
                "args": ["{that}.options.activatableLabelsSelector"]
            }
        },
        invokers: {
            makeLabelsActivatable: {
                funcName: "gpii.adjuster.activatableLabels.makeLabelsActivatable"
            }
        }
    });
    
    gpii.adjuster.activatableLabels.makeLabelsActivatable = function (event) {
        // activating labels triggers a click on them
        event.target.click();
    };


})(jQuery, fluid);
