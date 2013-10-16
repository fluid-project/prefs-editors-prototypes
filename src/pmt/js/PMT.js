/*!
Cloud4all Preferences Management Tools

Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global demo, fluid, jQuery, gpii*/
/*jslint white: true, onevar: true, funcinvoke: true, forvar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

(function ($, fluid) {
    fluid.defaults("gpii.uiOptions.pmt", {
        gradeNames: ["fluid.uiOptions.fullNoPreview", "autoInit"],
        uiOptions: {
            events: {
                onToggleIncreaseSizeAdjusters: null,
                onToggleIncreaseSizeExtraAdjusters: null,
                onShowExtraAdjuster: null,
                onHideExtraAdjuster: null,
            },
            listeners: {
                onSave: {
                    listener: "console.log"
                },
                "onReady.hideIncreaseSizeAdjusters": {
                    "this": "{that}.dom.increaseSizeAdjusters",
                    "method": "hide",
                    "args": [0]
                },
                "onReady.hideIncreaseSizeExtraAdjusters": {
                    "this": "{that}.dom.increaseSizeExtraAdjusters",
                    "method": "hide",
                    "args": [0]
                },
                "onReady.setTextIncreaseSizeHeader": {
                    "this": "{that}.dom.increaseSizeHeader",
                    "method": "text",
                    "args": ["{that}.options.strings.increaseSizeHeader"]
                },
                "onReady.setATTRaddToMyPreferencesStar": {
                    "this": "{that}.dom.addToMyPreferencesStar",
                    "method": "attr",
                    "args": [{
                        "tooltip-checked": "{that}.options.strings.tooltipChecked",
                        "tooltip-unchecked": "{that}.options.strings.tooltipUnchecked"
                    }]
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
                },
                "onReady.setTextMoreLess": {
                    "this": "{that}.dom.moreLess",
                    "method": "text",
                    "args": ["{that}.options.strings.more"]
                },
                "onReady.bindEventPreferenceSwitchIncreaseSize": {
                    "this": "{that}.dom.preferenceSwitchIncreaseSize",
                    "method": "change",
                    "args": ["{that}.events.onToggleIncreaseSizeAdjusters.fire"]
                },
                "onToggleIncreaseSizeAdjusters.showHide": {
                    "this": "{that}.dom.increaseSizeAdjusters",
                    "method": "slideToggle"
                },
                "onReady.bindEventMoreLess": {
                    "this": "{that}.dom.moreLess",
                    "method": "click",
                    "args": ["{that}.events.onToggleIncreaseSizeExtraAdjusters.fire"]
                },
                "onToggleIncreaseSizeExtraAdjusters.toggleIncreaseSizeExtraAdjusters": {
                    "listener": "{that}.toggleIncreaseSizeExtraAdjusters"
                },
                "onShowExtraAdjuster.show": {
                    "this": "{that}.dom.increaseSizeExtraAdjusters",
                    "method": "slideToggle"
                },
                "onHideExtraAdjuster.hide": {
                    "this": "{that}.dom.increaseSizeExtraAdjusters",
                    "method": "slideToggle"
                },
                "onShowExtraAdjuster.setLessText": {
                    "this": "{that}.dom.moreLess",
                    "method": "text",
                    "args": ["{that}.options.strings.less"]
                },
                "onHideExtraAdjuster.setMoreText": {
                    "this": "{that}.dom.moreLess",
                    "method": "text",
                    "args": ["{that}.options.strings.more"]
                }
            },
            invokers: {
                toggleIncreaseSizeExtraAdjusters: {
                    "funcName": "gpii.uiOptions.pmt.toggleIncreaseSizeExtraAdjusters",
                    "args": [
                        "{that}.dom.increaseSizeExtraAdjusters",
                        "{that}.events.onShowExtraAdjuster.fire",
                        "{that}.events.onHideExtraAdjuster.fire"
                    ]
                }
            },
            selectors: {
                increaseSizeHeader: ".flc-uiOptions-increaseSizePanel .headerTitle",
                increaseSizeAdjusters: ".flc-uiOptions-increaseSizePanel .fl-uiOptions-category",
                increaseSizeExtraAdjusters: ".flc-uiOptions-increaseSizePanel .fl-uiOptions-category-hidden",
                preferenceSwitchIncreaseSize: "#preferenceSwitchIncreaseSize",
                addToMyPreferencesStar: ".addToMyPreferencesLabel",
                saveButton: ".flc-uiOptions-save",
                resetButton: ".flc-uiOptions-reset",
                cancelButton: ".flc-uiOptions-cancel",
                moreLess: ".moreLess",
            },
            strings: {
                increaseSizeHeader: {
                    expander: {
                        func: "gpii.uiOptions.pmt.lookupMsg",
                        args: ["{uiOptionsLoader}.msgBundle", "increaseSizeHeader"]
                    }
                },
                tooltipChecked: {
                    expander: {
                        func: "gpii.uiOptions.pmt.lookupMsg",
                        args: ["{uiOptionsLoader}.msgBundle", "tooltipChecked"]
                    }
                },
                tooltipUnchecked: {
                    expander: {
                        func: "gpii.uiOptions.pmt.lookupMsg",
                        args: ["{uiOptionsLoader}.msgBundle", "tooltipUnchecked"]
                    }
                },
                saveButtonText: {
                    expander: {
                        func: "gpii.uiOptions.pmt.lookupMsg",
                        args: ["{uiOptionsLoader}.msgBundle", "saveButtonText"]
                    }
                },
                resetButtonText: {
                    expander: {
                        func: "gpii.uiOptions.pmt.lookupMsg",
                        args: ["{uiOptionsLoader}.msgBundle", "resetButtonText"]
                    }
                },
                cancelButtonText: {
                    expander: {
                        func: "gpii.uiOptions.pmt.lookupMsg",
                        args: ["{uiOptionsLoader}.msgBundle", "cancelButtonText"]
                    }
                },
                more: {
                    expander: {
                        func: "gpii.uiOptions.pmt.lookupMsg",
                        args: ["{uiOptionsLoader}.msgBundle", "more"]
                    }
                },
                less: {
                    expander: {
                        func: "gpii.uiOptions.pmt.lookupMsg",
                        args: ["{uiOptionsLoader}.msgBundle", "less"]
                    }
                }
            }
        }
    });

    gpii.uiOptions.pmt.toggleIncreaseSizeExtraAdjusters = function (elm, showEvent, hideEvent) {
        if (elm.is(":visible")) {
            hideEvent();
        } else {
            showEvent();
        }
    };

    gpii.uiOptions.getDefaultLanguage = function() {
    	var language = navigator.userLanguage || navigator.language;
        defaultLanguage = language.substring(0, 2).toLowerCase();
        return defaultLanguage; 
    };
    
    gpii.uiOptions.pmt.lookupMsg = function (messageResolver, value) {
        var looked = messageResolver.lookup([value]);
        return looked ? looked.template : looked;
    };
    
    fluid.defaults("gpii.uiOptions.pmt.previewPerSettingEnhanced", {
        outerPreviewEnhancerOptions: "{originalEnhancerOptions}.options.originalUserOptions",
        emptyComponentType: "fluid.emptySubcomponent"
    });
})(jQuery, fluid);
