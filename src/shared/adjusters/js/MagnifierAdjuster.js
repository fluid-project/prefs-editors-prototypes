(function ($, fluid) {
	
	fluid.defaults("fluid.uiOptions.panels.magnifier", {
		gradeNames: ["fluid.uiOptions.panels", "autoInit"],
		preferenceMap: {
			"fluid.uiOptions.magnifier": {
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
					func: "fluid.uiOptions.pmt.lookupMsg",
					args: ["{uiOptionsLoader}.msgBundle", "magnifierOFF"]
				}
			}
        },
        listeners: {
        	"minRangeReached.setValueText": {
				"this": "{that}.dom.valueText",
				"method": "val",
				"args": ["{that}.options.strings.magnifierOFF"]
        	}
        },
        invokers: {
            updatePlusMinusAdjusterUI: {
                funcName: "fluid.uiOptions.panels.updatePlusMinusAdjusterUI",
                args: ["{that}"]
            }
        },

        finalInitFunction: "fluid.uiOptions.panels.plusMinusAdjusterFinalInit",
        
        outerPreviewEnhancerOptions: "{originalEnhancerOptions}.options.originalUserOptions",
        emptyComponentType: "fluid.emptySubcomponent",
        distributeOptions: [{
            source: "{that}.options.outerPreviewEnhancerOptions",
            removeSource: true,
            target: "{that preview enhancer}.options"
        }]
	});
})(jQuery, fluid);
