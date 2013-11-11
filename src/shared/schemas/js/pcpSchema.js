/*!
Cloud4all Preferences Management Tools

Copyright 2013 Astea

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

(function (fluid) {
    fluid.registerNamespace("gpii.pcp");

    gpii.pcp.auxiliarySchema = {
        "namespace": "gpii.constructedPCP",
        "templatePrefix": "../../src/shared/adjusters/html/",
        "messagePrefix": "../../src/shared/adjusters/messages/",
        "template": "%prefix/newestSpeakText.html",

        "screenReaderTTSEnabled": {
            "type": "gpii.primarySchema.screenReaderTTSEnabled",
            "panel": {
                "type": "gpii.adjuster.CollectivePanel",
                "template": "%prefix/speakTextCollectiveTemplate.html",
                "container": ".speakText-collectiveContainer",
                "message": "%prefix/speakText.json"
            }
        },

        "speechRate": {
            "type": "gpii.primarySchema.speechRate",
            "panel": {
                "type": "gpii.adjuster.CollectivePanel"
            }
        },

        "auditoryOutLanguage": {
            "type": "gpii.primarySchema.auditoryOutLanguage",
            "panel": {
                "type": "gpii.adjuster.CollectivePanel"
            }
        },

        "punctuationVerbosity": {
            "type": "gpii.primarySchema.punctuationVerbosity",
            "panel": {
                "type": "gpii.adjuster.CollectivePanel",
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
                "type": "gpii.adjuster.CollectivePanel"
            }
        },

        "speakTutorialMessages": {
            "type": "gpii.primarySchema.speakTutorialMessages",
            "panel": {
                "type": "gpii.adjuster.CollectivePanel"
            }
        },

        "keyEcho": {
            "type": "gpii.primarySchema.keyEcho",
            "panel": {
                "type": "gpii.adjuster.CollectivePanel"
            }
        },

        "wordEcho": {
            "type": "gpii.primarySchema.wordEcho",
            "panel": {
                "type": "gpii.adjuster.CollectivePanel"
            }
        },

        "screenReaderBrailleOutput": {
            "type": "gpii.primarySchema.screenReaderBrailleOutput",
            "panel": {
                "type": "gpii.adjuster.CollectivePanel"
            }
        }
    };
})(fluid);
