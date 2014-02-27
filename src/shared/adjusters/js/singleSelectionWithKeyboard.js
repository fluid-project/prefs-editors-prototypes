/*!
Cloud4all Preferences Management Tools

Copyright 2014 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global fluid, jQuery, gpii*/
/*jslint white: true, onevar: true, funcinvoke: true, forvar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

(function ($, fluid) {

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
    
    gpii.adjuster.singleSelectionWithKeyboard.setFocusHandlers = function (labelsClass) {
        labels = $(labelsClass); 

        fluid.each(labels, function (label, index) {
            label = $(label);
            
            // get the label's associated input
            var inputCssCompliantSelector = "#" + label.attr("for").replace(/\:/g, '\\:');
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
