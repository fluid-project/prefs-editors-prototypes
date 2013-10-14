(function ($, fluid) {
    
    fluid.defaults("gpii.uiOptions.panels.textSize", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        preferenceMap: {
            "gpii.uiOptions.textSize": {
                "model.value": "default",
                "range.min": "minimum",
                "range.max": "maximum",
                "range.divisibleBy": "divisibleBy"
            }
        },
        // The default model values represent both the expected format as well as the setting to be applied in the absence of values passed down to the component.
        // i.e. from the settings store, or specific defaults derived from schema.
        // Note: Except for being passed down to its subcomponent, these default values are not contributed and shared out
        range: {
            min: 1,
            max: 1000,
            divisibleBy: 1
        },

        metricUnit: "pt",

        components: {
            preview: {
                type: "fluid.uiOptions.preview",
                createOnEvent: "afterRender",
                container: ".flc-uiOptions-text-size .flc-uiOptions-preview-per-setting-frame",
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
            label: {messagekey: "textSizeLabel"},
            plus: "+",

            valueText: "${value}"
        },
        listeners: {
            "onCreate.init": "gpii.uiOptions.panels.plusMinusAdjusterFinalInit"
        },
        invokers: {
            updatePlusMinusAdjusterUI: {
                funcName: "gpii.uiOptions.panels.updatePlusMinusAdjusterUI",
                args: ["{that}"]
            }
        },

        outerPreviewEnhancerOptions: "{originalEnhancerOptions}.options.originalUserOptions",
        emptyComponentType: "fluid.emptySubcomponent",
        distributeOptions: [{
            source: "{that}.options.outerPreviewEnhancerOptions",
            removeSource: true,
            target: "{that preview enhancer}.options"
        }, {
            source: "{that}.options.emptyComponentType",
            removeSource: true,
            target: "{that preview enhancer magnifier}.type"
        }]
    });
    
})(jQuery, fluid);
