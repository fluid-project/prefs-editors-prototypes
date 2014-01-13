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
        gradeNames: ["gpii.prefs.pmt_pilot_2", "autoInit"],
        userToken: null,
        prefsEditor: {
            gradeNames: ["fluid.prefs.stringBundle", "gpii.prefs.gpiiStore"],
            members: {
                messageResolver: "{prefsEditorLoader}.msgBundle"
            },
            listeners: {
                "onCreate.setUserToken": {
                    listener: "fluid.set",
                    args: ["{that}", ["options", "userToken"], {
                        expander: {
                            funcName: "gpii.prefsEditor.getUserToken"
                        }
                    }]
                },
                "onCreate.login": {
                    listener: "{gpiiSession}.login",
                    args: ["{that}.options.userToken"]
                },
                "{gpiiSession}.events.onLogin": {
                    listener: "gpii.prefsEditor.setInitialModel",
                    args: ["{that}"]
                },
                "onReady.setATTRsaveButton": {
                    "this": "{that}.dom.saveButton",
                    "method": "attr",
                    "args": ["value", "{that}.stringBundle.saveAndApplyText"]
                },
                "onCreate.addListener": {
                    "listener": "{that}.applier.modelChanged.addListener",
                    "args": ["gpii_primarySchema_speakText", "{that}.foldExpandedViewWhenOff"]
                },
                "onReady.onApplySettings": {
                    "this": "{that}.dom.saveAndApply",
                    "method": "click",
                    "args": ["{that}.applySettings"]
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
                applySettings: {
                    "funcName": "gpii.applySettings",
                    "args": "{that}",
                    "dynamic": true
                }
            },
            selectors: {
                saveAndApply: ".flc-prefsEditor-save"
            },
            selectorsToIgnore: ["saveAndApply"]
        }
    });

    gpii.prefsEditor.getUserToken = function (that) {
        return window.location.search.substring(1);
    };

    gpii.prefsEditor.setInitialModel = function (that) {
        var initialModel = that.get();
        that.applier.requestChange("", initialModel);
    };

    gpii.foldExpandedViewWhenOff = function (applier, extraVisible, valueToChange) {
        if (extraVisible) {
            applier.requestChange(valueToChange, false);
        }
    };

    gpii.applySettings = function (that, loggedIn) {
        var common_model_part = "gpii_primarySchema_";
        var size_common = common_model_part.length;

        var keys_in_model = $.grep(Object.keys(that.model), function (el) {return el.substring(0, size_common) === common_model_part;});
        var keys_for_post = $.map(keys_in_model, function (el) {return "http://registry.gpii.org/common/" + el.substring(size_common, el.length);});
        var saved_settings = {};

        for (var i = 0; i < keys_for_post.length; i++) {
            saved_settings[keys_for_post[i]] = [{value: that.model[keys_in_model[i]]}];
        }

        if (that.socket) {
            that.socket.emit("message", saved_settings, fluid.log);
        } else {
            that.socket = that.socket || io.connect("http://localhost:8080/update");
            that.socket.on("connect", function (){
                that.socket.emit("message", saved_settings, fluid.log);
            });
            fluid.each(["error", "disconnect"], function (event) {
                that.socket.on(event, function (data) {
                    fluid.log(data);
                    that.socket.disconnect();
                    delete that.socket;
                });
            });
        }
    };

})(jQuery, fluid);
