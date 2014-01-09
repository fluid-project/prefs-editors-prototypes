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
        }
    };

    gpii.auxiliarySchema = {
        "namespace": "gpii.adjusters.speakText",
        "templatePrefix": "../../src/shared/adjusters/html/",
        "messagePrefix": "../../src/shared/adjusters/messages/",
        "template": "../../src/pcp/pcpTemplate.html",

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
        },

        "groups": {
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
        }
    };
})(fluid);
