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

    fluid.defaults("gpii.adjuster.singleSelectionWithKeyboard", {
        gradeNames: ["fluid.littleComponent", "autoInit"],
        listeners: {
            "onDomBind.setFocusHandlers": "{that}.setFocusHandlers"
        },
        invokers: {
            /* To be provided by implementors in order to pass correct args
            setFocusHandlers: {
                funcName: "gpii.adjuster.singleSelectionWithKeyboard.setFocusHandlers",
                args: [
                    "{that}.options.selectors.punctuationVerbosityOptionLabel",
                    "{that}.dom.punctuationVerbosityContainer"
                ]
            }
            */
        }
    });
    
    gpii.adjuster.singleSelectionWithKeyboard.setFocusHandlers = function (labelsClass, punctuationVerbosityContainer) {
        labels = $(labelsClass); 

        fluid.each(labels, function (label, index) {
            // get the label's associated input
            var inputCssCompliantSelector = "#" + $(label).attr("for").replace(/\:/g, '\\:');
            var theInput = $(inputCssCompliantSelector);
            // outline container according to focus
            theInput.focusin(function () {
                punctuationVerbosityContainer.css("outline", "2px solid black");
            });
            theInput.focusout(function () {
                punctuationVerbosityContainer.css("outline", "none");
            });
        });
    };

})(jQuery, fluid);
