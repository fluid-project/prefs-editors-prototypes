/*!
Cloud4all Preferences Management Tools

Copyright 2013 Astea

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

(function ($, fluid) {
    fluid.defaults("gpii.pmt", {
        gradeNames: ["gpii.common", "autoInit"],
        prefsEditor: {
            fullyExpandedSlideSpeed: 500,

            model: {
                visualAlternativesExtraVisible: false
            },
            events: {
                onShowVisualAlternativesExtra: null,
                onHideVisualAlternativesExtra: null
            },
            listeners: {

                //  Visual alternatives adjuster group part

                "onReady.bindEventVisualAlternativesMoreLess": {
                    "this": "{that}.dom.moreLess",
                    "method": "click",
                    "args": ["{that}.updateModelMoreLess"]
                },
                "onCreate.addExtraVisibleListener": {
                    "listener": "{that}.applier.modelChanged.addListener",
                    "args": ["visualAlternativesExtraVisible", "{that}.showHideVisualAlternativesExtra"]
                },
                "onShowVisualAlternativesPartial.setTextMoreText": {
                    "this": "{that}.dom.moreLess",
                    "method": "text",
                    "args": ["{that}.options.strings.moreText"]
                },
                "onShowVisualAlternativesExtra.show": {
                    "this": "{that}.dom.visualAlternativesExtraAdjusters",
                    "method": "slideDown",
                    "args": ["{that}.options.fullyExpandedSlideSpeed"]
                },
                "onShowVisualAlternativesExtra.setTextReadBackLabel": {
                    "this": "{that}.dom.readBackLabel",
                    "method": "text",
                    "args": ["{that}.options.strings.readBackLabel"]
                },
                "onShowVisualAlternativesExtra.setTextAnnounceLabel": {
                    "this": "{that}.dom.announceLabel",
                    "method": "text",
                    "args": ["{that}.options.strings.announceLabel"]
                },
                "onShowVisualAlternativesExtra.activateComboboxLanguage": {
                    "funcName": "gpii.activateCombobox",
                    "args": ["{that}", "screenReaderLanguage"]
                },
                "onShowVisualAlternativesExtra.activateComboboxText": {
                    "funcName": "gpii.activateCombobox",
                    "args": ["{that}", "textHighlighting"]
                },
                "onShowVisualAlternativesExtra.setLessText": {
                    "this": "{that}.dom.moreLess",
                    "method": "text",
                    "args": ["{that}.options.strings.lessText"]
                },
                "onShowVisualAlternativesExtra.addLessIconClass": {
                    "this": "{that}.dom.moreLessIcon",
                    "method": "addClass",
                    "args": ["{that}.options.styles.lessIcon"]
                },
                "onShowVisualAlternativesExtra.removeMoreIconClass": {
                    "this": "{that}.dom.moreLessIcon",
                    "method": "removeClass",
                    "args": ["{that}.options.styles.moreIcon"]
                },
                "onHideVisualAlternativesExtra.hide": {
                    "this": "{that}.dom.visualAlternativesExtraAdjusters",
                    "method": "slideUp",
                    "args": ["{that}.options.fullyExpandedSlideSpeed"]
                },
                "onHideVisualAlternativesExtra.setMoreText": {
                    "this": "{that}.dom.moreLess",
                    "method": "text",
                    "args": ["{that}.options.strings.moreText"]
                },
                "onHideVisualAlternativesExtra.addMoreIconClass": {
                    "this": "{that}.dom.moreLessIcon",
                    "method": "addClass",
                    "args": ["{that}.options.styles.moreIcon"]
                },
                "onHideVisualAlternativesExtra.removeLessIconClass": {
                    "this": "{that}.dom.moreLessIcon",
                    "method": "removeClass",
                    "args": ["{that}.options.styles.lessIcon"]
                }
            },
            invokers: {
                updateModelMoreLess: {
                    "funcName": "gpii.moreLess",
                    "args": ["{that}",
                             "{that}.model.visualAlternativesExtraVisible"
                        ],
                    "dynamic": true
                },
                showHideVisualAlternativesExtra: {
                    "funcName": "gpii.showOrHideDependingOnState",
                    "args": ["{that}.model.visualAlternativesExtraVisible",
                             "{that}.events.onShowVisualAlternativesExtra.fire",
                             "{that}.events.onHideVisualAlternativesExtra.fire"
                        ],
                    "dynamic": true
                }
            },
            selectors: {
                visualAlternativesExtraAdjusters: ".gpii-fully-expanded",

                readBackLabel: ".gpii-readBackLabel",
                announceLabel: ".gpii-announceLabel",

                moreLess: ".gpiic-moreOptionsLabel",
                moreLessIcon: ".moreOptionsIcon",

            },
            styles: {
                moreIcon: "gpii-moreOptionsIcon-more",
                lessIcon: "gpii-moreOptionsIcon-less"
            },
            strings: {
                readBackLabel: {
                    expander: {
                        func: "gpii.lookupMsg",
                        args: ["{prefsEditorLoader}.msgBundle", "readBackLabel"]
                    }
                },
                announceLabel: {
                    expander: {
                        func: "gpii.lookupMsg",
                        args: ["{prefsEditorLoader}.msgBundle", "announceLabel"]
                    }
                },
                moreText: {
                    expander: {
                        func: "gpii.lookupMsg",
                        args: ["{prefsEditorLoader}.msgBundle", "moreText"]
                    }
                },
                lessText: {
                    expander: {
                        func: "gpii.lookupMsg",
                        args: ["{prefsEditorLoader}.msgBundle", "lessText"]
                    }
                }
            }
        }
    });

    gpii.moreLess = function (that, extraVisible) {
        that.applier.requestChange("visualAlternativesExtraVisible", !extraVisible);
    };

})(jQuery, fluid);
