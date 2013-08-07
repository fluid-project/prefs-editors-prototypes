(function ($, fluid) {
	fluid.registerNamespace("fluid.uiOptions.pmt");

	fluid.uiOptions.pmt.primarySchema = {
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
	    }/*,
	    "fluid.uiOptions.cursorSize": {
	        "type": "number",
	        "default": 1,
	        "minimum": 1,
	        "maximum": 2,
	        "divisibleBy": 0.1
	    },
	    "fluid.uiOptions.magnifier": {
	        "type": "number",
	        "default": 1,
	        "minimum": 1,
	        "maximum": 2,
	        "divisibleBy": 0.1
	    }*/
	};
	
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
	        /*"cursorSize": {
	            "type": "fluid.uiOptions.cursorSize",
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
	                "type": "fluid.uiOptions.panels.cursorSize",
	                "container": ".flc-uiOptions-cursor-size",  // the css selector in the template where the panel is rendered
	                "template": "%prefix/UIOptionsTemplate-cursorSize.html",
	                "message": "%prefix/cursorSize.json"
	            }
	        },
	        "magnifier": {
	            "type": "fluid.uiOptions.magnifier",
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
	                "type": "fluid.uiOptions.panels.magnifier",
	                "container": ".flc-uiOptions-magnifier",  // the css selector in the template where the panel is rendered
	                "template": "%prefix/UIOptionsTemplate-magnifier.html",
	                "message": "%prefix/magnifier.json"
	            }
	        },*/
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
