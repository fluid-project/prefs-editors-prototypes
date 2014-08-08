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
            socketConnection: {
                "domain": "http://localhost",
                "port": "8081",
                "route": "update",
                "urlTemplate": "%domain:%port/%route"
            },
            members: {
                messageResolver: "{prefsEditorLoader}.msgResolver",
                socketURL: {
                    expander: {
                        funcName: "fluid.stringTemplate",
                        args: ["{that}.options.socketConnection.urlTemplate", "{that}.options.socketConnection"]
                    }
                }
            },
            events: {
                onLogin: null,
                onLogout: null,
                onApply: null,
                onSettingChanged: null
            },
            model: {
                userLoggedIn: false
            },
            listeners: {
                "onReady.setATTRapplyButton": {
                    "this": "{that}.dom.applyButton",
                    "method": "attr",
                    "args": ["value", "{that}.msgLookup.applyText"]
                },
                "onApply.hideApplyButton": {
                    "this": "{that}.dom.applyButtonContainer",
                    "method": "hide",
                    "args": []
                },
                "onApply.applySettings": {
                    "listener": "{socket}.applySettings"
                },
                "onReady.bindApply": {
                    "this": "{that}.dom.applyButton",
                    "method": "click",
                    "args": ["{that}.events.onApply.fire"]
                },
                "onReady.setFullEditorLink": {
                    "this": "{that}.dom.fullEditorLink",
                    "method": "attr",
                    "args": ["href", "{prefsEditorLoader}.options.pmtUrl"]
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
                "onLogout.disableApplyButton": {
                    "this": "{that}.dom.applyButton",
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
                "onReady.setApplyButtonButtonText": {
                    "this": "{that}.dom.applyButton",
                    "method": "attr",
                    "args": ["value", "{that}.msgLookup.applyText"]
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
                "onSettingChanged.showApplyButton": {
                    "this": "{that}.dom.applyButtonContainer",
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
                applyButton: ".gpiic-apply",
                applyButtonContainer: ".gpiic-applyButtonContainer",
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
