/*!
Cloud4all Preferences Management Tools

Copyright 2014 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

(function ($, fluid) {
    "use strict";

    fluid.defaults("gpii.adjuster.autoAdjust", {
        gradeNames: ["gpii.adjuster.onOffSwitch", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.autoAdjust": {
                "model.autoAdjust": "default"
            }
        },
        selectors: {
            autoAdjustDescription: ".gpiic-autoAdjust-description"
        },
        protoTree: {
            valueCheckbox: "${autoAdjust}",
            headingLabel: {messagekey: "autoAdjustLabel"},
            autoAdjustDescription: {messagekey: "autoAdjustDescription"}
        },
        /*
         *  Force the panel to rerender whenever the model is changed, since there is an issue with panel not re-rendering correctly.
         */
        modelListeners: {
            "": "{that}.refreshView"
        },
        onOffModelKey: "autoAdjust"
    });
})(jQuery, fluid);
