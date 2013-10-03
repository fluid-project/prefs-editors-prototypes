(function (fluid) {
    fluid.defaults("speakText.panels.CollectivePanel", {
        gradeNames: ["fluid.uiOptions.panels", "speakText.panels.keyEcho", "speakText.panels.wordEcho", "speakText.panels.speakTutorialMessages", "speakText.panels.speakTutorialMessages", "speakText.panels.screenReaderTTSEnabled", "speakText.panels.announceCapitals", "speakText.panels.punctuationVerbosity", "speakText.panels.screenReaderBrailleOutput", "speakText.panels.auditoryOutLanguage", "speakText.panels.speechRate", "autoInit"],
        
        partiallyExpandedSlideSpeed: 600,
        fullyExpandedSlideSpeed: 700,

        model: {
            speakTextPresetButton: false,
            addOrRemovePreference: false,
            moreOptions: false
        },

        messageResources: "{messageLoader}.resources",

        listeners: {
            onCreate: {
                listener: "speakText.panels.CollectivePanel.addResourcesAndAnimation",
                args: "{that}"
            },
            afterRender: {
                listener: "speakText.panels.CollectivePanel.activateCombobox",
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
        }
    });

    speakText.panels.CollectivePanel.addResourcesAndAnimation = function (that) {
        fluid.fetchResources(that.options.messageResources, function () {
            var completeMessage;
            fluid.each(that.options.messageResources, function (oneResource) {
                var message = JSON.parse(oneResource.resourceText);
                completeMessage = $.extend({}, completeMessage, message);
            });
            that.msgBundle = fluid.messageResolver({messageBase: completeMessage});
        });

        that.applier.modelChanged.addListener("speakTextPresetButton", function (newModel, oldModel, changeRequest) {
            if (newModel.speakTextPresetButton) {
                hook_newModel = newModel;
                that.locate("speakTextTickIcon").show();
                that.locate("moreOptionsLabel").text(that.msgBundle.messageBase.moreText);
                that.locate("speechRateSelector").slideDown(that.options.partiallyExpandedSlideSpeed);
                that.locate("moreOptionsDiv").slideDown(that.options.partiallyExpandedSlideSpeed);
            } else {
                that.locate("speakTextTickIcon").hide();
                that.locate("speechRateSelector").slideUp(that.options.partiallyExpandedSlideSpeed);
                that.locate("moreOptionsDiv").slideUp(that.options.partiallyExpandedSlideSpeed);
                that.locate("fullyExpanded").slideUp(that.options.partiallyExpandedSlideSpeed);
                that.locate("moreOptions").attr('checked', false);
            }
        });

        that.applier.modelChanged.addListener("moreOptions", function (newModel, oldModel, changeRequest) {
            if (newModel.moreOptions) {
                that.locate("fullyExpanded").slideDown(that.options.fullyExpandedSlideSpeed);
                that.locate("moreOptionsLabel").text(that.msgBundle.messageBase.lessText);
            } else {
                that.locate("fullyExpanded").slideUp(that.options.fullyExpandedSlideSpeed);
                that.locate("moreOptionsLabel").text(that.msgBundle.messageBase.moreText);
            }
        });

        hook = that;
    };

    speakText.panels.CollectivePanel.activateCombobox = function (that) {
        that.locate("speakTextTickIcon").hide();

        $("#auditoryOutLanguage").combobox();
        $("#auditoryOutLanguage").change(function (event, newValue) {
            that.applier.requestChange("auditoryOutLanguage", newValue);
        });
    };

})(fluid);
