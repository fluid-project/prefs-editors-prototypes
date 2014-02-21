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

    fluid.defaults("gpii.adjuster.activatableLabelsPropagateKeyEventToLabelFor", {
        gradeNames: ["fluid.littleComponent", "autoInit"],
        activatableLabelsSelector: "",   // to be provided by implementors
        keybindingOpts: {
            additionalBindings: [{
                key: $.ui.keyCode.LEFT,
                activateHandler: function (event) {
                    gpii.adjuster.activatableLabelsPropagateKeyEventToLabelFor.propagateKeyEventToLabelFor(event, $.ui.keyCode.LEFT);
                }
            }, {
                key: $.ui.keyCode.RIGHT,
                activateHandler: function (event) {
                    gpii.adjuster.activatableLabelsPropagateKeyEventToLabelFor.propagateKeyEventToLabelFor(event, $.ui.keyCode.RIGHT);
                }
            }, {
                key: $.ui.keyCode.UP,
                activateHandler: function (event) {
                    gpii.adjuster.activatableLabelsPropagateKeyEventToLabelFor.propagateKeyEventToLabelFor(event, $.ui.keyCode.UP);
                }
            }, {
                key: $.ui.keyCode.DOWN,
                activateHandler: function (event) {
                    gpii.adjuster.activatableLabelsPropagateKeyEventToLabelFor.propagateKeyEventToLabelFor(event, $.ui.keyCode.DOWN);
                }
            }, {
                key: $.ui.keyCode.TAB,
                activateHandler: function (event) {
                    gpii.adjuster.activatableLabelsPropagateKeyEventToLabelFor.propagateKeyEventToLabelFor(event, $.ui.keyCode.TAB);
                }
            }]
        },
        listeners: {
            "onDomBind.makeLabelsActivatable": {
                "funcName": "fluid.activatable",
                "args": ["{that}.options.activatableLabelsSelector", null, "{that}.options.keybindingOpts"]
            }
        },
        invokers: {
            clickLabelsOnActivate: {
                funcName: "gpii.adjuster.activatableLabelsPropagateKeyEventToLabelFor.propagateKeyEventToLabelFor"
            }
        }
    });
    
    gpii.adjuster.activatableLabelsPropagateKeyEventToLabelFor.propagateKeyEventToLabelFor = function (event, keyCode) {
        // activating labels propagates key event to associated input
        var inputCssCompliantSelector = "#" + event.target.htmlFor.replace(/\:/g, '\\:');
        var theInput = $(inputCssCompliantSelector);
        
        var keyEvent = jQuery.Event("keydown");
        keyEvent.which = keyCode;
        keyEvent.keyCode = keyCode;
        
        theInput.trigger(keyEvent);
    
        event.preventDefault();
    };

})(jQuery, fluid);
