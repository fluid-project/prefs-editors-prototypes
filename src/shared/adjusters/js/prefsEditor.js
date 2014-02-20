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
        gradeNames: ["fluid.prefs.GPIIEditor", "autoInit"],
        prefsEditor: {
            gradeNames: ["fluid.prefs.stringBundle", "gpii.prefs.gpiiStore"],
            members: {
                messageResolver: "{prefsEditorLoader}.msgBundle"
            },
            events: {
                onLogin: null,
                onLogout: null
            },
            model: {
                userLoggedIn: false
            },
            listeners: {
                "onCreate.setUserToken": {
                    listener: "fluid.set",
                    args: ["{gpiiSession}", ["options", "loggedUser"], {
                        expander: {
                            funcName: "gpii.prefs.getUserToken"
                        }
                    }]
                },
                "onReady.onApplySettings": {
                    "this": "{that}.dom.applyButton",
                    "method": "click",
                    "args": ["{that}.applySettings"]
                },
                "onReady.setInitialModel": {
                    listener: "gpii.prefsEditor.setInitialModel",
                    args: ["{that}"]
                },
                "onLogin.setUserLoggedIn": {
                    listener: "{that}.applier.requestChange",
                    args: ["userLoggedIn", true]
                },
                "onLogin.showSaveMessage": {
                    "this": "{that}.dom.messageLineLabel",
                    "method": "text",
                    "args": ["{that}.stringBundle.preferencesModified"]
                },
                "onLogin.showUserStatusBar": {
                    "listener": "{that}.showUserStatusBar"
                },
                "onReset.triggerLogoutEvent": {
                    "listener": "{that}.events.onLogout.fire"
                },
                "onLogout.setUserLoggedIn": {
                    listener: "{that}.applier.requestChange",
                    args: ["userLoggedIn", false]
                },
                "onLogout.clearMessage": {
                    "this": "{that}.dom.messageLineLabel",
                    "method": "text",
                    "args": [""]
                },
                "onReady.setSaveButtonText": {
                    "this": "{that}.dom.saveButtonLabel",
                    "method": "attr",
                    "args": ["value", "{that}.stringBundle.saveText"]
                },
                "onReady.setFullEditorLinkText": {
                    "this": "{that}.dom.fullEditorLink",
                    "method": "text",
                    "args": ["{that}.stringBundle.fullEditorText"]
                },
                "onReady.setLogoutLinkText": {
                    "this": "{that}.dom.logoutLink",
                    "method": "text",
                    "args": ["{that}.stringBundle.logoutText"]
                },
                "onReady.setApplyButtonText": {
                    "this": "{that}.dom.applyButton",
                    "method": "attr",
                    "args": ["value", "{that}.stringBundle.applyText"]
                }
            },
            invokers: {
                applySettings: {
                    "funcName": "gpii.applySettings",
                    "args": "{that}",
                    "dynamic": true
                },
                showUserStatusBar: {
                    "this": "{that}.dom.userStatusBar",
                    "method": "slideDown"
                }
            },
            selectors: {
                save: ".flc-prefsEditor-save",
                saveButtonLabel: ".flc-prefsEditor-save",
                applyButton: ".gpiic-prefsEditor-applyButton",
                messageLineLabel: ".gpiic-prefsEditor-messageLine",
                fullEditorLink: ".gpiic-prefsEditor-fullEditorLink",
                logoutLink: ".gpiic-prefsEditor-userLogoutLink"
            },
            selectorsToIgnore: ["save"]
        }
    });

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
