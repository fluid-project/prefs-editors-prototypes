/*!
Copyright 2013 OCAD University
Copyright 2013 Astea

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/gpii/universal/LICENSE.txt
*/

var fluid_1_5 = fluid_1_5 || {};

(function ($, fluid) {
    "use strict";

    fluid.defaults("gpii.textfieldStepper", {
        gradeNames: ["fluid.rendererComponent", "autoInit"],
        renderOnInit: true,
        labelledbyDomElement: null,   // Must be provided by integrators, used to add "aria-labelledby" for the stepper input field
        strings: {
            increment: "+",
            decrement: "-",
            unit: ""
        },
        selectors: {
            valueField: ".gpiic-textfieldStepper-valueField",
            unit: ".gpiic-textfieldStepper-unitField",
            increment: ".gpiic-textfieldStepper-increment",
            decrement: ".gpiic-textfieldStepper-decrement"
        },
        listeners: {
            "onCreate.modelGuard": {
                listener: "{that}.applier.guards.addListener",
                args: ["value", "{that}.guard"]
            },
            "onCreate.addAria": "{that}.addAria",
            "afterRender.incClick": {
                "this": "{that}.dom.increment",
                "method": "click",
                "args": ["{that}.increment"]
            },
            "afterRender.decClick": {
                "this": "{that}.dom.decrement",
                "method": "click",
                "args": ["{that}.decrement"]
            }
        },
        modelListeners: {
            value: {
                func: "{that}.refreshView"
            }
        },
        model: {
            value: null
        },
        range: {
            min: -Infinity,
            max: Infinity,
            step: 1
        },
        invokers: {
            increment: {
                funcName: "gpii.textfieldStepper.alterValue",
                args: ["{that}", +1]
            },
            decrement: {
                funcName: "gpii.textfieldStepper.alterValue",
                args: ["{that}", -1]
            },
            guard: {
                funcName: "gpii.textfieldStepper.guard",
                args: ["{arguments}.0", "{arguments}.1", "{that}.options.range"]
            },
            addAria: {
                funcName: "gpii.textfieldStepper.addAria",
                args: ["{that}"]
            },
            alterValueAria: {
                funcName: "gpii.textfieldStepper.alterValueAria",
                args: ["{that}.dom.valueField", "{that}.model.value", "{that}.options.strings.unit"],
                dynamic: true
            }
        },
        protoTree: {
            valueField: "${value}",
            unit: {messagekey: "unit"},
            increment: {messagekey: "increment"},
            decrement: {messagekey: "decrement"}
        }
    });

    gpii.textfieldStepper.alterValue = function (that, multiplier) {
        var currentValue = that.model.value;
        var step = that.options.range.step;
        var newValue = currentValue + multiplier * step;

        that.applier.requestChange("value", newValue);
        that.alterValueAria();
    };

    gpii.textfieldStepper.guard = function (model, changeRequest, range) {
        var newVal = parseInt(changeRequest.value, 10);
        if (isNaN(newVal) || newVal === fluid.get(model, changeRequest.path)) {
            return false;
        }
        changeRequest.value = Math.min(range.max, Math.max(range.min, newVal));
    };

    gpii.textfieldStepper.alterValueAria = function (valueField, currentValue, unit) {
        valueField.attr("aria-valuenow", currentValue + unit);
    };

    gpii.textfieldStepper.addAria = function (that) {
        var valueField = that.locate("valueField");
        var range = that.options.range;
        var unit = that.options.strings.unit;
        var labelledbyDomElement = that.options.labelledbyDomElement;

        valueField.attr("role", "spinbutton");
        valueField.attr("aria-valuemin", range.min + unit);
        valueField.attr("aria-valuemax", range.max + unit);
        valueField.attr("autocomplete", "off");
        valueField.attr("aria-labelledby", gpii.ariaUtility.getLabelId(labelledbyDomElement));
        that.alterValueAria();

        that.locate("increment").attr({
            "role": "button",
            "aria-label": that.options.strings.plusText
        });
        that.locate("decrement").attr({
            "role": "button",
            "aria-label": that.options.strings.minusText
        });

    };

})(jQuery, fluid_1_5);
