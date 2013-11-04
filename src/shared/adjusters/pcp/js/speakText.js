/*!
Cloud4all Preferences Management Tools

Copyright 2013 Astea

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

(function ($, fluid) {
    fluid.defaults("gpii.speakText", {
        gradeNames: ["fluid.prefs.fullNoPreview", "autoInit"],
        prefsEditor: {
            partiallyExpandedSlideSpeed: 500,
            fullyExpandedSlideSpeed: 500,

            model: {
                partialAdjustersVisibility: false,
                extraAdjustersVisibility: false
            },
            events: {
                onShowPartialAdjusters: null,
                onHidePartialAdjusters: null,
                onHideSpeakTextTickIcon: null,
                onShowExtraAdjusters: null,
                onHideExtraAdjusters: null
            },
            listeners: {
                "onHideSpeakTextTickIcon.hideTick": {
                    "this": "{that}.dom.speakTextTickIcon",
                    "method": "hide"
                },
                "onReady.bindEventPreferenceSwitchSpeakText": {
                    "this": "{that}.dom.preferencesSwitchSpeakText",
                    "method": "change",
                    "args": ["{that}.updateModelValue"]
                },
                "onCreate.addPartialVisibilityListener": {
                    "listener": "{that}.applier.modelChanged.addListener",
                    "args": ["partialAdjustersVisibility", "{that}.showHidePartial"]
                },
                "onReady.setTextSpeakTextHeader": {
                    "this": "{that}.dom.speakTextHeader",
                    "method": "text",
                    "args": ["{that}.options.strings.speakTextHeader"]
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
                "onReady.setSaveAndApplyText": {
                    "this": "{that}.dom.saveAndApply",
                    "method": "prop",
                    "args": ["value", "{that}.options.strings.saveAndApply"]
                },
                "onReady.setResetAndApplyText": {
                    "this": "{that}.dom.resetAndApply",
                    "method": "prop",
                    "args": ["value", "{that}.options.strings.resetAndApply"]
                },
                "onReady.setCancelText": {
                    "this": "{that}.dom.cancel",
                    "method": "prop",
                    "args": ["value", "{that}.options.strings.cancel"]
                },
                "onReady.onSaveVisibilityActualisation": {
                    "this": "{that}.dom.saveAndApply",
                    "method": "click",
                    "args": ["{that}.updateModelAllHidden"]
                },
                "onReady.onResetVisibilityActualisation": {
                    "this": "{that}.dom.resetAndApply",
                    "method": "click",
                    "args": ["{that}.updateModelAllHidden"]
                },
                "onReady.onCancelVisibilityActualisation": {
                    "this": "{that}.dom.cancel",
                    "method": "click",
                    "args": ["{that}.updateModelAllHidden"]
                }
            },
            invokers: {
                updateModelValue: {
                    "funcName": "gpii.speakText.updateModelHeaderClicked",
                    "args": ["{that}",
                             "{that}.model.partialAdjustersVisibility"
                    ]
                },
                showHidePartial: {
                    "funcName": "gpii.speakText.showOrHideDependingOnState",
                    "args": ["{that}",
                             "{that}.events.onShowPartialAdjusters.fire",
                             "{that}.events.onHidePartialAdjusters.fire"
                        ]
                },
                updateModelAllHidden: {
                    "funcName": "gpii.speakText.updateModelAllHidden",
                    "args": ["{that}"]
                }
            },
            selectors: {
                preferencesSwitchSpeakText: "#presetButton",
                speakTextPartialAdjusters: ".gpii-speakText-partially-expanded",
                speakTextHeader: ".gpii-speakTextPresetButton-label",
                speakTextTickIcon: ".white-tick-icon",

                saveAndApply: ".flc-prefsEditor-save",
                resetAndApply: ".flc-prefsEditor-reset",
                cancel: ".flc-prefsEditor-cancel"
            },
            selectorsToIgnore: ["preferencesSwitchSpeakText", "speakTextPartialAdjusters", "speakTextHeader", "speakTextTickIcon",  "saveAndApply", "resetAndApply", "cancel"],
            styles: {
                boldText: "bold-font-weight",
                normalText: "normal-font-weight"
            },
            strings: {
                speakTextHeader: {
                    expander: {
                        func: "gpii.speakText.lookupMsg",
                        args: ["{prefsEditorLoader}.msgBundle", "speakTextPresetButtonLabel"]
                    }
                },
                saveAndApply: {
                    expander: {
                        func: "gpii.speakText.lookupMsg",
                        args: ["{prefsEditorLoader}.msgBundle", "saveAndApply"]
                    }
                },
                resetAndApply: {
                    expander: {
                        func: "gpii.speakText.lookupMsg",
                        args: ["{prefsEditorLoader}.msgBundle", "resetAndApply"]
                    }
                },
                cancel: {
                    expander: {
                        func: "gpii.speakText.lookupMsg",
                        args: ["{prefsEditorLoader}.msgBundle", "cancel"]
                    }
                }
            }
        }
    });

    gpii.speakText.updateModelHeaderClicked = function (that, partialVisible) {
        var partialVisible = that.model.partialAdjustersVisibility;
        // alert("partial is " + partialVisible);
        hook = that;
        if (partialVisible) {
            that.applier.requestChange("partialAdjustersVisibility", false);
        } else {
            that.applier.requestChange("partialAdjustersVisibility", true);
        }
    };

    gpii.speakText.updateModelAllHidden = function (that) {
        that.applier.requestChange("partialAdjustersVisibility", false);
    };

    gpii.speakText.showOrHideDependingOnState = function (that, showEvent, hideEvent) {
        var state = that.model.partialAdjustersVisibility;
        state ? showEvent() : hideEvent();
    };

    gpii.speakText.lookupMsg = function (messageResolver, value) {
        var looked = messageResolver.lookup([value]);
        return looked ? looked.template : looked;
    };

})(jQuery, fluid);
