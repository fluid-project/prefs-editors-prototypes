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
        gradeNames: ["fluid.prefs.fullNoPreview", "autoInit"],
        prefsEditor: {
            selectors: {
                myPreferencesLabel: ".gpiic-pmt-preferenceSetSelectionButtonMyPreferencesLabel",
                allPreferencesLabel: ".gpiic-pmt-preferenceSetSelectionButtonAllPreferencesLabel",
                saveAndApplyButtonLabel: ".gpiic-pmt-saveAndApplyButtonLabel",
                messageLineLabel: ".gpiic-prefsEditor-messageLine",
                notification: ".gpiic-prefsEditor-notification",
                confirmButton: ".gpiic-prefsEditor-notificationConfirmButton"
            },
            strings: {
                myPreferencesLabelText: {
                    expander: {
                        func: "gpii.lookupMsg",
                        args: ["{prefsEditorLoader}.msgBundle", "myPreferencesLabelText"]
                    }
                },
                allPreferencesLabelText: {
                    expander: {
                        func: "gpii.lookupMsg",
                        args: ["{prefsEditorLoader}.msgBundle", "allPreferencesLabelText"]
                    }
                },
                saveAndApplyText: {
                    expander: {
                        func: "gpii.lookupMsg",
                        args: ["{prefsEditorLoader}.msgBundle", "saveAndApplyText"]
                    }
                },
                preferencesSavedToUSB: {
                    expander: {
                        func: "gpii.lookupMsg",
                        args: ["{prefsEditorLoader}.msgBundle", "preferencesSavedToUSB"]
                    }
                }
            },
            listeners: {
                onSave: {
                    listener: "console.log"
                },
                "onSave.showSaveMessage": {
                    "this": "{that}.dom.messageLineLabel",
                    "method": "text",
                    "args": ["{that}.options.strings.preferencesSavedToUSB"]
                },
                "onReady.bindNotificationConfirmButtonClick": {
                    "this": "{that}.dom.confirmButton",
                    "method": "click",
                    "args": ["{that}.hideSaveNotification"]
                },
                "onReady.prepareSaveNotification": {
                    "this": "{that}.dom.notification",
                    "method": "dialog",
                    "args": [{
                        autoOpen: false,
                        modal: true,
                        dialogClass: "gpii-dialog-noTitle"
                    }]
                },
                "onSave.showSaveNotification": {
                    listener: "gpii.prefs.pmt_pilot_2.showSaveNotification"
                },
                "onReady.setMyPreferencesLabelText": {
                    "this": "{that}.dom.myPreferencesLabel",
                    "method": "text",
                    "args": ["{that}.options.strings.myPreferencesLabelText"]
                },
                "onReady.setAllPreferencesLabelText": {
                    "this": "{that}.dom.allPreferencesLabel",
                    "method": "text",
                    "args": ["{that}.options.strings.allPreferencesLabelText"]
                },
                "onReady.setSaveAndApplyButtonText": {
                    "this": "{that}.dom.saveAndApplyButtonLabel",
                    "method": "text",
                    "args": ["{that}.options.strings.saveAndApplyText"]
                }
            },
            invokers: {
                hideSaveNotification: {
                    "funcName": "gpii.prefs.pmt_pilot_2.hideSaveNotification"
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
