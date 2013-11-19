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
        "template": "%prefix/pcpTemplate.html",

        "screenReaderTTSEnabled": {
            "type": "gpii.primarySchema.screenReaderTTSEnabled",
            "panel": {
                "type": "gpii.adjuster.screenReaderTTSEnabled",
                "template": "%prefix/screenReaderTemplate.html",
                "message": "%prefix/screenReader.json",
                "container": ".gpiic-speakText-screenReader"
            }
        },

        "speechRate": {
            "type": "gpii.primarySchema.speechRate",
            "panel": {
                "type": "gpii.adjuster.speechRate",
                "template": "%prefix/speechRateTemplate.html",
                "message": "%prefix/speechRate.json",
                "container": ".gpiic-speakText-speechRate"
            }
        },

        "auditoryOutLanguage": {
            "type": "gpii.primarySchema.auditoryOutLanguage",
            "panel": {
                "type": "gpii.adjuster.auditoryOutLanguage",
                "template": "%prefix/auditoryOutLanguageTemplate.html",
                "message": "%prefix/auditoryOutLanguage.json",
                "container": ".gpiic-speakText-language"
            }
        },

        "punctuationVerbosity": {
            "type": "gpii.primarySchema.punctuationVerbosity",
            "panel": {
                "type": "gpii.adjuster.punctuationVerbosity",
                "template": "%prefix/punctuationTemplate.html",
                "message": "%prefix/punctuation.json",
                "container": ".gpiic-speakText-punctuation",
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
                "template": "%prefix/capitalsTemplate.html",
                "message": "%prefix/capitals.json",
                "container": ".gpiic-speakText-capitals"
            }
        },

        "speakTutorialMessages": {
            "type": "gpii.primarySchema.speakTutorialMessages",
            "panel": {
                "type": "gpii.adjuster.speakTutorialMessages",
                "template": "%prefix/tutorialMessagesTemplate.html",
                "message": "%prefix/tutorialMessages.json",
                "container": ".gpiic-speakText-tutorialMessages"
            }
        },

        "keyEcho": {
            "type": "gpii.primarySchema.keyEcho",
            "panel": {
                "type": "gpii.adjuster.keyEcho",
                "template": "%prefix/keyEchoTemplate.html",
                "message": "%prefix/keyEcho.json",
                "container": ".gpiic-speakText-readBack-keyEcho"
            }
        },

        "wordEcho": {
            "type": "gpii.primarySchema.wordEcho",
            "panel": {
                "type": "gpii.adjuster.wordEcho",
                "template": "%prefix/wordEchoTemplate.html",
                "message": "%prefix/wordEcho.json",
                "container": ".gpiic-speakText-readBack-wordEcho"
            }
        },

        "screenReaderBrailleOutput": {
            "type": "gpii.primarySchema.screenReaderBrailleOutput",
            "panel": {
                "type": "gpii.adjuster.screenReaderBrailleOutput",
                "template": "%prefix/brailleTemplate.html",
                "message": "%prefix/braille.json",
                "container": ".gpiic-speakText-braille"
            }
        },

        "groups": {
            "visualAlternatives": {
                "type": "gpii.panel.visualAlternatives",
                "container": ".gpiic-visualAlternatives",
                "template": "%prefix/visualAlternativesTemplate.html",
                "message": "%prefix/visualAlternatives.json",
                "panels": [
                    "screenReaderTTSEnabled", "speechRate", "auditoryOutLanguage", "punctuationVerbosity", "announceCapitals",
                    "speakTutorialMessages", "keyEcho", "wordEcho", "screenReaderBrailleOutput"
                ]
            }
        }
    };
})(fluid);
