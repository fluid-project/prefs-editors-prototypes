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

    fluid.defaults("gpii.panel.increaseSize", {
        gradeNames: ["fluid.prefs.compositePanel", "autoInit"],
        selectors: {
            increaseSizeHeader: ".gpiic-headerTitle",
            increaseSizeAdjusters: ".gpiic-category",
            preferenceSwitchIncreaseSize: ".gpiic-increaseSize-preferenceSwitch",
            // markup of this element is disappearing if i add this, cannot set tooltips.
            //addToMyPreferencesStar: ".gpiic-addToMyPreferencesLabel",
            increaseSizeExtraAdjusters: ".gpiic-category-hidden",
            preferenceSwitchIncreaseSizeExtra: ".gpiic-increaseSize-preferenceSwitchExtra",
            moreLess: ".gpiic-moreLess",
            appearanceHeading: ".gpiic-increaseSize-appearanceHeading",
            magnifierHeading: ".gpiic-increaseSize-magnifierHeading"
        },
        //selectorsToIgnore: ["increaseSizeHeader", "increaseSizeAdjusters"/*, "addToMyPreferencesStar"*/, "increaseSizeExtraAdjusters", "moreLess"],
        members: {
            messageResolver: "{prefsEditorLoader}.msgBundle"
        },
        protoTree: {
            increaseSizeHeader: {messagekey: "increaseSizeHeader"},
            appearanceHeading: {messagekey: "appearance"},
            magnifierHeading:  {messagekey: "magnifier"}
        }
    });

})(jQuery, fluid);
