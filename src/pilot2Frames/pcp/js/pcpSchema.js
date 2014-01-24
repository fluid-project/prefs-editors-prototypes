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
    fluid.registerNamespace("gpii.pcp");

    gpii.pcp.auxiliarySchema = {
        // The global values:
        "namespace": "gpii.constructedPMT",
        "templatePrefix": "../../src/shared/adjusters/html/", // The common path to settings panel templates
        "template": "../../src/pilot2Frames/pcp/html/PrefsEditorTemplate-PCP.html",
        "messagePrefix": "../../src/shared/adjusters/messages/" + gpii.prefs.i18n.getDefaultLanguage() + "/",
        "message": "../../src/shared/frames/messages/" + gpii.prefs.i18n.getDefaultLanguage() + "/frames.json",

        // The preference-specific information:
        "groups": {
            "addContrast": {
                "container": ".gpii-prefsEditor-contrastPanel",
                "template": "%prefix/addContrastTemplate.html",
                "message": "%prefix/contrast.json",
                "type": "gpii.adjuster.addContrast",
                "panels": {
                    "always": ["contrastTheme"]
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
            },
            "visualAlternatives": {
                "type": "gpii.panel.visualAlternatives",
                "container": ".gpiic-visualAlternatives",
                "template": "../../src/pcp/pcp-VisualAlternativesGroupContainer.html",
                "message": "%prefix/message.json",
                "panels": {
                    "always": ["speakText", "screenReaderBrailleOutput"],
                    "gpii.primarySchema.speakText": [
                        "wordsSpokenPerMinute", "volume"
                    ]
                }
            },
            "volume": {
                "type": "gpii.panel.volumeCollectivePanel",
                "container": ".gpiic-volumeGroup",
                "template": "%prefix/VolumeGroupContainer.html",
                "message": "%prefix/message.json",
                "panels": {
                    "always": ["universalVolume"]
                }
            },
            "language": {
                "type": "gpii.panel.languageCollectivePanel",
                "container": ".gpiic-languageGroup",
                "template": "%prefix/LanguageGroupContainer.html",
                "message": "%prefix/message.json",
                "panels": {
                    "always": ["universalLanguage"]
                }
            }
        },
        "contrastTheme": {
            "type": "gpii.primarySchema.contrast.theme",
            "classes": {
                "default": "fl-theme-prefsEditor-default gpii-prefsEditor-theme-default",
                "inverted": "fl-theme-prefsEditor-inverted gpii-prefsEditor-theme-inverted",
                "bw": "fl-theme-prefsEditor-bw gpii-prefsEditor-theme-bw fl-theme-bw",
                "wb": "fl-theme-prefsEditor-wb gpii-prefsEditor-theme-wb fl-theme-wb",
                "by": "fl-theme-prefsEditor-by gpii-prefsEditor-theme-by fl-theme-by",
                "yb": "fl-theme-prefsEditor-yb gpii-prefsEditor-theme-yb fl-theme-yb"
            },
            // "enactor": {
            //     "type": "gpii.enactor.contrastThemeWithInversion"
            // },
            "panel": {
                "type": "gpii.adjuster.contrastThemeWithInversion",
                "container": ".gpiic-contrastTheme",
                "template": "%prefix/contrastThemeWithInversionTemplate.html",
                "message": "%prefix/contrast.json",
                "classnameMap": {"theme": "@contrastTheme.classes"}
            }
        },
        "textSize": {
            "type": "gpii.primarySchema.fontSize",
            // "enactor": {
            //     "type": "gpii.enactor.textSize"
            // },
            "panel": {
                "type": "gpii.adjuster.textSizePCP",
                "container": ".gpiic-prefsEditor-textSize",
                "template": "%prefix/textSizeTemplatePCP.html",
                "message": "%prefix/textSize.json"
            }
        },
        "cursorSize": {
            "type": "gpii.primarySchema.cursorSize",
            // "enactor": {
            //     "type": "gpii.enactor.cursorSize"
            // },
            "panel": {
                "type": "gpii.adjuster.cursorSizePCP",
                "container": ".gpiic-prefsEditor-cursorSize",
                "template": "%prefix/cursorSizeTemplatePCP.html",
                "message": "%prefix/cursorSize.json"
            }
        },
        "magnifierEnabled": {
            "type": "gpii.primarySchema.magnifierEnabled",
            // "enactor": {
            //     "type": "gpii.enactor.magnifier"
            // },
            "panel": {
                "type": "gpii.adjuster.magnifierEnabled",
                "container": ".gpiic-prefsEditor-magnifierEnabled",
                "template": "%prefix/onOffSwitchTemplate.html",
                "message": "%prefix/magnifier.json"
            }
        },
        "magnifier": {
            "type": "gpii.primarySchema.magnification",
            // "enactor": {
            //     "type": "gpii.enactor.magnifier"
            // },
            "panel": {
                "type": "gpii.adjuster.magnifierPCP",
                "container": ".gpiic-prefsEditor-magnifier",
                "template": "%prefix/magnifierTemplatePCP.html",
                "message": "%prefix/magnifier.json"
            }
        },

        "speakText": {
            "type": "gpii.primarySchema.speakText",
            "panel": {
                "type": "gpii.adjuster.speakText",
                "template": "%prefix/speakTextTemplate.html",
                "container": ".speakText",
                "message": "%prefix/message.json"
            }
        },

        "wordsSpokenPerMinute": {
            "type": "gpii.primarySchema.wordsSpokenPerMinute",
            "panel": {
                "type": "gpii.adjuster.wordsSpokenPerMinute",
                "template": "%prefix/wordsSpokenPerMinute.html",
                "container": ".words-spoken-per-minute",
                "message": "%prefix/message.json"
            }
        },

        "volume": {
            "type": "gpii.primarySchema.volume",
            "panel": {
                "type": "gpii.adjuster.volume",
                "template": "%prefix/volumeTemplate.html",
                "container": ".volume",
                "message": "%prefix/message.json"
            }
        },

        "screenReaderBrailleOutput": {
            "type": "gpii.primarySchema.screenReaderBrailleOutput",
            "panel": {
                "type": "gpii.adjuster.screenReaderBrailleOutput",
                "template": "%prefix/brailleTemplate.html",
                "container": ".braille",
                "message": "%prefix/message.json"
            }
        },

        "universalVolume": {
            "type": "gpii.primarySchema.universalVolume",
            "panel": {
                "type": "gpii.adjuster.universalVolume",
                "template": "%prefix/universalVolumeTemplate.html",
                "container": ".universalVolume",
                "message": "%prefix/message.json"
            }
        },

        "universalLanguage": {
            "type": "gpii.primarySchema.universalLanguage",
            "panel": {
                "type": "gpii.adjuster.universalLanguage",
                "template": "%prefix/universalLanguageTemplate.html",
                "container": ".universalLanguage",
                "message": "%prefix/message.json"
            }
        }
    };
})(jQuery, fluid);
