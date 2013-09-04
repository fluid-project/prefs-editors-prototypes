(function (fluid) {
    fluid.defaults("speakText.primarySchema", {
        gradeNames: ["fluid.uiOptions.schemas", "autoInit"],
        schema: {
            "screenReaderTTSEnabled": {
                "type": "boolean",
                "default": true
            },
            "speechRate": {
                "type": "number",
                "default": 130,
                "minimum": 0,
                "divisibleBy": 10
            },
            "auditoryOutLanguage": {
                "type": "string",
                "default": "English",
                "enum": ["English", "Deutsch", "Français", "Русский"]
            },
            "punctuationVerbosity": {
                "type": "string",
                "default": "none",
                "enum": ["none", "some", "most", "all"]
            },
            "announceCapitals": {
                "type": "boolean",
                "default": false
            },
            "speakTutorialMessages": {
                "type": "boolean",
                "default": false
            },
            "keyEcho": {
                "type": "boolean",
                "default": false
            },
            "wordEcho": {
                "type": "boolean",
                "default": false
            },
            "screenReaderBrailleOutput": {
                "type": "boolean",
                "default": false
            }
        }
    });

    fluid.defaults("speakText.auxSchema", {
        gradeNames: ["fluid.uiOptions.auxSchema", "autoInit"],
        auxiliarySchema: {
            "namespace": "gpii.adjusters.speakText",
            "templatePrefix": "../../src/shared/adjusters/html/",
            "messagePrefix": "../../src/shared/adjusters/messages/",
            "template": "%prefix/newestSpeakText.html",

            "screenReaderTTSEnabled": {
                "type": "screenReaderTTSEnabled",
                "panel": {
                    "type": "speakText.panels.BigPanel",
                    "template": "%prefix/speakTextTemplate-screenReaderTTSEnabled.html",
                    "container": ".speakText-screenReaderTTSEnabled",
                    "message": "%prefix/speakText.json"
                }
            },

            "speechRate": {
                "type": "speechRate",
                "panel": {
                    "type": "speakText.panels.BigPanel",
                    "template": "%prefix/speakTextTemplate-speechRate.html",
                    "container": ".speakText-speechRate",
                    "message": "%prefix/speakText.json"
                }
            },

            "auditoryOutLanguage": {
                "type": "auditoryOutLanguage",
                "panel": {
                    "type": "speakText.panels.BigPanel"
                }
            },

            "punctuationVerbosity": {
                "type": "punctuationVerbosity",
                "panel": {
                    "type": "speakText.panels.BigPanel",
                    "classnameMap": {"punctuationVerbosity": "@punctuationVerbosity.classes"},
                    "template": "%prefix/speakTextTemplate-punctuationVerbosity.html",
                    "container": ".speakText-punctuationVerbosity",
                    "message": "%prefix/speakText.json"
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
                    "type": "speakText.panels.BigPanel",
                    "template": "%prefix/speakTextTemplate-CollectiveTemplate.html",
                    "container": ".speakText-wordEcho",
                    "message": "%prefix/speakText.json"
                }
            },

            "speakTutorialMessages": {
                "type": "speakTutorialMessages",
                "panel": {
                    "type": "speakText.panels.BigPanel"
                }
            },

            "keyEcho": {
                "type": "keyEcho",
                "panel": {
                    "type": "speakText.panels.BigPanel"
                }
            },

            "wordEcho": {
                "type": "wordEcho",
                "panel": {
                    "type": "speakText.panels.BigPanel"
                }
            },

            "screenReaderBrailleOutput": {
                "type": "screenReaderBrailleOutput",
                "panel": {
                    "type": "speakText.panels.BigPanel"
                }
            }
        }
    });


})(fluid);
