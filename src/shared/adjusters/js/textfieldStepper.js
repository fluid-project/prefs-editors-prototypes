var fluid_1_5 = fluid_1_5 || {};

(function ($, fluid) {

    /*******************************************
     * A custom adjuster used to increment or  *
     * decrement a given value by a given step *
     *******************************************/

    fluid.defaults("gpii.textfieldStepper", {
        gradeNames: ["fluid.viewComponent", "autoInit"],
        components: {
            textfield: {
                type: "fluid.textfieldSlider.textfield",
                container: "{textfieldStepper}.dom.textfield",
                options: {
                    model: "{textfieldStepper}.model",
                    range: "{textfieldStepper}.options.range",
                    applier: "{textfieldStepper}.applier"
                }
            },
            buttons: {
                type: "gpii.textfieldStepper.buttons",
                container: "{textfieldStepper}.dom.buttons",
                options: {
                    model: "{textfieldStepper}.model",
                    range: "{textfieldStepper}.options.range",
                    applier: "{textfieldStepper}.applier"
                }
            }
        },
        selectors: {
            textfield: ".gpii-textfieldStepper-field"
        },
        events: {
            modelChanged: null,
            afterRender: null
        },
        listeners: {
            modelChanged: "{that}.refreshView"
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
            refreshView: {
                funcName: "gpii.textfieldStepper.refreshView",
                args: ["{that}"]
            }
        },
        finalInitFunction: "gpii.textfieldStepper.finalInit",
        renderOnInit: true
    });

    gpii.textfieldStepper.finalInit = function (that) {
        that.applier.modelChanged.addListener("value", function (newModel) {
            that.events.modelChanged.fire(newModel.value);
        });

        if (that.options.renderOnInit) {
            that.refreshView();
        }
    };

    gpii.textfieldStepper.refreshView = function (that) {
        that.textfield.container.val(that.model.value);
        that.events.afterRender.fire(that);
    };

    fluid.defaults("gpii.textfieldStepper.buttons", {
        gradeNames: ["fluid.viewComponent", "autoInit"],
        selectors: {
            inc: ".gpii-textfieldStepper-increment",
            dec: ".gpii-textfieldStepper-decrement"
        },
        events: {
            modelChanged: null
        },
        listeners: {
            onCreate: [ {
                "this": "{that}.dom.inc",
                "method": "click",
                "args": ["{that}.increaseValue"]
            }, {
                "this": "{that}.dom.dec",
                "method": "click",
                "args": ["{that}.decreaseValue"]
            }, {
                funcName: "gpii.textfieldStepper.buttons.parseInt",
                args: ["{that}"]
            }]
        },
        invokers: {
            increaseValue: {
                funcName: "gpii.textfieldStepper.buttons.increaseValue",
                args: ["{that}"]
            },
            decreaseValue: {
                funcName: "gpii.textfieldStepper.buttons.decreaseValue",
                args: ["{that}"]
            }
        },
        range: {} // should be used to specify the min, max range and step e.g. {min: 0, max: 100, step: 5}
    });

    gpii.textfieldStepper.buttons.alterValue = function (that, operation) {
        var currentValue = that.model.value;
        var step = that.options.range.step;
        var newValue = operation == "+" ? currentValue + step : currentValue - step;

        that.applier.requestChange("value", newValue);
    };

    gpii.textfieldStepper.buttons.increaseValue = function (that) {
        gpii.textfieldStepper.buttons.alterValue(that, "+");
    };

    gpii.textfieldStepper.buttons.decreaseValue = function (that) {
        gpii.textfieldStepper.buttons.alterValue(that, "-");
    };

    gpii.textfieldStepper.buttons.parseInt = function (that) {
        that.applier.modelChanged.addListener("value", function (newModel) {
            if (typeof newModel.value !== "number") {
                that.applier.requestChange("value", parseInt(newModel.value, 10));
            }
        });
    };

    fluid.defaults("gpii.uiOptions.textfieldStepper", {
        gradeNames: ["gpii.textfieldStepper", "autoInit"],
        model: "{fluid.uiOptions.panels}.model",
        range: "{fluid.uiOptions.panels}.options.range",
        listeners: {
            modelChanged: {
                listener: "{fluid.uiOptions.panels}.applier.requestChange",
                args: ["{that}.options.path", "{arguments}.0"]
            }
        },
        path: "value"
    });

})(jQuery, fluid_1_5);
