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
            listeners: {

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
                "onReady.onSaveToPreferencesServer": {
                    "this": "{that}.dom.saveAndApply",
                    "method": "click",
                    "args": ["{that}.saveToPreferencesServer"]
                }
            },
            invokers: {
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

    // gpii.activateCombobox = function (that, id) {
    //     $("#" + id).combobox();
    //     $("#" + id).change(function (event, newValue) {
    //         that.applier.requestChange("gpii_primarySchema_" + id, newValue);
    //     });
    // };

    // gpii.moreLess = function (that, extraVisible) {
    //     that.applier.requestChange("visualAlternativesExtraVisible", !extraVisible);
    // };


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
