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
                volumePartialVisible: false,
                languagePartialVisible: false
            },
            events: {
                onShowVisualAlternativesPartial: null,
                onHideVisualAlternativesPartial: null,
                onHideVisualAlternativesTickIcon: null,
                onShowVisualAlternativesExtra: null,
                onHideVisualAlternativesExtra: null,

                onShowVolumePartial: null,
                onHideVolumePartial: null,
                onHideVolumeTickIcon: null,

                onShowLanguagePartial: null,
                onHideLanguagePartial: null,
                onHideLanguageTickIcon: null
            },
            listeners: {

                // Visual Alternatives adjuster group part

                "onHideVisualAlternativesTickIcon.hideTick": {
                    "this": "{that}.dom.visualAlternativesTickIcon",
                    "method": "hide"
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
                    "args": ["visualAlternativesPartialVisible", "{that}.showHideVisualAlternativesPartial"]
                },
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

                "onHideVolumeTickIcon.hideTick": {
                    "this": "{that}.dom.volumeTickIcon",
                    "method": "hide"
                },
                "onReady.setTextVolumeHeader": {
                    "this": "{that}.dom.volumeHeader",
                    "method": "text",
                    "args": ["{that}.options.strings.volumeHeader"]
                },
                "onReady.bindEventPreferenceSwitchVolume": {
                    "this": "{that}.dom.volumePreferenceSwitch",
                    "method": "change",
                    "args": ["{that}.updateVolumeModelValue"]
                },
                "onCreate.addVolumePartialVisibilityListener": {
                    "listener": "{that}.applier.modelChanged.addListener",
                    "args": ["volumePartialVisible", "{that}.showHideVolumePartial"]
                },
                "onShowVolumePartial.showPartialAdjusters": {
                    "this": "{that}.dom.volumePartialAdjusters",
                    "method": "slideDown",
                    "args": ["{that}.options.partiallyExpandedSlideSpeed"]
                },
                "onShowVolumePartial.showWhiteTickIcon": {
                    "this": "{that}.dom.volumeTickIcon",
                    "method": "show"
                },
                "onShowVolumePartial.setHeaderTextBold.addBoldClass": {
                    "this": "{that}.dom.volumeHeader",
                    "method": "addClass",
                    "args": ["{that}.options.styles.boldText"]
                },
                "onShowVolumePartial.setHeaderTextBold.removeNormalClass": {
                    "this": "{that}.dom.volumeHeader",
                    "method": "removeClass",
                    "args": ["{that}.options.styles.normalText"]
                },
                "onHideVolumePartial.hideAdjusters": {
                    "this": "{that}.dom.volumePartialAdjusters",
                    "method": "slideUp",
                    "args": ["{that}.options.partiallyExpandedSlideSpeed"]
                },
                "onHideVolumePartial.setHeaderTextNormal.addNormalClass": {
                    "this": "{that}.dom.volumeHeader",
                    "method": "addClass",
                    "args": ["{that}.options.styles.normalText"]
                },
                "onHideVolumePartial.setHeaderTextNormal.removeBoldClass": {
                    "this": "{that}.dom.volumeHeader",
                    "method": "removeClass",
                    "args": ["{that}.options.styles.boldText"]
                },
                "onHideVolumePartial.hideTick": {
                    "funcName": "{that}.events.onHideVolumeTickIcon.fire"
                },


                //  Language adjuster group part

                "onHideLanguageTickIcon.hideTick": {
                    "this": "{that}.dom.languageTickIcon",
                    "method": "hide"
                },
                "onReady.setTextLanguageHeader": {
                    "this": "{that}.dom.languageHeader",
                    "method": "text",
                    "args": ["{that}.options.strings.languageHeader"]
                },
                "onReady.bindEventPreferenceSwitchLanguage": {
                    "this": "{that}.dom.languagePreferenceSwitch",
                    "method": "change",
                    "args": ["{that}.updateLanguageModelValue"]
                },
                "onCreate.addLanguagePartialVisibilityListenerForAnimation": {
                    "listener": "{that}.applier.modelChanged.addListener",
                    "args": ["languagePartialVisible", "{that}.showHideLanguagePartial"]
                },
                "onCreate.addLanguagePartialVisibilityListenerForCombobox": {
                    "listener": "{that}.applier.modelChanged.addListener",
                    "args": ["languagePartialVisible", "{that}.activateCombobox"]
                },
                "onShowLanguagePartial.showPartialAdjusters": {
                    "this": "{that}.dom.languagePartialAdjusters",
                    "method": "slideDown",
                    "args": ["{that}.options.partiallyExpandedSlideSpeed"]
                },
                "onShowLanguagePartial.showWhiteTickIcon": {
                    "this": "{that}.dom.languageTickIcon",
                    "method": "show"
                },
                "onShowLanguagePartial.setHeaderTextBold.addBoldClass": {
                    "this": "{that}.dom.languageHeader",
                    "method": "addClass",
                    "args": ["{that}.options.styles.boldText"]
                },
                "onShowLanguagePartial.setHeaderTextBold.removeNormalClass": {
                    "this": "{that}.dom.languageHeader",
                    "method": "removeClass",
                    "args": ["{that}.options.styles.normalText"]
                },
                "onHideLanguagePartial.hideAdjusters": {
                    "this": "{that}.dom.languagePartialAdjusters",
                    "method": "slideUp",
                    "args": ["{that}.options.partiallyExpandedSlideSpeed"]
                },
                "onHideLanguagePartial.setHeaderTextNormal.addNormalClass": {
                    "this": "{that}.dom.languageHeader",
                    "method": "addClass",
                    "args": ["{that}.options.styles.normalText"]
                },
                "onHideLanguagePartial.setHeaderTextNormal.removeBoldClass": {
                    "this": "{that}.dom.languageHeader",
                    "method": "removeClass",
                    "args": ["{that}.options.styles.boldText"]
                },
                "onHideLanguagePartial.hideTick": {
                    "funcName": "{that}.events.onHideLanguageTickIcon.fire"
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
                activateCombobox: {
                    "funcName": "gpii.activateCombobox",
                    "args": ["{that}"]
                },
                updateModelValue: {
                    "funcName": "gpii.updateModelHeaderClicked",
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
                updateVolumeModelValue: {
                    "funcName": "gpii.updateModelVolumeHeaderClicked",
                    "args": ["{that}",
                             "{that}.model.volumePartialVisible"
                    ],
                    "dynamic": true
                },
                updateLanguageModelValue: {
                    "funcName": "gpii.updateModelLanguageHeaderClicked",
                    "args": ["{that}",
                             "{that}.model.languagePartialVisible"
                    ],
                    "dynamic": true
                },
                showHideVisualAlternativesPartial: {
                    "funcName": "gpii.showOrHideDependingOnState",
                    "args": ["{that}.model.visualAlternativesPartialVisible",
                             "{that}.events.onShowVisualAlternativesPartial.fire",
                             "{that}.events.onHideVisualAlternativesPartial.fire"
                    ],
                    "dynamic": true
                },
                showHideVolumePartial: {
                    "funcName": "gpii.showOrHideDependingOnState",
                    "args": ["{that}.model.volumePartialVisible",
                             "{that}.events.onShowVolumePartial.fire",
                             "{that}.events.onHideVolumePartial.fire"
                    ],
                    "dynamic": true
                },
                showHideLanguagePartial: {
                    "funcName": "gpii.showOrHideDependingOnState",
                    "args": ["{that}.model.languagePartialVisible",
                             "{that}.events.onShowLanguagePartial.fire",
                             "{that}.events.onHideLanguagePartial.fire"
                    ],
                    "dynamic": true
                },
                showHideExtra: {
                    "funcName": "gpii.showOrHideDependingOnState",
                    "args": ["{that}.model.visualAlternativesExtraVisible",
                             "{that}.events.onShowVisualAlternativesExtra.fire",
                             "{that}.events.onHideVisualAlternativesExtra.fire"
                    ],
                    "dynamic": true
                },
                updateModelAllHidden: {
                    "funcName": "gpii.updateModelAllHidden",
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
                volumeTickIcon: ".universalVolume-white-tick-icon",

                languagePreferenceSwitch: ".gpii-languagePresetButton",
                languagePartialAdjusters: ".gpii-language-partially-expanded",
                languageHeader: ".gpii-languagePresetButton-label",
                languageTickIcon: ".universalLanguage-white-tick-icon",

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
                        func: "gpii.lookupMsg",
                        args: ["{prefsEditorLoader}.msgBundle", "visualAlternativesPresetButtonLabel"]
                    }
                },
                volumeHeader: {
                    expander: {
                        func: "gpii.lookupMsg",
                        args: ["{prefsEditorLoader}.msgBundle", "volumePresetButtonLabel"]
                    }
                },
                languageHeader: {
                    expander: {
                        func: "gpii.lookupMsg",
                        args: ["{prefsEditorLoader}.msgBundle", "languagePresetButtonLabel"]
                    }
                },
                saveAndApply: {
                    expander: {
                        func: "gpii.lookupMsg",
                        args: ["{prefsEditorLoader}.msgBundle", "saveAndApply"]
                    }
                },
                resetAndApply: {
                    expander: {
                        func: "gpii.lookupMsg",
                        args: ["{prefsEditorLoader}.msgBundle", "resetAndApply"]
                    }
                },
                cancel: {
                    expander: {
                        func: "gpii.lookupMsg",
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
    };

    gpii.updateModelHeaderClicked = function (that, partialVisible, extraVisible) {
        if (extraVisible) {
            that.applier.requestChange("visualAlternativesPartialVisible", false);
            that.locate("speakTextSwitch").trigger('click');
        } else if (partialVisible && !extraVisible) {
            that.applier.requestChange("visualAlternativesPartialVisible", false);
        } else {
            that.applier.requestChange("visualAlternativesPartialVisible", true);
        }
    };

    gpii.updateModelVolumeHeaderClicked = function (that, partialVisible) {
        if (partialVisible) {
            that.applier.requestChange("volumePartialVisible", false);
        } else {
            that.applier.requestChange("volumePartialVisible", true);
        }
    };

    gpii.updateModelLanguageHeaderClicked = function (that, partialVisible) {
        if (partialVisible) {
            that.applier.requestChange("languagePartialVisible", false);
        } else {
            that.applier.requestChange("languagePartialVisible", true);
        }
    };

    gpii.updateModelExtraValue = function (that) {
        var newValue = that.model.gpii_primarySchema_speakText
        that.applier.requestChange("visualAlternativesExtraVisible", newValue);
    };

    gpii.updateModelAllHidden = function (that) {
        var visibilityFlags = ["languagePartialVisible", "visualAlternativesExtraVisible", "visualAlternativesPartialVisible", "volumePartialVisible"]
        fluid.each(visibilityFlags, function (flag) {
            that.applier.requestChange(flag, false);
        });
    };

    gpii.showOrHideDependingOnState = function (state, showEvent, hideEvent) {
        state ? showEvent() : hideEvent();
    };

    gpii.lookupMsg = function (messageResolver, value) {
        var looked = messageResolver.lookup([value]);
        return looked ? looked.template : looked;
    };

})(jQuery, fluid);
