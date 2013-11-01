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
        "gpii.primarySchema.screenReaderTTSEnabled": {
            "type": "boolean",
            "default": true
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
        }
    };

    gpii.speakText.auxiliarySchema = {
        "namespace": "gpii.adjusters.speakText",
        "templatePrefix": "../../src/shared/adjusters/pcp/html/",
        "messagePrefix": "../../src/shared/adjusters/pcp/messages/",
        "template": "../../src/pcp/newestSpeakText.html",

        "screenReaderTTSEnabled": {
            "type": "gpii.primarySchema.screenReaderTTSEnabled",
            "panel": {
                "type": "speakText.panel.screenReaderTTSEnabled",
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
        "screenReaderBrailleOutput": {
            "type": "gpii.primarySchema.screenReaderBrailleOutput",
            "panel": {
                "type": "speakText.panel.screenReaderBrailleOutput",
                "template": "%prefix/brailleTemplate.html",
                "container": ".braille",
                "message": "%prefix/speakText.json"
            }
        }
    };
})(fluid);
