/*!
Copyright 2013 OCAD University
Copyright 2013 Astea

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/gpii/universal/LICENSE.txt
*/

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
            "afterRender.initialSetup": "{that}.initialSetup",
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
            initialSetup: {
                funcName: "gpii.textfieldStepper.initialSetup",
                args: ["{that}"]
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

        that.applier.change("value", newValue);
    };

    gpii.textfieldStepper.guard = function (model, changeRequest, range) {
        var newVal = parseInt(changeRequest.value, 10);
        if (isNaN(newVal) || newVal === fluid.get(model, changeRequest.path)) {
            return false;
        }
        changeRequest.value = Math.min(range.max, Math.max(range.min, newVal));
    };

    gpii.textfieldStepper.initialSetup = function (that) {
        var valueField = that.locate("valueField");
        var range = that.options.range;
        var labelledbyDomElement = that.options.labelledbyDomElement;

        valueField.attr("min", range.min);
        valueField.attr("max", range.max);
        valueField.attr("step", range.step);

        valueField.attr("autocomplete", "off");
        if (labelledbyDomElement) {
            labelledbyDomElement.attr("for", $(valueField).attr("id"));
        }

        that.locate("increment").attr({
            "aria-label": that.options.strings.plusText,
            "tabindex": "-1"
        });
        that.locate("decrement").attr({
            "aria-label": that.options.strings.minusText,
            "tabindex": "-1"
        });
    };

})(jQuery, fluid);
