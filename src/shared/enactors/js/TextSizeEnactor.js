(function ($, fluid) {
    
	fluid.defaults("gpii.uiOptions.enactors.textSize", {
        gradeNames: ["fluid.viewComponent", "fluid.uiOptions.enactors", "fluid.uiOptions.enactors.textSize", "autoInit"],
        preferenceMap: {
            "http://registry.gpii.org/common/fontSize": {
                "model.value": "default"
            }
        },
        invokers: {
            set: {
                funcName: "gpii.uiOptions.enactors.textSize.set",
                args: ["{arguments}.0", "{that}"]
            }
        },
        listeners: {
        	"onCreate.init": {
                listener: "{that}.applier.modelChanged.addListener",
                args: ["value", "{that}.set"]
            }
        }
    });

	gpii.uiOptions.enactors.textSize.set = function (sizeInPt, that) {
        that.container.css("font-size", sizeInPt + "pt");
    };
    
})(jQuery, fluid);
