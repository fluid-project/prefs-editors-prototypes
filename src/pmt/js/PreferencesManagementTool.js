(function ($, fluid) {
	fluid.registerNamespace("fluid.uiOptions.pmt");

	fluid.uiOptions.pmt.primarySchema = {
	    "fluid.uiOptions.lineSpace": {
	        "type": "number",
	        "default": 1,
	        "minimum": 1,
	        "maximum": 5,
	        "divisibleBy": 0.5
	    },
	    "fluid.uiOptions.textSize": {
	        "type": "number",
	        "default": 1,
	        "minimum": 1,
	        "maximum": 10,
	        "divisibleBy": 1
	    },
	    "fluid.uiOptions.cursorSize": {
	        "type": "number",
	        "default": 1,
	        "minimum": 1,
	        "maximum": 5,
	        "divisibleBy": 0.5
	    },
	    "fluid.uiOptions.magnifier": {
	        "type": "number",
	        "default": 1,
	        "minimum": 1,
	        "maximum": 10,
	        "divisibleBy": 1
	    }
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
				"range.max": "maximum"
			}
		},
		range: {
			min: 1,
			max: 10
		},
		selectors: {
			textSize: ".flc-uiOptions-magnifier",
			label: ".flc-uiOptions-magnifier-label",
			magnifierOFF: ".fl-icon-magnifierOFF",
			magnifierMAX: ".fl-icon-magnifierMAX",
			multiplier: ".flc-uiOptions-multiplier"
		},
		protoTree: {
			label: {messagekey: "magnifierLabel"},
			magnifierOFF: {messagekey: "magnifierOFF"},
			magnifierMAX: {messagekey: "magnifierMAX"},
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
			step: 1,
			range: "min"
		}
	});
		
	fluid.uiOptions.pmt.auxiliarySchema = {
	        // The global values:
	        "namespace": "fluid.uiOptions.constructed",
	        "templatePrefix": "../../src/pmt/html/", // The common path to settings panel templates
	        "template": "%prefix/FullPreviewUIOptions.html",
	        "messagePrefix": "../../src/shared/lib/infusion/components/uiOptions/messages/",
	        "message": "%prefix/uiOptions.json",

	        // The preference-specific information:
	        "textSize": {
	            "type": "fluid.uiOptions.textSize",
	            "enactor": {
	                "type": "fluid.uiOptions.enactors.textSize",
	                "fontSizeMap": {
	                    "xx-small": "9px",
	                    "x-small": "11px",
	                    "small": "13px",
	                    "medium": "15px",
	                    "large": "18px",
	                    "x-large": "23px",
	                    "xx-large": "30px"
	                }
	            },
	            "panel": {
	                "type": "fluid.uiOptions.panels.textSize",
	                "container": ".flc-uiOptions-text-size",  // the css selector in the template where the panel is rendered
	                "template": "%prefix/UIOptionsTemplate-textSize.html",
	                "message": "%prefix/textSize.json"
	            }
	        },
	        "cursorSize": {
	            "type": "fluid.uiOptions.cursorSize",
	            /*"enactor": {
	                "type": "fluid.uiOptions.enactors.textSize",
	                "fontSizeMap": {
	                    "xx-small": "9px",
	                    "x-small": "11px",
	                    "small": "13px",
	                    "medium": "15px",
	                    "large": "18px",
	                    "x-large": "23px",
	                    "xx-large": "30px"
	                }
	            },*/
	            "panel": {
	                "type": "fluid.uiOptions.panels.cursorSize",
	                "container": ".flc-uiOptions-cursor-size",  // the css selector in the template where the panel is rendered
	                "template": "%prefix/UIOptionsTemplate-cursorSize.html",
	                "message": "%prefix/cursorSize.json"
	            }
	        },
	        "magnifier": {
	            "type": "fluid.uiOptions.magnifier",
	            /*"enactor": {
	                "type": "fluid.uiOptions.enactors.textSize",
	                "fontSizeMap": {
	                    "xx-small": "9px",
	                    "x-small": "11px",
	                    "small": "13px",
	                    "medium": "15px",
	                    "large": "18px",
	                    "x-large": "23px",
	                    "xx-large": "30px"
	                }
	            },*/
	            "panel": {
	                "type": "fluid.uiOptions.panels.magnifier",
	                "container": ".flc-uiOptions-magnifier",  // the css selector in the template where the panel is rendered
	                "template": "%prefix/UIOptionsTemplate-magnifier.html",
	                "message": "%prefix/magnifier.json"
	            }
	        },
	        "lineSpace": {
	            "type": "fluid.uiOptions.lineSpace",
	            "enactor": {
	                "type": "fluid.uiOptions.enactors.lineSpace",
	                "fontSizeMap": {
	                    "xx-small": "9px",
	                    "x-small": "11px",
	                    "small": "13px",
	                    "medium": "15px",
	                    "large": "18px",
	                    "x-large": "23px",
	                    "xx-large": "30px"
	                }
	            },
	            "panel": {
	                "type": "fluid.uiOptions.panels.lineSpace",
	                "container": ".flc-uiOptions-line-space",  // the css selector in the template where the panel is rendered
	                "template": "%prefix/UIOptionsTemplate-lineSpace.html",
	                "message": "%prefix/lineSpace.json"
	            }
	        }
	    };
})(jQuery, fluid);
