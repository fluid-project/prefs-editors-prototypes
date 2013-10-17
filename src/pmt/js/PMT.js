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
            events: {
                onToggleIncreaseSizeAdjusters: null
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
                "onReady.bindEventPreferenceSwitchIncreaseSize": {
                    "this": "{that}.dom.preferenceSwitchIncreaseSize",
                    "method": "change",
                    "args": ["{that}.events.onToggleIncreaseSizeAdjusters.fire"]
                },
                "onToggleIncreaseSizeAdjusters.showHide": {
                    "this": "{that}.dom.increaseSizeAdjusters",
                    "method": "slideToggle"
                }
            },
            selectors: {
                increaseSizeHeader: ".flc-uiOptions-increaseSizePanel .headerTitle",
                increaseSizeAdjusters: ".flc-uiOptions-increaseSizePanel .flc-uiOptions-category",
                preferenceSwitchIncreaseSize: "#preferenceSwitchIncreaseSize",
                addToMyPreferencesStar: ".addToMyPreferencesLabel",
                saveButton: ".flc-uiOptions-save",
                resetButton: ".flc-uiOptions-reset",
                cancelButton: ".flc-uiOptions-cancel",
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
                }
            },
            components: {
            	increaseSizeExtraAdjustersComponent: {
            		type: "fluid.rendererComponent",
            		container: "{uiOptions}.container",
            		createOnEvent: "onReady",
            		options: {
                		gradeNames: ["fluid.uiOptions.panels", "autoInit"],
	            		model: {
	            			increaseSizeExtraAdjustersEnabled: false
	            		},
	            		selectors: {
	                        increaseSizeExtraAdjusters: ".flc-uiOptions-increaseSizePanel .flc-uiOptions-category-hidden",
	            			preferenceSwitchIncreaseSizeExtra: "#preferenceSwitchIncreaseSizeExtra",
	                        moreLess: ".moreLess"
	            		},
	            		protoTree: {
	            			preferenceSwitchIncreaseSizeExtra: "${increaseSizeExtraAdjustersEnabled}"
	            		},
	                    events: {
	                        onShowExtraAdjuster: null,
	                        onHideExtraAdjuster: null
	                    },
	            		listeners: {
	            			"onCreate.bindEventPreferenceSwitchIncreaseSizeExtra": {
	                            "this": "{that}.dom.preferenceSwitchIncreaseSizeExtra",
	                            "method": "change",
	                            "args": ["{that}.updateModelValue"]
	                        },
	                        "onCreate.setTextMoreLess": {
	                            "this": "{that}.dom.moreLess",
	                            "method": "text",
	                            "args": ["{that}.options.strings.more"]
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
	                        "onCreate.hideIncreaseSizeExtraAdjusters": {
	                            "this": "{that}.dom.increaseSizeExtraAdjusters",
	                            "method": "hide",
	                            "args": [0]
	                        },
	            			"onCreate.init": {
	                            listener: "{that}.applier.modelChanged.addListener",
	                            args: ["increaseSizeExtraAdjustersEnabled", "{that}.toggleIncreaseSizeExtraAdjusters"]
	                        }
	            		},
	            		invokers: {
	            			toggleIncreaseSizeExtraAdjusters: {
	                            "funcName": "gpii.uiOptions.pmt.toggleIncreaseSizeExtraAdjusters",
	                            "args": [
	                                "{that}.model.increaseSizeExtraAdjustersEnabled",
	                                "{that}.events.onShowExtraAdjuster.fire",
	                                "{that}.events.onHideExtraAdjuster.fire"
	                            ]
	                        },
	                        updateModelValue: {
	                        	"funcName": "gpii.uiOptions.pmt.updateIncreaseSizeExtraAdjustersModelValue",
	                            "args": [
	                                     "{that}",
	 	                                "{that}.dom.preferenceSwitchIncreaseSizeExtra"
	 	                            ]
	                        }
	                    },
	                    strings: {
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
            	}
            }
        }
    });

    gpii.uiOptions.pmt.toggleIncreaseSizeExtraAdjusters = function (increaseSizeExtraAdjustersEnabled, showEvent, hideEvent) {
        if (increaseSizeExtraAdjustersEnabled) {
            hideEvent();
        } else {
            showEvent();
        }
    };

    gpii.uiOptions.pmt.updateIncreaseSizeExtraAdjustersModelValue = function (that, elm) {
        that.applier.requestChange("increaseSizeExtraAdjustersEnabled", !elm.is(":checked"));
    };

    gpii.uiOptions.getDefaultLanguage = function () {
        return (navigator.userLanguage || navigator.language).substring(0, 2).toLowerCase(); 
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
