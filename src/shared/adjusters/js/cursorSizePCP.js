/*!
Cloud4all Preferences Management Tools

Copyright 2013-2014 OCAD University
Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

(function ($, fluid) {
    "use strict";

    fluid.defaults("gpii.adjuster.cursorSizePCP", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.cursorSize": {
                "model.value": "default",
                "controlValues.cursorSize.min": "minimum",
                "controlValues.cursorSize.max": "maximum",
                "controlValues.cursorSize.step": "divisibleBy"
            }
        },
        selectors: {
            cursorSizeStepper: ".gpiic-cursorSize-stepper",
            cursorSizeLabel: ".gpiic-cursorSize-label"
        },
        selectorsToIgnore: ["cursorSizeStepper"],
        components: {
            cursorSizeStepper: {
                type: "gpii.adjuster.textfieldStepper",
                container: "{cursorSizePCP}.dom.cursorSizeStepper",
                createOnEvent: "afterRender",
                options: {
                    sourceApplier: "{cursorSizePCP}.applier",
                    rules: {
                        "value": "value"
                    },
                    model: {
                        value: "{cursorSizePCP}.model.value"
                    },
                    strings: {
                        "hint": "{cursorSizePCP}.msgLookup.cursorHint",
                        "unit": "{cursorSizePCP}.msgLookup.cursorSizeUnit",
                        "plusText": "{cursorSizePCP}.msgLookup.cursorSizePlus",
                        "minusText": "{cursorSizePCP}.msgLookup.cursorSizeMinus"
                    },
                    range: "{cursorSizePCP}.options.controlValues.cursorSize",
                    labelledbyDomElement: "{cursorSizePCP}.dom.cursorSizeLabel"
                }
            }
        },
        protoTree: {
            cursorSizeLabel: {messagekey: "cursorSizeLabel"}
        }
    });
})(jQuery, fluid);
