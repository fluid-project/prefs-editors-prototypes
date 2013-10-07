/*
 * Insert copyright
 */

// perhaps a gpii namespace should be used
(function ($, fluid) {
    fluid.defaults("fluid.uiOptions.pmt", {
        gradeNames: ["fluid.uiOptions.fullNoPreview", "autoInit"],
        uiOptions: {
            events: {
                onToggleIncreaseSizeAdjusters: null,
                onToggleIncreaseSizeExtraAdjusters: null,
                onShowExtraAdjuster: null,
                onHideExtraAdjuster: null,
                onSelectLanguage: null
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
                        "tooltip-unchecked": "{that}.options.strings.tooltipUnchecked",
                    }]
               },
               "onReady.setTextlanguageLabel": {
                    "this": "{that}.dom.languageLabel",
                    "method": "text",
                    "args": ["{that}.options.strings.languageLabel"]
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
               },
               "onReady.bindEventSelectLanguage": {
                   "this": "{that}.dom.languageSelect",
                   "method": "change",
                   "args": ["{that}.events.onSelectLanguage.fire"]
              },
              "onSelectLanguage.selectLanguage": {
                   "listener": "{that}.selectLanguage"
              }
            },
            invokers: {
                toggleIncreaseSizeExtraAdjusters: {
                     "funcName": "fluid.uiOptions.pmt.toggleIncreaseSizeExtraAdjusters",
                     "args": [
                         "{that}.dom.increaseSizeExtraAdjusters",
                         "{that}.events.onShowExtraAdjuster.fire",
                         "{that}.events.onHideExtraAdjuster.fire"
                     ]
                },
                selectLanguage: {
                    "funcName": "fluid.uiOptions.pmt.selectLanguage",
                    "args": [
                        "{that}.dom.languageSelect"
                    ]
               }
            },
            selectors: {
                increaseSizeHeader: ".flc-uiOptions-increaseSizePanel .headerTitle",
                increaseSizeAdjusters: ".flc-uiOptions-increaseSizePanel .fl-uiOptions-category",
                increaseSizeExtraAdjusters: ".flc-uiOptions-increaseSizePanel .fl-uiOptions-category-hidden",
                preferenceSwitchIncreaseSize: "#preferenceSwitchIncreaseSize",
                addToMyPreferencesStar: ".addToMyPreferencesLabel",
                languageLabel: ".fl-uiOptions-language-label",
                saveButton: ".flc-uiOptions-save",
                resetButton: ".flc-uiOptions-reset",
                cancelButton: ".flc-uiOptions-cancel",
                moreLess: ".moreLess",
                languageSelect: ".fl-uiOptions-language-select"
            },
            strings: {
                increaseSizeHeader: {
                    expander: {
                        func: "fluid.uiOptions.pmt.lookupMsg",
                        args: ["{uiOptionsLoader}.msgBundle", "increaseSizeHeader"]
                    }
                },
                tooltipChecked: {
                    expander: {
                        func: "fluid.uiOptions.pmt.lookupMsg",
                        args: ["{uiOptionsLoader}.msgBundle", "tooltipChecked"]
                    }
                },
                tooltipUnchecked: {
                    expander: {
                        func: "fluid.uiOptions.pmt.lookupMsg",
                        args: ["{uiOptionsLoader}.msgBundle", "tooltipUnchecked"]
                    }
                },
                languageLabel: {
                    expander: {
                        func: "fluid.uiOptions.pmt.lookupMsg",
                        args: ["{uiOptionsLoader}.msgBundle", "languageLabel"]
                    }
                },
                saveButtonText: {
                    expander: {
                        func: "fluid.uiOptions.pmt.lookupMsg",
                        args: ["{uiOptionsLoader}.msgBundle", "saveButtonText"]
                    }
                },
                resetButtonText: {
                    expander: {
                        func: "fluid.uiOptions.pmt.lookupMsg",
                        args: ["{uiOptionsLoader}.msgBundle", "resetButtonText"]
                    }
                },
                cancelButtonText: {
                    expander: {
                        func: "fluid.uiOptions.pmt.lookupMsg",
                        args: ["{uiOptionsLoader}.msgBundle", "cancelButtonText"]
                    }
                },
                more: {
                    expander: {
                        func: "fluid.uiOptions.pmt.lookupMsg",
                        args: ["{uiOptionsLoader}.msgBundle", "more"]
                    }
                },
                less: {
                    expander: {
                        func: "fluid.uiOptions.pmt.lookupMsg",
                        args: ["{uiOptionsLoader}.msgBundle", "less"]
                    }
                }
            }
        }
    });

    fluid.uiOptions.pmt.toggleIncreaseSizeExtraAdjusters = function (elm, showEvent, hideEvent) {
        if (elm.is(":visible")) {
            hideEvent();
        } else {
            showEvent();
        }
    };

    fluid.uiOptions.pmt.selectLanguage = function (language) {
    	demo.instantiateUIO("#myUIOptions", undefined, "fluid.uiOptions.pmt", language.val());
    };

    fluid.uiOptions.pmt.lookupMsg = function (messageResolver, value) {
        var looked = messageResolver.lookup([value]);
        return looked ? looked.template : looked;
    };
})(jQuery, fluid);
