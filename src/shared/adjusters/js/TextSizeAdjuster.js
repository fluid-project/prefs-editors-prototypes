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
        // The default model values represent both the expected format as well as the setting to be applied in the absence of values passed down to the component.
        // i.e. from the settings store, or specific defaults derived from schema.
        // Note: Except for being passed down to its subcomponent, these default values are not contributed and shared out
        /*range: {
            min: 1,
            max: 1000,
            divisibleBy: 1
        },*/

        metricUnit: "pt",

        components: {
            textSizePreview: {
                type: "fluid.uiOptions.preview",
                createOnEvent: "afterRender",
                container: ".flc-uiOptions-text-size .flc-uiOptions-preview-per-setting-frame",
                options: {
                    templateUrl: "../../src/shared/preview/html/uiOptionsTextPreview.html"
                }
            }
        },

        selectors: {
            textSizeMinus: ".flc-uiOptions-plus-minus-numerical-minus",
            textSizeLabel: ".flc-uiOptions-plus-minus-numerical-label",
            textSizePlus: ".flc-uiOptions-plus-minus-numerical-plus",
            textSizeValueText: ".flc-uiOptions-plus-minus-numerical-value"
        },
        events: {
            minRangeReached: null
        },
        listeners: {
            //"onCreate.init": "gpii.uiOptions.panels.plusMinusAdjusterFinalInit"
            "afterRender.console": {
                "this": "console",
                "method": "log",
                "args": {
                    expander: {
                        funcName: "gpii.uiOptions.concatStrings",
                        args: ["{that}.model.fontSize", "{that}.options.metricUnit"]
                    }
                }
            },
            "afterRender.bindEventMinusClick": {
                "this": "{that}.dom.textSizeMinus",
                "method": "click",
                "args": ["{that}.onMinusClick"]
            },
            "afterRender.setMetricUnit": {
                listener: "{that}.setMetricUnit"
            }
        },
        invokers: {
            onMinusClick: {
                funcName: "gpii.uiOptions.panels.plusMinus.onMinusClick",
                args: [
                    "{that}",
                    "{that}.model.fontSize",
                    "{that}.options.fontSize.range",
                    "fontSize"
                ]
            },
            setMetricUnit: {
                "this": "{that}.dom.textSizeValueText",
                "method": "val",
                "args": {
                    expander: {
                        funcName: "gpii.uiOptions.concatStrings",
                        args: ["{that}.model.fontSize", "{that}.options.metricUnit"]
                    }
                }
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
