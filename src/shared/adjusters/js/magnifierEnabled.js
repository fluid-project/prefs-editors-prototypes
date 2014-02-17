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
            "onDomBind.bindMagnifierOnOffFocusListener": {
                "this": "{that}.dom.valueCheckbox",
                "method": "change",
                args: ["{that}.focusMagnifierOnOffFocusable"]

                // This does NOT work, perhaps the dom object has lost reference to the element
                /*"this": "{that}.dom.magnifierOnOffFocusable",
                "method": "focus"*/
            }
        },
        invokers: {
            focusMagnifierOnOffFocusable: {
                "funcName": "gpii.adjuster.magnifierEnabled.focusMagnifierOnOffFocusable",
                "args": ["{that}"]
            }
        }
    });
    
    gpii.adjuster.magnifierEnabled.focusMagnifierOnOffFocusable = function (that) {
        // this works
        //that.container.find(".gpiic-onOffSwitch-focusable").focus();
        
        // this works too
        that.dom.locate("magnifierOnOffFocusable").focus();
    };

})(jQuery, fluid);
