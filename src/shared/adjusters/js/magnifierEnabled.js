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
    
    fluid.defaults("gpii.adjuster.magnifierEnabled", {
        gradeNames: ["gpii.adjuster.onOffSwitch", "gpii.panel.expandingAdjusters", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.magnifierEnabled": {
                "model.value": "default"
            }
        },
        protoTree: {
            headingLabel: {messagekey: "magnifierLabel"},
            valueCheckbox: "${value}"
        },
        selectors: {
            expandingAdjusters: function () {return ".gpiic-magnifier-hidden"},
            moreLess: function () {return ".gpiic-magnifier-category"}
        },
        // propagate "model.value" to "moreLessEnabledSwitch"
        modelListeners: {
            "value": {
                "this": "{that}.applier",
                "method": "requestChange",
                "args": ["moreLessEnabledSwitch", "{change}.value"]
            }
        }
    });
})(jQuery, fluid);
