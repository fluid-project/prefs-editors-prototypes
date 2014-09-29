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
                messageResolver: "{prefsEditorLoader}.msgResolver",
                messageQueue: []
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
                onNewMessage: null,
                onMessageUpdate: null,
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
                    "funcName": "{that}.events.onNewMessage.fire",
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
                "onLogout.updateStatus": {
                    "funcName": "{that}.events.onNewMessage.fire",
                    "args": ["{that}.msgLookup.onLogoutMessage"]
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
                "onReady.setMessageButtonText": {
                    "this": "{that}.dom.messageButton",
                    "method": "text",
                    "args": ["{that}.msgLookup.messageButtonText"]
                },
                "onSettingChanged.showSaveButton": {
                    "this": "{that}.dom.saveButtonContainer",
                    "method": "show",
                    "args": []
                },
                "onSettingChanged.updateStatus": {
                    "funcName": "{that}.events.onNewMessage.fire",
                    "args": ["{that}.msgLookup.onSettingChangedMessage"]
                },
                "onNewMessage.handleMessage": {
                    "funcName": "gpii.pcp.handleNewMessage",
                    "args": ["{that}", "{arguments}.0"]
                },
                "onMessageUpdate.showMessage": {
                    "funcName": "gpii.pcp.showMessageDialog",
                    "args": ["{that}"]
                },
                "onReady.closeMessageButton": {
                    "this": "{that}.dom.messageButton",
                    "method": "click",
                    "args": ["{that}.closeMessageDialog"]
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
                },
                closeMessageDialog: {
                    "funcName": "gpii.pcp.closeMessageDialog",
                    "args": ["{that}"]
                }
            },
            selectors: {
                saveAndApply: ".flc-prefsEditor-save",
                saveButtonContainer: ".gpii-pcp-saveButtonContainer",
                cloudIcon: ".gpii-pcp-cloudIcon",
                fullEditorLink: ".gpiic-prefsEditor-fullEditorLink",
                logoutLink: ".gpiic-prefsEditor-userLogoutLink",
                messageContainer: ".gpiic-pcp-statusMessage",
                messageButton: ".gpiic-pcp-messageButton"
            },
            selectorsToIgnore: ["cloudIcon"]
        }
    });

    gpii.pcp.handleNewMessage = function (that, message) {
        that.messageQueue.push(message);
        that.events.onMessageUpdate.fire();
    };

    // TODO: perhaps these two functions could be united with pmt's equivalent ones for dialog handling

    gpii.pcp.showMessageDialog = function (that) {
        if (that.messageQueue.length) {
            message = that.messageQueue[0];
            that.dom.locate("messageLineLabel").text(message);
        };

        // re-wrap jQuery 1.7 element as jQuery 1.9 version in order to support the "appendTo" param.
        var messageElement = that.dom.locate("messageContainer");

        messageElement.dialog({
            autoOpen: true,
            modal: true,
            appendTo: ".gpii-prefsEditors-panelBottomRow",
            dialogClass: "gpii-dialog-noTitle",
            closeOnEscape: false,
            width: "28em",
            position: { my: "center", at: "center", of: ".gpii-prefsEditor-preferencesContainer" }
        });
    };

    gpii.pcp.closeMessageDialog = function (that) {
        var messageElement = that.dom.locate("messageContainer");
        messageElement.dialog("destroy");

        lastMessage = that.messageQueue.shift();

        if (that.messageQueue.length) {
            if (that.messageQueue[0] === lastMessage) {
                that.messageQueue.shift();
            } else {
                that.events.onMessageUpdate.fire();
            }
        };
    };

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
