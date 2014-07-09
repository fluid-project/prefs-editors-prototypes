/*!
Cloud4all Preferences Management Tools

Copyright 2013-2014 OCAD University
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
        gradeNames: ["gpii.panel.increaseSizePCP", "gpii.panel.expandingAdjusters", "autoInit"],
        model: {
            moreLessEnabledSwitch: false
        },
        protoTree: {
            increaseSizeHeader: {messagekey: "increaseSizeHeader"},
            appearanceHeading: {messagekey: "appearance"}
        },
        selectors: {
            magnifierControlsContainer: ".gpiic-prefsEditor-magnifier-container",
            expandingAdjusters: ".gpiic-magnifier-hidden",
            moreLess: ".gpiic-magnifier-category",
            elementToFocusOnExpansion: "input[name='gpii_primarySchema_magnificationPosition_magnifierPosition-radio']:checked"
        },
        selectorsToIgnore: ["magnifierControlsContainer", "elementToFocusOnExpansion"],
        listeners: {
            "afterRender.setAriaLabel": {
                "this": "{that}.dom.moreLess",
                "method": "attr",
                "args": ["aria-label", "{that}.setMagnifierAriaMoreLess"]
            },
            "afterRender.setExpandedAriaLabel": {
                "this": "{that}.dom.expandingAdjusters",
                "method": "attr",
                "args": ["aria-label", "{that}.msgLookup.additionalMagnifierAdjusters"]
            },
            "afterRender.setContainerAriaLabel": {
                "this": "{that}.dom.magnifierControlsContainer",
                "method": "attr",
                "args": ["aria-label", "{that}.msgLookup.additionalMagnifierAdjusters"]
            },
            "afterRender.setContainerAriaRelevant": "{that}.setAriaRelevant"
        },
        invokers: {
            // override this invoker to use the "magnifierEnabled" model value
            toggleMoreLessInstant: {
                "funcName": "gpii.panel.expandingAdjusters.showOrHideDependingOnState",
                "args": [
                    "{that}.model.gpii_primarySchema_magnifierEnabled",
                    "{that}.events.onShowMoreLess.fire",
                    "{that}.events.onHideMoreLess.fire",
                    0
                ],
                dynamic: true
            },
            setAriaRelevant: {
                funcName: "gpii.ariaUtility.setAriaRelevant",
                args: ["{that}.dom.magnifierControlsContainer", "{that}.model.gpii_primarySchema_magnifierEnabled"],
                dynamic: true

            },
            setMagnifierAriaMoreLess: {
                "funcName": "gpii.magnifierAriaMoreLess",
                "args": ["{that}.model.expandingAdjustersEnabledSwitch",
                         "{that}.msgLookup.moreMagnifierPreferences",
                         "{that}.msgLookup.lessMagnifierPreferences"
                        ],
                "dynamic": true
            }
        }
    });

    gpii.magnifierAriaMoreLess = function (modelValue, more, less) {
        var newText = modelValue ? less : more;
        return newText;  
    };

    
})(jQuery, fluid);
