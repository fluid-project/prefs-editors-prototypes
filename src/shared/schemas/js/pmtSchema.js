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

    fluid.registerNamespace("gpii.pmt");

    gpii.pmt.auxiliarySchema = {
        // The global values:
        "namespace": "gpii.constructedPMT",
        "templatePrefix": "../../src/shared/adjusters/html/", // The common path to settings panel templates
        "template": "../../src/pmt/html/PrefsEditorTemplate-PMT.html",
        "messagePrefix": "../../src/shared/adjusters/messages/en/",
        // FIXME: Ideally we wouldn't have any function calls in the schema, which would make it easier to pass around.
        "message": "../../src/shared/frames/messages/" + gpii.prefs.i18n.getDefaultLanguage() + "/frames.json",

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
                    "gpii.primarySchema.magnifierEnabled": ["magnifier", "magnifierPosition", "magnifierFollows", "showCrosshairs"]
                }
            },
            "visualAlternatives": {
                "type": "gpii.panel.visualAlternatives",
                "container": ".gpiic-visualAlternatives",
                "template": "../../src/pmt/pmt-VisualAlternativesGroupContainer.html",
                "message": "%prefix/message.json",
                "panels": {
                    "always": ["speakText", "screenReaderBrailleOutput"],
                    "gpii.primarySchema.speakText": [
                        "wordsSpokenPerMinute", "volume", "visualAlternativesMoreLess"
                    ],
                    "gpii.primarySchema.visualAlternativesMoreLess": [
                        "voicePitch", "screenReaderLanguage", "punctuationVerbosity", "announceCapitals", "speakTutorialMessages", "keyEcho", "wordEcho", "textHighlighting", "screenReaderFollows"
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
        "contrastEnabled": {
            "type": "gpii.primarySchema.contrastEnabled",
            /*"enactor": {
                "type": "gpii.enactor.contrastTheme"
            },*/
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
            // "enactor": {
            //     "type": "gpii.enactor.contrastThemeNoPreview"
            // },
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
            // "enactor": {
            //     "type": "gpii.enactor.textSize"
            // },
            "panel": {
                "type": "gpii.adjuster.textSizePMT",
                "container": ".gpiic-prefsEditor-textSize",
                "template": "%prefix/textSizeTemplatePMT.html",
                "message": "%prefix/textSize.json",
                "gradeNames": ["gpii.adjuster.textSizePMT.preview"],
                "previewURL": "../../src/shared/preview/html/textPreview.html",
                "stepperTemplate": "../../src/shared/components/textfieldStepper/html/textfieldStepperTemplate.html"
            }
        },
        "cursorSize": {
            "type": "gpii.primarySchema.cursorSize",
            // "enactor": {
            //     "type": "gpii.enactor.cursorSize"
            // },
            "panel": {
                "type": "gpii.adjuster.cursorSizePMT",
                "container": ".gpiic-prefsEditor-cursorSize",
                "template": "%prefix/cursorSizeTemplatePMT.html",
                "message": "%prefix/cursorSize.json",
                "gradeNames": ["gpii.adjuster.cursorSizePMT.preview"],
                "previewURL": "../../src/shared/preview/html/cursorPreview.html",
                "stepperTemplate": "../../src/shared/components/textfieldStepper/html/textfieldStepperTemplate.html"
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
                "type": "gpii.adjuster.magnifierPMT",
                "container": ".gpiic-prefsEditor-magnifier",
                "template": "%prefix/magnifierTemplatePMT.html",
                "message": "%prefix/magnifier.json",
                "gradeNames": ["gpii.adjuster.magnifierPMT.preview", "gpii.adjuster.textSizePMT.preview"],
                "previewURL": "../../src/shared/preview/html/textPreview.html",
                "stepperTemplate": "../../src/shared/components/textfieldStepper/html/textfieldStepperTemplate.html"
            }
        },
        "magnifierPosition": {
            "type": "gpii.primarySchema.magnificationPosition",
            "classes": {
                "Lens": "gpii-increaseSize-magnifierPositionLens gpii-increaseSize-magnifierPositionIconLabel",
                "FullScreen": "gpii-increaseSize-magnifierPositionFullscreen gpii-increaseSize-magnifierPositionIconLabel",
                "TopHalf": "gpii-prefsEditor-adjusterIcons gpii-increaseSize-magnifierPositionTop gpii-increaseSize-magnifierPositionIconLabel",
                "BottomHalf": "gpii-prefsEditor-adjusterIcons gpii-increaseSize-magnifierPositionBottom gpii-increaseSize-magnifierPositionIconLabel",
                "LeftHalf": "gpii-prefsEditor-adjusterIcons gpii-increaseSize-magnifierPositionLeft gpii-increaseSize-magnifierPositionIconLabel",
                "RightHalf": "gpii-prefsEditor-adjusterIcons gpii-increaseSize-magnifierPositionRight gpii-increaseSize-magnifierPositionIconLabel"
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
                "mouse": "gpii-prefsEditor-adjusterIcons gpii-followingElement-mouseCursorIcon",
                "caret": "gpii-prefsEditor-adjusterIcons gpii-followingElement-textCursorIcon",
                "focus": "gpii-prefsEditor-adjusterIcons gpii-followingElement-keyboardFocusIcon"
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
                "template": "%prefix/onOffSwitchTemplate.html",
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
                "message": "%prefix/message.json",
                "stepperTemplate": "../../src/shared/components/textfieldStepper/html/textfieldStepperTemplate.html"
            }
        },

        "visualAlternativesMoreLess": {
            "type": "gpii.primarySchema.visualAlternativesMoreLess",
            "panel": {
                "type": "gpii.adjuster.visualAlternativesMoreLess",
                "template": "%prefix/visualAlternativesMoreLessTemplate.html",
                "message": "%prefix/message.json",
                "container": ".visualAlternativesMoreLess"
            }
        },

        "volume": {
            "type": "gpii.primarySchema.volume",
            "panel": {
                "type": "gpii.adjuster.volume",
                "template": "%prefix/volumeTemplate.html",
                "container": ".volume",
                "message": "%prefix/message.json",
                "stepperTemplate": "../../src/shared/components/textfieldStepper/html/textfieldStepperTemplate.html"
            }
        },

        "voicePitch": {
            "type": "gpii.primarySchema.voicePitch",
            "panel": {
                "type": "gpii.adjuster.voicePitch",
                "template": "%prefix/voicePitchTemplate.html",
                "container": ".voicePitch",
                "message": "%prefix/message.json",
                "stepperTemplate": "../../src/shared/components/textfieldStepper/html/textfieldStepperTemplate.html"
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

        "textHighlighting": {
            "type": "gpii.primarySchema.textHighlighting",
            "panel": {
                "type": "gpii.adjuster.textHighlighting",
                "template": "%prefix/textHighlightingTemplate.html",
                "container": ".textHighlighting",
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

        "screenReaderFollows": {
            "type": "gpii.primarySchema.screenReaderTracking",
            "panel": {
                "type": "gpii.adjuster.followingElement.screenReader",
                "container": ".screanReaderFollows",
                "template": "%prefix/followingElementTemplate.html",
                "message": "%prefix/followingElement.json",
                "classnameMap": {
                    "followingElement": "@followingElement.classes",
                    "followingElementBorder": "@followingElement.borderClasses"
                }
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
                "message": "%prefix/message.json",
                "stepperTemplate": "../../src/shared/components/textfieldStepper/html/textfieldStepperTemplate.html"
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
