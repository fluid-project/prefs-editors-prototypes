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
        "groups": {
            "addContrast": {
                "container": ".gpii-prefsEditor-contrastPanel",
                "template": "%prefix/addContrastTemplate.html",
                "message": "%prefix/contrast.json",
                "type": "gpii.adjuster.addContrast",
                "panels": ["contrastTheme", "contrastEnabled"]
            },
            "increaseSize": {
                "type": "gpii.panel.increaseSize",
                "container": ".gpiic-prefsEditor-increaseSizePanel",
                "template": "%prefix/increaseSizeTemplate.html",
                "message": "%prefix/increaseSize.json",
                "panels": ["textSize", "cursorSize", "magnifierEnabled", "magnifier", "magnifierPosition", "magnifierFollows"]
            }
        },
        "contrastEnabled": {
            "type": "gpii.primarySchema.contrastEnabled",
            "enactor": {
                "type": "gpii.enactor.contrastTheme"
            },
            "panel": {
                "type": "gpii.adjuster.contrastEnabled",
                "container": ".gpiic-contrastEnabled",
                "template": "%prefix/onOffSwitchTemplate.html",
                "message": "%prefix/contrast.json"
            }
        },
        "contrastTheme": {
            "type": "gpii.primarySchema.contrast.theme",
            "enactor": {
                "type": "gpii.enactor.contrastTheme"
            },
            "panel": {
                "type": "gpii.adjuster.contrastTheme",
                "container": ".gpiic-contrastTheme",
                "template": "%prefix/contrastThemeTemplate.html"
            }
        },
        /*"increaseSize": {
            "type": "increaseSize",
            "panel": {
                "type": "gpii.adjuster.increaseSize",
                "container": ".gpii-prefsEditor-increaseSizePanel",
                "template": "%prefix/increaseSizeTemplateOld.html",
                "message": "%prefix/increaseSize.json"
            }
        },*/
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
        "magnifierEnabled": {
            "type": "gpii.primarySchema.magnifierEnabled",
            "enactor": {
                "type": "gpii.enactor.magnifier"
            },
            "panel": {
                "type": "gpii.adjuster.magnifierEnabled",
                "container": ".gpiic-prefsEditor-magnifierEnabled",
                "template": "%prefix/onOffSwitchTemplate.html",
                "message": "%prefix/magnifier.json"
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
        }
    };
})(jQuery, fluid);
