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
            components: {
                socket: {
                    type: "gpii.pcp.socket"
                }
            },
            port: 8081,
            updateURL: "update",
            members: {
                messageResolver: "{prefsEditorLoader}.msgResolver"
            },
            events: {
                onLogin: null,
                onLogout: null,
                onApply: null,
                onRequestPageTransition: null,
                onSettingChanged: null
            },
            model: {
                userLoggedIn: false
            },
            listeners: {
                "onReady.setATTRsaveButton": {
                    "this": "{that}.dom.saveButton",
                    "method": "attr",
                    "args": ["value", "{that}.msgLookup.saveAndApplyText"]
                },
                "onApply.hideSaveButton": {
                    "this": "{that}.dom.saveButtonContainer",
                    "method": "hide",
                    "args": []
                },
                "onApply.applySettings": {
                    "listener": "{socket}.applySettings"
                },
                "onReady.bindApply": {
                    "this": "{that}.dom.saveAndApply",
                    "method": "click",
                    "args": ["{that}.events.onApply.fire"]
                },
                "onReady.fullEditorLink": {
                    "this": "{that}.dom.fullEditorLink",
                    "method": "click",
                    "args": ["{that}.events.onRequestPageTransition.fire"]
                },
                "onRequestPageTransition.save": "{that}.saveSettings",
                "onRequestPageTransition.goToPMT": {
                    "funcName": "fluid.set",
                    "args": [window, "location.href", "{prefsEditorLoader}.options.pmtUrl"]
                },
                "onLogin.setUserLoggedIn": {
                    listener: "{that}.applier.requestChange",
                    args: ["userLoggedIn", true]
                },
                "onLogin.showSaveMessage": {
                    "this": "{that}.dom.messageLineLabel",
                    "method": "text",
                    "args": ["{that}.msgLookup.preferencesModified"]
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
                "onReady.fullEditorLinkPreventDefault": {
                    "this": "{that}.dom.fullEditorLink",
                    "method": "click",
                    "args": ["{that}.preventDefaultLinkEvent"]
                },
                "onReady.setSaveAndApplyButtonText": {
                    "this": "{that}.dom.saveAndApply",
                    "method": "attr",
                    "args": ["value", "{that}.msgLookup.saveAndApplyText"]
                },
                "onReady.logoutLinkPreventDefault": {
                    "this": "{that}.dom.logoutLink",
                    "method": "click",
                    "args": ["{that}.preventDefaultLinkEvent"]
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
                }
            },
            invokers: {
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
                saveAndApply: ".gpiic-PCP-save",
                saveButtonContainer: ".gpii-pcp-saveButtonContainer",
                cloudIcon: ".gpii-pcp-cloudIcon",
                messageLineLabel: ".gpiic-prefsEditor-messageLine",
                fullEditorLink: ".gpiic-prefsEditor-fullEditorLink",
                logoutLink: ".gpiic-prefsEditor-userLogoutLink"
            },
            selectorsToIgnore: ["cloudIcon"]
        }
    });

    gpii.prefsEditor.triggerEvent = function (that, targetSelector, event) {
        that.locate(targetSelector).trigger(event);
    };
})(jQuery, fluid);
