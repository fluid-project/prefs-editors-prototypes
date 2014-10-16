/*!
Cloud4all Preferences Management Tools

Copyright 2013 OCAD University
Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

(function ($, fluid) {
    "use strict";
    
    fluid.defaults("gpii.panel.increaseSizePCP", {
        gradeNames: ["fluid.prefs.compositePanel", "autoInit"],
        selectors: {
            increaseSizeHeader: ".gpiic-headerTitle",
            appearanceHeading: ".gpiic-increaseSize-appearanceHeading",
            magnifierHeading: ".gpiic-increaseSize-magnifierHeading"
        },
        members: {
            messageResolver: "{prefsEditorLoader}.msgResolver"
        },
        protoTree: {
            increaseSizeHeader: {messagekey: "increaseSizeHeader"},
            appearanceHeading: {messagekey: "appearance"},
            magnifierHeading:  {messagekey: "magnifier"}
        }
    });
})(jQuery, fluid);
