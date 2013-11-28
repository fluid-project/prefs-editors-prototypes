/*!
Cloud4all Preferences Management Tools

Copyright 2013 Astea

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

(function ($, fluid) {
    fluid.defaults("gpii.commonPrefsEditor", {
        gradeNames: ["fluid.prefs.fullNoPreview", "autoInit"],
        prefsEditor: {
            gradeNames: ["fluid.prefs.stringBundle"],
            members: {
                messageResolver: "{prefsEditorLoader}.msgBundle"
            },
            partiallyExpandedSlideSpeed: 500,

            model: {
                visualAlternativesPartialVisible: false
            },
            events: {
                onShowVisualAlternativesPartial: null,
                onHideVisualAlternativesPartial: null
            },
            listeners: {

                //  Visual alternatives adjuster group part

                "onCreate.addSpeakTextSwitchListener": {
                    "listener": "{that}.applier.modelChanged.addListener",
                    "args": ["gpii_primarySchema_speakText", "{that}.updateModelVisualAlternativesPartial"]
                },
                "onCreate.addPartialVisibilityListener": {
                    "listener": "{that}.applier.modelChanged.addListener",
                    "args": ["visualAlternativesPartialVisible", "{that}.showHideVisualAlternativesPartial"]
                },
                "onReady.setTextVisualAlternativesHeader": {
                    "this": "{that}.dom.visualAlternativesHeader",
                    "method": "text",
                    "args": ["{that}.stringBundle.visualAlternativesPresetButtonLabel"]
                },
                "onShowVisualAlternativesPartial.showPartialAdjusters": {
                    "this": "{that}.dom.visualAlternativesPartialAdjusters",
                    "method": "slideDown",
                    "args": ["{that}.options.partiallyExpandedSlideSpeed"]
                },
                "onHideVisualAlternativesPartial.hideAdjusters": {
                    "this": "{that}.dom.visualAlternativesPartialAdjusters",
                    "method": "slideUp",
                    "args": ["{that}.options.partiallyExpandedSlideSpeed"]
                },


                // Volume adjuster group part

                "onReady.setTextVolumeHeader": {
                    "this": "{that}.dom.volumeHeader",
                    "method": "text",
                    "args": ["{that}.stringBundle.volumePresetButtonLabel"]
                },


                // Language adjuster group part

                "onReady.setTextLanguageHeader": {
                    "this": "{that}.dom.languageHeader",
                    "method": "text",
                    "args": ["{that}.stringBundle.languagePresetButtonLabel"]
                },
                "onReady.activateCombobox": {
                    "funcName": "gpii.activateCombobox",
                    "args": ["{that}", "universalLanguage"]
                },


                // Save, Reset & Cancel part

                "onReady.setSaveAndApplyText": {
                    "this": "{that}.dom.saveAndApply",
                    "method": "prop",
                    "args": ["value", "{that}.stringBundle.saveAndApply"]
                },
                "onReady.setResetAndApplyText": {
                    "this": "{that}.dom.resetAndApply",
                    "method": "prop",
                    "args": ["value", "{that}.stringBundle.resetAndApply"]
                },
                "onReady.setCancelText": {
                    "this": "{that}.dom.cancel",
                    "method": "prop",
                    "args": ["value", "{that}.stringBundle.cancel"]
                },
                "onReady.onSaveVisibilityActualisation": {
                    "this": "{that}.dom.saveAndApply",
                    "method": "click",
                    "args": ["{that}.updateModelAllHidden"]
                },
                "onReady.onSaveToPreferencesServer": {
                    "this": "{that}.dom.saveAndApply",
                    "method": "click",
                    "args": ["{that}.saveToPreferencesServer"]
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
                saveToPreferencesServer: {
                    "funcName": "gpii.saveToPreferencesServer",
                    "args": ["{that}"],
                    "dynamic": true
                },
                updateModelVisualAlternativesPartial: {
                    "funcName": "gpii.updateModelVisualAlternativesPartial",
                    "args": ["{that}"],
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
                updateModelAllHidden: {
                    "funcName": "gpii.updateModelAllHidden",
                    "args": ["{that}"],
                    "dynamic": true
                }
            },
            selectors: {
                visualAlternativesPartialAdjusters: ".gpii-partially-expanded",
                visualAlternativesHeader: ".gpii-visualAlternativesPresetButton-label",

                volumeHeader: ".gpii-volumePresetButton-label",

                languageHeader: ".gpii-languagePresetButton-label",

                saveAndApply: ".flc-prefsEditor-save",
                resetAndApply: ".flc-prefsEditor-reset",
                cancel: ".flc-prefsEditor-cancel"
            },
            selectorsToIgnore: ["languageHeader", "volumeHeader", "visualAlternativesPartialAdjusters", "visualAlternativesHeader",  "saveAndApply", "resetAndApply", "cancel"],
        }
    });    

    gpii.activateCombobox = function (that, id) {
        $("#" + id).combobox();
        $("#" + id).change(function (event, newValue) {
            that.applier.requestChange("gpii_primarySchema_" + id, newValue);
        });
    };

    gpii.moreLess = function (that, extraVisible) {
        that.applier.requestChange("visualAlternativesExtraVisible", !extraVisible);
    };

    gpii.updateModelVisualAlternativesPartial = function (that) {
        var newValue = that.model.gpii_primarySchema_speakText;
        that.applier.requestChange("visualAlternativesPartialVisible", newValue);
        if (that.model.visualAlternativesExtraVisible) {
            that.applier.requestChange("visualAlternativesExtraVisible", false);
        }
    };

    gpii.updateModelAllHidden = function (that) {
        var visibilityFlags = ["visualAlternativesExtraVisible", "visualAlternativesPartialVisible"];

        fluid.each(visibilityFlags, function (flag) {
            that.applier.requestChange(flag, false);
        });

        gpii.activateCombobox(that, "universalLanguage"); //needed for combobox styling of the universalLanguage adjuster after saving.
    };

    gpii.showOrHideDependingOnState = function (state, showEvent, hideEvent) {
        state ? showEvent() : hideEvent();
    };

    gpii.saveToPreferencesServer = function (that) {
        var common_model_part = "gpii_primarySchema_";
        var size_common = common_model_part.length;

        var keys_in_model = $.grep(Object.keys(that.model), function (el) {return el.substring(0, size_common) === common_model_part;});
        var keys_for_post = $.map(keys_in_model, function (el) {return "http://registry.gpii.org/common/" + el.substring(size_common, el.length);});
        var saved_settings = {};

        for (var i = 0; i < keys_for_post.length; i++) {
            saved_settings[keys_for_post[i]] = [{value: that.model[keys_in_model[i]]}];
        }

        $.ajax({
            type: "POST",
            url: "http://preferences.gpii.net/user/", // still not supported
            data: saved_settings,
            success: function () {
                alert("Successfully sent to the Preferences server.");
            }
        });
    };

})(jQuery, fluid);
