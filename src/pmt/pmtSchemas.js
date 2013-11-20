/*!
Cloud4all Preferences Management Tools

Copyright 2013 Astea

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

(function (fluid) {
    fluid.registerNamespace("gpii.pmt");

    gpii.pmt.primarySchema = {
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

    gpii.pmt.auxiliarySchema = {
        "namespace": "gpii.adjusters.pmt",
        "templatePrefix": "../../src/shared/adjusters/html/",
        "messagePrefix": "../../src/shared/adjusters/messages/",
        "template": "../../src/pmt/pmtContainer.html",

        "speakText": {
            "type": "gpii.primarySchema.speakText",
            "panel": {
                "type": "gpii.panel.speakText",
                "template": "%prefix/speakTextTemplate.html",
                "container": ".speakText",
                "message": "%prefix/message.json"
            }
        },

        "wordsSpokenPerMinute": {
            "type": "gpii.primarySchema.wordsSpokenPerMinute",
            "panel": {
                "type": "gpii.panel.wordsSpokenPerMinute",
                "template": "%prefix/wordsSpokenPerMinute.html",
                "container": ".words-spoken-per-minute",
                "message": "%prefix/message.json"
            }
        },

        "volume": {
            "type": "gpii.primarySchema.volume",
            "panel": {
                "type": "gpii.panel.volume",
                "template": "%prefix/volumeTemplate.html",
                "container": ".volume",
                "message": "%prefix/message.json"
            }
        },

        "voicePitch": {
            "type": "gpii.primarySchema.voicePitch",
            "panel": {
                "type": "gpii.panel.voicePitch",
                "template": "%prefix/voicePitchTemplate.html",
                "container": ".voicePitch",
                "message": "%prefix/message.json"
            }
        },

        "screenReaderBrailleOutput": {
            "type": "gpii.primarySchema.screenReaderBrailleOutput",
            "panel": {
                "type": "gpii.panel.screenReaderBrailleOutput",
                "template": "%prefix/brailleTemplate.html",
                "container": ".braille",
                "message": "%prefix/message.json"
            }
        },

        "universalVolume": {
            "type": "gpii.primarySchema.universalVolume",
            "panel": {
                "type": "gpii.panel.universalVolume",
                "template": "%prefix/universalVolumeTemplate.html",
                "container": ".universalVolume",
                "message": "%prefix/message.json"
            }
        },

        "universalLanguage": {
            "type": "gpii.primarySchema.universalLanguage",
            "panel": {
                "type": "gpii.panel.universalLanguage",
                "template": "%prefix/universalLanguageTemplate.html",
                "container": ".universalLanguage",
                "message": "%prefix/message.json"
            }
        },

        "screenReaderLanguage": {
            "type": "gpii.primarySchema.screenReaderLanguage",
            "panel": {
                "type": "gpii.panel.screenReaderLanguage",
                "template": "%prefix/screenReaderLanguageTemplate.html",
                "container": ".screenReaderLanguage",
                "message": "%prefix/message.json"
            }
        },

        "punctuationVerbosity": {
            "type": "gpii.primarySchema.punctuationVerbosity",
            "panel": {
                "type": "gpii.panel.punctuationVerbosity",
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
                "type": "gpii.panel.announceCapitals",
                "template": "%prefix/announceCapitalsTemplate.html",
                "container": ".announceCapitals",
                "message": "%prefix/message.json"
            }
        },

        "speakTutorialMessages": {
            "type": "gpii.primarySchema.speakTutorialMessages",
            "panel": {
                "type": "gpii.panel.speakTutorialMessages",
                "template": "%prefix/speakTutorialMessagesTemplate.html",
                "container": ".speakTutorialMessages",
                "message": "%prefix/message.json"
            }
        },

        "keyEcho": {
            "type": "gpii.primarySchema.keyEcho",
            "panel": {
                "type": "gpii.panel.keyEcho",
                "template": "%prefix/keyEchoTemplate.html",
                "container": ".keyEcho",
                "message": "%prefix/message.json"
            }
        },

        "wordEcho": {
            "type": "gpii.primarySchema.wordEcho",
            "panel": {
                "type": "gpii.panel.wordEcho",
                "template": "%prefix/wordEchoTemplate.html",
                "container": ".wordEcho",
                "message": "%prefix/message.json"
            }
        },

        "textHighlighting": {
            "type": "gpii.primarySchema.textHighlighting",
            "panel": {
                "type": "gpii.panel.textHighlighting",
                "template": "%prefix/textHighlightingTemplate.html",
                "container": ".textHighlighting",
                "message": "%prefix/message.json"
            }
        }
    };
})(fluid);
