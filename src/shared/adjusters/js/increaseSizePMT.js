/*!
Cloud4all Preferences Management Tools

Copyright 2013 OCAD University
Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global fluid, jQuery, gpii*/
/*jslint white: true, onevar: true, funcinvoke: true, forvar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

(function ($, fluid) {

    fluid.defaults("gpii.panel.increaseSizePMT", {
        gradeNames: ["gpii.panel.increaseSizePCP", "gpii.panel.expandingAdjusters", "autoInit"],
        protoTree: {
            increaseSizeHeader: {messagekey: "increaseSizeHeader"},
            appearanceHeading: {messagekey: "appearance"},
            magnifierHeading:  {messagekey: "magnifier"},
            // duplicate entry in protoTree; it does not merge.
            preferenceSwitchExpanding: "${expandingAdjustersEnabledSwitch}"
        },
        selectors: {
            preferenceSwitchExpanding: ".gpiic-magnifier-preferenceSwitchExtra",
            expandingAdjusters: ".gpiic-magnifier-hidden",
            moreLess: ".gpiic-magnifier-category"
        }
    });
})(jQuery, fluid);
