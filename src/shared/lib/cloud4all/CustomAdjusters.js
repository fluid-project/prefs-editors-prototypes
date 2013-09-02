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
        
        metricUnit: "pt",
        
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
        
        finalInitFunction: "fluid.uiOptions.panels.textSize.finalInit"
    });
	
	fluid.uiOptions.panels.textSize.finalInit = function(that){
		plusMinusAdjusterFinalInit(that);
	}
	
	fluid.uiOptions.enactors.textSize.set = function (sizeInPt, that) {
        that.container.css("font-size", sizeInPt + "pt");
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

		metricUnit: "%",
        
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
        }
	});
	
	fluid.uiOptions.panels.magnifier.finalInit = function(that){
		that.events.minRangeReached.addListener(function () {
    		that.locate("valueText").val("OFF");
		});

        plusMinusAdjusterFinalInit(that); 
	}

	fluid.defaults("fluid.uiOptions.panels.magnifierPosition", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        preferenceMap: {
            "fluid.uiOptions.magnifierPosition": {
                "model.value": "",
                "controlValues.magnifierPosition": "enum"
            }
        },
        listeners: {
            afterRender: "{that}.style"
        },
        selectors: {
            magnifierPositionRow: ".flc-uiOptions-magnifierPositionRow",
            magnifierPositionLabel: ".flc-uiOptions-magnifierPosition-label",
            magnifierPositionInput: ".flc-uiOptions-magnifierPositionInput",
            label: ".flc-uiOptions-magnifierPosition-heading"
        },
        strings: {
        	magnifierPosition: {
                expander: {
                    func: "fluid.uiOptions.panels.magnifierPosition.lookupMsg",
                    args: ["{that}.options.parentBundle", "magnifierPosition", "{that}.options.controlValues.magnifierPosition"]
                }
            }
        },
        repeatingSelectors: ["magnifierPositionRow"],
        protoTree: {
            label: {messagekey: "magnifierPositionLabel"},
            expander: {
                type: "fluid.renderer.selection.inputs",
                rowID: "magnifierPositionRow",
                labelID: "magnifierPositionLabel",
                inputID: "magnifierPositionInput",
                selectID: "magnifierPosition-radio",
                tree: {
                    optionnames: "{that}.options.strings.magnifierPosition",
                    optionlist: "{that}.options.controlValues.magnifierPosition",
                    selection: "${value}"
                }
            }
        },
        controlValues: {
            magnifierPosition: ["lens", "dockedleft", "dockedtop", "fullscreen", "dockedright", "dockedbottom"]
        },
        markup: {
            label: "<div class=\"fl-adjuster-icons fl-magnifierPosition-uio-icon fl-magnifierPosition-uio-icon-main\"></div>" +
		    		"<div class=\"fl-adjuster-icons fl-magnifierPosition-uio-icon fl-magnifierPosition-uio-frame\"></div>" +
		    		"<div class=\"fl-adjuster-icons fl-magnifierPosition-uio-icon fl-magnifierPosition-uio-background\"></div>" +
            		"<span class=\"fl-hidden-accessible\">%magnifierPosition</span>" +
            		"<div class=\"fl-crossout\"></div>"
        },
        invokers: {
            style: {
                funcName: "fluid.uiOptions.panels.magnifierPosition.style",
                args: ["{that}.dom.magnifierPositionLabel", "{that}.options.strings.magnifierPosition",
                    "{that}.options.markup.label", "{that}.options.controlValues.magnifierPosition",
                    "{that}.options.classnameMap.magnifierPosition"]
            }
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

    fluid.uiOptions.panels.magnifierPosition.style = function (labels, strings, markup, magnifierPosition, style) {
        fluid.each(labels, function (label, index) {
            label = $(label);
            label.html(fluid.stringTemplate(markup, {
                magnifierPosition: strings[index]
            }));
            label.addClass(style[magnifierPosition[index]]);
        });
    };

    
    
    fluid.defaults("fluid.uiOptions.panels.magnifierFollows", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        preferenceMap: {
            "fluid.uiOptions.magnifierFollows": {
                "model.value": "",
                "controlValues.magnifierFollows": "enum"
            }
        },
        listeners: {
            afterRender: "{that}.style"
        },
        selectors: {
        	magnifierFollowsRow: ".flc-uiOptions-magnifierFollowsRow",
        	magnifierFollowsLabel: ".flc-uiOptions-magnifierFollows-label",
        	magnifierFollowsInput: ".flc-uiOptions-magnifierFollowsInput",
            label: ".flc-uiOptions-magnifierFollows-heading"
        },
        strings: {
        	magnifierFollows: {
                expander: {
                    func: "fluid.uiOptions.panels.magnifierFollows.lookupMsg",
                    args: ["{that}.options.parentBundle", "magnifierFollows", "{that}.options.controlValues.magnifierFollows"]
                }
            }
        },
        repeatingSelectors: ["magnifierFollowsRow"],
        protoTree: {
            label: {messagekey: "magnifierFollowsLabel"},
            expander: {
                type: "fluid.renderer.selection.inputs",
                rowID: "magnifierFollowsRow",
                labelID: "magnifierFollowsLabel",
                inputID: "magnifierFollowsInput",
                selectID: "magnifierFollows-radio",
                tree: {
                    optionnames: "{that}.options.strings.magnifierFollows",
                    optionlist: "{that}.options.controlValues.magnifierFollows",
                    selection: "${value}"
                }
            }
        },
        controlValues: {
        	magnifierFollows: ["mousecursor", "textcursor", "keyboardfocus"]
        },
        markup: {
            label: 	"<div class=\"fl-adjuster-icons fl-magnifierFollows-uio-icon\"></div>" +
            		"<div class=\"fl-adjuster-icons fl-magnifierFollows-uio-icon-check\"></div>" +
            		/*"%magnifierFollows" +*/
            		"<div class=\"fl-magnifierFollows-legend\">%magnifierFollows</div>" +
            		"<div class=\"fl-crossout\"></div>"
        },
        invokers: {
            style: {
                funcName: "fluid.uiOptions.panels.magnifierFollows.style",
                args: ["{that}.dom.magnifierFollowsLabel", "{that}.options.strings.magnifierFollows",
                    "{that}.options.markup.label", "{that}.options.controlValues.magnifierFollows",
                    "{that}.options.classnameMap.magnifierFollows"]
            }
        }
    });

	fluid.uiOptions.panels.magnifierFollows.lookupMsg = function (messageResolver, prefix, values) {
        var messages = [];
        fluid.each(values, function (value, key) {
            var looked = messageResolver.lookup([prefix + "." + value]);
            messages.push(looked ? looked.template : looked);
        });
        return messages;
    };

    fluid.uiOptions.panels.magnifierFollows.style = function (labels, strings, markup, magnifierFollows, style) {
        fluid.each(labels, function (label, index) {
            label = $(label);
            label.html(fluid.stringTemplate(markup, {
            	magnifierFollows: strings[index]
            }));
            label.addClass(style[magnifierFollows[index]]);
        });
    };
    
    
    
	function plusMinusAdjusterFinalInit(that) {
		that.applier.modelChanged.addListener("value", function(newValue)
		{
			if(newValue.value == that.options.range.min)
			{
				that.options.minRangeReached = true;
			}
			else
			{
				that.options.minRangeReached = false;			
			}
		});
		
		that.events.minRangeReached.addListener(function () {
			that.locate("minus").css("color", "lightGray");
		});
		
		that.events.afterRender.addListener(function () {
			// append metric unit if there is one
			if(that.options.metricUnit)
			{
				that.locate("valueText").val(that.model.value + that.options.metricUnit);
			}

			// if we've reached min range
			if(that.options.minRangeReached)
			{	// fire event
				that.events.minRangeReached.fire();
			}

			that.locate("minus").click(
					function()
					{
						var newValue =  parseFloat(that.model.value) - parseFloat(that.options.range.divisibleBy);
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
						var newValue =  parseFloat(that.model.value) + parseFloat(that.options.range.divisibleBy);
						//that.locate("valueText").val(newValue);
						that.applier.requestChange("value", newValue);
						that.refreshView();
					}
			);

			// need to catch this also because afterRender is not triggered when user edits the
        	// text field manually, so " pt" is not appended to value.
			that.locate("valueText").change(
					function()
					{
						var newValue = parseFloat(that.locate("valueText").val()); 
						// if we are below range
						if(newValue < parseFloat(that.options.range.min))
						{	// set it to min
							newValue = parseFloat(that.options.range.min);
						}
						
			        	//that.locate("valueText").val(that.locate("valueText").val() + " " + that.options.metricUnit);
						that.applier.requestChange("value", newValue);
						that.refreshView();
						
					}
			);
			
			// prevent non numeric values
			that.locate("valueText").keydown(function(event) {
                // Allow only backspace and delete
                if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 35 || event.keyCode == 36) {
                    // let it happen, don't do anything
                }
                else {
                    // Ensure that it is a number and stop the keypress
                    if ((event.keyCode < 48 || event.keyCode > 57 ) && (event.keyCode < 96 || event.keyCode > 105 )) {
                        event.preventDefault();
                    }
                }
            });
		});
	};
    
})(jQuery, fluid);
