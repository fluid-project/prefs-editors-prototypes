(function (fluid) {
    fluid.defaults("speakText.primarySchema", {
        gradeNames: ["fluid.uiOptions.schemas", "autoInit"],
        schema: {
            // "addOrRemovePreference": {
            //     "type": "boolean",
            //     "default": false
            // },
            // "screenReaderTTSEnabled": {
            //     "type": "boolean",
            //     "default": false
            // },
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
                    "type": "speakText.panels.BigPanel",
                    // "template": "%prefix/speakTextTemplate-auditoryOutLanguage.html",
                    // "container": ".speakText-auditoryOutLanguage",
                    // "message": "%prefix/speakText.json"
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
                    "template": "%prefix/speakTextTemplate-announceCapitals.html",
                    "container": ".speakText-announceCapitals",
                    "message": "%prefix/speakText.json"
                }
            },

            "speakTutorialMessages": {
                "type": "speakTutorialMessages",
                "panel": {
                    "type": "speakText.panels.BigPanel",
                    // "template": "%prefix/speakTextTemplate-speakTutorialMessages.html",
                    // "container": ".speakText-speakTutorialMessages",
                    // "message": "%prefix/speakText.json"
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
                    "type": "speakText.panels.BigPanel",
                    "template": "%prefix/speakTextTemplate-CollectiveTemplate.html",
                    "container": ".speakText-wordEcho",
                    "message": "%prefix/speakText.json"
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


    // fluid.defaults("fluid.uiOptions.defaultPanel", {
    //     gradeNames: ["fluid.eventedComponent", "autoInit"],
    //     mergePolicy: {
    //         sourceApplier: "nomerge"
    //     },
    //     sourceApplier: "{fluid.uiOptions}.applier",
    //     listeners: {
    //         "{uiOptions}.events.onUIOptionsRefresh": "{fluid.uiOptions.panels}.refreshView"
    //     },
    //     strings: {},
    //     parentBundle: "{uiOptionsLoader}.msgBundle"
    // });

    // fluid.defaults("speakText.panel", {
    //     gradeNames: ["fluid.uiOptions.panels", "autoInit"],
    //     selectors: {
    //         screenReaderTTSEnabled: ".speakText-screenReaderTTSEnabled",
    //         addOrRemovePreference: ".speakText-addOrRemovePreference",
    //         screenReaderTTSEnabled: ".speakText-screenReaderTTSEnabled",
    //         speechRate: ".speakText-speechRate",
    //         auditoryOutLanguage: ".speakText-auditoryOutLanguage",
    //         punctuationVerbosity: ".speakText-punctuationVerbosity",
    //         announceCapitals: ".speakText-announceCapitals",
    //         speakTutorialMessages: ".speakText-speakTutorialMessages",
    //         wordEcho: ".speakText-wordEcho",
    //         keyEcho: ".speakText-keyEcho",
    //         screenReaderBrailleOutput: ".speakText-screenReaderBrailleOutput"
    //     },
    //     components: {
    //         screenReaderTTSEnabled: {
    //             type: "speakText.panels.screenReaderTTSEnabled",
    //             container: ".speakText-screenReaderTTSEnabled-element",
    //             createOnEvent: "onUIOptionsMarkupReady",
    //             options: {
    //                 gradeNames: "fluid.uiOptions.defaultPanel",
    //                 model: {
    //                     screenReaderTTSEnabled: "{fluid.uiOptions.rootModel}.rootModel.screenReaderTTSEnabled"
    //                 }
    //             }
    //         },
    //         addOrRemovePreference: {
    //             type: "speakText.panels.addOrRemovePreference",
    //             container: ".speakText-addOrRemovePreference-element",
    //             createOnEvent: "onUIOptionsMarkupReady",
    //             options: {
    //                 gradeNames: "fluid.uiOptions.defaultPanel"
    //             }
    //         },
    //         screenReaderTTSEnabled: {
    //             type: "speakText.panels.screenReaderTTSEnabled",
    //             container: ".speakText-screenReaderTTSEnabled-element",
    //             createOnEvent: "onUIOptionsMarkupReady",
    //             options: {
    //                 gradeNames: "fluid.uiOptions.defaultPanel"
    //             }
    //         },
    //         speechRate: {
    //             type: "speakText.panels.speechRate",
    //             container: ".speakText-speechRate-element",
    //             createOnEvent: "onUIOptionsMarkupReady",
    //             options: {
    //                 gradeNames: "fluid.uiOptions.defaultPanel"
    //             }
    //         },
    //         auditoryOutLanguage: {
    //             type: "speakText.panels.auditoryOutLanguage",
    //             container: ".speakText-auditoryOutLanguage-element",
    //             createOnEvent: "onUIOptionsMarkupReady",
    //             options: {
    //                 gradeNames: "fluid.uiOptions.defaultPanel"
    //             }
    //         },
    //         punctuationVerbosity: {
    //             type: "speakText.panels.punctuationVerbosity",
    //             container: ".speakText-punctuationVerbosity-element",
    //             createOnEvent: "onUIOptionsMarkupReady",
    //             options: {
    //                 gradeNames: "fluid.uiOptions.defaultPanel"
    //             }
    //         },
    //         announceCapitals: {
    //             type: "speakText.panels.announceCapitals",
    //             container: ".speakText-announceCapitals-element",
    //             createOnEvent: "onUIOptionsMarkupReady",
    //             options: {
    //                 gradeNames: "fluid.uiOptions.defaultPanel"
    //             }
    //         },
    //         speakTutorialMessages: {
    //             type: "speakText.panels.speakTutorialMessages",
    //             container: ".speakText-speakTutorialMessages-element",
    //             createOnEvent: "onUIOptionsMarkupReady",
    //             options: {
    //                 gradeNames: "fluid.uiOptions.defaultPanel"
    //             }
    //         },
    //         wordEcho: {
    //             type: "speakText.panels.wordEcho",
    //             container: ".speakText-wordEcho-element",
    //             createOnEvent: "onUIOptionsMarkupReady",
    //             options: {
    //                 gradeNames: "fluid.uiOptions.defaultPanel"
    //             }
    //         },
    //         keyEcho: {
    //             type: "speakText.panels.keyEcho",
    //             container: ".speakText-keyEcho-element",
    //             createOnEvent: "onUIOptionsMarkupReady",
    //             options: {
    //                 gradeNames: "fluid.uiOptions.defaultPanel"
    //             }
    //         },
    //         screenReaderBrailleOutput: {
    //             type: "speakText.panels.screenReaderBrailleOutput",
    //             container: ".speakText-screenReaderBrailleOutput-element",
    //             createOnEvent: "onUIOptionsMarkupReady",
    //             options: {
    //                 gradeNames: "fluid.uiOptions.defaultPanel"
    //             }
    //         }
    //     }
    // });

})(fluid);
