/*!
Cloud4all Preferences Management Tools

Copyright 2013 Astea

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

(function (fluid) {
    fluid.defaults("gpii.adjuster.CollectivePanel", {
        gradeNames: ["fluid.prefs.panel", "gpii.adjuster.keyEcho", "gpii.adjuster.wordEcho", "gpii.adjuster.speakTutorialMessages", "gpii.adjuster.screenReaderTTSEnabled", "gpii.adjuster.announceCapitals", "gpii.adjuster.punctuationVerbosity", "gpii.adjuster.screenReaderBrailleOutput", "gpii.adjuster.auditoryOutLanguage", "gpii.adjuster.speechRate", "autoInit"],
        protoTree: {
            preferencesSwitchSpeakText: {messagekey: "speakTextPresetButtonLabel"},

            screenReaderTTSEnabled: "${screenReaderTTSEnabled}",
            screenReaderTTSEnabledLabel: {messagekey: "screenReaderTTSEnabledLabel"},

            addOrRemovePreference: "${addOrRemovePreference}",
            addOrRemovePreferenceLabel: {messagekey: "addOrRemovePreferenceLabelOff"},

            speechRate: {
                decorators: {
                    type: "fluid",
                    func: "gpii.textfieldStepper",
                    options: {
                        sourceApplier: "{that}.applier",
                        rules: {
                            "value": "value"
                        },
                        model: {
                            value: "{that}.model.value"
                        },
                        range: "{that}.options.controlValues.speechRate"
                    }
                }
            },
            speechRateLabel: {messagekey: "speechRateLabel"},
            speechRateMinus: {messagekey: "speechRateMinus"},
            speechRatePlus: {messagekey: "speechRatePlus"},

            auditoryOutLanguage: {
                selection: "${auditoryOutLanguage}",
                optionlist: "${{that}.options.controlValues.auditoryOutLanguage}"
            },
            auditoryOutLanguageLabel: {messagekey: "auditoryOutLanguageLabel"},

            expander: {
                type: "fluid.renderer.selection.inputs",
                rowID: "punctuationVerbosityRow",
                labelID: "punctuationVerbosityOptionLabel",
                inputID: "punctuationVerbosityInput",
                selectID: "punctuationVerbosity-selection",
                tree: {
                    optionnames: "${{that}.options.controlValues.punctuationVerbosity}",
                    optionlist: "${{that}.options.controlValues.punctuationVerbosity}",
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
            screenReaderBrailleOutputDescription: {messagekey: "screenReaderBrailleOutputDescription"}
        },

        partiallyExpandedSlideSpeed: 500,
        fullyExpandedSlideSpeed: 600,

        model: {
            partialAdjustersVisibility: false,
            extraAdjustersVisibility: false
        },
        events: {
            onShowPartialAdjusters: null,
            onHidePartialAdjusters: null,
            onShowExtraAdjuster: null,
            onHideExtraAdjuster: null,
            onHideSpeakTextTickIcon: null
        },
        listeners: {
            "afterRender.activateCombobox": {
                "listener": "gpii.adjuster.CollectivePanel.activateCombobox",
                "args": ["{that}"]
            },
            "afterRender.setATTRaddToMyPreferencesStar": {
                "this": "{that}.dom.addToMyPreferencesStar",
                "method": "attr",
                "args": [{
                    "tooltip-checked": "{that}.options.strings.tooltipChecked",
                    "tooltip-unchecked": "{that}.options.strings.tooltipUnchecked"
                }]
            },
            "onHideSpeakTextTickIcon.hideTick": {
                "this": "{that}.dom.speakTextTickIcon",
                "method": "hide"
            },
            "afterRender.bindEventPreferenceSwitchSpeakText": {
                "this": "{that}.dom.preferencesSwitchSpeakText",
                "method": "change",
                "args": ["{that}.updateModelValue"]
            },
            "onCreate.addPartialVisibilityListener": {
                "listener": "{that}.applier.modelChanged.addListener",
                "args": ["partialAdjustersVisibility", "{that}.showHidePartial"]
            },
            "onCreate.addExtraVisibilityListener": {
                "listener": "{that}.applier.modelChanged.addListener",
                "args": ["extraAdjustersVisibility", "{that}.showHideExtra"]
            },
            "afterRender.setTextSpeakTextHeader": {
                "this": "{that}.dom.speakTextHeader",
                "method": "text",
                "args": ["{that}.options.strings.speakTextHeader"]
            },
            "afterRender.bindEventMoreLess": {
                "this": "{that}.dom.moreLess",
                "method": "click",
                "args": ["{that}.updateExtraModelValue"]
            },
            "onShowPartialAdjusters.showPartialAdjusters": {
                "this": "{that}.dom.speakTextPartialAdjusters",
                "method": "slideDown",
                "args": ["{that}.options.partiallyExpandedSlideSpeed"]
            },
            "onShowPartialAdjusters.showWhiteTickIcon": {
                "this": "{that}.dom.speakTextTickIcon",
                "method": "show"
            },
            "onShowPartialAdjusters.setHeaderTextBold.addBoldClass": {
                "this": "{that}.dom.speakTextHeader",
                "method": "addClass",
                "args": ["{that}.options.styles.boldText"]
            },
            "onShowPartialAdjusters.setHeaderTextBold.removeNormalClass": {
                "this": "{that}.dom.speakTextHeader",
                "method": "removeClass",
                "args": ["{that}.options.styles.normalText"]
            },
            "onShowPartialAdjusters.setTextMoreText": {
                "this": "{that}.dom.moreLess",
                "method": "text",
                "args": ["{that}.options.strings.moreText"]
            },
            "onHidePartialAdjusters.hideAdjusters": {
                "this": "{that}.dom.speakTextPartialAdjusters",
                "method": "slideUp",
                "args": ["{that}.options.partiallyExpandedSlideSpeed"]
            },
            "onHidePartialAdjusters.setHeaderTextNormal.addNormalClass": {
                "this": "{that}.dom.speakTextHeader",
                "method": "addClass",
                "args": ["{that}.options.styles.normalText"]
            },
            "onHidePartialAdjusters.setHeaderTextNormal.removeBoldClass": {
                "this": "{that}.dom.speakTextHeader",
                "method": "removeClass",
                "args": ["{that}.options.styles.boldText"]
            },
            "onHidePartialAdjusters.hideTick": {
                "funcName": "{that}.events.onHideSpeakTextTickIcon.fire"
            },
            "onShowExtraAdjuster.show": {
                "this": "{that}.dom.speakTextExtraAdjusters",
                "method": "slideDown",
                "args": ["{that}.options.fullyExpandedSlideSpeed"]
            },
            "onHideExtraAdjuster.hide": {
                "this": "{that}.dom.speakTextExtraAdjusters",
                "method": "slideUp",
                "args": ["{that}.options.fullyExpandedSlideSpeed"]
            },
            "onShowExtraAdjuster.setLessText": {
                "this": "{that}.dom.moreLess",
                "method": "text",
                "args": ["{that}.options.strings.lessText"]
            },
            "onHideExtraAdjuster.setMoreText": {
                "this": "{that}.dom.moreLess",
                "method": "text",
                "args": ["{that}.options.strings.moreText"]
            }
        },
        invokers: {
            updateModelValue: {
                "funcName": "gpii.speakText.updateModelHeaderClicked",
                "args": ["{that}",
                         "{that}.model.partialAdjustersVisibility",
                         "{that}.model.extraAdjustersVisibility"
                    ],
                dynamic: true
            },
            updateExtraModelValue: {
                "funcName": "gpii.speakText.updateModelMoreLessClicked",
                "args": ["{that}",
                         "{that}.model.extraAdjustersVisibility"
                    ],
                dynamic: true
            },
            showHidePartial: {
                "funcName": "gpii.speakText.showOrHideDependingOnState",
                "args": ["{that}.model.partialAdjustersVisibility",
                         "{that}.events.onShowPartialAdjusters.fire",
                         "{that}.events.onHidePartialAdjusters.fire"
                    ],
                dynamic: true
            },
            showHideExtra: {
                "funcName": "gpii.speakText.showOrHideDependingOnState",
                "args": ["{that}.model.extraAdjustersVisibility",
                         "{that}.events.onShowExtraAdjuster.fire",
                         "{that}.events.onHideExtraAdjuster.fire"
                    ],
                dynamic: true
            }
        },
        selectors: {
            addToMyPreferencesStar: ".addToMyPreferencesLabel",
            preferencesSwitchSpeakText: "#presetButton",
            speakTextPartialAdjusters: ".gpii-speakText-partially-expanded",
            moreLess: ".gpiic-speakText-moreOptionsLabel",
            speakTextExtraAdjusters: ".gpii-speakText-fully-expanded",
            speakTextHeader: ".gpii-speakTextPresetButton-label",
            speakTextTickIcon: ".white-tick-icon"
        },
        selectorsToIgnore: ["addToMyPreferencesStar", "preferencesSwitchSpeakText", "speakTextPartialAdjusters", "moreLess", "speakTextExtraAdjusters", "speakTextHeader", "speakTextTickIcon"],
        members: {
            messageResolver: "{prefsEditorLoader}.msgBundle"
        },
        strings: {
            speakTextHeader: "{that}.stringBundle.speakTextPresetButtonLabel",
            moreText: "{that}.stringBundle.moreText",
            lessText: "{that}.stringBundle.lessText",
            tooltipChecked: "{that}.stringBundle.tooltipChecked",
            tooltipUnchecked: "{that}.stringBundle.tooltipUnchecked"
        },
        styles: {
            boldText: "bold-font-weight",
            normalText: "normal-font-weight"
        }
    });

    gpii.adjuster.CollectivePanel.activateCombobox = function (that) {
        $("#auditoryOutLanguage").combobox();
        $("#auditoryOutLanguage").change(function (event, newValue) {
            that.applier.requestChange("auditoryOutLanguage", newValue);
        });
    };

})(fluid);
