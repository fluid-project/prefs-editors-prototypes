/*!
Cloud4all Preferences Management Tools

Copyright 2013 Astea

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

(function (fluid) {
    fluid.registerNamespace("gpii");
    gpii.primarySchema = {
        "gpii.primarySchema.speakText": {
            "type": "boolean",
            "default": false
        },
        "gpii.primarySchema.wordsSpokenPerMinute": {
            "type": "number",
            "default": 130,
            "minimum": 0,
            "divisibleBy": 10
        },
        "gpii.primarySchema.volume": {
            "type": "number",
            "default": 80,
            "minimum": 0,
            "divisibleBy": 10
        },
        "gpii.primarySchema.voicePitch": {
            "type": "number",
            "default": 80,
            "minimum": 0,
            "divisibleBy": 10
        },
        "gpii.primarySchema.screenReaderBrailleOutput": {
            "type": "boolean",
            "default": false
        },
        "gpii.primarySchema.universalVolume": {
            "type": "number",
            "default": 80,
            "minimum": 0,
            "divisibleBy": 10
        },
        "gpii.primarySchema.universalLanguage": {
            "type": "string",
            "default": "English",
            "enum": ["English", "French (français)", "German (Deutsch)", "Russian (Русский)"]
        },
        "gpii.primarySchema.screenReaderLanguage": {
            "type": "string",
            "default": "English",
            "enum": ["English", "French (français)", "German (Deutsch)", "Russian (Русский)"]
        },
        "gpii.primarySchema.punctuationVerbosity": {
            "type": "string",
            "default": "none",
            "enum": ["none", "some", "most", "all"]
        },
        "gpii.primarySchema.announceCapitals": {
            "type": "boolean",
            "default": false
        },
        "gpii.primarySchema.speakTutorialMessages": {
            "type": "boolean",
            "default": false
        },
        "gpii.primarySchema.keyEcho": {
            "type": "boolean",
            "default": false
        },
        "gpii.primarySchema.wordEcho": {
            "type": "boolean",
            "default": false
        },
        "gpii.primarySchema.moreLess": {
            "type": "boolean",
            "default": false
        },
        "gpii.primarySchema.textHighlighting": {
            "type": "string",
            "default": "Word",
            "enum": ["Word", "Second option?", "Third option?"]
        }
    };

    gpii.auxiliarySchema = {
        "namespace": "gpii.constructedPMT",
        "templatePrefix": "../../src/shared/adjusters/html/",
        "messagePrefix": "../../src/shared/adjusters/messages/",
        "template": "../../src/pmt/pmtTemplate.html",

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

        "moreLess": {
            "type": "gpii.primarySchema.moreLess",
            "panel": {
                "type": "gpii.adjuster.moreLess",
                "template": "%prefix/moreLessTemplate.html",
                "message": "%prefix/message.json",
                "container": ".moreLess"
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
        },

        "groups": {
            "visualAlternatives": {
                "type": "gpii.panel.visualAlternatives",
                "container": ".gpiic-visualAlternatives",
                "template": "../../src/pmt/pmtContainer-VisualAlternatives.html",
                "message": "%prefix/message.json",
                "panels": {
                    "always": ["speakText", "screenReaderBrailleOutput"],
                    "gpii.primarySchema.speakText": [
                        "wordsSpokenPerMinute", "volume", "moreLess"
                    ],
                    "gpii.primarySchema.moreLess": [
                        "voicePitch", "screenReaderLanguage", "punctuationVerbosity", "announceCapitals", "speakTutorialMessages", "keyEcho", "wordEcho"
                    ]
                }
            },
            "volume": {
                "type": "gpii.panel.volumeCollectivePanel",
                "container": ".gpiic-volumeGroup",
                "template": "../../src/pmt/pmtContainer-Volume.html",
                "message": "%prefix/message.json",
                "panels": {
                    "always": ["universalVolume"]
                }
            },
            "language": {
                "type": "gpii.panel.languageCollectivePanel",
                "container": ".gpiic-languageGroup",
                "template": "../../src/pmt/pmtContainer-Language.html",
                "message": "%prefix/message.json",
                "panels": {
                    "always": ["universalLanguage"]
                }
            }
        }
    };
})(fluid);
