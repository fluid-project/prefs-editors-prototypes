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
                saveAndApplyButton: ".gpiic-pmt-saveAndApplyButton"
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
                }
            },
            listeners: {
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
                    "this": "{that}.dom.saveAndApplyButton",
                    "method": "text",
                    "args": ["{that}.options.strings.saveAndApplyText"]
                }
            }
        }
    });
})(jQuery, fluid);
