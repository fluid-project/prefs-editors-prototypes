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

            valueText: "${value}",

            finalInitFunction: "fluid.uiOptions.panels.magnifier.finalInit"
        },

        invokers: {
            updatePlusMinusAdjusterUI: {
                funcName: "fluid.uiOptions.panels.updatePlusMinusAdjusterUI",
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
            target: "{that preview enhancer textSize}.type"
        }]
	});

	fluid.uiOptions.panels.magnifier.finalInit = function(that){
		that.events.minRangeReached.addListener(function () {
    		that.locate("valueText").val("OFF");
		});

		fluid.uiOptions.panels.plusMinusAdjusterFinalInit(that);
	}
	
})(jQuery, fluid);
