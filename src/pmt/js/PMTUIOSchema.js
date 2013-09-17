(function ($, fluid) {
	fluid.registerNamespace("fluid.uiOptions.pmt");

	fluid.uiOptions.pmt.primarySchema = {
	    
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
	        "divisibleBy": 0.2
	    },
	    "fluid.uiOptions.magnifier": {
	        "type": "number",
	        "default": 100,
	        "minimum": 100,
	        "maximum": 10000,
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
        },
	    "fluid.uiOptions.contrast": {
            "type": "boolean",
            "default": false
        }
	};
    
	fluid.uiOptions.pmt.auxiliarySchema = {
	        // The global values:
	        "namespace": "fluid.uiOptions.constructed",
	        "templatePrefix": "../../src/shared/adjusters/html/", // The common path to settings panel templates
	        "template": "../../src/pmt/html/PMTUIOptions.html",
	        "messagePrefix": "../../src/shared/adjusters/messages/",

	        // The preference-specific information:
	        "textSize": {
	            "type": "fluid.uiOptions.textSize",
	            "enactor": {
	                "type": "fluid.uiOptions.enactors.textSize"
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
	                "type": "fluid.uiOptions.enactors.cursorSize"
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
	                "type": "fluid.uiOptions.enactors.magnifier"
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
                    "dockedtop": "fl-adjuster-icons-additional fl-magnifierPosition-uio-top fl-magnifierPosition-uio-icon-label",
                    "dockedbottom": "fl-adjuster-icons-additional fl-magnifierPosition-uio-bottom fl-magnifierPosition-uio-icon-label",
                    "dockedleft": "fl-adjuster-icons-additional fl-magnifierPosition-uio-left fl-magnifierPosition-uio-icon-label",
                    "dockedright": "fl-adjuster-icons-additional fl-magnifierPosition-uio-right fl-magnifierPosition-uio-icon-label"

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
                    "mousecursor": "fl-magnifierFollows-uio-mouseCursor fl-magnifierFollows-uio-icon-label",
                    "textcursor": "fl-magnifierFollows-uio-textCursor fl-magnifierFollows-uio-icon-label",
                    "keyboardfocus": "fl-magnifierFollows-uio-keyboardFocus fl-magnifierFollows-uio-icon-label",
                },
                "panel": {
                    "type": "fluid.uiOptions.panels.magnifierFollows",
                    "container": ".flc-uiOptions-magnifierFollows",  // the css selector in the template where the panel is rendered
                    "classnameMap": {"magnifierFollows": "@magnifierFollows.classes"},
                    "template": "%prefix/UIOptionsTemplate-magnifierFollows.html",
                    "message": "%prefix/magnifier.json"
                }
            },
	        "contrast": {
                "type": "fluid.uiOptions.contrast",
	            "enactor": {
	                "type": "fluid.uiOptions.enactors.contrast"
	            },
                "panel": {
                    "type": "fluid.uiOptions.panels.contrast",
                    "container": ".flc-uiOptions-contrast",
                    "template": "%prefix/UIOptionsTemplate-contrastNew.html",
	                "message": "%prefix/contrastNew.json"
                }
            }
	    };
})(jQuery, fluid);
