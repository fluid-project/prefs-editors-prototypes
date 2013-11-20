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

    fluid.defaults("gpii.enactor.contrastTheme", {
        gradeNames: ["fluid.prefs.enactor.classSwapper", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.contrastEnabled": {
                "model.enabled": "default"
            },
            "gpii.primarySchema.contrast.theme": {
                "model.value": "default"
            }
        },
        classes: {
            "bw": "fl-theme-prefsEditor-bw gpii-prefsEditor-theme-bw fl-theme-bw",
            "yb": "fl-theme-prefsEditor-yb gpii-prefsEditor-theme-yb fl-theme-yb",
            "by": "fl-theme-prefsEditor-by gpii-prefsEditor-theme-by fl-theme-by",
            "wb": "fl-theme-prefsEditor-wb gpii-prefsEditor-theme-wb fl-theme-wb"
        }
    });

    // override the swap function
    fluid.prefs.enactor.classSwapper.swap = function (value, that) {
        that.clearClasses();
        if (that.model.enabled) {
            that.container.addClass(that.options.classes[value]);
        }
    };
})(jQuery, fluid);
