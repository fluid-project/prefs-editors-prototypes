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
            onCreate: {
                listener: "gpii.textfieldStepper.buttons.init",
                args: "{that}"
            }
        },
        range: {} // should be used to specify the min, max range and step e.g. {min: 0, max: 100, step: 5}
    });

    gpii.textfieldStepper.buttons.init = function (that) {
        that.locate("inc").click(function () {
            var newValue = that.model.value + that.options.range.step;
            that.applier.requestChange("value", newValue);
        });

        that.locate("dec").click(function () {
            var newValue = that.model.value - that.options.range.step;
            that.applier.requestChange("value", newValue);
        });

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
