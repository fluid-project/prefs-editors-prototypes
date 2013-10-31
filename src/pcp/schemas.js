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
        "gpii.primarySchema.speechRate": {
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
                "type": "speakText.panel.CollectivePanel",
                "template": "%prefix/speakTextCollectiveTemplate.html",
                "container": ".speakText-collectiveContainer",
                "message": "%prefix/speakText.json"
            }
        },

        "speechRate": {
            "type": "gpii.primarySchema.speechRate",
            "panel": {
                "type": "speakText.panel.CollectivePanel"
            }
        },

        "volume": {
            "type": "gpii.primarySchema.volume",
            "panel": {
                "type": "speakText.panel.CollectivePanel"
            }
        }
    };
})(fluid);
