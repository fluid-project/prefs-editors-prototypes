/*!
Cloud4all Preferences Management Tools

Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global fluid, gpii, jQuery, navigator*/
/*jslint white: true, onevar: true, funcinvoke: true, forvar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

(function (fluid) {
    fluid.defaults("gpii.pmt", {
        gradeNames: ["fluid.prefs.GPIIEditor", "autoInit"],
        prefsEditor: {
            gradeNames: ["fluid.prefs.stringBundle"],
            members: {
                messageResolver: "{prefsEditorLoader}.msgBundle"
            },
            events: {
                onLogin: null,
                onLogout: null
            },
            selectors: {
                myPreferencesLabel: ".gpiic-pmt-preferenceSetSelectionButtonMyPreferencesLabel",
                allPreferencesLabel: ".gpiic-pmt-preferenceSetSelectionButtonAllPreferencesLabel",
                saveAndApplyButtonLabel: ".flc-prefsEditor-save",
                messageLineLabel: ".gpiic-prefsEditor-messageLine",
                notification: ".gpiic-prefsEditor-notification",
                confirmButton: ".gpiic-prefsEditor-notificationConfirmButton",
                notificationMessagePart1: ".gpiic-prefsEditor-notificationMessagePart1",
                notificationMessagePart2: ".gpiic-prefsEditor-notificationMessagePart2",
                notificationMessagePart3: ".gpiic-prefsEditor-notificationMessagePart3",
                notificationTitle: ".gpiic-prefsEditor-notificationTitle",
                notificationConfirmButton: ".gpiic-prefsEditor-notificationConfirmButton",
                logoutLink: ".gpiic-prefsEditor-userLogoutLink",
                userStatusBar: ".gpiic-prefsEditor-userStatusBar"
            },
            model: {
                userLoggedIn: false
            },
            listeners: {
                // on Session login:
                "{gpiiSession}.events.accountCreated": {
                    listener: "{that}.showSaveNotification",
                    "args": ["{arguments}.0"]
                },
                // trigger login on notification confirmation
                "onReady.bindNotificationConfirmButtonClickTriggerLogin": {
                    "this": "{that}.dom.confirmButton",
                    "method": "click",
                    "args": ["{that}.events.onLogin.fire"]
                },
                // perform these onLogin
                "onLogin.setUserLoggedIn": {
                    listener: "{that}.applier.requestChange",
                    args: ["userLoggedIn", true]
                },
                "onLogin.hideNotification": {
                    "listener": "{that}.hideSaveNotification"
                },
                "onLogin.showSaveMessage": {
                    "listener": "{that}.showSaveMessage"
                },
                "onLogin.showUserStatusBar": {
                    "listener": "{that}.showUserStatusBar"
                },
                // trigger logout onReset (logout link is the reset button)
                "onReset.triggerLogoutEvent": {
                    "listener": "{that}.events.onLogout.fire"
                },
                // perform these onLogout
                "onLogout.setUserLoggedIn": {
                    listener: "{that}.applier.requestChange",
                    args: ["userLoggedIn", false]
                },
                "onLogout.hideUserStatusBar": {
                    "this": "{that}.dom.userStatusBar",
                    "method": "slideUp"
                },
                "onLogout.clearMessage": {
                    "this": "{that}.dom.messageLineLabel",
                    "method": "text",
                    "args": [""]
                },
                "onLogout.gpiiLogout": {
                    listener: "{gpiiSession}.logout"
                },
                // set texts
                "onReady.setMyPreferencesLabelText": {
                    "this": "{that}.dom.myPreferencesLabel",
                    "method": "text",
                    "args": ["{that}.stringBundle.myPreferencesLabelText"]
                },
                "onReady.setAllPreferencesLabelText": {
                    "this": "{that}.dom.allPreferencesLabel",
                    "method": "text",
                    "args": ["{that}.stringBundle.allPreferencesLabelText"]
                },
                "onReady.setSaveAndApplyButtonText": {
                    "this": "{that}.dom.saveAndApplyButtonLabel",
                    "method": "attr",
                    "args": ["value", "{that}.stringBundle.saveAndApplyText"]
                },
                "onReady.setNotificationMessagePart1": {
                    "this": "{that}.dom.notificationMessagePart1",
                    "method": "text",
                    "args": ["{that}.stringBundle.notificationMessagePart1"]
                },
                "onReady.setNotificationMessagePart2": {
                    "this": "{that}.dom.notificationMessagePart2",
                    "method": "text",
                    "args": ["{that}.stringBundle.notificationMessagePart2"]
                },
                "onReady.setNotificationMessagePart3": {
                    "this": "{that}.dom.notificationMessagePart3",
                    "method": "text",
                    "args": ["{that}.stringBundle.notificationMessagePart3"]
                },
                "onReady.setNotificationTitle": {
                    "this": "{that}.dom.notificationTitle",
                    "method": "text",
                    "args": ["{that}.stringBundle.notificationTitle"]
                },
                "onReady.setNotificationConfirmButton": {
                    "this": "{that}.dom.notificationConfirmButton",
                    "method": "text",
                    "args": ["{that}.stringBundle.notificationConfirmButton"]
                },
                "onReady.setLogoutLinkText": {
                    "this": "{that}.dom.logoutLink",
                    "method": "text",
                    "args": ["{that}.stringBundle.logoutText"]
                },
                // simply hide notification onReady
                "onReady.prepareSaveNotification": {
                    "this": "{that}.dom.notification",
                    "method": "hide"
                },
                // hide the logout link initially
                "onReady.hideUserStatusBar": {
                    "this": "{that}.dom.userStatusBar",
                    "method": "hide",
                    "args": [0]
                },
                "onReady.addHidingListener": {
                    "listener": "{that}.applier.modelChanged.addListener",
                    "args": ["{that}.options.strings.mainVisibilitySwitch", "{that}.foldExpandedViewWhenOff"]
                }
            },
            invokers: {
                foldExpandedViewWhenOff: {
                    "funcName": "gpii.foldExpandedViewWhenOff",
                    "args": ["{that}.applier",
                             "{that}.model.gpii_primarySchema_visualAlternativesMoreLess",
                             "{that}.options.strings.extraVisibilitySwitch"
                        ],
                    "dynamic": true
                },
                showSaveNotification: {
                    "funcName": "gpii.pmt.showSaveNotification",
                    "args": ["{that}", "{arguments}.0"],
                    dynamic: true
                },
                hideSaveNotification: {
                    "funcName": "gpii.pmt.hideSaveNotification",
                    "args": ["{that}"],
                    dynamic: true
                },
                showSaveMessage: {
                    "this": "{that}.dom.messageLineLabel",
                    "method": "text",
                    "args": ["{that}.stringBundle.preferencesSavedToUSB"]
                },
                showUserStatusBar: {
                    "this": "{that}.dom.userStatusBar",
                    "method": "slideDown"
                }
            },
            strings: {
                "mainVisibilitySwitch": "gpii_primarySchema_speakText",
                "extraVisibilitySwitch": "gpii_primarySchema_visualAlternativesMoreLess"
            }
        },
        selectors: {
            gotoPcpButton: ".flc-prefsEditor-gotoPcp"
        },
        invokers: {
            openPcp: {
                funcName: "gpii.pmt.openPcp",
                args: ["{that}.options.pcpUrl", "{gpiiSession}.options.loggedUser"],
                dynamic: true
            }
        },
        listeners: {
            "onReady.bindClick": {
                "this": "{that}.dom.gotoPcpButton",
                method: "click",
                args: "{that}.openPcp"
            },
            "onReady.setInitialModel": {
                listener: "gpii.pmt.setInitialModel",
                args: ["{that}", "{gpiiStore}"],
                priority: "last"
            }
        }
    });

    gpii.foldExpandedViewWhenOff = function (applier, extraCurrentlyVisible, valueToBeChanged) {
        if (extraCurrentlyVisible) {
            applier.requestChange(valueToBeChanged, false);
        }
    };
    
    gpii.pmt.showSaveNotification = function (that, userToken) {
        // re-wrap jQuery 1.7 element as jQuery 1.9 version in order to support the "appendTo" param. 
        var notificationjq1_7 = that.dom.locate("notification");
        var unwrappedNotification = fluid.unwrap(notificationjq1_7);
        var notificationjq1_9 = $(unwrappedNotification);
        // create and show it immediately
        notificationjq1_9.dialog({
            autoOpen: true,
            modal: true,
            appendTo: ".gpiic-pmt-bottomRow",
            dialogClass: "gpii-dialog-noTitle",
            closeOnEscape: false,
            position: { my: "bottom", at: "bottom", of: ".gpii-prefsEditor-preferencesContainer" }
        });
        // also set the token text
        that.dom.locate("notificationMessagePart2").text(userToken);
    };

    gpii.pmt.hideSaveNotification = function (that) {
        // re-wrap jQuery 1.7 element as jQuery 1.9 version in order to support the "appendTo" param. 
        var notificationjq1_7 = that.dom.locate("notification");
        var unwrappedNotification = fluid.unwrap(notificationjq1_7);
        var notificationjq1_9 = $(unwrappedNotification);
        // destroy it on hide
        notificationjq1_9.dialog("destroy");
    };
    
	// FIXME: Figure out a better way to pass the user token.
    gpii.pmt.openPcp = function (pcpUrl, token) {
        window.open(pcpUrl + "?" + token);
        return false;
    };

    gpii.pmt.setInitialModel = function (that, gpiiStore) {
        var token = window.location.search.substring(1);
        if (token) {
            fluid.set(gpiiStore, ["gpiiSession", "options", "loggedUser"], token)
            var initialModel = gpiiStore.get();
            that.prefsEditor.applier.requestChange("", initialModel);
        }
    };

    fluid.defaults("gpii.pmt.previewPerSettingEnhanced", {
        gradeNames: "fluid.littleComponent",
        outerPreviewEnhancerOptions: "{originalEnhancerOptions}.options.originalUserOptions",
        emptyComponentType: "fluid.emptySubcomponent"
    });
})(fluid);
