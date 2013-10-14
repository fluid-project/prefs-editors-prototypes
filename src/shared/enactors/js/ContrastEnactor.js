(function ($, fluid) {
    
    fluid.defaults("gpii.uiOptions.enactors.contrast", {
        gradeNames: ["fluid.viewComponent", "fluid.uiOptions.enactors", "autoInit"],
        preferenceMap: {
            "http://registry.gpii.org/common/display.screenEnhancement.highContrast": {
                "model.value": "default"
            }
        },
        invokers: {
            set: {
                funcName: "gpii.uiOptions.enactors.contrast.set",
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

    gpii.uiOptions.enactors.contrast.set = function (value, that) {
        if(value)
        {
            that.container.addClass("flc-uiOptions-contrast-theme fl-theme-uio-yb fl-theme-yb");
            that.container.removeClass("flc-uiOptions-default-theme fl-theme-uio-default");
        }
        else
        {
            that.container.removeClass("flc-uiOptions-contrast-theme fl-theme-uio-yb fl-theme-yb");
            that.container.addClass("flc-uiOptions-default-theme fl-theme-uio-default");
        }
    };

    gpii.uiOptions.enactors.contrast.finalInit = function (that) {
        that.applier.modelChanged.addListener("value", function (newModel) {
            that.set(newModel.value);
        });
    };
    
})(jQuery, fluid);
