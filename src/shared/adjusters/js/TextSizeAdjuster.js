/*
 * !!!!! DEPRECATED !!!!!
 * 
 * Will use Alex's version of textFieldStepper as in,
 * 
 * https://github.com/radmanovi4/prefsEditors/blob/divide-and-conquer/src/shared/adjusters/js/textfieldStepper.js
 *
 * This file will be removed once merging with Astea's work takes place.
 * 
 */

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
    
    fluid.defaults("gpii.uiOptions.panels.textSize", {
        gradeNames: ["fluid.uiOptions.panels", "gpii.uiOptions.panels.plusMinus", "gpii.uiOptions.pmt.previewPerSettingEnhanced", "autoInit"],
        preferenceMap: {
            "http://registry.gpii.org/common/fontSize": {
                "model.fontSize": "default",
                "fontSize.range.min": "minimum",
                "fontSize.range.max": "maximum",
                "fontSize.range.divisibleBy": "divisibleBy"
            }
        },

        textSizeMetricUnit: "pt",

        events: {
            textSizeMinRangeReached: null
        },

        components: {
            textSizePreview: {
                type: "fluid.uiOptions.preview",
                createOnEvent: "afterRender",
                container: ".flc-uiOptions-text-size .flc-uiOptions-preview-per-setting-frame",
                options: {
                    templateUrl: "../../src/shared/preview/html/uiOptionsTextPreview.html",
                    components: {
                        enhancer: {
                            type: "fluid.uiEnhancer",
                            container: "{textSizePreview}.enhancerContainer",
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
            textSizeMinus: ".flc-uiOptions-plus-minus-numerical-minus",
            textSizeLabel: ".flc-uiOptions-plus-minus-numerical-label",
            textSizePlus: ".flc-uiOptions-plus-minus-numerical-plus",
            textSizeValueText: ".flc-uiOptions-plus-minus-numerical-value"
        },
        listeners: {
            "afterRender.bindEventTextSizeMinusClick": {
                "this": "{that}.dom.textSizeMinus",
                "method": "click",
                "args": ["{that}.onTextSizeMinusClick"]
            },
            "afterRender.bindEventTextSizePlusClick": {
                "this": "{that}.dom.textSizePlus",
                "method": "click",
                "args": ["{that}.onTextSizePlusClick"]
            },
            "afterRender.bindEventTextSizeValueTextChange": {
                "this": "{that}.dom.textSizeValueText",
                "method": "change",
                "args": ["{that}.onTextSizeValueTextChange"]
            },
            "afterRender.bindEventTextSizeValueTextPreventNonNumeric": {
                "this": "{that}.dom.textSizeValueText",
                "method": "keydown",
                "args": ["{that}.onValueTextPreventNonNumeric"]
            },
            "afterRender.setTextSizeMetricUnit": {
                listener: "{that}.setTextSizeMetricUnit"
            },
            "afterRender.checkTextSizeInitialMinRange": {
                listener: "{that}.checkTextSizeInitialMinRange"
            },
            "textSizeMinRangeReached.setTextSizeMinusStyle": {
                listener: "{that}.setTextSizeMinusStyle"
            }

        },
        invokers: {
            onTextSizeMinusClick: {
                funcName: "gpii.uiOptions.panels.plusMinus.onMinusClick",
                args: [
                    "{that}",
                    "{that}.model.fontSize",
                    "{that}.options.fontSize.range",
                    "fontSize",
                    "{that}.events.textSizeMinRangeReached"
                ]
            },
            onTextSizePlusClick: {
                funcName: "gpii.uiOptions.panels.plusMinus.onPlusClick",
                args: [
                    "{that}",
                    "{that}.model.fontSize",
                    "{that}.options.fontSize.range",
                    "fontSize",
                    "{that}.events.textSizeMinRangeReached"
                ]
            },
            onTextSizeValueTextChange: {
                funcName: "gpii.uiOptions.panels.plusMinus.onValueTextChange",
                args: [
                    "{that}",
                    {expander: {
                        "this": "{that}.dom.textSizeValueText",
                        "method": "val"
                    }},
                    "{that}.options.fontSize.range",
                    "fontSize",
                    "{that}.events.textSizeMinRangeReached"
                ]
            },
            setTextSizeMetricUnit: {
                "this": "{that}.dom.textSizeValueText",
                "method": "val",
                "args": {
                    expander: {
                        funcName: "gpii.uiOptions.concatStrings",
                        args: ["{that}.model.fontSize", "{that}.options.textSizeMetricUnit"]
                    }
                }
            },
            setTextSizeMinusStyle: {
                "this": "{that}.dom.textSizeMinus",
                "method": "toggleClass",
                "args": "fl-uiOptions-plus-minus-numerical-min-reached"                        

            },
            checkTextSizeInitialMinRange: {
                funcName: "gpii.uiOptions.panels.plusMinus.performMinRangeCheck",
                args: [
                    "{that}",
                    "{that}.model.fontSize",
                    "{that}.options.fontSize.range",
                    "{that}.events.textSizeMinRangeReached"
                ]
            }
        },

        distributeOptions: [{
            source: "{that}.options.outerPreviewEnhancerOptions",
            //removeSource: true,
            target: "{that textSizePreview enhancer}.options"
        }, {
            source: "{that}.options.emptyComponentType",
            //removeSource: true,
            target: "{that textSizePreview enhancer magnifier}.type"
        }]
    });
    
})(jQuery, fluid);
