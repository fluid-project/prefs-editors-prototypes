(function ($, fluid) {
	
	fluid.defaults("fluid.uiOptions.enactors.magnifier", {
        gradeNames: ["fluid.viewComponent", "fluid.uiOptions.enactors", "autoInit"],
        preferenceMap: {
            "fluid.uiOptions.magnifier": {
                "model.value": "default"
            }
        },
        invokers: {
            set: {
                funcName: "fluid.uiOptions.enactors.magnifier.set",
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

    fluid.uiOptions.enactors.magnifier.set = function (times, that) {
		//$(".flc-uiOptions-magnifier .flc-uiOptions-preview-per-setting-frame").contents().find("html").css("transform", "scale(" + times/100 + ")");
        that.container.css("transform", "scale(" + times/100 + ")");
        that.container.css("-webkit-transform", "scale(" + times/100 + ")");
    };

    fluid.uiOptions.enactors.magnifier.finalInit = function (that) {
        that.applier.modelChanged.addListener("value", function (newModel) {
            that.set(newModel.value);
        });
    };
	
})(jQuery, fluid);
