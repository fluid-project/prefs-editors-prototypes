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
    };

    gpii.speakText.auxiliarySchema = {
        "namespace": "gpii.adjusters.speakText",
        "templatePrefix": "../../src/shared/adjusters/html/",
        "messagePrefix": "../../src/shared/adjusters/messages/",
        "template": "../../src/pcp/pcpContainer.html",

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
    };
})(fluid);
