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

    fluid.defaults("gpii.panel.expandingAdjusters", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        events: {
            onShowMoreLess: null,
            onHideMoreLess: null,
            onShowExpandingAdjusters: null,
            onHideExpandingAdjusters: null
        },
        listeners: {
            "onShowMoreLess.show": {
                "this": "{that}.dom.moreLess",
                "method": "slideDown",
                "args": ["{arguments}.0"]
            },
            "onHideMoreLess.hide": {
                "this": "{that}.dom.moreLess",
                "method": "slideUp",
                "args": ["{arguments}.0"]
            },
            "afterRender.bindEventPreferenceSwitchRequestChange": {
                "this": "{that}.dom.moreLess",
                "method": "click",
                "args": ["{that}.requestChangeForExpandingAdjustersEnabledSwitch"]
            },
            "onShowExpandingAdjusters.show": {
                "this": "{that}.dom.expandingAdjusters",
                "method": "slideDown",
                "args": ["{arguments}.0"]
            },
            "onHideExpandingAdjusters.hide": {
                "this": "{that}.dom.expandingAdjusters",
                "method": "slideUp",
                "args": ["{arguments}.0"]
            },
            "onShowExpandingAdjusters.setLessText": {
                "this": "{that}.dom.moreLess",
                "method": "text",
                "args": ["{that}.stringBundle.less"]
            },
            "onHideExpandingAdjusters.setMoreText": {
                "this": "{that}.dom.moreLess",
                "method": "text",
                "args": ["{that}.stringBundle.more"]
            },
            "afterRender.restoreMoreLess": {
                listener: "{that}.toggleMoreLessInstant"
            },
            "afterRender.restoreExpandingAdjusters": {
                listener: "{that}.toggleExpandingAdjustersInstant"
            }
        },
        invokers: {
            toggleMoreLessInstant: {
                "funcName": "gpii.panel.expandingAdjusters.toggleMoreLess",
                "args": [
                    "{that}.model.moreLessEnabledSwitch",
                    "{that}.events.onShowMoreLess.fire",
                    "{that}.events.onHideMoreLess.fire",
                    0
                ],
                dynamic: true
            },
            toggleExpandingAdjustersInstant: {
                "funcName": "gpii.panel.expandingAdjusters.toggleExpandingAdjusters",
                "args": [
                    "{that}.model.expandingAdjustersEnabledSwitch",
                    "{that}.events.onShowExpandingAdjusters.fire",
                    "{that}.events.onHideExpandingAdjusters.fire",
                    0
                ],
                dynamic: true
            },
            toggleExpandingAdjusters: {
                "funcName": "gpii.panel.expandingAdjusters.toggleExpandingAdjusters",
                "args": [
                    "{that}.model.expandingAdjustersEnabledSwitch",
                    "{that}.events.onShowExpandingAdjusters.fire",
                    "{that}.events.onHideExpandingAdjusters.fire"
                ],
                dynamic: true
            },
            requestChangeForExpandingAdjustersEnabledSwitch: {
                // had to make this in a func because negations (!) are not expanded
                "funcName": "gpii.panel.expandingAdjusters.requestChangeForExpandingAdjustersEnabledSwitch",
                args: ["{that}.applier.requestChange", "expandingAdjustersEnabledSwitch", "{that}.model.expandingAdjustersEnabledSwitch"]
            }
        },
        model: {
            moreLessEnabledSwitch: true,    // more/less is enabled by default. This can be overriden.
            expandingAdjustersEnabledSwitch: false
        },
        modelListeners: {
            "expandingAdjustersEnabledSwitch": {
                func: "{that}.toggleExpandingAdjustersInstant"
            },
            "moreLessEnabledSwitch": {
                func: "{that}.toggleMoreLessInstant"
            }
        },
        selectors: {
            moreLess: "",  //should be provided by integrators
            expandingAdjusters: ""  //should be provided by integrators
            
        },
        selectorsToIgnore: ["expandingAdjusters", "moreLess"]
    });

    gpii.panel.expandingAdjusters.toggleMoreLess = function (moreLessEnabledSwitch, showEvent, hideEvent, duration) {
        if (moreLessEnabledSwitch) {
            showEvent(duration);
        } else {
            hideEvent(duration);
        }
    };

    gpii.panel.expandingAdjusters.toggleExpandingAdjusters = function (expandingAdjustersEnabledSwitch, showEvent, hideEvent, duration) {
        if (expandingAdjustersEnabledSwitch) {
            showEvent(duration);
        } else {
            hideEvent(duration);
        }
    };    

    gpii.panel.expandingAdjusters.requestChangeForExpandingAdjustersEnabledSwitch = function (requestChange, modelPreference, switchValue) {
        requestChange(modelPreference, !switchValue);
    };

})(jQuery, fluid);
