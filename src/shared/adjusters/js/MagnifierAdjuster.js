/*global fluid, jQuery*/
/*jslint white: true, onevar: true, funcinvoke: true, forvar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

(function ($, fluid) {
    
    fluid.defaults("gpii.uiOptions.panels.magnifier", {
        gradeNames: ["fluid.uiOptions.panels", "gpii.uiOptions.pmt.previewPerSettingEnhanced", "autoInit"],
        preferenceMap: {
            "http://registry.gpii.org/common/magnification": {
                "model.value": "default",
                "range.min": "minimum",
                "range.max": "maximum",
                "range.divisibleBy": "divisibleBy"
            }
        },
        range: {
            min: 100,
            max: 10000,
            divisibleBy: 50
        },

        metricUnit: "%",

        components: {
            preview: {
                type: "fluid.uiOptions.preview",
                createOnEvent: "afterRender",
                container: ".flc-uiOptions-magnifier .flc-uiOptions-preview-per-setting-frame",
                options: {
                    templateUrl: "../../src/shared/preview/html/uiOptionsTextPreview.html"
                }
            }
        },

        selectors: {
            minus: ".flc-uiOptions-plus-minus-numerical-minus",
            label: ".flc-uiOptions-plus-minus-numerical-label",
            plus: ".flc-uiOptions-plus-minus-numerical-plus",
            valueText: ".flc-uiOptions-plus-minus-numerical-value"
        },
        events: {
            minRangeReached: null
        },
        protoTree: {
            minus: "-",
            label: {messagekey: "magnifierLabel"},
            plus: "+",

            valueText: "${value}"
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
        },
        
        distributeOptions: [{
            source: "{that}.options.outerPreviewEnhancerOptions",
            removeSource: true,
            target: "{that preview enhancer}.options"
        }]
    });
})(jQuery, fluid);
