/*!
Cloud4all Preferences Management Tools

Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global fluid, jQuery*/
/*jslint white: true, onevar: true, funcinvoke: true, forvar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

(function ($, fluid) {

    fluid.defaults("gpii.adjuster.magnifier", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.magnification": {
                "model.magnification": "default",
                "magnification.range.min": "minimum",
                "magnification.range.max": "maximum",
                "magnification.range.step": "divisibleBy"
            }
        },
        members: {
            messageResolver: "{prefsEditorLoader}.msgBundle"
        },
        selectors: {
            magnifierLabel: ".gpiic-magnifier-label",
            magnifierStepper: ".gpiic-magnifier-stepper"
        },
        protoTree: {
            magnifierLabel: {messagekey: "magnifierLabel"},
            magnifierStepper: {
                decorators: {
                    type: "fluid",
                    func: "gpii.adjuster.textfieldStepper",
                    options: {
                        sourceApplier: "{that}.applier",
                        rules: {
                            "magnification": "value"
                        },
                        model: {
                            value: "{that}.model.magnification"
                        },
                        strings: {
                            "unit": "{that}.stringBundle.magnifierUnit"
                        },
                        range: "{that}.options.magnification.range"
                    }
                }
            }
        }
    });

    fluid.defaults("gpii.adjuster.magnifier.preview", {
        gradeNames: ["gpii.adjuster.previewWithText", "autoInit"],
        previewURL: "",
        previewEnactors: {
            magnifier: {
                type: "gpii.enactor.magnifier",
                container: "{enhancer}.container",
                options: {
                    gradeNames: ["gpii.enactors.previewConnections"]
                }
            }
        }
    });

})(jQuery, fluid);
