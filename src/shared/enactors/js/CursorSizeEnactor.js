(function ($, fluid) {

    fluid.defaults("gpii.uiOptions.enactors.cursorSize", {
        gradeNames: ["fluid.viewComponent", "fluid.uiOptions.enactors", "autoInit"],
        preferenceMap: {
            "gpii.uiOptions.cursorSize": {
                "model.value": "default"
            }
        },
        invokers: {
            set: {
                funcName: "gpii.uiOptions.enactors.cursorSize.set",
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

    gpii.uiOptions.enactors.cursorSize.set = function (times, that) {
        that.container.find(".flc-uiOptions-preview-per-setting-cursor1").css("font-size", times + "em");
        that.container.find(".flc-uiOptions-preview-per-setting-cursor2").css("font-size", times + "em");
        that.container.find(".flc-uiOptions-preview-per-setting-cursor3").css("font-size", times + "em");
    };

    gpii.uiOptions.enactors.cursorSize.finalInit = function (that) {
        that.applier.modelChanged.addListener("value", function (newModel) {
            that.set(newModel.value);
        });
    };

})(jQuery, fluid);
