(function ($, fluid) {
    
    fluid.defaults("gpii.uiOptions.enactors.magnifier", {
        gradeNames: ["fluid.viewComponent", "fluid.uiOptions.enactors", "autoInit"],
        preferenceMap: {
            "http://registry.gpii.org/common/magnification": {
                "model.value": "default"
            }
        },
        invokers: {
            set: {
                funcName: "gpii.uiOptions.enactors.magnifier.set",
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

    gpii.uiOptions.enactors.magnifier.set = function (times, that) {
        //$(".flc-uiOptions-magnifier .flc-uiOptions-preview-per-setting-frame").contents().find("html").css("transform", "scale(" + times/100 + ")");
        that.container.css("transform", "scale(" + times/100 + ")");
        that.container.css("-webkit-transform", "scale(" + times/100 + ")");
    };

    gpii.uiOptions.enactors.magnifier.finalInit = function (that) {
        that.applier.modelChanged.addListener("value", function (newModel) {
            that.set(newModel.value);
        });
    };
    
})(jQuery, fluid);
