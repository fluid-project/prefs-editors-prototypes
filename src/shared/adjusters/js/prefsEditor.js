/*!
Cloud4all Preferences Management Tools

Copyright 2013 Astea

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

(function ($, fluid) {
    fluid.defaults("gpii.prefsEditor", {
        gradeNames: ["fluid.prefs.fullNoPreview", "autoInit"],
        prefsEditor: {
            gradeNames: ["fluid.prefs.stringBundle"],
            members: {
                messageResolver: "{prefsEditorLoader}.msgBundle"
            },
            listeners: {
                "onCreate.addListener": {
                    "listener": "{that}.applier.modelChanged.addListener",
                    "args": ["gpii_primarySchema_speakText", "{that}.foldExpandedViewWhenOff"]
                },
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
                "onReady.onSaveToPreferencesServer": {
                    "this": "{that}.dom.saveAndApply",
                    "method": "click",
                    "args": ["{that}.saveToPreferencesServer"]
                }
            },
            invokers: {
                foldExpandedViewWhenOff: {
                    "funcName": "gpii.foldExpandedViewWhenOff",
                    "args": ["{that}.applier",
                             "{that}.model.gpii_primarySchema_visualAlternativesMoreLess",
                             "gpii_primarySchema_visualAlternativesMoreLess"
                        ],
                    "dynamic": true
                },
                saveToPreferencesServer: {
                    "funcName": "gpii.saveToPreferencesServer",
                    "args": ["{that}"],
                    "dynamic": true
                }
            },
            selectors: {
                saveAndApply: ".flc-prefsEditor-save",
                resetAndApply: ".flc-prefsEditor-reset",
                cancel: ".flc-prefsEditor-cancel"
            },
            selectorsToIgnore: ["saveAndApply", "resetAndApply", "cancel"]
        }
    });

    gpii.foldExpandedViewWhenOff = function (applier, extraVisible, valueToChange) {
        if (extraVisible) {
            applier.requestChange(valueToChange, false);
        }
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
            // url: "http://preferences.gpii.net/user/", // still not supported
            url: "http://localhost:8081/user/haha",
            data: saved_settings,
            success: function () {
                alert("Successfully sent to the Preferences server.");
            }
        });
    };
})(jQuery, fluid);
