/*!
Cloud4all Preferences Management Tools

Copyright 2013 Astea

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

(function (fluid) {
    fluid.registerNamespace("gpii.ppt");
    
    gpii.ppt.auxiliarySchema = {
        "namespace": "gpii.constructedPPT",
        "templatePrefix": "../../src/shared/adjusters/html/",
        "messagePrefix": "../../src/shared/adjusters/messages/",
        "template": "%prefix/newestSpeakText.html",

        "screenReaderTTSEnabled": {
            "type": "screenReaderTTSEnabled",
            "panel": {
                "type": "speakText.panels.CollectivePanel",
                "template": "%prefix/speakTextCollectiveTemplate.html",
                "container": ".speakText-collectiveContainer",
                "message": "%prefix/speakText.json"
            }
        },

        "speechRate": {
            "type": "speechRate",
            "panel": {
                "type": "speakText.panels.CollectivePanel"
            }
        },

        "auditoryOutLanguage": {
            "type": "auditoryOutLanguage",
            "panel": {
                "type": "speakText.panels.CollectivePanel"
            }
        },

        "punctuationVerbosity": {
            "type": "punctuationVerbosity",
            "panel": {
                "type": "speakText.panels.CollectivePanel",
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
            "type": "announceCapitals",
            "panel": {
                "type": "speakText.panels.CollectivePanel"
            }
        },

        "speakTutorialMessages": {
            "type": "speakTutorialMessages",
            "panel": {
                "type": "speakText.panels.CollectivePanel"
            }
        },

        "keyEcho": {
            "type": "keyEcho",
            "panel": {
                "type": "speakText.panels.CollectivePanel"
            }
        },

        "wordEcho": {
            "type": "wordEcho",
            "panel": {
                "type": "speakText.panels.CollectivePanel"
            }
        },

        "screenReaderBrailleOutput": {
            "type": "screenReaderBrailleOutput",
            "panel": {
                "type": "speakText.panels.CollectivePanel"
            }
        }
    };
})(fluid);
