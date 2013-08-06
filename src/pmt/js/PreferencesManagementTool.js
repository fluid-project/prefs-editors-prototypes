(function ($, fluid) {
	fluid.uiOptions.primarySchema = {
	    "fluid.uiOptions.lineSpace": {
	        "type": "number",
	        "default": 1,
	        "minimum": 1,
	        "maximum": 5,
	        "divisibleBy": 0.2
	    },
	    "fluid.uiOptions.textSize": {
	        "type": "number",
	        "default": 1,
	        "minimum": 1,
	        "maximum": 2,
	        "divisibleBy": 0.1
	    }
	    /* ,
	    "fluid.uiOptions.textFont": {
	        "type": "string",
	        "default": "",
	        "enum": ["", "Times New Roman", "Comic Sans", "Arial", "Verdana"]
	    },
	    "fluid.uiOptions.tableOfContents": {
	        "type": "boolean",
	        "default": false
	    } */
	};
	
	fluid.defaults("fluid.uiOptions.panels.textSize", {
	    gradeNames: ["fluid.uiOptions.panels", "autoInit"],
	    preferenceMap: {
	        "fluid.uiOptions.textSize": {
	            "model.value": "default",
	            "range.min": "minimum",
	            "range.max": "maximum"
	        }
	    },
	    range: {
	        min: 1,
	        max: 2
	    },
	    selectors: {
	        textSize: ".flc-uiOptions-text-size",
	        label: ".flc-uiOptions-text-size-label",
	        smallIcon: ".flc-uiOptions-text-size-smallIcon",
	        largeIcon: ".flc-uiOptions-text-size-largeIcon",
	        multiplier: ".flc-uiOptions-multiplier"
	    },
	    protoTree: {
	        label: {messagekey: "textSizeLabel"},
	        smallIcon: {messagekey: "textSizeSmallIcon"},
	        largeIcon: {messagekey: "textSizelargeIcon"},
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
	        step: 0.1,
	        range: "min"
	    }
	});
	
	fluid.defaults("fluid.uiOptions.panels.lineSpace", {
	    gradeNames: ["fluid.uiOptions.panels", "autoInit"],
	    preferenceMap: {
	        "fluid.uiOptions.lineSpace": {
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
	        lineSpace: ".flc-uiOptions-line-space",
	        label: ".flc-uiOptions-line-space-label",
	        narrowIcon: ".flc-uiOptions-line-space-narrowIcon",
	        wideIcon: ".flc-uiOptions-line-space-wideIcon",
	        multiplier: ".flc-uiOptions-multiplier"
	    },
	    protoTree: {
	        label: {messagekey: "lineSpaceLabel"},
	        narrowIcon: {messagekey: "lineSpaceNarrowIcon"},
	        wideIcon: {messagekey: "lineSpaceWideIcon"},
	        multiplier: {messagekey: "multiplier"},
	        lineSpace: {
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
	
	fluid.defaults("fluid.uiOptions.auxSchema.starter", {
	    gradeNames: ["fluid.uiOptions.auxSchema", "autoInit"],
	    auxiliarySchema: {
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
	        } ,
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
	        }/*
	        "textFont": {
	            "type": "fluid.uiOptions.textFont",
	            "classes": {
	                "": "",
	                "Times New Roman": "fl-font-uio-times",
	                "Comic Sans": "fl-font-uio-comic-sans",
	                "Arial": "fl-font-uio-arial",
	                "Verdana": "fl-font-uio-verdana"
	            },
	            "enactor": {
	                "type": "fluid.uiOptions.enactors.textFont",
	                "classes": "@textFont.classes"
	            },
	            "panel": {
	                "type": "fluid.uiOptions.panels.textFont",
	                "container": ".flc-uiOptions-text-font",  // the css selector in the template where the panel is rendered
	                "classnameMap": {"textFont": "@textFont.classes"},
	                "template": "%prefix/UIOptionsTemplate-textFont.html",
	                "message": "%prefix/textFont.json"
	            }
	        },
	        "tableOfContents": {
	            "type": "fluid.uiOptions.tableOfContents",
	            "enactor": {
	                "type": "fluid.uiOptions.enactors.tableOfContents",
	                "tocTemplate": "../../src/shared/lib/infusion/components/tableOfContents/html/TableOfContents.html"
	            },
	            "panel": {
	                "type": "fluid.uiOptions.panels.layoutControls",
	                "container": ".flc-uiOptions-layout-controls",  // the css selector in the template where the panel is rendered
	                "template": "%prefix/UIOptionsTemplate-layout.html",
	                "message": "%prefix/tableOfContents.json"
	            }
	        } */
	    }
	});
	
	fluid.defaults("fluid.videoPlayer.myBuilder", {
	    gradeNames: ["fluid.uiOptions.builder", "fluid.uiOptions.auxSchema.starter", "autoInit"]
	});
})(jQuery, fluid);
