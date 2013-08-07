(function (fluid) {
    fluid.defaults("speakText.primarySchema", {
        gradeNames: ["fluid.uiOptions.schemas", "autoInit"],
        schema: {
            "screenReaderTTSEnabled": {
                "type": "boolean",
                "default": false
            },
            "speechRate": {
                "type": "number",
                "default": 0,
                "minimum": 0,
                "maximum": 100,
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
            "templatePrefix": "../../src/shared/lib/infusion/components/uiOptions/html/",
            "messagePrefix": "",
            "template": "./speakTextFrame.html", //main template for all three groups (speakText, incSize, highContrast)
            "message": "", // same as above

            "screenReaderTTSEnabled": {
                "type": "screenReaderTTSEnabled",
                "panel": {
                    "type": "speakText.panel",
                    "container": ".gpii-speak-text-group", // container for the speakText panel, holding all speakText adjusters
                    "template": "../../src/shared/adjusters/html/speakTextTemplate.html", // same as above
                    "message": "" //"%prefix/screenReaderTTSEnabled.json"
                }
            },

            "speechRate": {
                "type": "speechRate",
                "panel": {
                    "type": "speakText.panel"
                }
            },

            "auditoryOutLanguage": {
                "type": "auditoryOutLanguage",
                "panel": {
                    "type": "speakText.panel"
                }
            },

            "punctuationVerbosity": {
                "type": "punctuationVerbosity",
                "panel": {
                    "type": "speakText.panel"
                }
            },

            "announceCapitals": {
                "type": "announceCapitals",
                "panel": {
                    "type": "speakText.panel"
                }
            },

            "speakTutorialMessages": {
                "type": "speakTutorialMessages",
                "panel": {
                    "type": "speakText.panel"
                }
            },

            "keyEcho": {
                "type": "keyEcho",
                "panel": {
                    "type": "speakText.panel"
                }
            },

            "wordEcho": {
                "type": "wordEcho",
                "panel": {
                    "type": "speakText.panel"
                }
            },

            "screenReaderBrailleOutput": {
                "type": "screenReaderBrailleOutput",
                "panel": {
                    "type": "speakText.panel"
                }
            }
        }
    });

    fluid.defaults("speakText.panel", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        preferenceMap: {
            "screenReaderTTSEnabled": {
                "model.screenReaderTTSEnabled": "default"
            },
            "speechRate": {
                "model.speechRate": "default"
            },
            "auditoryOutLanguage": {
                "model.auditoryOutLanguage": "default",
                "controlValues.auditoryOutLanguage": "enum"
            },
            "punctuationVerbosity": {
                "model.punctuationVerbosity": "default",
                "controlValues.punctuationVerbosity": "enum"
            },
            "announceCapitals": {
                "model.announceCapitals": "default"
            },
            "speakTutorialMessages": {
                "model.speakTutorialMessages": "default"
            },
            "keyEcho": {
                "model.keyEcho": "default"
            },
            "wordEcho": {
                "model.wordEcho": "default"
            },
            "screenReaderBrailleOutput": {
                "model.screenReaderBrailleOutput": "default"
            }
        },

        selectors: {
            screenReaderTTSEnabled: ".gpii-screenReaderTTSEnabled",
            speechRate: ".gpii-speechRate",
            auditoryOutLanguage: ".gpii-auditoryOutLanguage",
            punctuationVerbosity: ".gpii-punctuationVerbosity",
            announceCapitals: ".gpii-announceCapitals",
            speakTutorialMessages: ".gpii-speakTutorialMessages",
            keyEcho: ".gpii-keyEcho",
            wordEcho: ".gpii-wordEcho",
            screenReaderBrailleOutput: ".gpii-screenReaderBrailleOutput"
        },

        protoTree: {
            screenReaderTTSEnabled: "${screenReaderTTSEnabled}",
            speechRate: "${speechRate}",
            auditoryOutLanguage: {
                selection: "${auditoryOutLanguage}",
                optionlist: "{that}.options.controlValues.auditoryOutLanguage"
            },
            punctuationVerbosity: {
                selection: "${punctuationVerbosity}",
                optionlist: "{that}.options.controlValues.punctuationVerbosity"
            },
            announceCapitals: "${announceCapitals}",
            speakTutorialMessages: "${speakTutorialMessages}",
            keyEcho: "${keyEcho}",
            wordEcho: "${wordEcho}",
            screenReaderBrailleOutput: "${screenReaderBrailleOutput}"
        }
    });

})(fluid);
