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
    
    fluid.defaults("gpii.adjuster.addContrast", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        events: {
            onToggleContrastAdjusters: null
        },
        listeners: {
            "afterRender.bindEventConstrastAdjustersEnabled": {
                "this": "{that}.dom.constrastAdjustersEnabled",
                "method": "change",
                "args": ["{that}.events.onToggleContrastAdjusters.fire"]
            },
            "onToggleContrastAdjusters.showHide": {
                "this": "{that}.dom.contrastAdjusters",
                "method": "slideToggle"
            },
            "afterRender.toggleContrastAdjusters": {
                listener: "gpii.adjuster.addContrast.toggleContrastAdjusters",
                args: ["{that}.dom.contrastAdjusters", "{that}.model.contrastAdjustersEnabledSwitch"]
            },
            "afterRender.setATTRaddToMyPreferencesLabel": {
                "this": "{that}.dom.addToMyPreferencesLabel",
                "method": "attr",
                "args": [{
                    "tooltip-checked": "{that}.options.strings.tooltipChecked",
                    "tooltip-unchecked": "{that}.options.strings.tooltipUnchecked"
                }]
            }
        },
        selectors: {
            constrastAdjustersEnabled: ".gpiic-contrast-constrastAdjustersEnabled",
            panelLabel: ".gpiic-headerTitle",
            // markup of this element is disappearing if i add this, cannot set tooltips.
            //addToMyPreferencesLabel: ".gpiic-addToMyPreferencesLabel",
            contrastAdjusters: ".gpiic-category"
        },
        selectorsToIgnore: ["contrastAdjusters"/*, "addToMyPreferencesLabel"*/],
        model: {
            contrastAdjustersEnabledSwitch: false
        },
        protoTree: {
            constrastAdjustersEnabled: "${contrastAdjustersEnabledSwitch}",
            panelLabel: {messagekey: "addContrast"}
        },
        members: {
            messageResolver: "{prefsEditorLoader}.msgBundle"
        },
        strings: {
            tooltipChecked: "{that}.stringBundle.tooltipChecked",
            tooltipUnchecked: "{that}.stringBundle.tooltipUnchecked"
        }
    });
    
    gpii.adjuster.addContrast.toggleContrastAdjusters = function (contrastAdjuster, flag) {
        contrastAdjuster[flag ? "show" : "hide"]();
    };
    
})(jQuery, fluid);
