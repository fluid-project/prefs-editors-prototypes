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

    fluid.defaults("gpii.adjuster.singleSelectionWithKeyboard", {
        gradeNames: ["fluid.littleComponent", "autoInit"],
        mergePolicy: {
            selectorsToIgnore: fluid.prefs.compositePanel.arrayMergePolicy
        },
        selectors: {
            singleSelectionLabels: ""   // to be provided by implementors
        },
        selectorsToIgnore: ["singleSelectionLabels"],
        listeners: {
            "onDomBind.setFocusHandlers": "{that}.setFocusHandlers"
        },
        invokers: {
            setFocusHandlers: {
                funcName: "gpii.adjuster.singleSelectionWithKeyboard.setFocusHandlers",
                args: [
                    "{that}.dom.singleSelectionLabels"
                ]
            }
        }
    });

    gpii.adjuster.singleSelectionWithKeyboard.setFocusHandlers = function (labels) {
        fluid.each(labels, function (label) {
            label = $(label);

            // get the label's associated input
            var inputCssCompliantSelector = "#" + label.attr("for").replace(/\:/g, "\\:");
            var theInput = $(inputCssCompliantSelector);
            // outline container according to focus
            theInput.focusin(function () {
                label.addClass("gpii-focus");
            });
            theInput.focusout(function () {
                label.removeClass("gpii-focus");
            });
        });
    };

})(jQuery, fluid);
