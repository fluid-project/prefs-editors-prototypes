/*!
Cloud4all Preferences Management Tools

Copyright 2013 OCAD University
Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global fluid, jQuery, gpii*/
/*jslint white: true, onevar: true, funcinvoke: true, forvar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

(function ($, fluid) {

    fluid.defaults("gpii.panel.increaseSize", {
        gradeNames: ["fluid.prefs.compositePanel", "autoInit"],
        events: {
            onShowMagnifierAdjusters: null,
            onHideMagnifierAdjusters: null,
            onShowMagnifierExtraAdjusters: null,
            onHideMagnifierExtraAdjusters: null
        },
        listeners: {
            "afterRender.bindEventPreferenceSwitchMagnifierExtra": {
                "this": "{that}.dom.preferenceSwitchMagnifierExtra",
                "method": "change",
                "args": ["{that}.toggleMagnifierExtraAdjustersInstant"]
            },
            "onShowMagnifierExtraAdjusters.show": {
                "this": "{that}.dom.magnifierExtraAdjusters",
                "method": "slideDown",
                "args": ["{arguments}.0"]
            },
            "onHideMagnifierExtraAdjusters.hide": {
                "this": "{that}.dom.magnifierExtraAdjusters",
                "method": "slideUp",
                "args": ["{arguments}.0"]
            },
            "onShowMagnifierExtraAdjusters.setLessText": {
                "this": "{that}.dom.magnifierMoreLess",
                "method": "text",
                "args": ["{that}.stringBundle.less"]
            },
            "onHideMagnifierExtraAdjusters.setMoreText": {
                "this": "{that}.dom.magnifierMoreLess",
                "method": "text",
                "args": ["{that}.stringBundle.more"]
            },
            "onShowMagnifierAdjusters.show": {
                "this": "{that}.dom.magnifierAdjusters",
                "method": "slideDown",
                "args": ["{arguments}.0"]
            },
            "onHideMagnifierAdjusters.hide": {
                "this": "{that}.dom.magnifierAdjusters",
                "method": "slideUp",
                "args": ["{arguments}.0"]
            },
            "afterRender.restoreMagnifierAdjusters": {
                listener: "{that}.toggleMagnifierAdjustersInstant"
            },
            "afterRender.restoreMagnifierExtraAdjusters": {
                listener: "{that}.toggleMagnifierExtraAdjustersInstant"
            }
        },
        invokers: {
            toggleMagnifierExtraAdjustersInstant: {
                "funcName": "gpii.panel.increaseSize.toggleMagnifierExtraAdjusters",
                "args": [
                    "{that}.model.magnifierExtraAdjustersEnabledSwitch",
                    "{that}.events.onShowMagnifierExtraAdjusters.fire",
                    "{that}.events.onHideMagnifierExtraAdjusters.fire",
                    0
                ],
                dynamic: true
            },
            toggleMagnifierAdjustersInstant: {
                "funcName": "gpii.panel.increaseSize.toggleMagnifierAdjusters",
                "args": [
                    "{that}.model.gpii_primarySchema_magnifierEnabled",
                    "{that}.events.onShowMagnifierAdjusters.fire",
                    "{that}.events.onHideMagnifierAdjusters.fire",
                    0
                ],
                dynamic: true
            },
            toggleMagnifierExtraAdjusters: {
                "funcName": "gpii.panel.increaseSize.toggleMagnifierExtraAdjusters",
                "args": [
                    "{that}.model.magnifierExtraAdjustersEnabledSwitch",
                    "{that}.events.onShowMagnifierExtraAdjusters.fire",
                    "{that}.events.onHideMagnifierExtraAdjusters.fire"
                ],
                dynamic: true
            }
        },
        model: {
            magnifierExtraAdjustersEnabledSwitch: false
        },
        selectors: {
            increaseSizeHeader: ".gpiic-headerTitle",
            increaseSizeAdjusters: ".gpiic-category",
            preferenceSwitchIncreaseSize: ".gpiic-increaseSize-preferenceSwitch",
            // markup of this element is disappearing if i add this, cannot set tooltips.
            //addToMyPreferencesStar: ".gpiic-addToMyPreferencesLabel",
            magnifierAdjusters: ".gpiic-magnifier-category",
            magnifierExtraAdjusters: ".gpiic-magnifier-hidden",
            // This is in a sub-panel. Is that bad?
            preferenceSwitchMagnifierExtra: ".gpiic-magnifier-preferenceSwitchExtra",
            magnifierMoreLess: ".gpiic-magnifier-moreLess",
            appearanceHeading: ".gpiic-increaseSize-appearanceHeading",
            magnifierHeading: ".gpiic-increaseSize-magnifierHeading",
            magnifierMoreLess: ".gpiic-magnifier-moreLess"
        },
        //selectorsToIgnore: ["increaseSizeHeader", "increaseSizeAdjusters"/*, "addToMyPreferencesStar"*/, "increaseSizeExtraAdjusters", "moreLess"],
        selectorsToIgnore: ["magnifierExtraAdjusters"],
        members: {
            messageResolver: "{prefsEditorLoader}.msgBundle"
        },
        protoTree: {
            increaseSizeHeader: {messagekey: "increaseSizeHeader"},
            preferenceSwitchMagnifierExtra: "${magnifierExtraAdjustersEnabledSwitch}",
            appearanceHeading: {messagekey: "appearance"},
            magnifierHeading:  {messagekey: "magnifier"},
            magnifierMoreLess: "{that}.stringBundle.more"
        }
    });

    gpii.panel.increaseSize.toggleMagnifierAdjusters = function (magnifierAdjustersEnabledSwitch, showEvent, hideEvent, duration) {
        if (magnifierAdjustersEnabledSwitch) {
            showEvent(duration);
        } else {
            hideEvent(duration);
        }
    };

    gpii.panel.increaseSize.toggleMagnifierExtraAdjusters = function (magnifierExtraAdjustersEnabledSwitch, showEvent, hideEvent, duration) {
        if (magnifierExtraAdjustersEnabledSwitch) {
            showEvent(duration);
        } else {
            hideEvent(duration);
        }
    };    
})(jQuery, fluid);
