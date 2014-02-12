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

    fluid.defaults("gpii.enactor.contrastThemeNoPreview", {
        gradeNames: ["fluid.prefs.enactor.classSwapper", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.contrastEnabled": {
                "model.enabled": "default"
            },
            "gpii.primarySchema.contrast.theme": {
                "model.value": "default"
            }
        },
        invokers: {
            swap: {
                funcName: "gpii.enactor.contrastThemeNoPreview.swap",
                args: ["{arguments}.0", "{that}"]
            }
        },
        classes: {
            "default": "fl-theme-prefsEditor-default gpii-prefsEditor-theme-default",
            "black-white": "fl-theme-prefsEditor-bw gpii-prefsEditor-theme-bw fl-theme-bw",
            "white-black": "fl-theme-prefsEditor-wb gpii-prefsEditor-theme-wb fl-theme-wb",
            "black-yellow": "fl-theme-prefsEditor-by gpii-prefsEditor-theme-by fl-theme-by",
            "yellow-black": "fl-theme-prefsEditor-yb gpii-prefsEditor-theme-yb fl-theme-yb"
        }
    });

    gpii.enactor.contrastThemeNoPreview.swap = function (value, that) {
        that.clearClasses();
        if (that.model.enabled) {
            that.container.addClass(that.options.classes[value]);
        } else {
            // set the default theme if contrast is disabled
            that.container.addClass(that.options.classes["default"]);
        }
    };
})(jQuery, fluid);
