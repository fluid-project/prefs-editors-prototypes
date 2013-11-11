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
    fluid.registerNamespace("gpii.prefs.adjusters_pilot_2");

    gpii.prefs.adjusters_pilot_2.primarySchema = {
        "magnifier.invertColours": {
            "type": "boolean",
            "default": false
        },
        "showCrosshairs": {
            "type": "boolean",
            "default": false
        },
        "magnifier.tracking": {
            "type": "string",
            "default": "",
            "enum": ["mousecursor", "textcursor", "keyboardfocus"]
        },
        "screenReader.tracking": {
            "type": "string",
            "default": "",
            "enum": ["mousecursor", "textcursor", "keyboardfocus"]
        },
        "contrast.theme": {
            "type": "string",
            "default": "",
            "enum": ["bw", "yb", "by", "wb"]
        }
    };

    gpii.prefs.adjusters_pilot_2.auxiliarySchema = {
        "namespace": "gpii.prefs.adjusters_pilot_2.auxiliarySchema",
        "templatePrefix": "../../src/shared/adjusters/html/",
        "template": "../../src/pilot2Adjusters/html/adjustersPilots2.html",
        "messagePrefix": "../../src/shared/i18n/messages/en/", // default
        "message": "%prefix/pmt.json",
        
        "magnifier.invertColours": {
            "type": "magnifier.invertColours",
            /*"enactor": {
                "type": "gpii.uiOptions.enactors.contrast"
            },*/
            "panel": {
                "type": "gpii.prefs.panel.magnifier.invertColours",
                "container": ".gpiic-increaseSize-magnifierInvertColours",
                "template": "%prefix/iconCheckTemplate.html",
                "message": "%prefix/magnifierInvertColours.json"
            }
        },
        "showCrosshairs": {
            "type": "showCrosshairs",
            /*"enactor": {
                "type": "gpii.uiOptions.enactors.contrast"
            },*/
            "panel": {
                "type": "gpii.prefs.panel.showCrosshairs",
                "container": ".gpiic-increaseSize-showCrosshairs",
                "template": "%prefix/iconCheckTemplate.html",
                "message": "%prefix/showCrosshairs.json"
            }
        },
        "followingElement": {
            "classes": {
                "mousecursor": "gpii-followingElement-mouseCursorIcon",
                "textcursor": "gpii-followingElement-textCursorIcon",
                "keyboardfocus": "gpii-followingElement-keyboardFocusIcon"
            },
            "borderClasses": {
                "topOnly": "gpii-iconCheckAdjusterAreaTopOnlyBorder",
                "bottomOnly": "gpii-iconCheckAdjusterAreaBottomOnlyBorder",
                "noBorder": "gpii-iconCheckAdjusterAreaNoBorder"
            }
        },
        "magnifierTracking": {
            "type": "magnifier.tracking",
            "panel": {
                "type": "gpii.prefs.panel.followingElement.magnifier",
                "container": ".gpiic-increaseSize-magnifierFollows",
                "template": "%prefix/followingElementTemplate.html",
                "message": "%prefix/followingElement.json",
                "classnameMap": {
                    "followingElement": "@followingElement.classes",
                    "followingElementBorder": "@followingElement.borderClasses"
                }
            }
        },
        "screenReaderTracking": {
            "type": "screenReader.tracking",
            "panel": {
                "type": "gpii.prefs.panel.followingElement.screenReader",
                "container": ".gpiic-increaseSize-screenReaderFollows",
                "template": "%prefix/followingElementTemplate.html",
                "message": "%prefix/followingElement.json",
                "classnameMap": {
                    "followingElement": "@followingElement.classes",
                    "followingElementBorder": "@followingElement.borderClasses"
                }
            }
        },
        "contrastTheme": {
            "type": "contrast.theme",
            "classes": {
                "bw": "fl-theme-prefsEditor-bw fl-theme-bw",
                "yb": "fl-theme-prefsEditor-yb fl-theme-yb",
                "by": "fl-theme-prefsEditor-by fl-theme-by",
                "wb": "fl-theme-prefsEditor-wb fl-theme-wb"
            },
            "enactor": {
                "type": "gpii.prefs.enactor.contrast",
                "classes": "@contrastTheme.classes"
            },
            "panel": {
                "type": "gpii.prefs.panel.contrastTheme",
                "container": ".gpiic-contrast",
                "classnameMap": {"theme": "@contrastTheme.classes"},
                "template": "%prefix/contrastThemeTemplate.html"
            }
        }
    };
})(jQuery, fluid);
