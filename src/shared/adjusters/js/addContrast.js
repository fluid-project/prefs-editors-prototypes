/*!
Cloud4all Preferences Management Tools

Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

(function ($, fluid) {
    "use strict";

    fluid.defaults("gpii.adjuster.addContrast", {
        gradeNames: ["fluid.prefs.compositePanel", "autoInit"],
        selectors: {
            panelLabel: ".gpiic-headerTitle",
            contrastSection: ".gpiic-contrast-section"
        },
        selectorsToIgnore: ["contrastSection"],
        protoTree: {
            panelLabel: {messagekey: "changeContrast"}
        },
        members: {
            messageResolver: "{prefsEditorLoader}.msgResolver"
        },
        listeners: {
            "afterRender.setSectionName": {
                "this": "{that}.dom.contrastSection",
                "method": "attr",
                "args": ["aria-label", "{that}.msgLookup.changeContrast"]
            }
        }
    });
})(jQuery, fluid);
