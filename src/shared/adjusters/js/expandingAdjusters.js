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
                "method": "slideDown"
            },
            "onHideMoreLess.hide": {
                "this": "{that}.dom.moreLess",
                "method": "slideUp"
            },
            "afterRender.bindEventRequestChangeMoreLess": {
                "this": "{that}.dom.moreLess",
                "method": "click",
                "args": ["{that}.requestChangeMoreLess"]
            },
            "onShowExpandingAdjusters.show": {
                "this": "{that}.dom.expandingAdjusters",
                "method": "slideDown"
            },
            "onHideExpandingAdjusters.hide": {
                "this": "{that}.dom.expandingAdjusters",
                "method": "slideUp"
            },
            "onShowExpandingAdjusters.setLessText": {
                "this": "{that}.dom.moreLess",
                "method": "attr",
                "args": ["value", "{that}.stringBundle.less"]
            },
            "onHideExpandingAdjusters.setMoreText": {
                "this": "{that}.dom.moreLess",
                "method": "attr",
                "args": ["value", "{that}.stringBundle.more"]
            },
            "onShowExpandingAdjusters.setExpanded": {
                "listener": "{that}.setExpanded"
            },
            "onHideExpandingAdjusters.setExpanded": {
                "listener": "{that}.setExpanded"
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
                "funcName": "gpii.panel.expandingAdjusters.showOrHideDependingOnState",
                "args": [
                    "{that}.model.moreLessEnabledSwitch",
                    "{that}.events.onShowMoreLess.fire",
                    "{that}.events.onHideMoreLess.fire",
                    0
                ],
                dynamic: true
            },
            toggleExpandingAdjustersInstant: {
                "funcName": "gpii.panel.expandingAdjusters.showOrHideDependingOnState",
                "args": [
                    "{that}.model.expandingAdjustersEnabledSwitch",
                    "{that}.events.onShowExpandingAdjusters.fire",
                    "{that}.events.onHideExpandingAdjusters.fire",
                    0
                ],
                dynamic: true
            },
            toggleExpandingAdjusters: {
                "funcName": "gpii.panel.expandingAdjusters.showOrHideDependingOnState",
                "args": [
                    "{that}.model.expandingAdjustersEnabledSwitch",
                    "{that}.events.onShowExpandingAdjusters.fire",
                    "{that}.events.onHideExpandingAdjusters.fire"
                ],
                dynamic: true
            },
            requestChangeMoreLess: {
                "funcName": "gpii.panel.expandingAdjusters.requestChangeMoreLess",
                "args": ["{that}"],
                "dynamic": true
            },
            setExpanded: {
                "this": "{that}.dom.expandingAdjusters",
                "method": "attr",
                "args": ["aria-expanded", "{that}.model.expandingAdjustersEnabledSwitch"],
                dynamic: true
            }
        },
        model: {
            moreLessEnabledSwitch: true,    // more/less is enabled by default. This can be overriden.
            expandingAdjustersEnabledSwitch: false
        },
        selectors: {
            moreLess: "",  //should be provided by integrators
            expandingAdjusters: ""  //should be provided by integrators
        },
        selectorsToIgnore: ["expandingAdjusters", "moreLess"]
    });

    gpii.panel.expandingAdjusters.showOrHideDependingOnState = function (state, showEvent, hideEvent, duration) {
        state ? showEvent(duration) : hideEvent(duration);
    };
    
    gpii.panel.expandingAdjusters.requestChangeMoreLess = function (that) {
        that.applier.requestChange("expandingAdjustersEnabledSwitch", !that.model.expandingAdjustersEnabledSwitch);
        // we need the refreshView() here since these will not be inside a conditional panel
        that.refreshView();
    };
})(jQuery, fluid);
