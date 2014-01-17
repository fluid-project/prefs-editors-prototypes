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
        gradeNames: ["gpii.prefs.pcp_pilot_2", "autoInit"],
        prefsEditor: {
            gradeNames: ["fluid.prefs.stringBundle", "gpii.prefs.gpiiStore"],
            members: {
                messageResolver: "{prefsEditorLoader}.msgBundle"
            },
            listeners: {
                "onCreate.setUserToken": {
                    listener: "fluid.set",
                    args: ["{gpiiSession}", ["options", "loggedUser"], {
                        expander: {
                            funcName: "gpii.prefsEditor.getUserToken"
                        }
                    }]
                },
                "onReady.setATTRsaveButton": {
                    "this": "{that}.dom.saveButton",
                    "method": "attr",
                    "args": ["value", "{that}.stringBundle.saveAndApplyText"]
                },
                "onReady.onApplySettings": {
                    "this": "{that}.dom.saveAndApply",
                    "method": "click",
                    "args": ["{that}.applySettings"]
                },
                "onReady.setInitialModel": {
                    listener: "gpii.prefsEditor.setInitialModel",
                    args: ["{that}"]
                }
            },
            invokers: {
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

    gpii.applySettings = function (that) {
        var savedSettings = that.modelTransform(that.model);
        if (that.socket) {
            that.socket.emit("message", savedSettings, fluid.log);
        } else {
            that.socket = that.socket || io.connect("http://localhost:8081/update");
            that.socket.on("connect", function (){
                that.socket.emit("message", savedSettings, fluid.log);
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
