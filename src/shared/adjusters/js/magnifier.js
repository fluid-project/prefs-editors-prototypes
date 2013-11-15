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
        gradeNames: ["fluid.prefs.panel", "gpii.pmt.previewPerSettingEnhanced", "autoInit"],
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
        components: {
            magnifierPreview: {
                type: "fluid.prefs.preview",
                createOnEvent: "afterRender",
                container: "{that}.dom.magnifierPreview",
                options: {
                    templateUrl: "../../src/shared/preview/html/textPreview.html",
                    components: {
                        enhancer: {
                            type: "fluid.uiEnhancer",
                            container: "{magnifierPreview}.enhancerContainer",
                            createOnEvent: "onReady",
                            options: {
                                gradeNames: ["fluid.prefs.stringBundle"],
                                members: {
                                    messageResolver: "{prefsEditorLoader}.msgBundle"
                                },
                                strings: {
                                    previewText: "{that}.stringBundle.previewText"
                                },
                                selectors: {
                                    previewText: ".gpiic-preview-per-setting-label"
                                },
                                listeners: {
                                    "onCreate.setText": {
                                        "this": "{that}.dom.previewText",
                                        "method": "text",
                                        "args": ["{that}.options.strings.previewText"]
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        selectors: {
            magnifierLabel: ".gpiic-magnifier-label",
            magnifierStepper: ".gpiic-magnifier-stepper",
            magnifierPreview: ".gpiic-magnifier-preview"
        },
        selectorsToIgnore: ["magnifierPreview"],
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
        },
        distributeOptions: [{
            source: "{that}.options.outerPreviewEnhancerOptions",
            target: "{that magnifierPreview enhancer}.options"
        }]
    });
})(jQuery, fluid);
