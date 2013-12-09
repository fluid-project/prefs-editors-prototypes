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
                "type": "gpii.panel.increaseSizePMT",
                "container": ".gpiic-prefsEditor-increaseSizePanel",
                "template": "%prefix/increaseSizeTemplatePMT.html",
                "message": "%prefix/increaseSize.json",
                "panels": {
                    "always": ["textSize", "cursorSize", "magnifierEnabled"],
                    "gpii.primarySchema.magnifierEnabled": ["magnifier", "magnifierInvertColours", "magnifierPosition", "magnifierFollows", "showCrosshairs"]
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
                "type": "gpii.adjuster.contrastThemePMT",
                "container": ".gpiic-contrastTheme",
                "template": "%prefix/contrastThemeTemplatePMT.html",
                "message": "%prefix/contrast.json",
                "gradeNames": ["gpii.adjuster.contrastThemePMT.preview"],
                "previewURL": "../../src/shared/preview/html/contrastPreview.html",
                "classnameMap": {"contrastTheme": "@contrastTheme.classes"}
            }
        },
        "textSize": {
            "type": "gpii.primarySchema.fontSize",
            "enactor": {
                "type": "gpii.enactor.textSize"
            },
            "panel": {
                "type": "gpii.adjuster.textSizePMT",
                "container": ".gpiic-prefsEditor-textSize",
                "template": "%prefix/textSizeTemplatePMT.html",
                "message": "%prefix/textSize.json",
                "gradeNames": ["gpii.adjuster.textSizePMT.preview"],
                "previewURL": "../../src/shared/preview/html/textPreview.html"
            }
        },
        "cursorSize": {
            "type": "gpii.primarySchema.cursorSize",
            "enactor": {
                "type": "gpii.enactor.cursorSize"
            },
            "panel": {
                "type": "gpii.adjuster.cursorSizePMT",
                "container": ".gpiic-prefsEditor-cursorSize",
                "template": "%prefix/cursorSizeTemplatePMT.html",
                "message": "%prefix/cursorSize.json",
                "gradeNames": ["gpii.adjuster.cursorSizePMT.preview"],
                "previewURL": "../../src/shared/preview/html/cursorPreview.html"
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
                "type": "gpii.adjuster.magnifierPMT",
                "container": ".gpiic-prefsEditor-magnifier",
                "template": "%prefix/magnifierTemplatePMT.html",
                "message": "%prefix/magnifier.json",
                "gradeNames": ["gpii.adjuster.magnifierPMT.preview", "gpii.adjuster.textSizePMT.preview"],
                "previewURL": "../../src/shared/preview/html/textPreview.html"
            }
        },
        "magnifierInvertColours": {
            "type": "gpii.primarySchema.magnifier.invertColours",
            /*"enactor": {
                "type": "gpii.uiOptions.enactors.contrast"
            },*/
            "panel": {
                "type": "gpii.adjuster.magnifierInvertColours",
                "container": ".gpiic-prefsEditor-magnifierInvertColours",
                "template": "%prefix/iconCheckTemplateInvertColours.html",
                "message": "%prefix/magnifierInvertColours.json"
            }
        },
        "magnifierPosition": {
            "type": "gpii.primarySchema.magnificationPosition",
            "classes": {
                "lens": "gpii-increaseSize-magnifierPositionLens gpii-increaseSize-magnifierPositionIconLabel",
                "fullscreen": "gpii-increaseSize-magnifierPositionFullscreen gpii-increaseSize-magnifierPositionIconLabel",
                "dockedtop": "gpii-prefsEditor-adjusterIconsAdditional gpii-increaseSize-magnifierPositionTop gpii-increaseSize-magnifierPositionIconLabel",
                "dockedbottom": "gpii-prefsEditor-adjusterIconsAdditional gpii-increaseSize-magnifierPositionBottom gpii-increaseSize-magnifierPositionIconLabel",
                "dockedleft": "gpii-prefsEditor-adjusterIconsAdditional gpii-increaseSize-magnifierPositionLeft gpii-increaseSize-magnifierPositionIconLabel",
                "dockedright": "gpii-prefsEditor-adjusterIconsAdditional gpii-increaseSize-magnifierPositionRight gpii-increaseSize-magnifierPositionIconLabel"
            },
            "panel": {
                "type": "gpii.adjuster.magnifierPosition",
                "container": ".gpiic-prefsEditor-magnifierPosition",
                "template": "%prefix/magnifierPositionTemplate.html",
                "message": "%prefix/magnifierPosition.json",
                "classnameMap": {"magnifierPosition": "@magnifierPosition.classes"}
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
        "magnifierFollows": {
            "type": "gpii.primarySchema.tracking",
            "panel": {
                "type": "gpii.adjuster.followingElement.magnifier",
                "container": ".gpiic-prefsEditor-magnifierFollows",
                "template": "%prefix/followingElementTemplate.html",
                "message": "%prefix/followingElement.json",
                "classnameMap": {
                    "followingElement": "@followingElement.classes",
                    "followingElementBorder": "@followingElement.borderClasses"
                }
            }
        },
        "showCrosshairs": {
            "type": "gpii.primarySchema.showCrosshairs",
            "panel": {
                "type": "gpii.adjuster.showCrosshairs",
                "container": ".gpiic-prefsEditor-showCrosshairs",
                "template": "%prefix/iconCheckTemplateShowCrosshairs.html",
                "message": "%prefix/showCrosshairs.json"
            }
        }
    };
})(jQuery, fluid);
