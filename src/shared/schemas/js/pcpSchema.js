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

(function ($, fluid) {
    "use strict";

    fluid.registerNamespace("gpii.pcp");

    fluid.defaults("gpii.pcp.auxiliarySchema.common", {
        auxiliarySchema: {
            // The global values:
            "namespace": "gpii.constructedPCP",
            "templatePrefix": "../../src/shared/adjusters/html/", // The common path to settings panel templates
            "template": "../../src/pcp/html/PrefsEditorTemplate-PCP.html",
            "messagePrefix": "../../src/shared/adjusters/messages/" + gpii.prefs.i18n.getDefaultLanguage() + "/",
            "message": "../../src/shared/frames/messages/" + gpii.prefs.i18n.getDefaultLanguage() + "/frames.json"
        }
    });

    fluid.defaults("gpii.pcp.auxiliarySchema.windows", {
        auxiliarySchema: {
            // The preference-specific information:
            "groups": {
                "addContrast": {
                    "container": ".gpii-prefsEditor-contrastPanel",
                    "template": "%prefix/addContrastTemplate.html",
                    "message": "%prefix/message.json",
                    "type": "gpii.adjuster.addContrast",
                    "panels": {
                        "always": ["contrastEnabled"],
                        "gpii.primarySchema.contrastEnabled": ["contrastTheme"]
                    }
                }
            },
            "contrastEnabled": {
                "type": "gpii.primarySchema.contrastEnabled",
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
                    "black-white": "fl-theme-prefsEditor-bw gpii-prefsEditor-theme-bw fl-theme-bw",
                    "white-black": "fl-theme-prefsEditor-wb gpii-prefsEditor-theme-wb fl-theme-wb",
                    "black-yellow": "fl-theme-prefsEditor-by gpii-prefsEditor-theme-by fl-theme-by",
                    "yellow-black": "fl-theme-prefsEditor-yb gpii-prefsEditor-theme-yb fl-theme-yb"
                },
                "panel": {
                    "type": "gpii.adjuster.contrastThemeNoPreview",
                    "container": ".gpiic-contrastTheme",
                    "template": "%prefix/contrastThemeNoPreviewTemplate.html",
                    "message": "%prefix/contrast.json",
                    "classnameMap": {"theme": "@contrastTheme.classes"}
                }
            }
        }
    });

    fluid.defaults("gpii.pcp.auxiliarySchema.linux", {
        auxiliarySchema: {
            // The preference-specific information:
            "groups": {
                "addContrast": {
                    "container": ".gpii-prefsEditor-contrastPanel",
                    "template": "%prefix/addContrastTemplate.html",
                    "message": "%prefix/message.json",
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
                    "black-white": "fl-theme-prefsEditor-bw gpii-prefsEditor-theme-bw fl-theme-bw",
                    "white-black": "fl-theme-prefsEditor-wb gpii-prefsEditor-theme-wb fl-theme-wb",
                    "black-yellow": "fl-theme-prefsEditor-by gpii-prefsEditor-theme-by fl-theme-by",
                    "yellow-black": "fl-theme-prefsEditor-yb gpii-prefsEditor-theme-yb fl-theme-yb"
                },
                "panel": {
                    "type": "gpii.adjuster.contrastThemeNoPreview",
                    "container": ".gpiic-contrastTheme",
                    "template": "%prefix/contrastThemeNoPreviewTemplate.html",
                    "message": "%prefix/contrast.json",
                    "classnameMap": {"theme": "@contrastTheme.classes"}
                }
            },
            "textSize": {
                "type": "gpii.primarySchema.fontSize",
                "panel": {
                    "type": "gpii.adjuster.textSizePCP",
                    "container": ".gpiic-prefsEditor-textSize",
                    "template": "%prefix/textSizeTemplatePCP.html",
                    "message": "%prefix/textSize.json",
                    "stepperTemplate": "../../src/shared/components/textfieldStepper/html/textfieldStepperTemplate.html"
                }
            },
            "cursorSize": {
                "type": "gpii.primarySchema.cursorSize",
                "panel": {
                    "type": "gpii.adjuster.cursorSizePCP",
                    "container": ".gpiic-prefsEditor-cursorSize",
                    "template": "%prefix/cursorSizeTemplatePCP.html",
                    "message": "%prefix/cursorSize.json",
                    "stepperTemplate": "../../src/shared/components/textfieldStepper/html/textfieldStepperTemplate.html"
                }
            },
            "magnifierEnabled": {
                "type": "gpii.primarySchema.magnifierEnabled",
                "panel": {
                    "type": "gpii.adjuster.magnifierEnabled",
                    "container": ".gpiic-prefsEditor-magnifierEnabled",
                    "template": "%prefix/onOffSwitchTemplate.html",
                    "message": "%prefix/magnifier.json"
                }
            },
            "magnifier": {
                "type": "gpii.primarySchema.magnification",
                "panel": {
                    "type": "gpii.adjuster.magnifierPCP",
                    "container": ".gpiic-prefsEditor-magnifier",
                    "template": "%prefix/magnifierTemplatePCP.html",
                    "message": "%prefix/magnifier.json",
                    "stepperTemplate": "../../src/shared/components/textfieldStepper/html/textfieldStepperTemplate.html"
                }
            }
        }
    });
})(jQuery, fluid);
