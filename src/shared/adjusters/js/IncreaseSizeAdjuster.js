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
    
    fluid.defaults("gpii.uiOptions.panels.increaseSize", {
        gradeNames: ["fluid.uiOptions.panels", "gpii.uiOptions.panels.textSize", "gpii.uiOptions.panels.cursorSize", "gpii.uiOptions.panels.magnifierFollows", "gpii.uiOptions.panels.magnifier", "gpii.uiOptions.panels.magnifierPosition", "autoInit"],
        events: {
            onToggleIncreaseSizeAdjusters: null,
            onShowExtraAdjuster: null,
            onHideExtraAdjuster: null
        },
        listeners: {
            "afterRender.hideIncreaseSizeAdjusters": {
                "this": "{that}.dom.increaseSizeAdjusters",
                "method": "hide",
                "args": [0]
            },
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
                "args": ["{that}.events.onToggleIncreaseSizeAdjusters.fire"]
            },
            "onToggleIncreaseSizeAdjusters.showHide": {
                "this": "{that}.dom.increaseSizeAdjusters",
                "method": "slideToggle"
            },
            "afterRender.console": {
                "this": "console",
                "method": "log",
                "args": ["{that}.options.strings.increaseSizeHeader"]
            },
            "afterRender.bindEventPreferenceSwitchIncreaseSizeExtra": {
                "this": "{that}.dom.preferenceSwitchIncreaseSizeExtra",
                "method": "change",
                "args": ["{that}.updateModelValue"]
            },
            "afterRender.setTextMoreLess": {
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
            "afterRender.hideIncreaseSizeExtraAdjusters": {
                "this": "{that}.dom.increaseSizeExtraAdjusters",
                "method": "hide",
                "args": [0]
            },
            "afterRender.init": {
                listener: "{that}.applier.modelChanged.addListener",
                args: ["increaseSizeExtraAdjustersEnabled", "{that}.toggleIncreaseSizeExtraAdjusters"]
            }
        },
        selectors: {
            increaseSizeHeader: ".headerTitle",
            increaseSizeAdjusters: ".flc-uiOptions-category",
            preferenceSwitchIncreaseSize: "#preferenceSwitchIncreaseSize",
            addToMyPreferencesStar: ".addToMyPreferencesLabel",
            increaseSizeExtraAdjusters: ".flc-uiOptions-category-hidden",
            preferenceSwitchIncreaseSizeExtra: "#preferenceSwitchIncreaseSizeExtra",
            moreLess: ".moreLess"
        },
        selectorsToIgnore: ["increaseSizeHeader", "increaseSizeAdjusters", "preferenceSwitchIncreaseSize", "addToMyPreferencesStar", "increaseSizeExtraAdjusters", "preferenceSwitchIncreaseSizeExtra", "moreLess"],
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
        },
        model: {
            increaseSizeExtraAdjustersEnabled: false
        },
        protoTree: {
            preferenceSwitchIncreaseSizeExtra: "${increaseSizeExtraAdjustersEnabled}",
            cursorSizeLabel: {messagekey: "cursorSizeLabel"},
            multiplier: {messagekey: "multiplier"},
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
            magnifierMinus: "-",
            magnifierLabel: {messagekey: "magnifierLabel"},
            magnifierPlus: "+",

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
                }/*, 
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
                }*/
            ],
            magnifierPositionHeading: {messagekey: "magnifierPositionLabel"},
            textSizeMinus: "-",
            textSizeLabel: {messagekey: "textSizeLabel"},
            textSizePlus: "+",

            textSizeValueText: "${fontSize}"
        },
        invokers: {
            toggleIncreaseSizeExtraAdjusters: {
                "funcName": "gpii.uiOptions.panels.increaseSize.toggleIncreaseSizeExtraAdjusters",
                "args": [
                    "{that}.model.increaseSizeExtraAdjustersEnabled",
                    "{that}.events.onShowExtraAdjuster.fire",
                    "{that}.events.onHideExtraAdjuster.fire"
                ]
            },
            updateModelValue: {
                "funcName": "gpii.uiOptions.panels.increaseSize.updateIncreaseSizeExtraAdjustersModelValue",
                "args": [
                    "{that}",
                    "{that}.dom.preferenceSwitchIncreaseSizeExtra"
                ]
            }
        }
    });
    
    gpii.uiOptions.panels.increaseSize.toggleIncreaseSizeExtraAdjusters = function (increaseSizeExtraAdjustersEnabled, showEvent, hideEvent) {
        if (increaseSizeExtraAdjustersEnabled) {
            hideEvent();
        } else {
            showEvent();
        }
    };

    gpii.uiOptions.panels.increaseSize.updateIncreaseSizeExtraAdjustersModelValue = function (that, elm) {
        that.applier.requestChange("increaseSizeExtraAdjustersEnabled", !elm.is(":checked"));
    };

})(jQuery, fluid);
