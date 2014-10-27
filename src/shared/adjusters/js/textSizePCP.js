/*!
Cloud4all Preferences Management Tools

Copyright 2013 OCAD University
Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

(function ($, fluid) {
    "use strict";
    
    fluid.defaults("gpii.adjuster.textSizePCP", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.fontSize": {
                "model.fontSize": "default",
                "fontSize.range.min": "minimum",
                "fontSize.range.step": "divisibleBy"
            }
        },
        selectors: {
            textSizeLabel: ".gpiic-textSize-label",
            textSizeStepper: ".gpiic-textSize-stepper"
        },
        components: {
            textfieldStepper: {
                type: "gpii.adjuster.textfieldStepper",
                container: "{textSizePCP}.dom.textSizeStepper",
                createOnEvent: "afterRender",
                options: {
                    sourceApplier: "{textSizePCP}.applier",
                    rules: {
                        "fontSize": "value"
                    },
                    model: {
                        value: "{textSizePCP}.model.fontSize"
                    },
                    strings: {
                        "unit": "{textSizePCP}.msgLookup.textSizeUnit"
                    },
                    range: "{textSizePCP}.options.fontSize.range",
                    labelledbyDomElement: "{textSizePCP}.dom.textSizeLabel"
                }
            }
        },
        selectorsToIgnore: ["textSizeStepper"],
        protoTree: {
            textSizeLabel: {messagekey: "textSizeLabel"}
        }
    });
})(jQuery, fluid);
