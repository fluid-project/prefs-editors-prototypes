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
                    "always": ["contrastTheme"]
                }
            },
            "increaseSize": {
                "type": "gpii.panel.increaseSizePMT",
                "container": ".gpiic-prefsEditor-increaseSizePanel",
                "template": "%prefix/increaseSizeTemplatePMT.html",
                "message": "%prefix/increaseSize.json",
                "panels": {
                    "always": ["textSize", "cursorSize", "magnifierEnabled"],
                    "gpii.primarySchema.magnifierEnabled": ["magnifier", "magnifierPosition", "magnifierFollows", "showCrosshairs"]
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
                        "wordsSpokenPerMinute", "volume", "voicePitch", "screenReaderLanguage",
                        "punctuationVerbosity", "announceCapitals", "speakTutorialMessages", "keyEcho", "wordEcho"
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
            "enactor": {
                "type": "gpii.enactor.contrastThemeWithInversion"
            },
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
        "magnifierPosition": {
            "type": "gpii.primarySchema.magnificationPosition",
            "classes": {
                "lens": "gpii-increaseSize-magnifierPositionLens gpii-increaseSize-magnifierPositionIconLabel",
                "fullscreen": "gpii-increaseSize-magnifierPositionFullscreen gpii-increaseSize-magnifierPositionIconLabel",
                "dockedtop": "gpii-prefsEditor-adjusterIcons gpii-increaseSize-magnifierPositionTop gpii-increaseSize-magnifierPositionIconLabel",
                "dockedbottom": "gpii-prefsEditor-adjusterIcons gpii-increaseSize-magnifierPositionBottom gpii-increaseSize-magnifierPositionIconLabel",
                "dockedleft": "gpii-prefsEditor-adjusterIcons gpii-increaseSize-magnifierPositionLeft gpii-increaseSize-magnifierPositionIconLabel",
                "dockedright": "gpii-prefsEditor-adjusterIcons gpii-increaseSize-magnifierPositionRight gpii-increaseSize-magnifierPositionIconLabel"
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
                "mousecursor": "gpii-prefsEditor-adjusterIcons gpii-followingElement-mouseCursorIcon",
                "textcursor": "gpii-prefsEditor-adjusterIcons gpii-followingElement-textCursorIcon",
                "keyboardfocus": "gpii-prefsEditor-adjusterIcons gpii-followingElement-keyboardFocusIcon"
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

        "voicePitch": {
            "type": "gpii.primarySchema.voicePitch",
            "panel": {
                "type": "gpii.adjuster.voicePitch",
                "template": "%prefix/voicePitchTemplate.html",
                "container": ".voicePitch",
                "message": "%prefix/message.json"
            }
        },

        "screenReaderLanguage": {
            "type": "gpii.primarySchema.screenReaderLanguage",
            "panel": {
                "type": "gpii.adjuster.screenReaderLanguage",
                "template": "%prefix/screenReaderLanguageTemplate.html",
                "container": ".screenReaderLanguage",
                "message": "%prefix/message.json"
            }
        },

        "punctuationVerbosity": {
            "type": "gpii.primarySchema.punctuationVerbosity",
            "panel": {
                "type": "gpii.adjuster.punctuationVerbosity",
                "template": "%prefix/punctuationVerbosityTemplate.html",
                "container": ".punctuationVerbosity",
                "message": "%prefix/message.json",
                "classnameMap": {"punctuationVerbosity": "@punctuationVerbosity.classes"}
            },
            "classes": {
                "none": "radioButton-left",
                "some": "radioButton-middle radioButton-second",
                "most": "radioButton-middle radioButton-third",
                "all": "radioButton-right"
            }
        },

        "announceCapitals": {
            "type": "gpii.primarySchema.announceCapitals",
            "panel": {
                "type": "gpii.adjuster.announceCapitals",
                "template": "%prefix/announceCapitalsTemplate.html",
                "message": "%prefix/message.json",
                "container": ".capitals"
            }
        },

        "speakTutorialMessages": {
            "type": "gpii.primarySchema.speakTutorialMessages",
            "panel": {
                "type": "gpii.adjuster.speakTutorialMessages",
                "template": "%prefix/speakTutorialMessagesTemplate.html",
                "message": "%prefix/message.json",
                "container": ".tutorials"
            }
        },

        "keyEcho": {
            "type": "gpii.primarySchema.keyEcho",
            "panel": {
                "type": "gpii.adjuster.keyEcho",
                "template": "%prefix/keyEchoTemplate.html",
                "message": "%prefix/message.json",
                "container": ".keyEcho"
            }
        },

        "wordEcho": {
            "type": "gpii.primarySchema.wordEcho",
            "panel": {
                "type": "gpii.adjuster.wordEcho",
                "template": "%prefix/wordEchoTemplate.html",
                "message": "%prefix/message.json",
                "container": ".wordEcho"
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
