/*!
Cloud4all Preferences Management Tools

Copyright 2014 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global fluid, jQuery*/
/*jslint white: true, onevar: true, funcinvoke: true, forvar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

(function ($, fluid) {

    fluid.defaults("gpii.adjuster.shutOffTime", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.shutOffTime": {
                "model.shutOffTime": "default",
                "shutOffTime.range.min": "minimum",
                "shutOffTime.range.step": "divisibleBy"
            }
        },
        selectors: {
            textSizeLabel: ".gpiic-textSize-label",
            textSizeStepper: ".gpiic-textSize-stepper"
        },
        components: {
            textfieldStepper: {
                type: "gpii.adjuster.textfieldStepper",
                container: "{shutOffTime}.dom.textSizeStepper",
                createOnEvent: "afterRender",
                options: {
                    sourceApplier: "{shutOffTime}.applier",
                    rules: {
                        "shutOffTime": "value"
                    },
                    model: {
                        value: "{shutOffTime}.model.shutOffTime"
                    },
                    strings: {
                        "unit": "{shutOffTime}.msgLookup.textSizeUnit"
                    },
                    range: "{shutOffTime}.options.shutOffTime.range",
                    labelledbyDomElement: "{shutOffTime}.dom.textSizeLabel"
                }
            }
        },
        selectorsToIgnore: ["textSizeStepper"],
        protoTree: {
            textSizeLabel: {messagekey: "textSizeLabel"}
        }
    });

})(jQuery, fluid);
