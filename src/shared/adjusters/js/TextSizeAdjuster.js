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
        gradeNames: ["fluid.prefs.panel", "gpii.uiOptions.panels.plusMinus", "gpii.uiOptions.pmt.previewPerSettingEnhanced", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.fontSize": {
                "model.fontSize": "default",
                "fontSize.range.min": "minimum",
                "fontSize.range.max": "maximum",
                "fontSize.range.divisibleBy": "divisibleBy"
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
            textSizeMinus: ".gpiic-incresaeSize-plusMinusNumericalMinusTextSize",
            textSizeLabel: ".gpiic-increaseSize-plusMinusNumericalLabelTextSize",
            textSizePlus: ".gpiic-increaseSize-plusMinusNumericalPlusTextSize",
            textSizeValueText: ".gpiic-increaseSize-plusMinusNumericalValueTextSize",
            textSizePreview: ".gpiic-increaseSize-previewPerSettingFrameTextSize"
        },
        selectorsToIgnore: ["textSizePreview"],

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
            "textSizeMinRangeReached.setTextSizeMinusStyleAdd": {
                listener: "{that}.setTextSizeMinusStyleAdd"
            },
            "textSizeMinRangeExited.setTextSizeMinusStyleRemove": {
                listener: "{that}.setTextSizeMinusStyleRemove"
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
                    "{that}.events.textSizeMinRangeReached",
                    "{that}.events.textSizeMinRangeExited",
                    "{that}.refreshTextSizeValueText"
                ]
            },
            onTextSizePlusClick: {
                funcName: "gpii.uiOptions.panels.plusMinus.onPlusClick",
                args: [
                    "{that}",
                    "{that}.model.fontSize",
                    "{that}.options.fontSize.range",
                    "fontSize",
                    "{that}.events.textSizeMinRangeReached",
                    "{that}.events.textSizeMinRangeExited",
                    "{that}.refreshTextSizeValueText"
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
                    "{that}.events.textSizeMinRangeReached",
                    "{that}.events.textSizeMinRangeExited",
                    "{that}.refreshTextSizeValueText"
                ]
            },
            refreshTextSizeValueText: {
                "this": "{that}.dom.textSizeValueText",
                "method": "val",
                "args": {
                    expander: {
                        "this": "fluid",
                        method: "stringTemplate",
                        args: ["{that}.stringBundle.fontSizeStringTemplate", ["{that}.model.fontSize"]]
                    }
                }
            },
            setTextSizeMinusStyleAdd: {
                "this": "{that}.dom.textSizeMinus",
                "method": "addClass",
                "args": "gpii-increaseSize-plusMinusNumericalMinReached"                        

            },
            setTextSizeMinusStyleRemove: {
                "this": "{that}.dom.textSizeMinus",
                "method": "removeClass",
                "args": "gpii-increaseSize-plusMinusNumericalMinReached"                        

            },
            checkTextSizeInitialMinRange: {
                funcName: "gpii.uiOptions.panels.plusMinus.performMinRangeCheck",
                args: [
                    "{that}",
                    "{that}.model.fontSize",
                    "{that}.options.fontSize.range",
                    "{that}.events.textSizeMinRangeReached",
                    "{that}.events.textSizeMinRangeExited"
                ]
            },
            setTextSizeMetricUnit: {
                func: "{that}.refreshTextSizeValueText"
            }
        },

        // strings: {
        //     fontSizeStringTemplate: "{that}.stringBundle.fontSizeStringTemplate"
            // fontSizeStringTemplate: {
            //     expander: {
            //         func: "gpii.lookupMsg",
            //         args: ["{uiOptionsLoader}.msgBundle", "fontSizeStringTemplate"]
            //     }
            // }  
        // },
        distributeOptions: [{
            source: "{that}.options.outerPreviewEnhancerOptions",
            target: "{that textSizePreview enhancer}.options"
        }, {
            source: "{that}.options.emptyComponentType",
            target: "{that textSizePreview enhancer magnifier}.type"
        }]
    });
    
})(jQuery, fluid);
