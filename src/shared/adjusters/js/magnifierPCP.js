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

    fluid.defaults("gpii.adjuster.magnifierPCP", {
        gradeNames: ["fluid.prefs.panel", "gpii.adjuster.stepperConnections", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.magnification": {
                "model.magnification": "default",
                "magnification.range.min": "minimum",
                "magnification.range.max": "maximum",
                "magnification.range.step": "divisibleBy"
            }
        },
        members: {
            messageResolver: "{prefsEditorLoader}.msgResolver"
        },
        selectors: {
            magnifierLabel: ".gpiic-magnifier-label",
            magnificationLevel: ".gpiic-magnifier-magnificationLevel",
            magnifierStepper: ".gpiic-magnifier-stepper"
        },
        selectorsToIgnore: ["magnifierStepper"],
        components: {
            magnifierStepper: {
                type: "gpii.adjuster.textfieldStepper",
                container: "{that}.dom.magnifierStepper",
                createOnEvent: "onCreateStepper",
                options: {
                    sourceApplier: "{magnifierPCP}.applier",
                    rules: {
                        "magnification": "value"
                    },
                    model: {
                        value: "{magnifierPCP}.model.magnification"
                    },
                    strings: {
                        "unit": "{magnifierPCP}.msgLookup.magnifierUnit",
                        "plusText": "{magnifierPCP}.msgLookup.magnifierPlus",
                        "minusText": "{magnifierPCP}.msgLookup.magnifierMinus"
                    },
                    range: "{magnifierPCP}.options.magnification.range",
                    labelledbyDomElement: "{magnifierPCP}.dom.magnificationLevel",
                    resources: "{magnifierPCP}.options.stepperResources"
                }
            }
        },
        protoTree: {
            magnifierLabel: {messagekey: "magnifierLabel"},
            magnificationLevel: {messagekey: "magnificationLevel"}
        }
    });
})(jQuery, fluid);
