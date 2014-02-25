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
    
    fluid.defaults("gpii.adjuster.magnifierEnabled", {
        gradeNames: ["gpii.adjuster.onOffSwitch", "autoInit"],
        mergePolicy: {
            selectorsToIgnore: fluid.prefs.compositePanel.arrayMergePolicy
        },
        preferenceMap: {
            "gpii.primarySchema.magnifierEnabled": {
                "model.value": "default"
            }
        },
        selectors: {
            magnifierOnOffFocusable: ".gpiic-onOffSwitch-focusable"
        },
        selectorsToIgnore: ["magnifierOnOffFocusable"],
        protoTree: {
            headingLabel: {messagekey: "magnifierLabel"},
            valueCheckbox: "${value}"
        },
        listeners: {
            /*
             * TODO: This is a temporary workaround for retaining focus on ON/OFF switch when it is toggled.
             * This listener (along with the called invoker) should not be needed when,
             *      http://issues.fluidproject.org/browse/FLUID-5278
             * is resolved.      
             */
            "onDomBind.bindMagnifierOnOffFocusListener": {
                "this": "{that}.dom.valueCheckbox",
                "method": "change",
                args: ["{that}.focusMagnifierOnOffFocusable"]
            }
        },
        invokers: {
            /*
             * TODO: Implementing this with fluid.focus() conflicted with how focus is transfered to more/less
             * in the expanding adjusters grade. Looks like a situation of which one happens first. The outcome was
             * that the first time the magnifier's ON/OFF toggle was clicked it retained focus, but subsequent clicks
             * gave focus to more/less.
             * This way of element.trigger("focus") works correctly.
             */
            focusMagnifierOnOffFocusable: {
                "this": "{that}.dom.magnifierOnOffFocusable",
                "method": "trigger",
                args: ["focus"]
            }
        }
    });

})(jQuery, fluid);
