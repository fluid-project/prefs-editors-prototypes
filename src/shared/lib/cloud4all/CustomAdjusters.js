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
                    templateUrl: "uiOptionsTextPreview.html"
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
        
        invokers: {
            updateAdjusterUI: {
                funcName: "fluid.uiOptions.panels.updateAdjusterUI",
                args: ["{that}"]
            }
        },
        
        finalInitFunction: "fluid.uiOptions.panels.textSize.finalInit",
        
        outerPreviewEnhancerOptions: "{originalEnhancerOptions}.options.originalUserOptions",
        distributeOptions: [{
            source: "{that}.options.outerPreviewEnhancerOptions",
            removeSource: true,
            target: "{that preview enhancer}.options"
        }]
    });
	
	fluid.uiOptions.panels.textSize.finalInit = function(that){
		plusMinusAdjusterFinalInit(that);
	}
	
	fluid.uiOptions.enactors.textSize.set = function (sizeInPt, that) {
        that.container.css("font-size", sizeInPt + "pt");
    };
		
    fluid.demands("fluid.uiOptions.enactors.textSize", ["fluid.uiOptions.panels.magnifier"], {
        funcName: "fluid.emptySubcomponent"
    });
    
	fluid.defaults("fluid.uiOptions.panels.cursorSize", {
		gradeNames: ["fluid.uiOptions.panels", "autoInit"],
		preferenceMap: {
			"fluid.uiOptions.cursorSize": {
				"model.value": "default",
				"range.min": "minimum",
				"range.max": "maximum",
                "range.divisibleBy": "divisibleBy"
			}
		},
		range: {
			min: 1,
			max: 5,
            divisibleBy: 0.2
		},
		components: {
            preview: {
                type: "fluid.uiOptions.preview",
                createOnEvent: "afterRender",
                container: ".flc-uiOptions-cursor-size .flc-uiOptions-preview-per-setting-frame",
                options: {
                    templateUrl: "uiOptionsCursorPreview.html"
                }
            }
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
			step: 0.2,
			range: "min"
		}
	});

	fluid.defaults("fluid.uiOptions.enactors.cursorSize", {
        gradeNames: ["fluid.viewComponent", "fluid.uiOptions.enactors", "autoInit"],
        preferenceMap: {
            "fluid.uiOptions.cursorSize": {
                "model.value": "default"
            }
        },
        invokers: {
            set: {
                funcName: "fluid.uiOptions.enactors.cursorSize.set",
                args: ["{arguments}.0", "{that}"]
            }
        },
        listeners: {
            onCreate: {
                listener: "{that}.set",
                args: "{that}.model.value"
            }
        }
    });

    fluid.uiOptions.enactors.cursorSize.set = function (times, that) {
		$(".flc-uiOptions-cursor-size .flc-uiOptions-preview-per-setting-frame").contents().find("html").css("font-size", times + "em");
    };
    
    fluid.uiOptions.enactors.cursorSize.finalInit = function (that) {
        that.applier.modelChanged.addListener("value", function (newModel) {
            that.set(newModel.value);
        });
    };
    
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
                    templateUrl: "uiOptionsTextPreview.html"
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
            updateAdjusterUI: {
                funcName: "fluid.uiOptions.panels.updateAdjusterUI",
                args: ["{that}"]
            }
        },
        
        outerPreviewEnhancerOptions: "{originalEnhancerOptions}.options.originalUserOptions",
        distributeOptions: [{
            source: "{that}.options.outerPreviewEnhancerOptions",
            removeSource: true,
            target: "{that preview enhancer}.options"
        }]
	});
	
	fluid.defaults("fluid.uiOptions.enactors.magnifier", {
        gradeNames: ["fluid.viewComponent", "fluid.uiOptions.enactors", "autoInit"],
        preferenceMap: {
            "fluid.uiOptions.magnifier": {
                "model.value": "default"
            }
        },
        invokers: {
            set: {
                funcName: "fluid.uiOptions.enactors.magnifier.set",
                args: ["{arguments}.0", "{that}"]
            }
        },
        listeners: {
            onCreate: {
                listener: "{that}.set",
                args: "{that}.model.value"
            }
        }
    });

    fluid.uiOptions.enactors.magnifier.set = function (times, that) {
		//$(".flc-uiOptions-magnifier .flc-uiOptions-preview-per-setting-frame").contents().find("html").css("transform", "scale(" + times/100 + ")");
        that.container.css("transform", "scale(" + times/100 + ")");
    };
    
    fluid.uiOptions.enactors.magnifier.finalInit = function (that) {
        that.applier.modelChanged.addListener("value", function (newModel) {
            that.set(newModel.value);
        });
    };
    
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
    
	fluid.uiOptions.panels.updateAdjusterUI = function (that) {
		// append metric unit if there is one
		if(that.options.metricUnit)
		{
			that.locate("valueText").val(that.model.value + that.options.metricUnit);
		}

		// if we've reached min range
		if(that.model.value == that.options.range.min)
		{	// set style
			that.locate("minus").css("color", "lightGray");
			that.events.minRangeReached.fire();
		}
		else
		{	// recover style
			that.locate("minus").css("color", "black");
		}
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
		
		that.events.afterRender.addListener(function () {
			that.updateAdjusterUI();

			that.locate("minus").click(
					function()
					{
						var newValue =  parseFloat(that.model.value) - parseFloat(that.options.range.divisibleBy);
						if(newValue >= parseFloat(that.options.range.min))
						{
							//that.locate("valueText").val(newValue);
							that.applier.requestChange("value", newValue);
							that.updateAdjusterUI();
						}
					}
			);
			
			that.locate("plus").click(
					function()
					{
						var newValue =  parseFloat(that.model.value) + parseFloat(that.options.range.divisibleBy);
						that.applier.requestChange("value", newValue);
						that.updateAdjusterUI();
						//that.locate("valueText").val(newValue);
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
						that.updateAdjusterUI();
						
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
