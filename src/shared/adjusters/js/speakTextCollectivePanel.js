(function (fluid) {
    fluid.defaults("speakText.panels.CollectivePanel", {
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
        events: {
            modelChanged: null
        },
        listeners: {
            afterRender: "{that}.activateCombobox"
        },
        invokers: {
            activateCombobox: {
                funcName: "speakText.panels.CollectivePanel.activateCombobox",
                args: ["{that}"]
            }
        },
        selectors: {
            speakTextPresetButton: ".gpii-speakTextPresetButton",
            speakTextPresetButtonLabel: ".gpii-speakTextPresetButton-label",

            speakTextTickIcon: ".white-tick-icon",

            addOrRemovePreference: ".gpii-addOrRemovePreference",
            addOrRemovePreferenceLabel: ".gpii-addOrRemovePreference-label",

            moreOptions: ".more-options-checkbox",
            moreOptionsLabel: ".more-options-label",
            moreOptionsDiv: ".more-options",

            speechRateSelector: ".speech-rate-class",

            fullyExpanded: ".fully-expanded"
        },

        selectorsToIgnore: ["moreOptionsDiv", "speechRateSelector", "fullyExpanded", "speakTextTickIcon"],

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

        finalInitFunction: "speakText.panels.CollectivePanel.finalInit"
    });

    speakText.panels.CollectivePanel.activateCombobox = function (that) {
        that.locate("speakTextTickIcon").hide();

        $("#auditoryOutLanguage").combobox();
        $("#auditoryOutLanguage").change(function (event, newValue) {
            that.applier.requestChange("auditoryOutLanguage", newValue);
        });
    };

    speakText.panels.CollectivePanel.finalInit = function (that) {
        that.applier.modelChanged.addListener("speakTextPresetButton", function () {
            if (that.model.speakTextPresetButton) {
                that.locate("speakTextTickIcon").show();
                that.locate("moreOptionsLabel").text(that.options.strings.lessText);
                that.locate("speechRateSelector").slideDown(600);
                that.locate("moreOptionsDiv").slideDown(600);
            } else {
                that.locate("speakTextTickIcon").hide();
                that.locate("speechRateSelector").slideUp(600);
                that.locate("moreOptionsDiv").slideUp(600);
                that.locate("fullyExpanded").slideUp(600);
                that.locate("moreOptions").attr('checked', false);
            }
        });

        that.applier.modelChanged.addListener("moreOptions", function () {
            if (that.model.moreOptions) {
                that.locate("fullyExpanded").slideDown(700);
                that.locate("moreOptionsLabel").text(that.options.strings.moreText);
            } else {
                that.locate("fullyExpanded").slideUp(700);
                that.locate("moreOptionsLabel").text(that.options.strings.lessText);
            }
        });
    };

    // FIXME: These two functions should extract data from speakText.json
    speakText.showMoreText = function () {
        return "less";
    };

    speakText.showLessText = function () {
        return "more";
    };

})(fluid);
