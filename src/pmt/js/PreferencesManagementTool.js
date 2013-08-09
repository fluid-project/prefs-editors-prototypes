(function ($, fluid) {
	fluid.registerNamespace("fluid.uiOptions.pmt");

	fluid.uiOptions.pmt.primarySchema = {
	    /*"fluid.uiOptions.lineSpace": {
	        "type": "number",
	        "default": 1,
	        "minimum": 1,
	        "maximum": 5,
	        "divisibleBy": 0.5
	    },*/
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
	    },
	    "fluid.uiOptions.magnifierPosition": {
	        "type": "string",
	        "default": "",
	        "enum": ["default", "lens", "fullscreen", "dockedtop", "dockedbottom", "dockedleft", "dockedright"]
	    }/*,
	    "fluid.uiOptions.textFont": {
	        "type": "string",
	        "default": "",
	        "enum": ["default", "times", "comic", "arial", "verdana"]
	    }*/
	};
	
	
    
	fluid.uiOptions.pmt.auxiliarySchema = {
	        // The global values:
	        "namespace": "fluid.uiOptions.constructed",
	        "templatePrefix": "../../src/shared/lib/infusion/components/uiOptions/html/", // The common path to settings panel templates
	        "template": "../../src/pmt/html/PMTUIOptions.html",
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
	        "magnifierPosition": {
	            "type": "fluid.uiOptions.magnifierPosition",
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
	                "type": "fluid.uiOptions.panels.magnifierPosition",
	                "container": ".flc-uiOptions-magnifier-position",  // the css selector in the template where the panel is rendered
	                "template": "%prefix/UIOptionsTemplate-magnifierPosition.html",
	                "message": "%prefix/magnifier.json"
	            }
	        },
	        /*"lineSpace": {
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
	        },
	        "textFont": {
                "type": "fluid.uiOptions.textFont",
                "classes": {
                    "default": "",
                    "times": "fl-font-uio-times",
                    "comic": "fl-font-uio-comic-sans",
                    "arial": "fl-font-uio-arial",
                    "verdana": "fl-font-uio-verdana"
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
            }*/
	    };
})(jQuery, fluid);
