/*!
Cloud4all Preferences Management Tools

Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global fluid, jQuery, gpii*/
/*jslint white: true, onevar: true, funcinvoke: true, forvar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

(function ($, fluid) {
    
    gpii.uiOptions.panels.arrayMergePolicy = function (target, source) {
        target = fluid.makeArray(target);
        source = fluid.makeArray(source);
        fluid.each(source, function (selector) {
            if ($.inArray(selector, target) < 0) {
                target.push(selector);
            }
        });
        return target;
    };
    
    fluid.defaults("gpii.uiOptions.panels.increaseSize", {
        gradeNames: ["fluid.uiOptions.panels", "gpii.uiOptions.panels.textSize", "gpii.uiOptions.panels.cursorSize", "gpii.uiOptions.panels.magnifierFollows", "gpii.uiOptions.panels.magnifier", "gpii.uiOptions.panels.magnifierPosition", "autoInit"],
        mergePolicy: {
            repeatingSelectors: gpii.uiOptions.panels.arrayMergePolicy,
            selectorsToIgnore: gpii.uiOptions.panels.arrayMergePolicy
        },
        events: {
            onShowAdjuster: null,
            onHideAdjuster: null,
            onShowExtraAdjuster: null,
            onHideExtraAdjuster: null
        },
        listeners: {
            "afterRender.setTextIncreaseSizeHeader": {
                "this": "{that}.dom.increaseSizeHeader",
                "method": "text",
                "args": ["{that}.options.strings.increaseSizeHeader"]
            },
            "afterRender.setATTRaddToMyPreferencesStar": {
                "this": "{that}.dom.addToMyPreferencesStar",
                "method": "attr",
                "args": [{
                    "tooltip-checked": "{that}.options.strings.tooltipChecked",
                    "tooltip-unchecked": "{that}.options.strings.tooltipUnchecked"
                }]
            },
            "afterRender.bindEventPreferenceSwitchIncreaseSize": {
                "this": "{that}.dom.preferenceSwitchIncreaseSize",
                "method": "change",
                "args": ["{that}.toggleIncreaseSizeAdjusters"]
            },
            "onShowAdjuster.show": {
                "this": "{that}.dom.increaseSizeAdjusters",
                "method": "slideDown",
                "args": ["{arguments}.0"]
            },
            "onHideAdjuster.hide": {
                "this": "{that}.dom.increaseSizeAdjusters",
                "method": "slideUp",
                "args": ["{arguments}.0"]
            },
            "afterRender.bindEventPreferenceSwitchIncreaseSizeExtra": {
                "this": "{that}.dom.preferenceSwitchIncreaseSizeExtra",
                "method": "change",
                "args": ["{that}.toggleIncreaseSizeExtraAdjusters"]
            },
            "afterRender.setTextMoreLess": {
                "this": "{that}.dom.moreLess",
                "method": "text",
                "args": ["{that}.options.strings.more"]
            },
            "onShowExtraAdjuster.show": {
                "this": "{that}.dom.increaseSizeExtraAdjusters",
                "method": "slideDown",
                "args": ["{arguments}.0"]
            },
            "onHideExtraAdjuster.hide": {
                "this": "{that}.dom.increaseSizeExtraAdjusters",
                "method": "slideUp",
                "args": ["{arguments}.0"]
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
            "afterRender.restoreIncreaseSizeExtraAdjusters": {
                listener: "{that}.toggleIncreaseSizeExtraAdjustersInstant"
            },
            "afterRender.restoreIncreaseSizeAdjustersState": {
                listener: "{that}.toggleIncreaseSizeAdjustersInstant"
            }
        },
        selectors: {
            increaseSizeHeader: ".gpiic-headerTitle",
            increaseSizeAdjusters: ".gpiic-category",
            preferenceSwitchIncreaseSize: ".gpiic-increaseSize-preferenceSwitch",
            addToMyPreferencesStar: ".gpiic-addToMyPreferencesLabel",
            increaseSizeExtraAdjusters: ".gpiic-category-hidden",
            preferenceSwitchIncreaseSizeExtra: ".gpiic-increaseSize-preferenceSwitchExtra",
            moreLess: ".gpiic-moreLess"
        },
        selectorsToIgnore: ["increaseSizeHeader", "increaseSizeAdjusters", "addToMyPreferencesStar", "increaseSizeExtraAdjusters", "moreLess"],
        strings: {
            increaseSizeHeader: {
                expander: {
                    func: "gpii.lookupMsg",
                    args: ["{uiOptionsLoader}.msgBundle", "increaseSizeHeader"]
                }
            },
            tooltipChecked: {
                expander: {
                    func: "gpii.lookupMsg",
                    args: ["{uiOptionsLoader}.msgBundle", "tooltipChecked"]
                }
            },
            tooltipUnchecked: {
                expander: {
                    func: "gpii.lookupMsg",
                    args: ["{uiOptionsLoader}.msgBundle", "tooltipUnchecked"]
                }
            },
            more: {
                expander: {
                    func: "gpii.lookupMsg",
                    args: ["{uiOptionsLoader}.msgBundle", "more"]
                }
            },
            less: {
                expander: {
                    func: "gpii.lookupMsg",
                    args: ["{uiOptionsLoader}.msgBundle", "less"]
                }
            }
        },
        model: {
            increaseSizeAdjustersEnabledSwitch: false,
            increaseSizeExtraAdjustersEnabledSwitch: false
        },
        protoTree: {
            preferenceSwitchIncreaseSize: "${increaseSizeAdjustersEnabledSwitch}",
            preferenceSwitchIncreaseSizeExtra: "${increaseSizeExtraAdjustersEnabledSwitch}",
            cursorSizeLabel: {messagekey: "cursorSizeLabel"},
            cursorSize: {
                decorators: {
                    type: "fluid",
                    func: "fluid.uiOptions.textfieldSlider",
                    options: {
                        range: "{that}.options.controlValues.cursorSize",
                        path: "value"
                    }
                }
            },
            magnifierMinus: {messagekey: "minus"},
            magnifierLabel: {messagekey: "magnifierLabel"},
            magnifierPlus: {messagekey: "plus"},

            magnifierValueText: "${magnification}",
            magnifierFollowsHeading: {messagekey: "magnifierFollowsLabel"},
            expander: [
                {
                    type: "fluid.renderer.selection.inputs",
                    rowID: "magnifierFollowsRow",
                    labelID: "magnifierFollowsLabel",
                    inputID: "magnifierFollowsInput",
                    selectID: "magnifierFollows-radio",
                    tree: {
                        optionnames: "${{that}.options.strings.magnifierFollows}",
                        optionlist: "${{that}.options.controlValues.magnifierFollows}",
                        selection: "${magnifierFollows}"
                    }
                }, 
                {
                    type: "fluid.renderer.selection.inputs",
                    rowID: "magnifierPositionRow",
                    labelID: "magnifierPositionLabel",
                    inputID: "magnifierPositionInput",
                    selectID: "magnifierPosition-radio",
                    tree: {
                        optionnames: "${{that}.options.strings.magnifierPosition}",
                        optionlist: "${{that}.options.controlValues.magnifierPosition}",
                        selection: "${magnifierPosition}"
                    }
                }
            ],
            magnifierPositionHeading: {messagekey: "magnifierPositionLabel"},
            textSizeMinus: {messagekey: "minus"},
            textSizeLabel: {messagekey: "textSizeLabel"},
            textSizePlus: {messagekey: "plus"},

            textSizeValueText: "${fontSize}"
        },
        invokers: {
            toggleIncreaseSizeAdjustersInstant: {
                "funcName": "gpii.uiOptions.panels.increaseSize.toggleIncreaseSizeAdjusters",
                "args": [
                    "{that}.model.increaseSizeAdjustersEnabledSwitch",
                    "{that}.events.onShowAdjuster.fire",
                    "{that}.events.onHideAdjuster.fire",
                    0
                ]
            },
            toggleIncreaseSizeExtraAdjustersInstant: {
                "funcName": "gpii.uiOptions.panels.increaseSize.toggleIncreaseSizeExtraAdjusters",
                "args": [
                    "{that}.model.increaseSizeExtraAdjustersEnabledSwitch",
                    "{that}.events.onShowExtraAdjuster.fire",
                    "{that}.events.onHideExtraAdjuster.fire",
                    0
                ]
            },
            toggleIncreaseSizeAdjusters: {
                "funcName": "gpii.uiOptions.panels.increaseSize.toggleIncreaseSizeAdjusters",
                "args": [
                    "{that}.model.increaseSizeAdjustersEnabledSwitch",
                    "{that}.events.onShowAdjuster.fire",
                    "{that}.events.onHideAdjuster.fire"
                ]
            },
            toggleIncreaseSizeExtraAdjusters: {
                "funcName": "gpii.uiOptions.panels.increaseSize.toggleIncreaseSizeExtraAdjusters",
                "args": [
                    "{that}.model.increaseSizeExtraAdjustersEnabledSwitch",
                    "{that}.events.onShowExtraAdjuster.fire",
                    "{that}.events.onHideExtraAdjuster.fire"
                ]
            }
        }
    });
    
    gpii.uiOptions.panels.increaseSize.toggleIncreaseSizeAdjusters = function (increaseSizeAdjustersEnabledSwitch, showEvent, hideEvent, duration) {
        if (increaseSizeAdjustersEnabledSwitch) {
            showEvent(duration);
        } else {
            hideEvent(duration);
        }
    };

    gpii.uiOptions.panels.increaseSize.toggleIncreaseSizeExtraAdjusters = function (increaseSizeExtraAdjustersEnabledSwitch, showEvent, hideEvent, duration) {
        if (increaseSizeExtraAdjustersEnabledSwitch) {
            showEvent(duration);
        } else {
            hideEvent(duration);
        }
    };

})(jQuery, fluid);