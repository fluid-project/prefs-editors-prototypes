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
        }
    };

    gpii.prefs.adjusters_pilot_2.auxiliarySchema = {
        "namespace": "gpii.prefs.adjusters_pilot_2.auxiliarySchema",
        "templatePrefix": "../../src/shared/adjusters/html/",
        "template": "%prefix/adjustersPilots2.html",
        "messagePrefix": "../../src/shared/adjusters/messages/en/", // default
        "message": "%prefix/pmt.json",
        
        "magnifier.invertColours": {
            "type": "magnifier.invertColours",
            /*"enactor": {
                "type": "gpii.uiOptions.enactors.contrast"
            },*/
            "panel": {
                "type": "gpii.prefs.panel.magnifier.invertColours",
                "container": ".gpiic-increaseSize-magnifierInvertColours",
                "template": "%prefix/UIOptionsTemplate-iconCheckAdjuster.html",
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
                "template": "%prefix/UIOptionsTemplate-iconCheckAdjuster.html",
                "message": "%prefix/showCrosshairs.json"
            }
        },
        "magnifierTracking": {
            "type": "magnifier.tracking",
            "classes": {
                "mousecursor": "gpii-followingElement-mouseCursorIcon",
                "textcursor": "gpii-followingElement-textCursorIcon",
                "keyboardfocus": "gpii-followingElement-keyboardFocusIcon"
            },
            "panel": {
                "type": "gpii.prefs.panel.followingElement.magnifier",
                "container": ".gpiic-increaseSize-magnifierFollows",
                "template": "%prefix/UIOptionsTemplate-followingElement.html",
                "message": "%prefix/followingElement.json",
                "classnameMap": {"followingElement": "@magnifierTracking.classes"}
            }
        }
    };
})(jQuery, fluid);
