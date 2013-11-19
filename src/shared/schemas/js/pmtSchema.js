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
    fluid.registerNamespace("gpii.pmt");

    gpii.pmt.auxiliarySchema = {
        // The global values:
        "namespace": "gpii.constructedPMT",
        "templatePrefix": "../../src/shared/adjusters/html/", // The common path to settings panel templates
        "template": "../../src/pmt/html/PMT.html",
        "messagePrefix": "../../src/shared/adjusters/messages/en/",
        "message": "%prefix/pmt.json",

        // The preference-specific information:
        "contrast": {
            "type": "gpii.primarySchema.highContrast",
            "enactor": {
                "type": "gpii.enactor.contrast"
            },
            "panel": {
                "type": "gpii.adjuster.contrast",
                "container": ".gpiic-prefsEditor-contrastPanel",
                "template": "%prefix/contrastNewTemplate.html",
                "message": "%prefix/contrast.json"
            }
        },
        "textSize": {
            "type": "gpii.primarySchema.fontSize",
            "enactor": {
                "type": "gpii.enactor.textSize"
            },
            "panel": {
                "type": "gpii.adjuster.textSize",
                "container": ".gpiic-prefsEditor-textSize",
                "template": "%prefix/textSizeTemplate.html",
                "message": "%prefix/textSize.json"
            }
        },
        "cursorSize": {
            "type": "gpii.primarySchema.cursorSize",
            "enactor": {
                "type": "gpii.enactor.cursorSize"
            },
            "panel": {
                "type": "gpii.adjuster.cursorSize",
                "container": ".gpiic-prefsEditor-cursorSize",
                "template": "%prefix/cursorSizeTemplate.html",
                "message": "%prefix/cursorSize.json"
            }
        },
        "magnifier": {
            "type": "gpii.primarySchema.magnification",
            "enactor": {
                "type": "gpii.enactor.magnifier"
            },
            "panel": {
                "type": "gpii.adjuster.magnifier",
                "container": ".gpiic-prefsEditor-magnifier",
                "template": "%prefix/magnifierTemplate.html",
                "message": "%prefix/magnifier.json"
            }
        },
        "magnifierPosition": {
            "type": "gpii.primarySchema.magnificationPosition",
            "panel": {
                "type": "gpii.adjuster.magnifierPosition",
                "container": ".gpiic-prefsEditor-magnifierPosition",
                "template": "%prefix/magnifierPositionTemplate.html",
                "message": "%prefix/magnifierPosition.json"
            }
        },
        "magnifierFollows": {
            "type": "gpii.primarySchema.tracking",
            "panel": {
                "type": "gpii.adjuster.magnifierFollows",
                "container": ".gpiic-prefsEditor-magnifierFollows",
                "template": "%prefix/magnifierFollowsTemplate.html",
                "message": "%prefix/magnifierFollows.json",
                "classnameMap": {"magnifierFollows": "@magnifierFollows.classes"}
            }
        },
        "groups": {
            "increaseSize": {
                "type": "gpii.panel.increaseSize",
                "container": ".gpiic-prefsEditor-increaseSizePanel",
                "template": "%prefix/increaseSizeTemplate.html",
                "message": "%prefix/increaseSize.json",
                "panels": ["textSize", "cursorSize", "magnifier", "magnifierPosition", "magnifierFollows"]
            }
        }
    };
})(jQuery, fluid);
