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
            screenReaderTTSEnabledLabel: ".gpii-screenReaderTTSEnabled-label"
        },
        protoTree: {
            screenReaderTTSEnabled: "${screenReaderTTSEnabled}",
            screenReaderTTSEnabledLabel: {messagekey: "screenReaderTTSEnabledLabel"}
        }
    });

    fluid.defaults("speakText.panels.speechRate", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        preferenceMap: {
            "speechRate": {
                "model.value": "default", /* WARNING
                A temporary solution is to store "default" in model.VALUE
                With the separation into smaller components this actually
                won't be an issue */
                "controlValues.speechRate.min": "minimum",
                "controlValues.speechRate.step": "divisibleBy"
            }
        },
        selectors: {
            speechRate: ".gpii-speechRate",
            speechRateLabel: ".gpii-speechRate-label",
            speechRateMinus: ".gpii-speechRate-minus",
            speechRatePlus: ".gpii-speechRate-plus",
        },
        protoTree: {
            speechRate: {
                decorators: {
                    type: "fluid",
                    func: "gpii.uiOptions.textfieldStepper",
                    options: {
                        range: "{that}.options.controlValues.speechRate",
                        path: "value"
                    }
                }
            },
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
        }
    });

    fluid.defaults("speakText.panels.BigPanel", {
        gradeNames: ["fluid.uiOptions.panels", "speakText.panels.keyEcho", "speakText.panels.wordEcho", "speakText.panels.speakTutorialMessages", "speakText.panels.speakTutorialMessages", "speakText.panels.screenReaderTTSEnabled", "speakText.panels.announceCapitals", "speakText.panels.punctuationVerbosity", "speakText.panels.screenReaderBrailleOutput", "speakText.panels.auditoryOutLanguage", "speakText.panels.speechRate", "autoInit"],
        model: {
            speakTextPresetButton: false,
            addOrRemovePreference: false,
            moreOptions: false
        },
        strings: {
            moreText: {
                expander: {
                    func: "speakText.showMoreText"
                }
            },
            lessText: {
                expander: {
                    func: "speakText.showLessText"
                }
            }
        },
        selectors: {
            speakTextPresetButton: ".gpii-speakTextPresetButton",
            speakTextPresetButtonLabel: ".gpii-speakTextPresetButton-label",

            addOrRemovePreference: ".gpii-addOrRemovePreference",
            addOrRemovePreferenceLabel: ".gpii-addOrRemovePreference-label",

            moreOptions: ".more-options-checkbox",
            moreOptionsLabel: ".more-options-label"
        },
        protoTree: {
            screenReaderTTSEnabled: "${screenReaderTTSEnabled}",
            screenReaderTTSEnabledLabel: {messagekey: "screenReaderTTSEnabledLabel"},

            addOrRemovePreference: "${addOrRemovePreference}",
            addOrRemovePreferenceLabel: {messagekey: "addOrRemovePreferenceLabelOff"},

            speechRate: {
                    decorators: {
                        type: "fluid",
                        func: "gpii.uiOptions.textfieldStepper",
                        options: {
                            range: "{that}.options.controlValues.speechRate",
                            path: "value"
                        }
                    }
                },
                speechRateLabel: {messagekey: "speechRateLabel"},
                speechRateMinus: {messagekey: "speechRateMinus"},
                speechRatePlus: {messagekey: "speechRatePlus"},

            auditoryOutLanguage: {
                selection: "${auditoryOutLanguage}",
                optionlist: "{that}.options.controlValues.auditoryOutLanguage"
            },
            auditoryOutLanguageLabel: {messagekey: "auditoryOutLanguageLabel"},

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
            punctuationVerbosityDescription: {messagekey: "punctuationVerbosityDescription"},

            announceCapitals: "${announceCapitals}",
            announceCapitalsLabel: {messagekey: "announceCapitalsLabel"},

            speakTutorialMessages: "${speakTutorialMessages}",
            speakTutorialMessagesLabel: {messagekey: "speakTutorialMessagesLabel"},

            keyEcho: "${keyEcho}",
            keyEchoLabel: {messagekey: "keyEchoLabel"},

            wordEcho: "${wordEcho}",
            wordEchoLabel: {messagekey: "wordEchoLabel"},

            screenReaderBrailleOutput: "${screenReaderBrailleOutput}",
            screenReaderBrailleOutputLabel: {messagekey: "screenReaderBrailleOutputLabel"},
            screenReaderBrailleOutputDescription: {messagekey: "screenReaderBrailleOutputDescription"},

            speakTextPresetButton: "${speakTextPresetButton}",
            speakTextPresetButtonLabel: {messagekey: "speakTextPresetButtonLabel"},

            moreOptions: "${moreOptions}",
            moreOptionsLabel: {messagekey: "moreOptions"}
        },
        // listeners: {
        //     afterRender: "{that}.style"
        // },
        // invokers: {
        //     style: {
        //         funcName: "speakText.panels.BigPanel.someFunction",
        //         args: ["{that}"]
        //     }
        // },

        finalInitFunction: "speakText.panels.BigPanel.finalInit"
    });

    speakText.showMoreText = function () {
        return "- less";
    }

    speakText.showLessText = function () {
        return "+ more";
    }

    speakText.panels.BigPanel.finalInit = function (that) {
        something = that;
        
        that.applier.modelChanged.addListener("speakTextPresetButton", function () {
            if (that.model.speakTextPresetButton) {
                that.locate("moreOptionsLabel").text("+ more");
                $("#speech-rate").slideDown(600);
                $(".more-options").slideDown(600);
            } else {
                $("#speech-rate").slideUp(600);
                $(".more-options").slideUp(600);
                $(".fully-expanded").slideUp(600);
                that.locate("moreOptions").attr('checked', false);
            }
        });

        that.applier.modelChanged.addListener("moreOptions", function () {
            if (that.model.moreOptions) {
                $(".fully-expanded").slideDown(600);
                that.locate("moreOptionsLabel").text(that.options.strings.moreText);
            } else {
                $(".fully-expanded").slideUp(600);
                that.locate("moreOptionsLabel").text(that.options.strings.lessText);
            }
        });
    }

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
