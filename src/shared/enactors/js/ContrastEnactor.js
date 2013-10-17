/*!
Cloud4all Preferences Management Tools

Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global fluid, jQuery*/
/*jslint white: true, onevar: true, funcinvoke: true, forvar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

(function ($, fluid) {

    fluid.defaults("gpii.uiOptions.enactors.contrast", {
        gradeNames: ["fluid.viewComponent", "fluid.uiOptions.enactors", "autoInit"],
        preferenceMap: {
            "http://registry.gpii.org/common/display.screenEnhancement.highContrast": {
                "model.value": "default"
            }
        },
        styles: {
            defaultTheme: "fl-theme-uio-default",
            contrastTheme: "fl-theme-uio-yb"
        },
        invokers: {
            toggleContrast: {
                funcName: "gpii.uiOptions.enactors.contrast.toggleContrast",
                args: ["{that}.container", "{that}.options.styles.defaultTheme", "{that}.options.styles.contrastTheme", "{that}.model.value"]
            }
        },
        listeners: {
            "onCreate.toggleDefaultTheme": {
                listener: "{that}.toggleContrast"
            },
            "onCreate.toggleTheme": {
                listener: "{that}.applier.modelChanged.addListener",
                args: ["value", "{that}.toggleContrast"]
            }

        }
    });

    gpii.uiOptions.enactors.contrast.toggleContrast = function (elm, originalClass, contrastClass, enableContrast) {
        elm.toggleClass(originalClass, !enableContrast);
        elm.toggleClass(contrastClass, enableContrast);
    };
})(jQuery, fluid);
