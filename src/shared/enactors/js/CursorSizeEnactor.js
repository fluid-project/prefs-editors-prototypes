(function ($, fluid) {

    fluid.defaults("fluid.uiOptions.enactors.cursorSize", {
        gradeNames: ["fluid.viewComponent", "fluid.uiOptions.enactors", "autoInit"],
        preferenceMap: {
            "fluid.uiOptions.cursorSize": {
                "model.value": "default"
            }
        },
        invokers: {
            set: {
                funcName: "fluid.uiOptions.enactors.cursorSize.set",
                args: ["{arguments}.0", "{that}"]
            }
        },
        listeners: {
            onCreate: {
                listener: "{that}.set",
                args: "{that}.model.value"
            }
        }
    });

    fluid.uiOptions.enactors.cursorSize.set = function (times, that) {
        that.container.find(".flc-uiOptions-preview-per-setting-cursor1").css("font-size", times + "em");
        that.container.find(".flc-uiOptions-preview-per-setting-cursor2").css("font-size", times + "em");
        that.container.find(".flc-uiOptions-preview-per-setting-cursor3").css("font-size", times + "em");
    };

    fluid.uiOptions.enactors.cursorSize.finalInit = function (that) {
        that.applier.modelChanged.addListener("value", function (newModel) {
            that.set(newModel.value);
        });
    };

})(jQuery, fluid);
