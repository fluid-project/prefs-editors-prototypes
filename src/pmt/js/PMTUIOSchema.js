/*!
Cloud4all Preferences Management Tools

Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global fluid, jQuery, gpii*/
/*jslint white: true, onevar: true, funcinvoke: true, forvar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

(function ($, fluid) {
    fluid.registerNamespace("gpii.uiOptions.pmt");

    gpii.primarySchema = {

        "gpii.primarySchema.fontSize": {
            "type": "number",
            "default": 12,
            "minimum": 1,
            "maximum": 1000,
            "divisibleBy": 1
        },
        "gpii.primarySchema.cursorSize": {
            "type": "number",
            "default": 1,
            "minimum": 1,
            "maximum": 5,
            "divisibleBy": 0.2
        },
        "gpii.primarySchema.magnification": {
            "type": "number",
            "default": 100,
            "minimum": 100,
            "maximum": 10000,
            "divisibleBy": 50
        },
        "gpii.primarySchema.magnificationPosition": {
            "type": "string",
            "default": "",
            "enum": ["lens", "dockedleft", "dockedtop", "fullscreen", "dockedright", "dockedbottom"]
        },
        "gpii.primarySchema.tracking": {
            "type": "string",
            "default": "",
            "enum": ["mousecursor", "textcursor", "keyboardfocus"]
        },
        "gpii.primarySchema.highContrast": {
            "type": "boolean",
            "default": false
        }
    };

    gpii.uiOptions.pmt.auxiliarySchema = {
        // The global values:
        "namespace": "gpii.uiOptions.constructed",
        "templatePrefix": "../../src/shared/adjusters/html/", // The common path to settings panel templates
        "template": "../../src/pmt/html/PMTUIOptions.html",
        "messagePrefix": "../../src/shared/adjusters/messages/en/",
        "message": "%prefix/pmt.json",

        // The preference-specific information:
        "contrast": {
            "type": "gpii.primarySchema.highContrast",
            "enactor": {
                "type": "gpii.uiOptions.enactors.contrast"
            },
            "panel": {
                "type": "gpii.uiOptions.panels.contrast",
                "container": ".gpii-prefsEditor-contrast",
                "template": "%prefix/UIOptionsTemplate-contrastNew.html",
                "message": "%prefix/contrastNew.json"
            }
        },
        "increaseSize": {
            "type": "increaseSize",
            /*"enactor": {
                "type": "gpii.uiOptions.enactors.contrast"
            },*/
            "panel": {
                "type": "gpii.uiOptions.panels.increaseSize",
                "container": ".gpii-prefsEditor-increaseSizePanel",
                "template": "%prefix/UIOptionsTemplate-increaseSize.html",
                "message": "%prefix/increaseSize.json"
            }
        },
        "textSize": {
            "type": "gpii.primarySchema.fontSize",
            "enactor": {
                "type": "gpii.uiOptions.enactors.textSize"
            },
            "panel": {
                "type": "gpii.uiOptions.panels.increaseSize"
            }
        },
        "cursorSize": {
            "type": "gpii.primarySchema.cursorSize",
            "enactor": {
                "type": "gpii.uiOptions.enactors.cursorSize"
            },
            "panel": {
                "type": "gpii.uiOptions.panels.increaseSize"
            }
        },
        "magnifier": {
            "type": "gpii.primarySchema.magnification",
            "enactor": {
                "type": "gpii.uiOptions.enactors.magnifier"
            },
            "panel": {
                "type": "gpii.uiOptions.panels.increaseSize"
            }
        },
        "magnifierPosition": {
            "type": "gpii.primarySchema.magnificationPosition",
            "classes": {
                "lens": "xrhstos1-magnifierPositionLens xrhstos1-magnifierPositionIconLabel",
                "fullscreen": "xrhstos1-magnifierPositionFullscreen xrhstos1-magnifierPositionIconLabel",
                "dockedtop": "gpii-prefsEditor-adjusterIconsAdditional xrhstos1-magnifierPositionTop xrhstos1-magnifierPositionIconLabel",
                "dockedbottom": "gpii-prefsEditor-adjusterIconsAdditional xrhstos1-magnifierPositionBottom xrhstos1-magnifierPositionIconLabel",
                "dockedleft": "gpii-prefsEditor-adjusterIconsAdditional xrhstos1-magnifierPositionLeft xrhstos1-magnifierPositionIconLabel",
                "dockedright": "gpii-prefsEditor-adjusterIconsAdditional xrhstos1-magnifierPositionRight xrhstos1-magnifierPositionIconLabel"

            },
            "panel": {
                "type": "gpii.uiOptions.panels.increaseSize",
                "classnameMap": {"magnifierPosition": "@magnifierPosition.classes"}
            }
        },
        "magnifierFollows": {
            "type": "gpii.primarySchema.tracking",
            "classes": {
                "mousecursor": "xrhstos1-magnifierFollowsMouseCursor xrhstos1-magnifierFollowsIconLabel",
                "textcursor": "xrhstos1-magnifierFollowsTextCursor xrhstos1-magnifierFollowsIconLabel",
                "keyboardfocus": "xrhstos1-magnifierFollowsKeyboardFocus xrhstos1-magnifierFollowsIconLabel"
            },
            "panel": {
                "type": "gpii.uiOptions.panels.increaseSize",
                "classnameMap": {"magnifierFollows": "@magnifierFollows.classes"}
            }
        }
    };
})(jQuery, fluid);
