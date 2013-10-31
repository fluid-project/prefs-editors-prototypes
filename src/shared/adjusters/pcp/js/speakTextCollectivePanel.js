/*!
Cloud4all Preferences Management Tools

Copyright 2013 Astea

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

(function (fluid) {
    fluid.defaults("speakText.panel.CollectivePanel", {
        gradeNames: ["fluid.prefs.panel", "speakText.panel.screenReaderTTSEnabled", "speakText.panel.speechRate", "speakText.panel.volume", "autoInit"],
        protoTree: {
            preferencesSwitchSpeakText: {messagekey: "speakTextPresetButtonLabel"},

            screenReaderTTSEnabled: "${screenReaderTTSEnabled}",
            screenReaderTTSEnabledLabel: {messagekey: "screenReaderTTSEnabledLabel"},

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

            volume: {
                decorators: {
                    type: "fluid",
                    func: "gpii.uiOptions.textfieldStepper",
                    options: {
                        range: "{that}.options.controlValues.volume",
                        path: "value2"
                    }
                }
            },
            volumeLabel: {messagekey: "volumeLabel"},
            volumeMinus: {messagekey: "speechRateMinus"},
            volumePlus: {messagekey: "speechRatePlus"},
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
            // onShowExtraAdjuster: null,
            // onHideExtraAdjuster: null,
            onHideSpeakTextTickIcon: null
        },
        listeners: {
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
            // "onCreate.addExtraVisibilityListener": {
            //     "listener": "{that}.applier.modelChanged.addListener",
            //     "args": ["extraAdjustersVisibility", "{that}.showHideExtra"]
            // },
            "afterRender.setTextSpeakTextHeader": {
                "this": "{that}.dom.speakTextHeader",
                "method": "text",
                "args": ["{that}.options.strings.speakTextHeader"]
            },
            // "afterRender.bindEventMoreLess": {
            //     "this": "{that}.dom.moreLess",
            //     "method": "click",
            //     "args": ["{that}.updateExtraModelValue"]
            // },
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
            // "onShowExtraAdjuster.show": {
            //     "this": "{that}.dom.speakTextExtraAdjusters",
            //     "method": "slideDown",
            //     "args": ["{that}.options.fullyExpandedSlideSpeed"]
            // },
            // "onHideExtraAdjuster.hide": {
            //     "this": "{that}.dom.speakTextExtraAdjusters",
            //     "method": "slideUp",
            //     "args": ["{that}.options.fullyExpandedSlideSpeed"]
            // },
            // "onShowExtraAdjuster.setLessText": {
            //     "this": "{that}.dom.moreLess",
            //     "method": "text",
            //     "args": ["{that}.options.strings.lessText"]
            // },
            // "onHideExtraAdjuster.setMoreText": {
            //     "this": "{that}.dom.moreLess",
            //     "method": "text",
            //     "args": ["{that}.options.strings.moreText"]
            // }
        },
        invokers: {
            updateModelValue: {
                "funcName": "gpii.speakText.updateModelHeaderClicked",
                "args": ["{that}",
                         "{that}.model.partialAdjustersVisibility"
                         // "{that}.model.extraAdjustersVisibility"
                    ]
            },
            // updateExtraModelValue: {
            //     "funcName": "gpii.speakText.updateModelMoreLessClicked",
            //     "args": ["{that}",
            //              "{that}.model.extraAdjustersVisibility"
            //         ]
            // },
            showHidePartial: {
                "funcName": "gpii.speakText.showOrHideDependingOnState",
                "args": ["{that}",
                         "{that}.events.onShowPartialAdjusters.fire",
                         "{that}.events.onHidePartialAdjusters.fire"
                    ]
            },
            // showHideExtra: {
            //     "funcName": "gpii.speakText.showOrHideDependingOnState",
            //     "args": ["{that}.model.extraAdjustersVisibility",
            //              "{that}.events.onShowExtraAdjuster.fire",
            //              "{that}.events.onHideExtraAdjuster.fire"
            //         ]
            // }
        },
        selectors: {
            preferencesSwitchSpeakText: "#presetButton",
            speakTextPartialAdjusters: ".gpii-speakText-partially-expanded",
            // moreLess: ".gpiic-speakText-moreOptionsLabel",
            // speakTextExtraAdjusters: ".gpii-speakText-fully-expanded",
            speakTextHeader: ".gpii-speakTextPresetButton-label",
            speakTextTickIcon: ".white-tick-icon"
        },
        selectorsToIgnore: ["addToMyPreferencesStar", "preferencesSwitchSpeakText", "speakTextPartialAdjusters", "moreLess", "speakTextExtraAdjusters", "speakTextHeader", "speakTextTickIcon"],
        strings: {
            speakTextHeader: {
                expander: {
                    func: "gpii.speakText.lookupMsg",
                    args: ["{prefsEditorLoader}.msgBundle", "speakTextPresetButtonLabel"]
                }
            }
        },
        styles: {
            boldText: "bold-font-weight",
            normalText: "normal-font-weight"
        }
    });

})(fluid);
