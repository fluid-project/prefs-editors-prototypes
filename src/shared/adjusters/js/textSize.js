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

    fluid.defaults("gpii.adjuster.textSize", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.fontSize": {
                "model.fontSize": "default",
                "fontSize.range.min": "minimum",
                "fontSize.range.max": "maximum",
                "fontSize.range.step": "divisibleBy"
            }
        },
        selectors: {
            textSizeLabel: ".gpiic-textSize-label",
            textSizeStepper: ".gpiic-textSize-stepper"
        },
        protoTree: {
            textSizeLabel: {messagekey: "textSizeLabel"},
            textSizeStepper: {
                decorators: {
                    type: "fluid",
                    func: "gpii.adjuster.textfieldStepper",
                    options: {
                        sourceApplier: "{that}.applier",
                        rules: {
                            "fontSize": "value"
                        },
                        model: {
                            value: "{that}.model.fontSize"
                        },
                        strings: {
                            "unit": "{that}.stringBundle.textSizeUnit"
                        },
                        range: "{that}.fontSize.range"
                    }
                }
            },
        }
    });

    fluid.defaults("gpii.adjuster.textSize.preview", {
        gradeNames: ["gpii.adjuster.previewWithText", "autoInit"],
        previewURL: "",
        previewEnactors: {
            textSize: {
                type: "gpii.enactor.textSize",
                container: "{enhancer}.container",
                options: {
                    gradeNames: ["gpii.enactors.previewConnections"]
                }
            }
        }
    });

})(jQuery, fluid);
