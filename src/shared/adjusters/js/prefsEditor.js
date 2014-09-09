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
            gradeNames: ["fluid.prefs.msgLookup"],
            members: {
                messageResolver: "{prefsEditorLoader}.msgResolver"
            },
            distributeOptions: [{
                source: "{that}.options.statusMessageID",
                target: "{that > addContrast > contrastEnabled}.options.ariaControls"
            }, {
                source: "{that}.options.statusMessageID",
                target: "{that > addContrast > contrastThemeNoPreview}.options.ariaControls"
            }, {
                source: "{that}.options.statusMessageID",
                target: "{that > increaseSize > magnifierEnabled}.options.ariaControls"
            }],
            events: {
                onLogout: null,
                onSettingChanged: null
            },
            listeners: {
                "onReady.setATTRsaveButton": {
                    "this": "{that}.dom.saveButton",
                    "method": "attr",
                    "args": ["value", "{that}.msgLookup.saveAndApplyText"]
                },
                "onSave.hideSaveButton": {
                    "this": "{that}.dom.saveButtonContainer",
                    "method": "hide",
                    "args": []
                },
                "onSave.updateStatus": {
                    "this": "{that}.dom.messageLineLabel",
                    "method": "text",
                    "args": ["{that}.msgLookup.onSaveAndApplyStatus"]
                },
                "onReady.setFullEditorLink": {
                    "this": "{that}.dom.fullEditorLink",
                    "method": "attr",
                    "args": ["href", "{prefsEditorLoader}.options.pmtUrl"]
                },
                "onLogout.gpiiLogout": {
                    listener: "{gpiiSession}.logout"
                },
                "onLogout.disableSaveButton": {
                    "this": "{that}.dom.saveAndApply",
                    "method": "prop",
                    "args": ["disabled", "true"]
                },
                "onLogout.disableCloudIcon": {
                    "this": "{that}.dom.cloudIcon",
                    "method": "addClass",
                    "args": ["gpii-disabled"]
                },
                "onReady.setSaveAndApplyButtonText": {
                    "this": "{that}.dom.saveAndApply",
                    "method": "attr",
                    "args": ["value", "{that}.msgLookup.saveAndApplyText"]
                },
                "onReady.setFullEditorLinkText": {
                    "this": "{that}.dom.fullEditorLink",
                    "method": "text",
                    "args": ["{that}.msgLookup.fullEditorText"]
                },
                "onReady.setLogoutLinkText": {
                    "this": "{that}.dom.logoutLink",
                    "method": "text",
                    "args": ["{that}.msgLookup.logoutText"]
                },
                "onReady.bindLogout": {
                    "this": "{that}.dom.logoutLink",
                    "method": "click",
                    "args": ["{that}.events.onLogout.fire"]
                },
                "onReady.logoutLinkPreventDefault": {
                    "this": "{that}.dom.logoutLink",
                    "method": "click",
                    "args": ["{that}.preventDefaultLinkEvent"]
                },
                "onReady.addStatusMessageID": {
                    "this": "{that}.dom.messageLineLabel",
                    "method": "attr",
                    "args": ["id", "{that}.options.statusMessageID"]
                },
                "onReady.addAriaControlsForSaveButton": {
                    "this": "{that}.dom.saveAndApply",
                    "method": "attr",
                    "args": ["aria-controls", "{that}.options.statusMessageID"]
                },
                "onReady.bindModelChangedListener": {
                    // used instead of the declarative syntax so that
                    // model won't "count" as updated when fetching from
                    // the server. Thus, onSettingChanged is not fired on load.
                    "listener": "{that}.applier.modelChanged.addListener",
                    "args": ["", "{that}.events.onSettingChanged.fire"]
                },
                "onSettingChanged.showSaveButton": {
                    "this": "{that}.dom.saveButtonContainer",
                    "method": "show",
                    "args": []
                },
                "onSettingChanged.updateStatus": {
                    "this": "{that}.dom.messageLineLabel",
                    "method": "text",
                    "args": ["{that}.msgLookup.onSettingChangedMessage"]
                }
            },
            invokers: {
                applySettings: {
                    "funcName": "gpii.applySettings",
                    "args": "{that}"
                },
                showUserStatusBar: {
                    "this": "{that}.dom.userStatusBar",
                    "method": "slideDown"
                },
                saveSettings: {
                    "func": "{gpiiStore}.set",
                    "args": "{that}.model",
                    "dynamic": true
                },
                preventDefaultLinkEvent: {
                    "funcName": "gpii.eventUtility.preventDefaultEvent"
                }
            },
            selectors: {
                saveAndApply: ".flc-prefsEditor-save",
                saveButtonContainer: ".gpii-pcp-saveButtonContainer",
                cloudIcon: ".gpii-pcp-cloudIcon",
                messageLineLabel: ".gpiic-prefsEditor-messageLine",
                fullEditorLink: ".gpiic-prefsEditor-fullEditorLink",
                logoutLink: ".gpiic-prefsEditor-userLogoutLink"
            },
            selectorsToIgnore: ["cloudIcon"]
        }
    });

    gpii.applySettings = function (that) {
        var savedSettings = that.modelTransform(that.model);
        if (that.socket) {
            that.socket.emit("message", savedSettings, fluid.log);
        } else {
            that.socket = that.socket || io.connect("http://localhost:8081/update");
            that.socket.on("connect", function () {
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

    gpii.prefsEditor.triggerEvent = function (that, targetSelector, event) {
        that.locate(targetSelector).trigger(event);
    };
})(jQuery, fluid);
