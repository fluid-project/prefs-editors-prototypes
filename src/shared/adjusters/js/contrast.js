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

    fluid.defaults("gpii.adjuster.contrast", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.highContrast": {
                "model.contrast": "default"
            }
        },
        events: {
            onToggleContrastAdjusters: null
        },
        listeners: {
            "afterRender.bindEventPreferenceSwitchContrast": {
                "this": "{that}.dom.valueCheckbox",
                "method": "change",
                "args": ["{that}.events.onToggleContrastAdjusters.fire"]
            },
            "onToggleContrastAdjusters.showHide": {
                "this": "{that}.dom.contrastAdjusters",
                "method": "slideToggle"
            },
            "afterRender.setContrastAdjusters": {
                listener: "gpii.adjuster.contrast.setContrastAdjusters",
                args: ["{that}.dom.contrastAdjusters", "{that}.model.contrast"]
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
            valueCheckbox: ".gpiic-contrast-constrastInput",
            headingLabel: ".gpiic-contrast-contrastLabel",
            panelLabel: ".gpiic-headerTitle",
            addToMyPreferencesLabel: ".gpiic-addToMyPreferencesLabel",
            contrastAdjusters: ".gpiic-category",
        },
        selectorsToIgnore: ["contrastAdjusters", "addToMyPreferencesLabel"],
        protoTree: {
            valueCheckbox: "${contrast}",
            headingLabel: {messagekey: "contrast"},
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

    gpii.adjuster.contrast.setContrastAdjusters = function (contrastAdjuster, flag) {
        contrastAdjuster[flag ? "show" : "hide"]();
    };

    fluid.defaults("gpii.adjuster.contrast.preview", {
        gradeNames: ["gpii.adjuster.previewWithText", "autoInit"],
        previewURL: "",
        previewEnactors: {
            contrast: {
                type: "gpii.enactor.contrast",
                container: "{enhancer}.container",
                options: {
                    gradeNames: ["gpii.enactors.previewConnections"]
                }
            }
        }
    });
})(jQuery, fluid);
