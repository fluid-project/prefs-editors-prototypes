/*!
Cloud4all Preferences Management Tools

Copyright 2015 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

(function ($, fluid) {
    "use strict";

    fluid.defaults("gpii.adjuster.addAutoAdjust", {
        gradeNames: ["fluid.prefs.compositePanel", "autoInit"],
        selectors: {
            autoAdjustLabel: ".gpiic-headerTitle",
            autoAdjustSection: ".gpiic-autoAdjust-section"
        },
        selectorsToIgnore: ["autoAdjustSection"],
        protoTree: {
            autoAdjustLabel: {messagekey: "autoAdjustLabel"}
        },
        members: {
            messageResolver: "{prefsEditorLoader}.msgResolver"
        },
        listeners: {
            "afterRender.setSectionName": {
                "this": "{that}.dom.autoAdjustSection",
                "method": "attr",
                "args": ["aria-label", "{that}.msgLookup.autoAdjustLabel"]
            }
        }
    });
})(jQuery, fluid);
