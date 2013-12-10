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
    
    fluid.registerNamespace("gpii.prefs.helpers");

    gpii.prefs.helpers.arrayOverridePolicy = function (target, source) {
        source = fluid.makeArray(source);
        return source;
    };
    
    fluid.defaults("gpii.adjuster.contrastThemeWithInversion", {
        gradeNames: ["fluid.prefs.panel.contrast", "autoInit"],
        mergePolicy: {
            "controlValues.theme": gpii.prefs.helpers.arrayOverridePolicy
        },
        preferenceMap: {
            "gpii.primarySchema.contrast.theme": {
                "model.value": "default"
            }
        },
        selectors: {
            colourTheme: ".gpiic-contrast-colourTheme"
        },
        selectorsToIgnore: ["colourTheme"],
        listeners: {
            "onDomBind.setColourThemeText": {
                "this": "{that}.dom.colourTheme",
                "method": "text",
                "args": ["{that}.stringBundle.colourTheme"]
            },
            onDomBind: "{that}.style"
        },
        controlValues: {
            theme: ["default", "inverted", "bw", "wb", "by", "yb"]
        },
        markup: {
            label: "<span class=\"fl-preview-A\">A</span><span class=\"fl-hidden-accessible\">%theme</span>"
        },
        invokers: {
            style: {
                funcName: "fluid.prefs.panel.contrast.style",
                args: [
                    "{that}.dom.themeLabel", "{that}.stringBundle.theme",
                    "{that}.options.markup.label", "{that}.options.controlValues.theme",
                    "{that}.options.classnameMap.contrastTheme"
                ],
                dynamic: true
            }
        }
    });
})(jQuery, fluid);
