(function (fluid) {

    fluid.defaults("speakText.panels.screenReaderTTSEnabled", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        preferenceMap: {
            "screenReaderTTSEnabled": {
                "model.screenReaderTTSEnabled": "default"
            }
        },
        selectors: {
            screenReaderTTSEnabled: ".gpii-screenReaderTTSEnabled",
            screenReaderTTSEnabledLabel: ".gpii-screenReaderTTSEnabled-label",
            expandedTop: ".expanded-top",
            expandedBottom: ".expanded-bottom",
            moreOptions: ".more-options-label"
        },
        protoTree: {
            screenReaderTTSEnabled: "${screenReaderTTSEnabled}",
            screenReaderTTSEnabledLabel: {messagekey: "screenReaderTTSEnabledLabel"}
        },

        finalInitFunction: "speakText.panels.screenReaderTTSEnabled.finalInit"
    });


    var flag = true;

    speakText.panels.screenReaderTTSEnabled.finalInit = function (that) {
        that.applier.modelChanged.addListener("screenReaderTTSEnabled", function () {
            if (that.model.screenReaderTTSEnabled) {
                $(".speech-rate").slideDown(400);
                $(".more-options").slideDown(400);
                $("#more-options-checkbox").change(function () {
                    if ($("#more-options-checkbox").is(":checked")) {
                        $(".expanded-top").slideDown(400);
                        $(".expanded-bottom").slideDown(400);
                    } else {
                        $(".expanded-top").slideUp(400);
                        $(".expanded-bottom").slideUp(400);
                    }
                })
            } else {
                $(".speech-rate").slideUp(400);
                $(".more-options").slideUp(400);
                $(".expanded-top").slideUp(400);
                $(".expanded-bottom").slideUp(400);
                $("#more-options-checkbox").attr('checked', false);
            }
        });
    }

    function moreOrLessOptions(currentValue) {
        return (currentValue == "+ more") ? "- less" : "+ more"
    };

    fluid.defaults("speakText.panels.addOrRemovePreference", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        preferenceMap: {
            "addOrRemovePreference": {
                "model.addOrRemovePreference": "default"
            }
        },
        selectors: {
            addOrRemovePreference: ".gpii-addOrRemovePreference",
            addOrRemovePreferenceLabel: ".gpii-addOrRemovePreference-label"
        },
        protoTree: {
            addOrRemovePreference: "${addOrRemovePreference}",
            addOrRemovePreferenceLabel: {messagekey: "addOrRemovePreferenceLabelOff"}
        }
    });

    fluid.defaults("speakText.panels.screenReaderSwitch", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        preferenceMap: {
            "screenReaderSwitch": {
                "model.screenReaderSwitch": "default"
            }
        },
        selectors: {
            screenReaderSwitch: ".gpii-screenReaderSwitch",
            screenReaderSwitchLabel: ".gpii-screenReaderSwitch-label"
        },
        protoTree: {
            screenReaderSwitch: "${screenReaderSwitch}",
            screenReaderSwitchLabel: {messagekey: "screenReaderSwitchLabel"}
        }
    });

    fluid.defaults("speakText.panels.speechRate", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        preferenceMap: {
            "speechRate": {
                "model.speechRate": "default",
                "model.minimum": "minimum",
                "model.divisibleBy": "divisibleBy"
            }
        },
        selectors: {
            speechRate: ".gpii-speechRate",
            speechRateLabel: ".gpii-speechRate-label",
            speechRateMinus: ".gpii-speechRate-minus",
            speechRatePlus: ".gpii-speechRate-plus"
        },
        protoTree: {
            speechRate: "${speechRate}",
            speechRateLabel: {messagekey: "speechRateLabel"},
            speechRateMinus: {messagekey: "speechRateMinus"},
            speechRatePlus: {messagekey: "speechRatePlus"}
        }
    });

    fluid.defaults("speakText.panels.auditoryOutLanguage", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        preferenceMap: {
            "auditoryOutLanguage": {
                "model.auditoryOutLanguage": "default",
                "controlValues.auditoryOutLanguage": "enum"
            }
        },
        selectors: {
            auditoryOutLanguage: ".gpii-auditoryOutLanguage",
            auditoryOutLanguageLabel: ".gpii-auditoryOutLanguage-label"
        },
        protoTree: {
            auditoryOutLanguage: {
                selection: "${auditoryOutLanguage}",
                optionlist: "{that}.options.controlValues.auditoryOutLanguage"
            },
            auditoryOutLanguageLabel: {messagekey: "auditoryOutLanguageLabel"}
        }
    });

    fluid.defaults("speakText.panels.punctuationVerbosity", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        preferenceMap: {
            "punctuationVerbosity": {
                "model.punctuationVerbosity": "default",
                "controlValues.punctuationVerbosity": "enum"
            }
        },

        selectors: {
            punctuationVerbosityRow: ".gpii-punctuationVerbosity-row",
            punctuationVerbosityOptionLabel: ".gpii-punctuationVerbosity-option-label",
            punctuationVerbosityInput: ".gpii-punctuationVerbosity",
            punctuationVerbosityLabel: ".gpii-punctuationVerbosity-label"
        },

        repeatingSelectors: ["punctuationVerbosityRow"],

        protoTree: {
            expander: {
                type: "fluid.renderer.selection.inputs",
                rowID: "punctuationVerbosityRow",
                labelID: "punctuationVerbosityOptionLabel",
                inputID: "punctuationVerbosityInput",
                selectID: "punctuationVerbosity-selection",
                tree: {
                    optionnames: "{that}.options.controlValues.punctuationVerbosity",
                    optionlist: "{that}.options.controlValues.punctuationVerbosity",
                    selection: "${punctuationVerbosity}"
                }
            },
            punctuationVerbosityLabel: {messagekey: "punctuationVerbosityLabel"},
            punctuationVerbosityDescription: {messagekey: "punctuationVerbosityDescription"}
        },

        listeners: {
            afterRender: "{that}.style"
        },

        invokers: {
            style: {
                funcName: "speakText.panels.punctuationVerbosity.punctuationVerbosityStyle",
                args: [
                    "{that}.dom.punctuationVerbosityOptionLabel",
                    "{that}.options.controlValues.punctuationVerbosity",
                    "{that}.options.classnameMap.punctuationVerbosity"
                ]
            }
        }
    });

    speakText.panels.punctuationVerbosity.punctuationVerbosityStyle = function (labels, values, classes) {
        fluid.each(labels, function (label, index) {
            $(label).addClass(classes[values[index]]);
        });
        
        // FIXME: This is probably not the best idea, but it works for now.
        var contents = $(".gpii-punctuationVerbosity-row").contents()
        $(".gpii-punctuationVerbosity-row").replaceWith(contents);
    }


    fluid.defaults("speakText.panels.announceCapitals", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        preferenceMap: {
            "announceCapitals": {
                "model.announceCapitals": "default"
            }
        },
        selectors: {
            announceCapitals: ".gpii-announceCapitals",
            announceCapitalsLabel: ".gpii-announceCapitals-label"
        },
        protoTree: {
            announceCapitals: "${announceCapitals}",
            announceCapitalsLabel: {messagekey: "announceCapitalsLabel"}
        }
    });

    fluid.defaults("speakText.panels.speakTutorialMessages", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        preferenceMap: {
            "speakTutorialMessages": {
                "model.speakTutorialMessages": "default"
            }
        },
        selectors: {
            speakTutorialMessages: ".gpii-speakTutorialMessages",
            speakTutorialMessagesLabel: ".gpii-speakTutorialMessages-label"
        },
        protoTree: {
            speakTutorialMessages: "${speakTutorialMessages}",
            speakTutorialMessagesLabel: {messagekey: "speakTutorialMessagesLabel"}
        }
    });

    fluid.defaults("speakText.panels.keyEcho", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        preferenceMap: {
            "keyEcho": {
                "model.keyEcho": "default"
            }
        },
        selectors: {
            keyEcho: ".gpii-keyEcho",
            keyEchoLabel: ".gpii-keyEcho-label"
        },
        protoTree: {
            keyEcho: "${keyEcho}",
            keyEchoLabel: {messagekey: "keyEchoLabel"}
        }
    });

    fluid.defaults("speakText.panels.wordEcho", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        preferenceMap: {
            "wordEcho": {
                "model.wordEcho": "default"
            }
        },
        selectors: {
            wordEcho: ".gpii-wordEcho",
            wordEchoLabel: ".gpii-wordEcho-label"
        },
        protoTree: {
            wordEcho: "${wordEcho}",
            wordEchoLabel: {messagekey: "wordEchoLabel"}
        }
    });

    fluid.defaults("speakText.panels.screenReaderBrailleOutput", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        preferenceMap: {
            "screenReaderBrailleOutput": {
                "model.screenReaderBrailleOutput": "default"
            }
        },
        selectors: {
            screenReaderBrailleOutput: ".gpii-screenReaderBrailleOutput",
            screenReaderBrailleOutputLabel: ".gpii-screenReaderBrailleOutput-label",
            screenReaderBrailleOutputDescription: ".gpii-screenReaderBrailleOutput-description",
        },
        protoTree: {
            screenReaderBrailleOutput: "${screenReaderBrailleOutput}",
            screenReaderBrailleOutputLabel: {messagekey: "screenReaderBrailleOutputLabel"},
            screenReaderBrailleOutputDescription: {messagekey: "screenReaderBrailleOutputDescription"},
        }
    });

})(fluid);
