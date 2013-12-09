/*
 * Helper file for Alex's convenience. Will be deleted once our work is merged.
 */

/*!
Cloud4all Preferences Management Tools

Copyright 2013 OCAD University
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
                "panels": {
                    "always": ["contrastEnabled"],
                    "gpii.primarySchema.contrastEnabled": ["contrastTheme"]
                }
            },
            "increaseSize": {
                "type": "gpii.panel.increaseSizePCP",
                "container": ".gpiic-prefsEditor-increaseSizePanel",
                "template": "%prefix/increaseSizeTemplatePCP.html",
                "message": "%prefix/increaseSize.json",
                "panels": {
                    "always": ["textSize", "cursorSize", "magnifierEnabled"],
                    "gpii.primarySchema.magnifierEnabled": ["magnifier"]
                }
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
            "classes": {
                "bw": "fl-theme-prefsEditor-bw gpii-prefsEditor-theme-bw fl-theme-bw",
                "yb": "fl-theme-prefsEditor-yb gpii-prefsEditor-theme-yb fl-theme-yb",
                "by": "fl-theme-prefsEditor-by gpii-prefsEditor-theme-by fl-theme-by",
                "wb": "fl-theme-prefsEditor-wb gpii-prefsEditor-theme-wb fl-theme-wb"
            },
            "enactor": {
                "type": "gpii.enactor.contrastTheme"
            },
            "panel": {
                "type": "gpii.adjuster.contrastThemePCP",
                "container": ".gpiic-contrastTheme",
                "template": "%prefix/contrastThemeTemplatePCP.html",
                "message": "%prefix/contrast.json",
                "classnameMap": {"contrastTheme": "@contrastTheme.classes"}
            }
        },
        "textSize": {
            "type": "gpii.primarySchema.fontSize",
            "enactor": {
                "type": "gpii.enactor.textSize"
            },
            "panel": {
                "type": "gpii.adjuster.textSizePCP",
                "container": ".gpiic-prefsEditor-textSize",
                "template": "%prefix/textSizeTemplatePCP.html",
                "message": "%prefix/textSize.json"
            }
        },
        "cursorSize": {
            "type": "gpii.primarySchema.cursorSize",
            "enactor": {
                "type": "gpii.enactor.cursorSize"
            },
            "panel": {
                "type": "gpii.adjuster.cursorSizePCP",
                "container": ".gpiic-prefsEditor-cursorSize",
                "template": "%prefix/cursorSizeTemplatePCP.html",
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
                "type": "gpii.adjuster.magnifierPCP",
                "container": ".gpiic-prefsEditor-magnifier",
                "template": "%prefix/magnifierTemplatePCP.html",
                "message": "%prefix/magnifier.json"
            }
        }
    };
})(jQuery, fluid);
