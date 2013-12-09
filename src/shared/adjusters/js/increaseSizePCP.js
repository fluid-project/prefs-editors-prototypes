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

    fluid.defaults("gpii.panel.increaseSizePCP", {
        gradeNames: ["fluid.prefs.compositePanel", "autoInit"],
        events: {
            onShowMagnifierAdjusters: null,
            onHideMagnifierAdjusters: null
        },
        listeners: {
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
            }
        },
        invokers: {
            toggleMagnifierAdjustersInstant: {
                "funcName": "gpii.panel.increaseSizePCP.toggleMagnifierAdjusters",
                "args": [
                    "{that}.model.gpii_primarySchema_magnifierEnabled",
                    "{that}.events.onShowMagnifierAdjusters.fire",
                    "{that}.events.onHideMagnifierAdjusters.fire",
                    0
                ],
                dynamic: true
            }
        },
        selectors: {
            increaseSizeHeader: ".gpiic-headerTitle",
            preferenceSwitchIncreaseSize: ".gpiic-increaseSize-preferenceSwitch",
            // markup of this element is disappearing if i add this, cannot set tooltips.
            //addToMyPreferencesStar: ".gpiic-addToMyPreferencesLabel",
            magnifierAdjusters: ".gpiic-magnifier-category",
            appearanceHeading: ".gpiic-increaseSize-appearanceHeading",
            magnifierHeading: ".gpiic-increaseSize-magnifierHeading"
        },
        members: {
            messageResolver: "{prefsEditorLoader}.msgBundle"
        },
        protoTree: {
            increaseSizeHeader: {messagekey: "increaseSizeHeader"},
            appearanceHeading: {messagekey: "appearance"},
            magnifierHeading:  {messagekey: "magnifier"}
        }
    });

    gpii.panel.increaseSizePCP.toggleMagnifierAdjusters = function (magnifierAdjustersEnabledSwitch, showEvent, hideEvent, duration) {
        if (magnifierAdjustersEnabledSwitch) {
            showEvent(duration);
        } else {
            hideEvent(duration);
        }
    };
})(jQuery, fluid);
