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
                visualAlternativesPartialVisible: false,
                visualAlternativesExtraVisible: false,

                volumePartialVisible: false
            },
            events: {
                onShowVisualAlternativesPartial: null,
                onHideVisualAlternativesPartial: null,
                onHideVisualAlternativesTickIcon: null,
                onShowVisualAlternativesExtra: null,
                onHideVisualAlternativesExtra: null
            },
            listeners: {

                // Visual Alternatives adjuster group part

                "onHideVisualAlternativesTickIcon.hideTick": {
                    "this": "{that}.dom.visualAlternativesTickIcon",
                    "method": "hide"
                },
                "onReady.activateCombobox": {
                    "listener": "gpii.activateCombobox",
                    "args": ["{that}"]
                },
                "onReady.bindEventMoreLessVisualAlternatives": {
                    "this": "{that}.dom.visualAlternativesPreferenceSwitch",
                    "method": "change",
                    "args": ["{that}.updateModelValue"]
                },
                "onCreate.addSpeakTextSwitchListener": {
                    "listener": "{that}.applier.modelChanged.addListener",
                    "args": ["gpii_primarySchema_speakText", "{that}.updateModelExtraValue"]
                },
                "onCreate.addExtraVisibleListener": {
                    "listener": "{that}.applier.modelChanged.addListener",
                    "args": ["visualAlternativesExtraVisible", "{that}.showHideExtra"]
                },
                "onCreate.addPartialVisibilityListener": {
                    "listener": "{that}.applier.modelChanged.addListener",
                    "args": ["visualAlternativesPartialVisible", "{that}.showHidePartial"]
                },
                // "onCreate.addVolumePartialVisibilityListener": {
                //     "listener": "{that}.applier.modelChanged.addListener",
                //     "args": ["volumePartialVisible", "{that}.showHidePartial"]
                // },
                "onReady.setTextVisualAlternativesHeader": {
                    "this": "{that}.dom.visualAlternativesHeader",
                    "method": "text",
                    "args": ["{that}.options.strings.visualAlternativesHeader"]
                },
                "onShowVisualAlternativesPartial.showPartialAdjusters": {
                    "this": "{that}.dom.visualAlternativesPartialAdjusters",
                    "method": "slideDown",
                    "args": ["{that}.options.partiallyExpandedSlideSpeed"]
                },
                "onShowVisualAlternativesPartial.showWhiteTickIcon": {
                    "this": "{that}.dom.visualAlternativesTickIcon",
                    "method": "show"
                },
                "onShowVisualAlternativesPartial.setHeaderTextBold.addBoldClass": {
                    "this": "{that}.dom.visualAlternativesHeader",
                    "method": "addClass",
                    "args": ["{that}.options.styles.boldText"]
                },
                "onShowVisualAlternativesPartial.setHeaderTextBold.removeNormalClass": {
                    "this": "{that}.dom.visualAlternativesHeader",
                    "method": "removeClass",
                    "args": ["{that}.options.styles.normalText"]
                },
                "onHideVisualAlternativesPartial.hideAdjusters": {
                    "this": "{that}.dom.visualAlternativesPartialAdjusters",
                    "method": "slideUp",
                    "args": ["{that}.options.partiallyExpandedSlideSpeed"]
                },
                "onHideVisualAlternativesPartial.setHeaderTextNormal.addNormalClass": {
                    "this": "{that}.dom.visualAlternativesHeader",
                    "method": "addClass",
                    "args": ["{that}.options.styles.normalText"]
                },
                "onHideVisualAlternativesPartial.setHeaderTextNormal.removeBoldClass": {
                    "this": "{that}.dom.visualAlternativesHeader",
                    "method": "removeClass",
                    "args": ["{that}.options.styles.boldText"]
                },
                "onHideVisualAlternativesPartial.hideTick": {
                    "funcName": "{that}.events.onHideVisualAlternativesTickIcon.fire"
                },
                "onShowVisualAlternativesExtra.show": {
                    "this": "{that}.dom.visualAlternativesExtraAdjusters",
                    "method": "slideDown",
                    "args": ["{that}.options.fullyExpandedSlideSpeed"]
                },
                "onHideVisualAlternativesExtra.hide": {
                    "this": "{that}.dom.visualAlternativesExtraAdjusters",
                    "method": "slideUp",
                    "args": ["{that}.options.fullyExpandedSlideSpeed"]
                },


                //  Volume adjuster group part

                "onReady.setTextVolumeHeader": {
                    "this": "{that}.dom.volumeHeader",
                    "method": "text",
                    "args": ["{that}.options.strings.volumeHeader"]
                },
                // "onReady.bindEventPreferenceSwitchVolume": {
                //     "this": "{that}.dom.volumePreferenceSwitch",
                //     "method": "change",
                //     "args": ["{that}.updateVolumeModelValue"]
                // },


                //  Language adjuster group part

                "onReady.setTextLanguageHeader": {
                    "this": "{that}.dom.languageHeader",
                    "method": "text",
                    "args": ["{that}.options.strings.languageHeader"]
                },

                //  Save, Reset and Cancel buttons:

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
                             "{that}.model.visualAlternativesPartialVisible",
                             "{that}.model.visualAlternativesExtraVisible"
                    ],
                    "dynamic": true
                },
                updateModelExtraValue: {
                    "funcName": "gpii.updateModelExtraValue",
                    "args": ["{that}"],
                    "dynamic": true
                },
                // updateVolumeModelValue: {
                //     "funcName": "gpii.speakText.updateModelVolumeHeaderClicked",
                //     "args": ["{that}"]
                // },
                showHidePartial: {
                    "funcName": "gpii.speakText.showOrHideDependingOnState",
                    "args": ["{that}.model.visualAlternativesPartialVisible",
                             "{that}.events.onShowVisualAlternativesPartial.fire",
                             "{that}.events.onHideVisualAlternativesPartial.fire"
                    ],
                    "dynamic": true
                },
                showHideExtra: {
                    "funcName": "gpii.speakText.showOrHideDependingOnState",
                    "args": ["{that}.model.visualAlternativesExtraVisible",
                             "{that}.events.onShowVisualAlternativesExtra.fire",
                             "{that}.events.onHideVisualAlternativesExtra.fire"
                    ],
                    "dynamic": true
                },
                updateModelAllHidden: {
                    "funcName": "gpii.speakText.updateModelAllHidden",
                    "args": ["{that}"]
                }
            },
            selectors: {
                speakTextSwitch: "#speakText",

                visualAlternativesPreferenceSwitch: ".gpii-speakTextPresetButton",
                visualAlternativesPartialAdjusters: ".gpii-speakText-partially-expanded",
                visualAlternativesExtraAdjusters: ".gpii-speakText-fully-expanded",
                visualAlternativesHeader: ".gpii-speakTextPresetButton-label",
                visualAlternativesTickIcon: ".visualAlternatives-white-tick-icon",

                volumePreferenceSwitch: ".gpii-volumePresetButton",
                volumePartialAdjusters: ".gpii-volume-partially-expanded",
                volumeHeader: ".gpii-volumePresetButton-label",
                volumeTickIcon: ".white-tick-icon",

                languageHeader: ".gpii-languagePresetButton-label",

                saveAndApply: ".flc-prefsEditor-save",
                resetAndApply: ".flc-prefsEditor-reset",
                cancel: ".flc-prefsEditor-cancel"
            },
            selectorsToIgnore: ["speakTextSwitch", "languageHeader", "volumePreferenceSwitch", "volumePartialAdjusters", "volumeHeader", "volumeTickIcon", "visualAlternativesPreferenceSwitch", "visualAlternativesPartialAdjusters", "visualAlternativesHeader", "visualAlternativesTickIcon",  "saveAndApply", "resetAndApply", "cancel"],
            styles: {
                boldText: "bold-font-weight",
                normalText: "normal-font-weight"
            },
            strings: {
                visualAlternativesHeader: {
                    expander: {
                        func: "gpii.speakText.lookupMsg",
                        args: ["{prefsEditorLoader}.msgBundle", "visualAlternativesPresetButtonLabel"]
                    }
                },
                volumeHeader: {
                    expander: {
                        func: "gpii.speakText.lookupMsg",
                        args: ["{prefsEditorLoader}.msgBundle", "volumePresetButtonLabel"]
                    }
                },
                languageHeader: {
                    expander: {
                        func: "gpii.speakText.lookupMsg",
                        args: ["{prefsEditorLoader}.msgBundle", "languagePresetButtonLabel"]
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

    gpii.activateCombobox = function (that) {
        $("#auditoryOutLanguage").combobox();
        $("#auditoryOutLanguage").change(function (event, newValue) {
            that.applier.requestChange("auditoryOutLanguage", newValue);
        });
    }

    gpii.speakText.updateModelHeaderClicked = function (that, partialVisible, extraVisible) {
        if (extraVisible) {
            that.applier.requestChange("visualAlternativesPartialVisible", false);
            that.locate("speakTextSwitch").trigger('click');
        } else if (partialVisible && !extraVisible) {
            that.applier.requestChange("visualAlternativesPartialVisible", false);
        } else {
            that.applier.requestChange("visualAlternativesPartialVisible", true);
        }
    };

    gpii.speakText.updateModelVolumeHeaderClicked = function (that) {
        var partialVisible = that.model.volumePartialVisible;

        if (partialVisible) {
            that.applier.requestChange("volumePartialVisible", false);
        } else {
            that.applier.requestChange("volumePartialVisible", true);
        }
    };

    gpii.updateModelExtraValue = function (that) {
        var newValue = that.model.gpii_primarySchema_speakText
        that.applier.requestChange("visualAlternativesExtraVisible", newValue);
    };

    gpii.speakText.updateModelAllHidden = function (that) {
        that.applier.requestChange("visualAlternativesPartialVisible", false);
    };

    gpii.speakText.showOrHideDependingOnState = function (state, showEvent, hideEvent) {
        state ? showEvent() : hideEvent();
    };

    gpii.speakText.lookupMsg = function (messageResolver, value) {
        var looked = messageResolver.lookup([value]);
        return looked ? looked.template : looked;
    };

})(jQuery, fluid);
