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

    fluid.defaults("gpii.panel.increaseSizePMT", {
        gradeNames: ["gpii.panel.increaseSizePCP", "autoInit"],
        events: {
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
            "afterRender.restoreMagnifierExtraAdjusters": {
                listener: "{that}.toggleMagnifierExtraAdjustersInstant"
            }
        },
        invokers: {
            toggleMagnifierExtraAdjustersInstant: {
                "funcName": "gpii.panel.increaseSizePMT.toggleMagnifierExtraAdjusters",
                "args": [
                    "{that}.model.magnifierExtraAdjustersEnabledSwitch",
                    "{that}.events.onShowMagnifierExtraAdjusters.fire",
                    "{that}.events.onHideMagnifierExtraAdjusters.fire",
                    0
                ],
                dynamic: true
            },
            toggleMagnifierExtraAdjusters: {
                "funcName": "gpii.panel.increaseSizePMT.toggleMagnifierExtraAdjusters",
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
            magnifierExtraAdjusters: ".gpiic-magnifier-hidden",
            preferenceSwitchMagnifierExtra: ".gpiic-magnifier-preferenceSwitchExtra",
            magnifierMoreLess: ".gpiic-magnifier-moreLess"
        },
        selectorsToIgnore: ["magnifierExtraAdjusters"],
        protoTree: {
            // duplicate entries in protoTree; it does not merge.
            increaseSizeHeader: {messagekey: "increaseSizeHeader"},
            preferenceSwitchMagnifierExtra: "${magnifierExtraAdjustersEnabledSwitch}",
            appearanceHeading: {messagekey: "appearance"},
            magnifierHeading:  {messagekey: "magnifier"},
            magnifierMoreLess: "{that}.stringBundle.more"
        }
    });

    gpii.panel.increaseSizePMT.toggleMagnifierExtraAdjusters = function (magnifierExtraAdjustersEnabledSwitch, showEvent, hideEvent, duration) {
        if (magnifierExtraAdjustersEnabledSwitch) {
            showEvent(duration);
        } else {
            hideEvent(duration);
        }
    };    
})(jQuery, fluid);
