(function ($, fluid) {
    
    fluid.defaults("fluid.uiOptions.enactors.contrast", {
        gradeNames: ["fluid.viewComponent", "fluid.uiOptions.enactors", "autoInit"],
        preferenceMap: {
            "fluid.uiOptions.contrast": {
                "model.value": "default"
            }
        },
        invokers: {
            set: {
                funcName: "fluid.uiOptions.enactors.contrast.set",
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

    fluid.uiOptions.enactors.contrast.set = function (value, that) {
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

    fluid.uiOptions.enactors.contrast.finalInit = function (that) {
        that.applier.modelChanged.addListener("value", function (newModel) {
            that.set(newModel.value);
        });
    };
    
})(jQuery, fluid);
