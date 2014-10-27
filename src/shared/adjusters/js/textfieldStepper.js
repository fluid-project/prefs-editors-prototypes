/*!
Copyright 2013 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/gpii/universal/LICENSE.txt
*/

var fluid_1_5 = fluid_1_5 || {};

(function ($, fluid) {
    "use strict";

    fluid.registerNamespace("gpii.adjuster");

    fluid.defaults("gpii.adjuster.textfieldStepper", {
        gradeNames: ["gpii.textfieldStepper", "fluid.prefs.modelRelay", "fluid.prefs.msgLookup", "autoInit"],
        members: {
            messageResolver: "{prefsEditorLoader}.msgResolver"
        },
        strings: {
            plusText: "{that}.msgLookup.textPlus",
            minusText: "{that}.msgLookup.textMinus"
        }
    });

})(jQuery, fluid_1_5);
