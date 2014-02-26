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

    fluid.defaults("gpii.adjuster.activatableLabelsClickOnActivate", {
        gradeNames: ["fluid.littleComponent", "autoInit"],
        mergePolicy: {
            selectorsToIgnore: fluid.prefs.compositePanel.arrayMergePolicy
        },
        selectors: {
            activatableLabelsSelector: ""   // to be provided by implementors
        },
        selectorsToIgnore: ["activatableLabelsSelector"],
        listeners: {
            "onDomBind.makeLabelsActivatable": {
                "funcName": "fluid.activatable",
                "args": ["{that}.dom.activatableLabelsSelector", "{that}.clickLabelsOnActivate"]
            }
        },
        invokers: {
            clickLabelsOnActivate: {
                funcName: "gpii.adjuster.activatableLabelsClickOnActivate.clickLabelsOnActivate"
            }
        }
    });
    
    gpii.adjuster.activatableLabelsClickOnActivate.clickLabelsOnActivate = function (event) {
        // activating labels triggers a click on them
        event.target.click();
    };

})(jQuery, fluid);
