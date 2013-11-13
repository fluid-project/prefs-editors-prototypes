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

    fluid.defaults("gpii.textfieldStepper", {
        gradeNames: ["fluid.rendererComponent", "autoInit"],
        strings: {
            increment: "+",
            decrement: "-",
            unit: ""
        },
        selectors: {
            valueField: ".gpii-textfieldStepper-valueField",
            unit: ".gpii-textfieldStepper-unitField",
            increment: ".gpii-textfieldStepper-increment",
            decrement: ".gpii-textfieldStepper-decrement"
        },
        listeners: {
            "onCreate.modelGuard": {
                listener: "{that}.applier.guards.addListener",
                args: ["value", "{that}.guard"]
            },
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
    };

    gpii.textfieldStepper.guard = function (model, changeRequest, range) {
        var newVal = parseInt(changeRequest.value);
        if (isNaN(newVal) || newVal === fluid.get(model, changeRequest.path)) {
            return false;
        }
        changeRequest.value = Math.min(range.max, Math.max(range.min, newVal));
    };

 })(jQuery, fluid_1_5);
