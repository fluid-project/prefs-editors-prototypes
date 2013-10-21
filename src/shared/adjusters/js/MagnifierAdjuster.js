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
    
    fluid.defaults("gpii.uiOptions.panels.magnifier", {
        gradeNames: ["fluid.uiOptions.panels", "gpii.uiOptions.pmt.previewPerSettingEnhanced", "autoInit"],
        preferenceMap: {
            "http://registry.gpii.org/common/magnification": {
                "model.magnification": "default",
                "magnifier.min": "minimum",
                "magnifier.max": "maximum",
                "magnifier.divisibleBy": "divisibleBy"
            }
        },
        magnifier: {
            min: 100,
            max: 10000,
            divisibleBy: 50
        },

        metricUnit: "%",

        /*components: {
            preview: {
                type: "fluid.uiOptions.preview",
                createOnEvent: "afterRender",
                container: ".flc-uiOptions-magnifier .flc-uiOptions-preview-per-setting-frame",
                options: {
                    templateUrl: "../../src/shared/preview/html/uiOptionsTextPreview.html"
                }
            }
        },*/

        selectors: {
            magnifierMinus: ".flc-uiOptions-plus-minus-numerical-minus",
            magnifierLabel: ".flc-uiOptions-plus-minus-numerical-label",
            magnifierPlus: ".flc-uiOptions-plus-minus-numerical-plus",
            magnifierValueText: ".flc-uiOptions-plus-minus-numerical-value"
        },
        events: {
            minRangeReached: null
        },
        protoTree: {
            magnifierMinus: "-",
            magnifierLabel: {messagekey: "magnifierLabel"},
            magnifierPlus: "+",

            magnifierValueText: "${magnification}"
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
            "minRangeReached.setValueText": {
                "this": "{that}.dom.valueText",
                "method": "val",
                "args": ["{that}.options.strings.magnifierOFF"]
            },
            "onCreate.init": "gpii.uiOptions.panels.plusMinusAdjusterFinalInit"
        },
        invokers: {
            updatePlusMinusAdjusterUI: {
                funcName: "gpii.uiOptions.panels.updatePlusMinusAdjusterUI",
                args: ["{that}"]
            }
        }/*,
        
        distributeOptions: [{
            source: "{that}.options.outerPreviewEnhancerOptions",
            removeSource: true,
            target: "{that preview enhancer}.options"
        }]*/
    });
})(jQuery, fluid);
