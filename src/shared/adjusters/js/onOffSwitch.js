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

    fluid.defaults("gpii.adjuster.onOffSwitch", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        selectors: {
            headingLabel: ".gpiic-onOffSwitch-label",
            valueCheckbox: ".gpiic-onOffSwitch-input",
            onOffSwitch: ".gpiic-prefsEditor-onOffSwitch"
        },
        selectorsToIgnore: ["onOffSwitch"],
        listeners: {
            "onDomBind.bindModelChangeOnKeyPressEvent": {
                "this": "{that}.dom.onOffSwitch",
                "method": "keypress",
                "args": ["{that}.triggerModelChangeOnEnterKey"]
            }
        },
        invokers: {
            triggerModelChangeOnEnterKey: {
                "funcName": "gpii.adjuster.onOffSwitch.triggerModelChangeOnEnterKey",
                "args": [
                    "{arguments}.0", // keypress event
                    "{that}"
                ]
            }
        }
    });
    
    gpii.adjuster.onOffSwitch.triggerModelChangeOnEnterKey = function (keypressEvent, that) {
        if (keypressEvent.which == 13) {
            /*
             * Isn't this the most appropriate way of performing the model change compared to requestChange?
             * The reason for this is that the actual model path will be known only to the sub-components
             * of this one (e.g. the magnifierEnabled). So, we either do it this way or we force/anticipate
             * that sub-component implementers will follow the forced "that.model.value" path...
             */
            that.locate("valueCheckbox").click();
            //that.applier.requestChange("value", !that.model.value)
        }
    };
    
})(jQuery, fluid);
