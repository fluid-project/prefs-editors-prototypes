/*!
Cloud4all Preferences Management Tools

Copyright 2013 Astea

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

(function (fluid) {
    fluid.registerNamespace("gpii.speakText");
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

        "gpii.primarySchema.textHighlighting": {
            "type": "string",
            "default": "Word",
            "enum": ["Word", "Second option?", "Third option?"]
        }
    };

    gpii.speakText.auxiliarySchema = {
        "namespace": "gpii.adjusters.speakText",
        "templatePrefix": "../../src/shared/adjusters/html/",
        "messagePrefix": "../../src/shared/adjusters/messages/",
        "template": "../../src/pmt/pmtContainer.html",

        "speakText": {
            "type": "gpii.primarySchema.speakText",
            "panel": {
                "type": "speakText.panel.speakText",
                "template": "%prefix/speakText.html",
                "container": ".speakText",
                "message": "%prefix/speakText.json"
            }
        },

        "wordsSpokenPerMinute": {
            "type": "gpii.primarySchema.wordsSpokenPerMinute",
            "panel": {
                "type": "speakText.panel.wordsSpokenPerMinute",
                "template": "%prefix/wordsSpokenPerMinute.html",
                "container": ".words-spoken-per-minute",
                "message": "%prefix/speakText.json"
            }
        },

        "volume": {
            "type": "gpii.primarySchema.volume",
            "panel": {
                "type": "speakText.panel.volume",
                "template": "%prefix/volumeTemplate.html",
                "container": ".volume",
                "message": "%prefix/speakText.json"
            }
        },

        "voicePitch": {
            "type": "gpii.primarySchema.voicePitch",
            "panel": {
                "type": "speakText.panel.voicePitch",
                "template": "%prefix/voicePitchTemplate.html",
                "container": ".voicePitch",
                "message": "%prefix/speakText.json"
            }
        },

        "screenReaderBrailleOutput": {
            "type": "gpii.primarySchema.screenReaderBrailleOutput",
            "panel": {
                "type": "speakText.panel.screenReaderBrailleOutput",
                "template": "%prefix/brailleTemplate.html",
                "container": ".braille",
                "message": "%prefix/speakText.json"
            }
        },

        "universalVolume": {
            "type": "gpii.primarySchema.universalVolume",
            "panel": {
                "type": "speakText.panel.universalVolume",
                "template": "%prefix/universalVolumeTemplate.html",
                "container": ".universalVolume",
                "message": "%prefix/speakText.json"
            }
        },

        "universalLanguage": {
            "type": "gpii.primarySchema.universalLanguage",
            "panel": {
                "type": "speakText.panel.universalLanguage",
                "template": "%prefix/universalLanguageTemplate.html",
                "container": ".universalLanguage",
                "message": "%prefix/speakText.json"
            }
        },

        "screenReaderLanguage": {
            "type": "gpii.primarySchema.screenReaderLanguage",
            "panel": {
                "type": "speakText.panel.screenReaderLanguage",
                "template": "%prefix/screenReaderLanguageTemplate.html",
                "container": ".screenReaderLanguage",
                "message": "%prefix/speakText.json"
            }
        },

        "punctuationVerbosity": {
            "type": "gpii.primarySchema.punctuationVerbosity",
            "panel": {
                "type": "speakText.panel.punctuationVerbosity",
                "template": "%prefix/punctuationVerbosityTemplate.html",
                "container": ".punctuationVerbosity",
                "message": "%prefix/speakText.json",
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
                "type": "speakText.panel.announceCapitals",
                "template": "%prefix/announceCapitalsTemplate.html",
                "container": ".announceCapitals",
                "message": "%prefix/speakText.json"
            }
        },

        "speakTutorialMessages": {
            "type": "gpii.primarySchema.speakTutorialMessages",
            "panel": {
                "type": "speakText.panel.speakTutorialMessages",
                "template": "%prefix/speakTutorialMessagesTemplate.html",
                "container": ".speakTutorialMessages",
                "message": "%prefix/speakText.json"
            }
        },

        "keyEcho": {
            "type": "gpii.primarySchema.keyEcho",
            "panel": {
                "type": "speakText.panel.keyEcho",
                "template": "%prefix/keyEchoTemplate.html",
                "container": ".keyEcho",
                "message": "%prefix/speakText.json"
            }
        },

        "wordEcho": {
            "type": "gpii.primarySchema.wordEcho",
            "panel": {
                "type": "speakText.panel.wordEcho",
                "template": "%prefix/wordEchoTemplate.html",
                "container": ".wordEcho",
                "message": "%prefix/speakText.json"
            }
        },

        "textHighlighting": {
            "type": "gpii.primarySchema.textHighlighting",
            "panel": {
                "type": "speakText.panel.textHighlighting",
                "template": "%prefix/textHighlightingTemplate.html",
                "container": ".textHighlighting",
                "message": "%prefix/speakText.json"
            }
        }
    };
})(fluid);
