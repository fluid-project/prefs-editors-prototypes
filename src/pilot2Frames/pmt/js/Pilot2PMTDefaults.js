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

(function ($, fluid) {
    fluid.defaults("gpii.prefs.pmt_pilot_2", {
        gradeNames: ["fluid.prefs.GPIIEditor", "autoInit"],
        prefsEditor: {
            gradeNames: ["fluid.prefs.stringBundle"],
            members: {
                messageResolver: "{prefsEditorLoader}.msgBundle"
            },
            events: {
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
            listeners: {
                onSave: {
                    listener: "console.log"
                },
                "onReady.bindNotificationConfirmButtonClickHideNotification": {
                    "this": "{that}.dom.confirmButton",
                    "method": "click",
                    "args": ["{that}.hideSaveNotification"]
                },
                "onReady.bindNotificationConfirmButtonClickShowSaveMessage": {
                    "this": "{that}.dom.confirmButton",
                    "method": "click",
                    "args": ["{that}.showSaveMessage"]
                },
                "onReady.bindNotificationConfirmButtonClickShowUserStatusBar": {
                    "this": "{that}.dom.confirmButton",
                    "method": "click",
                    "args": ["{that}.showUserStatusBar"]
                },
                "onReady.bindLogoutLinkClick": {
                    "this": "{that}.dom.logoutLink",
                    "method": "click",
                    "args": ["{that}.events.onLogout.fire"]
                },
                /*"onLogout.reloadPage": {
                    "this": "location",
                    "method": "reload"
                },*/
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
                "onReady.prepareSaveNotification": {
                    "this": "{that}.dom.notification",
                    "method": "dialog",
                    "args": [{
                        autoOpen: false,
                        modal: true,
                        //width: 420,
                        dialogClass: "gpii-dialog-noTitle",
                        closeOnEscape: false,
                        position: { my: "bottom", at: "bottom", of: ".gpii-prefsEditor-preferencesContainer" }
                    }]
                },
                "onReady.setLogoutLinkText": {
                    "this": "{that}.dom.logoutLink",
                    "method": "text",
                    "args": ["{that}.stringBundle.logoutText"]
                },
                "onReady.hideUserStatusBar": {
                    "this": "{that}.dom.userStatusBar",
                    "method": "hide",
                    "args": [0]
                },
                "onSave.showSaveNotification": {
                    listener: "gpii.prefs.pmt_pilot_2.showSaveNotification"
                },
                "onReset.hideUserStatusBar": {
                    "this": "{that}.dom.userStatusBar",
                    "method": "slideUp"
                },
                "onReset.clearMessage": {
                    "this": "{that}.dom.messageLineLabel",
                    "method": "text",
                    "args": [""]
                },
                "onReady.console": {
                    "this": "console",
                    "method": "log",
                    "args": ["{that}"]
                }
            },
            invokers: {
                hideSaveNotification: {
                    "funcName": "gpii.prefs.pmt_pilot_2.hideSaveNotification"
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
            }
        }
    });
    
    gpii.prefs.pmt_pilot_2.showSaveNotification = function () {
        // Had to reference the notification container this way, because jQuery.dialog()
        // detaches it from its original position and appends it to body, making Infusion
        // DOM to lose reference to it.
        $(".gpiic-prefsEditor-notification").dialog("open");
    };
    
    gpii.prefs.pmt_pilot_2.hideSaveNotification = function () {
        // Had to reference the notification container this way, because jQuery.dialog()
        // detaches it from its original position and appends it to body, making Infusion
        // DOM to lose reference to it.
        $(".gpiic-prefsEditor-notification").dialog("close");
    };

})(jQuery, fluid);
