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
    
    gpii.adjuster.arrayMergePolicy = function (target, source) {
        target = fluid.makeArray(target);
        source = fluid.makeArray(source);
        fluid.each(source, function (selector) {
            if ($.inArray(selector, target) < 0) {
                target.push(selector);
            }
        });
        return target;
    };
    
    fluid.defaults("gpii.adjuster.increaseSize", {
        gradeNames: ["fluid.prefs.panel", "gpii.adjuster.textSize", "gpii.adjuster.cursorSize", "gpii.adjuster.magnifierFollows", "gpii.adjuster.magnifier", "gpii.adjuster.magnifierPosition", "autoInit"],
        mergePolicy: {
            repeatingSelectors: gpii.adjuster.arrayMergePolicy,
            selectorsToIgnore: gpii.adjuster.arrayMergePolicy
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
        members: {
            messageResolver: "{prefsEditorLoader}.msgBundle"
        },
        strings: {
            increaseSizeHeader: "{that}.stringBundle.increaseSizeHeader",
            tooltipChecked: "{that}.stringBundle.tooltipChecked",
            tooltipUnchecked: "{that}.stringBundle.tooltipUnchecked",
            more: "{that}.stringBundle.more",
            less: "{that}.stringBundle.less"
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
                    func: "fluid.textfieldSlider",
                    options: {
                        rules: {
                            "value": "value"
                        },
                        model: {
                            value: "{that}.model.value"
                        },
                        sourceApplier: "{that}.applier",
                        range: "{that}.options.controlValues.cursorSize",
                        sliderOptions: "{that}.options.sliderOptions"
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
                "funcName": "gpii.adjuster.increaseSize.toggleIncreaseSizeAdjusters",
                "args": [
                    "{that}.model.increaseSizeAdjustersEnabledSwitch",
                    "{that}.events.onShowAdjuster.fire",
                    "{that}.events.onHideAdjuster.fire",
                    0
                ],
                dynamic: true
            },
            toggleIncreaseSizeExtraAdjustersInstant: {
                "funcName": "gpii.adjuster.increaseSize.toggleIncreaseSizeExtraAdjusters",
                "args": [
                    "{that}.model.increaseSizeExtraAdjustersEnabledSwitch",
                    "{that}.events.onShowExtraAdjuster.fire",
                    "{that}.events.onHideExtraAdjuster.fire",
                    0
                ],
                dynamic: true
            },
            toggleIncreaseSizeAdjusters: {
                "funcName": "gpii.adjuster.increaseSize.toggleIncreaseSizeAdjusters",
                "args": [
                    "{that}.model.increaseSizeAdjustersEnabledSwitch",
                    "{that}.events.onShowAdjuster.fire",
                    "{that}.events.onHideAdjuster.fire"
                ],
                dynamic: true
            },
            toggleIncreaseSizeExtraAdjusters: {
                "funcName": "gpii.adjuster.increaseSize.toggleIncreaseSizeExtraAdjusters",
                "args": [
                    "{that}.model.increaseSizeExtraAdjustersEnabledSwitch",
                    "{that}.events.onShowExtraAdjuster.fire",
                    "{that}.events.onHideExtraAdjuster.fire"
                ],
                dynamic: true
            }
        }
    });
    
    gpii.adjuster.increaseSize.toggleIncreaseSizeAdjusters = function (increaseSizeAdjustersEnabledSwitch, showEvent, hideEvent, duration) {
        if (increaseSizeAdjustersEnabledSwitch) {
            showEvent(duration);
        } else {
            hideEvent(duration);
        }
    };

    gpii.adjuster.increaseSize.toggleIncreaseSizeExtraAdjusters = function (increaseSizeExtraAdjustersEnabledSwitch, showEvent, hideEvent, duration) {
        if (increaseSizeExtraAdjustersEnabledSwitch) {
            showEvent(duration);
        } else {
            hideEvent(duration);
        }
    };

})(jQuery, fluid);
