/*!
Cloud4all Preferences Management Tools

Copyright 2013 CERTH/HIT
Copyright 2014 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global fluid, jQuery, gpii*/
/*jslint white: true, onevar: true, funcinvoke: true, forvar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

(function ($, fluid) {

    fluid.defaults("gpii.adjuster.onOffSwitch", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        onOffModelKey: null,    // Must be provided by integrators. The model key that controls on off switch
        selectors: {
            headingLabel: ".gpiic-onOffSwitch-label",
            valueCheckbox: ".gpiic-onOffSwitch-input",
            onOffSwitch: ".gpiic-prefsEditor-onOffSwitch"
        },
        selectorsToIgnore: ["onOffSwitch"],
        listeners: {
            "onCreate.init": {
                listener: "gpii.adjuster.onOffSwitch.init",
                args: ["{that}", "{that}.options.onOffModelKey"]
            },
            "onDomBind.addAria": "gpii.adjuster.onOffSwitch.addAria",
            "onDomBind.makeOnOffSwitchActivatable": {
                "funcName": "fluid.activatable",
                "args": ["{that}.dom.onOffSwitch", "{that}.triggerModelChangeOnActivate"]
            },
            /*
             * TODO: This is a temporary workaround for retaining focus on ON/OFF switch when it is toggled.
             * This listener (along with the called invoker) should not be needed when,
             *      http://issues.fluidproject.org/browse/FLUID-5278
             * is resolved.
             */
            "onDomBind.bindFocusListener": {
                "this": "{that}.dom.valueCheckbox",
                "method": "change",
                args: ["{that}.focus"]
            },
            "onDomBind.setOnText": {
                "this": "{that}.dom.onOffSwitch",
                "method": "attr",
                "args": ["data-checkboxStateOn", "{that}.msgLookup.onText"]
            },
            "onDomBind.setOffText": {
                "this": "{that}.dom.onOffSwitch",
                "method": "attr",
                "args": ["data-checkboxStateOff", "{that}.msgLookup.offText"]
            }
        },
        invokers: {
            triggerModelChangeOnActivate: {
                "funcName": "gpii.adjuster.onOffSwitch.triggerModelChangeOnActivate",
                "args": ["{that}", "{arguments}.0"]
            },
            focus: {
                "this": "{that}.dom.onOffSwitch",
                "method": "trigger",
                args: ["focus"]
            }
        }
    });

    gpii.adjuster.onOffSwitch.triggerModelChangeOnActivate = function (that, event) {
        /*
         * This isn't the most appropriate way of performing the model change compared to requestChange.
         * The reason for this is that the actual model path will be known only to the sub-components
         * of this one (e.g. the magnifierEnabled). So, we either do it this way or we force/anticipate
         * that sub-component implementers will follow the forced "that.model.value" path...
         */
        that.locate("valueCheckbox").click();
        //that.applier.requestChange("value", !that.model.value)

        /*
         * This is needed because most modern browsers have the functionality of scrolling further
         * down when Space key is pressed. So, this is needed in order to suppress this functionality when the
         * on/off switch has focus.
         */
        event.preventDefault();
    };

    gpii.adjuster.onOffSwitch.init = function (that, onOffModelKey) {
        that.applier.modelChanged.addListener(onOffModelKey, function (newModel) {
            var onOffSwitch = that.locate("onOffSwitch");
            onOffSwitch.attr("aria-checked", newModel[onOffModelKey]);
        });
    };

    gpii.adjuster.onOffSwitch.addAria = function (that) {
        var onOffSwitch = that.locate("onOffSwitch");
        onOffSwitch.attr("role", "checkbox");
        onOffSwitch.attr("aria-labelledby", gpii.ariaUtility.getLabelId(that.locate("headingLabel")));
        onOffSwitch.attr("aria-checked", that.model[that.options.onOffModelKey]);
    };

})(jQuery, fluid);
