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

    gpii.uiOptions.pmt.primarySchema = {

        "http://registry.gpii.org/common/fontSize": {
            "type": "number",
            "default": 12,
            "minimum": 1,
            "maximum": 1000,
            "divisibleBy": 1
        },
        "http://registry.gpii.org/common/cursorSize": {
            "type": "number",
            "default": 1,
            "minimum": 1,
            "maximum": 5,
            "divisibleBy": 0.2
        },
        "http://registry.gpii.org/common/magnification": {
            "type": "number",
            "default": 100,
            "minimum": 100,
            "maximum": 10000,
            "divisibleBy": 50
        },
        "http://registry.gpii.org/common/magnificationPosition": {
            "type": "string",
            "default": "",
            "enum": ["lens", "dockedleft", "dockedtop", "fullscreen", "dockedright", "dockedbottom"]
        },
        "http://registry.gpii.org/common/tracking": {
            "type": "string",
            "default": "",
            "enum": ["mousecursor", "textcursor", "keyboardfocus"]
        },
        "http://registry.gpii.org/common/display.screenEnhancement.highContrast": {
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
            "type": "http://registry.gpii.org/common/display.screenEnhancement.highContrast",
            "enactor": {
                "type": "gpii.uiOptions.enactors.contrast"
            },
            "panel": {
                "type": "gpii.uiOptions.panels.contrast",
                "container": ".flc-uiOptions-contrast",
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
                "container": ".flc-uiOptions-increaseSizePanel",
                "template": "%prefix/UIOptionsTemplate-increaseSize.html",
                "message": "%prefix/increaseSize.json"
            }
        },
        "textSize": {
            "type": "http://registry.gpii.org/common/fontSize",
            "enactor": {
                "type": "gpii.uiOptions.enactors.textSize"
            },
            "panel": {
                "type": "gpii.uiOptions.panels.increaseSize"
            }
        },
        "cursorSize": {
            "type": "http://registry.gpii.org/common/cursorSize",
            "enactor": {
                "type": "gpii.uiOptions.enactors.cursorSize"
            },
            "panel": {
                "type": "gpii.uiOptions.panels.increaseSize"
            }
        },
        "magnifier": {
            "type": "http://registry.gpii.org/common/magnification",
            "enactor": {
                "type": "gpii.uiOptions.enactors.magnifier"
            },
            "panel": {
                "type": "gpii.uiOptions.panels.increaseSize"
            }
        },
        "magnifierPosition": {
            "type": "http://registry.gpii.org/common/magnificationPosition",
            "classes": {
                "lens": "fl-magnifierPosition-uio-lens fl-magnifierPosition-uio-icon-label",
                "fullscreen": "fl-magnifierPosition-uio-fullscreen fl-magnifierPosition-uio-icon-label",
                "dockedtop": "fl-adjuster-icons-additional fl-magnifierPosition-uio-top fl-magnifierPosition-uio-icon-label",
                "dockedbottom": "fl-adjuster-icons-additional fl-magnifierPosition-uio-bottom fl-magnifierPosition-uio-icon-label",
                "dockedleft": "fl-adjuster-icons-additional fl-magnifierPosition-uio-left fl-magnifierPosition-uio-icon-label",
                "dockedright": "fl-adjuster-icons-additional fl-magnifierPosition-uio-right fl-magnifierPosition-uio-icon-label"

            },
            "panel": {
                "type": "gpii.uiOptions.panels.increaseSize",
                "classnameMap": {"magnifierPosition": "@magnifierPosition.classes"}
            }
        },
        "magnifierFollows": {
            "type": "http://registry.gpii.org/common/tracking",
            "classes": {
                "mousecursor": "fl-magnifierFollows-uio-mouseCursor fl-magnifierFollows-uio-icon-label",
                "textcursor": "fl-magnifierFollows-uio-textCursor fl-magnifierFollows-uio-icon-label",
                "keyboardfocus": "fl-magnifierFollows-uio-keyboardFocus fl-magnifierFollows-uio-icon-label"
            },
            "panel": {
                "type": "gpii.uiOptions.panels.increaseSize",
                "classnameMap": {"magnifierFollows": "@magnifierFollows.classes"}
            }
        }
    };
})(jQuery, fluid);
