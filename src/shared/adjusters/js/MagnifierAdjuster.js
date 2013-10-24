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
    
    fluid.defaults("gpii.uiOptions.panels.magnifier", {
        gradeNames: ["fluid.uiOptions.panels", "gpii.uiOptions.panels.plusMinus", "gpii.uiOptions.pmt.previewPerSettingEnhanced", "autoInit"],
        preferenceMap: {
            "http://registry.gpii.org/common/magnification": {
                "model.magnification": "default",
                "magnification.range.min": "minimum",
                "magnification.range.max": "maximum",
                "magnification.range.divisibleBy": "divisibleBy"
            }
        },

        magnifierMetricUnit: "%",

        events: {
            magnifierMinRangeReached: null
        },

        components: {
            magnifierPreview: {
                type: "fluid.uiOptions.preview",
                createOnEvent: "afterRender",
                container: ".flc-uiOptions-magnifier .flc-uiOptions-preview-per-setting-frame",
                options: {
                    templateUrl: "../../src/shared/preview/html/uiOptionsTextPreview.html",
                    components: {
                        enhancer: {
                            type: "fluid.uiEnhancer",
                            container: "{magnifierPreview}.enhancerContainer",
                            createOnEvent: "onReady",
                            options: {
                                selectors: {
                                    previewText: ".flc-uiOptions-preview-per-setting-label"
                                },
                                strings: {
                                    previewText: {
                                        expander: {
                                            func: "gpii.uiOptions.pmt.lookupMsg",
                                            args: ["{uiOptionsLoader}.msgBundle", "previewText"]
                                        }
                                    }
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
            magnifierMinus: ".flc-uiOptions-plus-minus-numerical-minus-magnifier",
            magnifierLabel: ".flc-uiOptions-plus-minus-numerical-label-magnifier",
            magnifierPlus: ".flc-uiOptions-plus-minus-numerical-plus-magnifier",
            magnifierValueText: ".flc-uiOptions-plus-minus-numerical-value-magnifier"
        },
        strings: {
            magnifierOFF: {
                expander: {
                    func: "gpii.uiOptions.pmt.lookupMsg",
                    args: ["{uiOptionsLoader}.msgBundle", "magnifierOFF"]
                }
            }
        },
        listeners: {
            "magnifierMinRangeReached.setMagnifierValueText": {
                "this": "{that}.dom.magnifierValueText",
                "method": "val",
                "args": ["{that}.options.strings.magnifierOFF"]
            },
            "afterRender.bindEventMagnifierMinusClick": {
                "this": "{that}.dom.magnifierMinus",
                "method": "click",
                "args": ["{that}.onMagnifierMinusClick"]
            },
            "afterRender.bindEventMagnifierPlusClick": {
                "this": "{that}.dom.magnifierPlus",
                "method": "click",
                "args": ["{that}.onMagnifierPlusClick"]
            },
            "afterRender.bindEventMagnifierValueTextChange": {
                "this": "{that}.dom.magnifierValueText",
                "method": "change",
                "args": ["{that}.onMagnifierValueTextChange"]
            },
            "afterRender.bindEventMagnifierValueTextPreventNonNumeric": {
                "this": "{that}.dom.magnifierValueText",
                "method": "keydown",
                "args": ["{that}.onValueTextPreventNonNumeric"]
            },
            "afterRender.setMagnifierMetricUnit": {
                listener: "{that}.setMagnifierMetricUnit"
            },
            "afterRender.checkMagnifierInitialMinRange": {
                listener: "{that}.checkMagnifierInitialMinRange"
            },
            "magnifierMinRangeReached.setMagnifierMinusStyle": {
                listener: "{that}.setMagnifierMinusStyle"
            }
        },
        invokers: {
            onMagnifierMinusClick: {
                funcName: "gpii.uiOptions.panels.plusMinus.onMinusClick",
                args: [
                    "{that}",
                    "{that}.model.magnification",
                    "{that}.options.magnification.range",
                    "magnification",
                    "{that}.events.magnifierMinRangeReached"
                ]
            },
            onMagnifierPlusClick: {
                funcName: "gpii.uiOptions.panels.plusMinus.onPlusClick",
                args: [
                    "{that}",
                    "{that}.model.magnification",
                    "{that}.options.magnification.range",
                    "magnification",
                    "{that}.events.magnifierMinRangeReached"
                ]
            },
            onMagnifierValueTextChange: {
                funcName: "gpii.uiOptions.panels.plusMinus.onValueTextChange",
                args: [
                    "{that}",
                    {expander: {
                        "this": "{that}.dom.magnifierValueText",
                        "method": "val"
                    }},
                    "{that}.options.magnification.range",
                    "magnification",
                    "{that}.events.magnifierMinRangeReached"
                ]
            },
            setMagnifierMetricUnit: {
                "this": "{that}.dom.magnifierValueText",
                "method": "val",
                "args": {
                    expander: {
                        funcName: "gpii.uiOptions.concatStrings",
                        args: ["{that}.model.magnification", "{that}.options.magnifierMetricUnit"]
                    }
                }
            },
            setMagnifierMinusStyle: {
                "this": "{that}.dom.magnifierMinus",
                "method": "toggleClass",
                "args": "fl-uiOptions-plus-minus-numerical-min-reached"                        

            },
            checkMagnifierInitialMinRange: {
                funcName: "gpii.uiOptions.panels.plusMinus.performMinRangeCheck",
                args: [
                    "{that}",
                    "{that}.model.magnification",
                    "{that}.options.magnification.range",
                    "{that}.events.magnifierMinRangeReached"
                ]
            }
        },
        
        distributeOptions: [{
            source: "{that}.options.outerPreviewEnhancerOptions",
            //removeSource: true,
            target: "{that magnifierPreview enhancer}.options"
        }]
    });
})(jQuery, fluid);
