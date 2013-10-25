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
    fluid.defaults("gpii.uiOptions.pmt", {
        gradeNames: ["fluid.uiOptions.fullNoPreview", "autoInit"],
        uiOptions: {
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
                saveButton: ".flc-uiOptions-save",
                resetButton: ".flc-uiOptions-reset",
                cancelButton: ".flc-uiOptions-cancel"
            },
            strings: {
                saveButtonText: {
                    expander: {
                        func: "gpii.lookupMsg",
                        args: ["{uiOptionsLoader}.msgBundle", "saveButtonText"]
                    }
                },
                resetButtonText: {
                    expander: {
                        func: "gpii.lookupMsg",
                        args: ["{uiOptionsLoader}.msgBundle", "resetButtonText"]
                    }
                },
                cancelButtonText: {
                    expander: {
                        func: "gpii.lookupMsg",
                        args: ["{uiOptionsLoader}.msgBundle", "cancelButtonText"]
                    }
                }
            }
        }
    });

    gpii.getDefaultLanguage = function () {
        return (navigator.userLanguage || navigator.language).substring(0, 2).toLowerCase(); 
    };
    
    gpii.lookupMsg = function (messageResolver, value) {
        var looked = messageResolver.lookup([value]);
        return looked ? looked.template : looked;
    };
    
    gpii.concatStrings = function (s1, s2) {
        return s1 + s2; 
    };
    
    fluid.defaults("gpii.uiOptions.pmt.previewPerSettingEnhanced", {
        gradeNames: "fluid.littleComponent",
        outerPreviewEnhancerOptions: "{originalEnhancerOptions}.options.originalUserOptions",
        emptyComponentType: "fluid.emptySubcomponent"
    });
})(jQuery, fluid);
