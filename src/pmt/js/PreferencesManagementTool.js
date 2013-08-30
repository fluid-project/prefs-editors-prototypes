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
	        "default": 12,
	        "minimum": 1,
	        "maximum": 1000,
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
	        "default": 100,
	        "minimum": 100,
	        "maximum": 1000,
	        "divisibleBy": 50
	    },
	    "fluid.uiOptions.magnifierPosition": {
            "type": "string",
            "default": "",
	        "enum": ["lens", "dockedleft", "dockedtop", "fullscreen", "dockedright", "dockedbottom"]
        },
	    "fluid.uiOptions.magnifierFollows": {
            "type": "string",
            "default": "",
	        "enum": ["mousecursor", "textcursor", "keyboardfocus"]
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
	                "template": "%prefix/UIOptionsTemplate-plusMinusNumerical.html",
	                "message": "%prefix/textSize.json"
	            }
	        },
	        "cursorSize": {
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
	                "template": "%prefix/UIOptionsTemplate-plusMinusNumerical.html",
	                "message": "%prefix/magnifier.json"
	            }
	        },
	        "magnifierPosition": {
                "type": "fluid.uiOptions.magnifierPosition",
                "classes": {
                    "lens": "fl-magnifierPosition-uio-lens fl-magnifierPosition-uio-icon-label",
                    "fullscreen": "fl-magnifierPosition-uio-fullscreen fl-magnifierPosition-uio-icon-label",
                    "dockedtop": "fl-magnifierPosition-uio-top fl-magnifierPosition-uio-icon-label",
                    "dockedbottom": "fl-magnifierPosition-uio-bottom fl-magnifierPosition-uio-icon-label",
                    "dockedleft": "fl-magnifierPosition-uio-left fl-magnifierPosition-uio-icon-label",
                    "dockedright": "fl-magnifierPosition-uio-right fl-magnifierPosition-uio-icon-label"

                },
                "panel": {
                    "type": "fluid.uiOptions.panels.magnifierPosition",
                    "container": ".flc-uiOptions-magnifierPosition",  // the css selector in the template where the panel is rendered
                    "classnameMap": {"magnifierPosition": "@magnifierPosition.classes"},
                    "template": "%prefix/UIOptionsTemplate-magnifierPosition.html",
                    "message": "%prefix/magnifier.json"
                }
            },
	        "magnifierFollows": {
                "type": "fluid.uiOptions.magnifierFollows",
                "classes": {
                    "default": "fl-theme-uio-default",
                    "bw": "fl-theme-uio-bw fl-theme-bw",
                    "wb": "fl-theme-uio-wb fl-theme-wb",
                    "by": "fl-theme-uio-by fl-theme-by",
                    "yb": "fl-theme-uio-yb fl-theme-yb",
                    "lgdg": "fl-theme-uio-lgdg fl-theme-lgdg"

                },
                "panel": {
                    "type": "fluid.uiOptions.panels.magnifierFollows",
                    "container": ".flc-uiOptions-magnifierFollows",  // the css selector in the template where the panel is rendered
                    "classnameMap": {"magnifierFollows": "@magnifierFollows.classes"},
                    "template": "%prefix/UIOptionsTemplate-magnifierFollows.html",
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
