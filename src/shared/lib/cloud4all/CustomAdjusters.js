(function ($, fluid) {

	fluid.defaults("fluid.uiOptions.panels.textSize", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        preferenceMap: {
            "fluid.uiOptions.textSize": {
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
            max: 2,
            divisibleBy: 1
        },
        selectors: {
            minus: ".flc-uiOptions-plus-minus-numerical-minus",
            label: ".flc-uiOptions-plus-minus-numerical-label",
            plus: ".flc-uiOptions-plus-minus-numerical-plus",
            valueText: ".flc-uiOptions-plus-minus-numerical-value"
        },
        protoTree: {
            minus: "-",
            label: {messagekey: "textSizeLabel"},
            plus: "+",

            valueText: "${value}"
        },
        
        finalInitFunction: "fluid.uiOptions.panels.textSize.finalInit"
    });
	
	fluid.uiOptions.panels.textSize.finalInit = plusMinusAdjusterFinalInit;
	
	fluid.uiOptions.enactors.textSize.set = function (sizeInPx, that) {
        that.container.css("font-size", sizeInPx + "px");
    };
		
	fluid.defaults("fluid.uiOptions.panels.cursorSize", {
		gradeNames: ["fluid.uiOptions.panels", "autoInit"],
		preferenceMap: {
			"fluid.uiOptions.cursorSize": {
				"model.value": "default",
				"range.min": "minimum",
				"range.max": "maximum"
			}
		},
		range: {
			min: 1,
			max: 5
		},
		selectors: {
			textSize: ".flc-uiOptions-cursor-size",
			label: ".flc-uiOptions-cursor-size-label",
			multiplier: ".flc-uiOptions-multiplier"
		},
		protoTree: {
			label: {messagekey: "cursorSizeLabel"},
			multiplier: {messagekey: "multiplier"},
			textSize: {
				decorators: {
					type: "fluid",
					func: "fluid.uiOptions.textfieldSlider"
				}
			}
		},
		sliderOptions: {
			orientation: "horizontal",
			step: 0.5,
			range: "min"
		}
	});

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
			min: 1,
			max: 10,
            divisibleBy: 1
		},
        selectors: {
            minus: ".flc-uiOptions-plus-minus-numerical-minus",
            label: ".flc-uiOptions-plus-minus-numerical-label",
            plus: ".flc-uiOptions-plus-minus-numerical-plus",
            valueText: ".flc-uiOptions-plus-minus-numerical-value"
        },
        protoTree: {
            minus: "-",
            label: {messagekey: "magnifierLabel"},
            plus: "+",

            valueText: "${value}",
            
            finalInitFunction: "fluid.uiOptions.panels.magnifier.finalInit"
        }
	});
	
	fluid.uiOptions.panels.magnifier.finalInit = plusMinusAdjusterFinalInit; 

	fluid.defaults("fluid.uiOptions.panels.magnifierPosition", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        preferenceMap: {
            "fluid.uiOptions.magnifierPosition": {
                "model.value": "default",
                "controlValues.magnifierPosition": "enum"
            }
        },
        selectors: {
        	magnifierPosition: ".flc-uiOptions-magnifier-position",
            label: ".flc-uiOptions-magnifier-position-label"
        },
        strings: {
        	magnifierPosition: {
                expander: {
                    func: "fluid.uiOptions.panels.magnifierPosition.lookupMsg",
                    args: ["{that}.options.parentBundle", "magnifierPosition", "{that}.options.controlValues.magnifierPosition"]
                }
            }
        },
        protoTree: {
            label: {messagekey: "magnifierPositionLabel"},
            magnifierPosition: {
                optionnames: "{that}.options.strings.magnifierPosition",
                optionlist: "{that}.options.controlValues.magnifierPosition",
                selection: "${value}"
            }
        },
        controlValues: {
        	magnifierPosition: ["default", "lens", "fullscreen", "dockedtop", "dockedbottom", "dockedleft", "dockedright"]
        }
    });
	
	fluid.uiOptions.panels.magnifierPosition.lookupMsg = function (messageResolver, prefix, values) {
        var messages = [];
        fluid.each(values, function (value, key) {
            var looked = messageResolver.lookup([prefix + "." + value]);
            messages.push(looked ? looked.template : looked);
        });
        return messages;
    };

	function plusMinusAdjusterFinalInit(that) {
		that.events.afterRender.addListener(function () {
			that.locate("minus").click(
					function()
					{
						var newValue =  parseFloat(that.locate("valueText").val()) - parseFloat(that.options.range.divisibleBy);
						if(newValue >= parseFloat(that.options.range.min))
						{
							//that.locate("valueText").val(newValue);
							that.applier.requestChange("value", newValue);
							that.refreshView();
						}
					}
			);
			
			that.locate("plus").click(
					function()
					{
						var newValue =  parseFloat(that.locate("valueText").val()) + parseFloat(that.options.range.divisibleBy);
						//that.locate("valueText").val(newValue);
						that.applier.requestChange("value", newValue);
						that.refreshView();
					}
			);

		});
	};
    
})(jQuery, fluid);
