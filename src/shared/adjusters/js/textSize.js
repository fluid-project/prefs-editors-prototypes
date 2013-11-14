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
        gradeNames: ["fluid.prefs.panel", "gpii.pmt.previewPerSettingEnhanced", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.fontSize": {
                "model.fontSize": "default",
                "fontSize.range.min": "minimum",
                "fontSize.range.max": "maximum",
                "fontSize.range.step": "divisibleBy"
            }
        },
        events: {
            textSizeMinRangeReached: null,
            textSizeMinRangeExited: null
        },
        components: {
            textSizePreview: {
                type: "fluid.prefs.preview",
                createOnEvent: "afterRender",
                container: "{that}.dom.textSizePreview",
                options: {
                    templateUrl: "../../src/shared/preview/html/textPreview.html",
                    components: {
                        enhancer: {
                            type: "fluid.uiEnhancer",
                            container: "{textSizePreview}.enhancerContainer",
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
            textSizeLabel: ".gpiic-textSize",
            textSizePreview: ".gpiic-textSize-preview",
            textSizeStepper: ".gpiic-textSize-stepper"
        },
        selectorsToIgnore: ["textSizePreview"],
        protoTree: {
            textSizeLabel: {messagekey: "textSizeLabel"},
            textSizeStepper: {
                decorators: {
                    type: "fluid",
                    func: "gpii.textfieldStepper",
                    options: {
                        gradeNames: "fluid.prefs.modelRelay",
                        sourceApplier: "{that}.applier",
                        rules: {
                            "fontSize": "value"
                        },
                        model: {
                            value: "{that}.model.fontSize"
                        },
                        strings: {
                            "unit": "{that}.stringBundle.fontSizeUnit"
                        },
                        range: "{that}.fontSize.range"
                    }
                }
            },
        },
        distributeOptions: [{
            source: "{that}.options.outerPreviewEnhancerOptions",
            target: "{that textSizePreview enhancer}.options"
        }, {
            source: "{that}.options.emptyComponentType",
            target: "{that textSizePreview enhancer magnifier}.type"
        }]
    });

})(jQuery, fluid);
