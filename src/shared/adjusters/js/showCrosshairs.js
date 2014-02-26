/*!
Cloud4all Preferences Management Tools

Copyright 2013 CERTH/HIT
Copyright 2014 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global fluid, jQuery, gpii*/
/*jslint white: true, onevar: true, funcinvoke: true, forvar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

(function ($, fluid) {

    fluid.defaults("gpii.adjuster.showCrosshairs", {
        gradeNames: ["gpii.adjuster.iconCheck", "gpii.adjuster.activatableLabelsClickOnActivate", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.showCrosshairs": {
                "model.value": "default"
            }
        },
        selectors: {
            showCrosshairsTitle: ".gpiic-iconCheckAdjusterTitle",
            preferenceSwitchShowCrosshairs: "#preferenceSwitchIconCheckAdjusterShowCrosshairs",
            showCrosshairsDescription: ".gpiic-iconCheckAdjusterDescription",
            activatableLabelsSelector: ".gpiic-showCrosshairs-iconCheckAdjusterArea"
        },
        selectorsToIgnore: ["activatableLabelsSelector"],
        protoTree: {
            showCrosshairsTitle: {messagekey: "emphasizeLocation"},
            preferenceSwitchShowCrosshairs: "${value}",
            showCrosshairsDescription: {messagekey: "showCrosshairs"}
        },
        "class": "gpii-iconCheck-showCrosshairs",
        listeners: {
            "onDomBind.setAriaChecked": {
                listener: "{that}.setAriaChecked",
                args: "{that}.model.value"
            }
        },
        modelListeners: {
            value: {
                listener: "{that}.setAriaChecked",
                args: ["{change}.value"]
            }
        },
        invokers: {
            setAriaChecked: {
                funcName: "gpii.utility.setAriaChecked",
                args: ["{that}.dom.activatableLabelsSelector", "{arguments}.0"],
                dynamic: true
            }
        }
    });
})(jQuery, fluid);