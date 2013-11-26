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

    /*gpii.adjuster.arrayMergePolicy = function (target, source) {
        target = fluid.makeArray(target);
        source = fluid.makeArray(source);
        fluid.each(source, function (selector) {
            if ($.inArray(selector, target) < 0) {
                target.push(selector);
            }
        });
        return target;
    };*/

    fluid.defaults("gpii.panel.increaseSize", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        events: {
            onShowAdjuster: null,
            onHideAdjuster: null,
            onShowExtraAdjuster: null,
            onHideExtraAdjuster: null
        },
        listeners: {
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
            moreLess: ".gpiic-moreLess",
            appearanceHeading: ".gpiic-increaseSize-appearanceHeading",
            magnifierHeading: ".gpiic-increaseSize-magnifierHeading"
        },
        selectorsToIgnore: ["increaseSizeHeader", "increaseSizeAdjusters", "addToMyPreferencesStar", "increaseSizeExtraAdjusters", "moreLess"],
        members: {
            messageResolver: "{prefsEditorLoader}.msgBundle"
        },
        strings: {
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
            increaseSizeHeader: {messagekey: "increaseSizeHeader"},
            moreLess: {messagekey: "more"},
            appearanceHeading: {messagekey: "appearance"},
            magnifierHeading:  {messagekey: "magnifier"}
        },
        invokers: {
            toggleIncreaseSizeAdjustersInstant: {
                "funcName": "gpii.panel.increaseSize.toggleIncreaseSizeAdjusters",
                "args": [
                    "{that}.model.increaseSizeAdjustersEnabledSwitch",
                    "{that}.events.onShowAdjuster.fire",
                    "{that}.events.onHideAdjuster.fire",
                    0
                ],
                dynamic: true
            },
            toggleIncreaseSizeExtraAdjustersInstant: {
                "funcName": "gpii.panel.increaseSize.toggleIncreaseSizeExtraAdjusters",
                "args": [
                    "{that}.model.increaseSizeExtraAdjustersEnabledSwitch",
                    "{that}.events.onShowExtraAdjuster.fire",
                    "{that}.events.onHideExtraAdjuster.fire",
                    0
                ],
                dynamic: true
            },
            toggleIncreaseSizeAdjusters: {
                "funcName": "gpii.panel.increaseSize.toggleIncreaseSizeAdjusters",
                "args": [
                    "{that}.model.increaseSizeAdjustersEnabledSwitch",
                    "{that}.events.onShowAdjuster.fire",
                    "{that}.events.onHideAdjuster.fire"
                ],
                dynamic: true
            },
            toggleIncreaseSizeExtraAdjusters: {
                "funcName": "gpii.panel.increaseSize.toggleIncreaseSizeExtraAdjusters",
                "args": [
                    "{that}.model.increaseSizeExtraAdjustersEnabledSwitch",
                    "{that}.events.onShowExtraAdjuster.fire",
                    "{that}.events.onHideExtraAdjuster.fire"
                ],
                dynamic: true
            }
        }
    });

    gpii.panel.increaseSize.toggleIncreaseSizeAdjusters = function (increaseSizeAdjustersEnabledSwitch, showEvent, hideEvent, duration) {
        if (increaseSizeAdjustersEnabledSwitch) {
            showEvent(duration);
        } else {
            hideEvent(duration);
        }
    };

    gpii.panel.increaseSize.toggleIncreaseSizeExtraAdjusters = function (increaseSizeExtraAdjustersEnabledSwitch, showEvent, hideEvent, duration) {
        if (increaseSizeExtraAdjustersEnabledSwitch) {
            showEvent(duration);
        } else {
            hideEvent(duration);
        }
    };

})(jQuery, fluid);
