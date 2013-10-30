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
    fluid.defaults("gpii.prefs.adjusters_pilot_2", {
        gradeNames: ["fluid.prefs.fullNoPreview", "autoInit"],
        prefsEditor: {
            listeners: {
                onSave: {
                    listener: "console.log"
                },
                "onReady.setATTRsaveButton": {
                    "this": "{that}.dom.saveButton",
                    "method": "attr",
                    "args": ["value", "{that}.options.strings.saveButtonText"]
                },
                "onReady.setATTRresetButton": {
                    "this": "{that}.dom.resetButton",
                    "method": "attr",
                    "args": ["value", "{that}.options.strings.resetButtonText"]
                },
                "onReady.setATTRcancelButton": {
                    "this": "{that}.dom.cancelButton",
                    "method": "attr",
                    "args": ["value", "{that}.options.strings.cancelButtonText"]
                }
            },
            selectors: {
                saveButton: ".gpiic-prefsEditor-save",
                resetButton: ".gpiic-prefsEditor-reset",
                cancelButton: ".gpiic-prefsEditor-cancel"
            },
            strings: {
                saveButtonText: {
                    expander: {
                        func: "gpii.lookupMsg",
                        args: ["{prefsEditorLoader}.msgBundle", "saveButtonText"]
                    }
                },
                resetButtonText: {
                    expander: {
                        func: "gpii.lookupMsg",
                        args: ["{prefsEditorLoader}.msgBundle", "resetButtonText"]
                    }
                },
                cancelButtonText: {
                    expander: {
                        func: "gpii.lookupMsg",
                        args: ["{prefsEditorLoader}.msgBundle", "cancelButtonText"]
                    }
                }
            }
        }
    });

    gpii.lookupMsg = function (messageResolver, value) {
        var looked = messageResolver.lookup([value]);
        return looked ? looked.template : looked;
    };
})(jQuery, fluid);
