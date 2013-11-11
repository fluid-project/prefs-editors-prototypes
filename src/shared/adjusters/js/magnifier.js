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
        gradeNames: ["fluid.prefs.panel", "gpii.adjuster.plusMinus", "gpii.pmt.previewPerSettingEnhanced", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.magnification": {
                "model.magnification": "default",
                "magnification.range.min": "minimum",
                "magnification.range.max": "maximum",
                "magnification.range.divisibleBy": "divisibleBy"
            }
        },

        events: {
            magnifierMinRangeReached: null,
            magnifierMinRangeExited: null
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
            magnifierMinus: ".gpiic-increaseSize-plusMinusNumericalMinusMagnifier",
            magnifierLabel: ".gpiic-increaseSize-plusMinusNumericalLabelMagnifier",
            magnifierPlus: ".gpiic-increaseSize-plusMinusNumericalPlusMagnifier",
            magnifierValueText: ".gpiic-increaseSize-plusMinusNumericalValueMagnifier",
            magnifierPreview: ".gpiic-increaseSize-previewPerSettingFrameMagnifier"
        },
        selectorsToIgnore: ["magnifierPreview"],
        strings: {
            magnifierOFF: "{that}.stringBundle.magnifierOFF",
            magnifierStringTemplate: "{that}.stringBundle.magnifierStringTemplate"
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
            "magnifierMinRangeReached.setMagnifierMinusStyleAdd": {
                listener: "{that}.setMagnifierMinusStyleAdd"
            },
            "magnifierMinRangeExited.setMagnifierMinusStyleRemove": {
                listener: "{that}.setMagnifierMinusStyleRemove"
            }
        },
        invokers: {
            onMagnifierMinusClick: {
                funcName: "gpii.adjuster.plusMinus.onMinusClick",
                args: [
                    "{that}",
                    "{that}.model.magnification",
                    "{that}.options.magnification.range",
                    "magnification",
                    "{that}.events.magnifierMinRangeReached",
                    "{that}.events.magnifierMinRangeExited",
                    "{that}.refreshMagnifierValueText"
                ],
                dynamic: true
            },
            onMagnifierPlusClick: {
                funcName: "gpii.adjuster.plusMinus.onPlusClick",
                args: [
                    "{that}",
                    "{that}.model.magnification",
                    "{that}.options.magnification.range",
                    "magnification",
                    "{that}.events.magnifierMinRangeReached",
                    "{that}.events.magnifierMinRangeExited",
                    "{that}.refreshMagnifierValueText"
                ],
                dynamic: true
            },
            onMagnifierValueTextChange: {
                funcName: "gpii.adjuster.plusMinus.onValueTextChange",
                args: [
                    "{that}",
                    {expander: {
                        "this": "{that}.dom.magnifierValueText",
                        "method": "val"
                    }},
                    "{that}.options.magnification.range",
                    "magnification",
                    "{that}.events.magnifierMinRangeReached",
                    "{that}.events.magnifierMinRangeExited",
                    "{that}.refreshMagnifierValueText"
                ],
                dynamic: true
            },
            refreshMagnifierValueText: {
                "this": "{that}.dom.magnifierValueText",
                "method": "val",
                "args": {
                    expander: {
                        "this": "fluid",
                        method: "stringTemplate",
                        args: ["{that}.options.strings.magnifierStringTemplate", ["{that}.model.magnification"]]
                    }
                },
                dynamic: true
            },
            setMagnifierMinusStyleAdd: {
                "this": "{that}.dom.magnifierMinus",
                "method": "addClass",
                "args": "gpii-increaseSize-plusMinusNumericalMinReached"                        

            },
            setMagnifierMinusStyleRemove: {
                "this": "{that}.dom.magnifierMinus",
                "method": "removeClass",
                "args": "gpii-increaseSize-plusMinusNumericalMinReached"                        

            },
            checkMagnifierInitialMinRange: {
                funcName: "gpii.adjuster.plusMinus.performMinRangeCheck",
                args: [
                    "{that}",
                    "{that}.model.magnification",
                    "{that}.options.magnification.range",
                    "{that}.events.magnifierMinRangeReached",
                    "{that}.events.magnifierMinRangeExited"
                ],
                dynamic: true
            },
            setMagnifierMetricUnit: {
                func: "{that}.refreshMagnifierValueText"
            }
        },
        
        distributeOptions: [{
            source: "{that}.options.outerPreviewEnhancerOptions",
            //removeSource: true,
            target: "{that magnifierPreview enhancer}.options"
        }]
    });
})(jQuery, fluid);
