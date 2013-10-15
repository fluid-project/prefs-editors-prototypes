(function ($, fluid) {

    fluid.defaults("gpii.uiOptions.enactors.cursorSize", {
        gradeNames: ["fluid.viewComponent", "fluid.uiOptions.enactors", "autoInit"],
        preferenceMap: {
            "http://registry.gpii.org/common/cursorSize": {
                "model.value": "default"
            }
        },
        selectors: {
        	cursorDiv: ".flc-uiOptions-preview-per-setting-cursor-div"
        },
        invokers: {
            set: {
                funcName: "gpii.uiOptions.enactors.cursorSize.set",
                args: ["{that}.model.value", "{that}"]
            }
        },
        listeners: {
            "onCreate.init": {
                listener: "{that}.applier.modelChanged.addListener",
                args: ["value", "{that}.set"]
            }
        }
    });

    gpii.uiOptions.enactors.cursorSize.set = function (times, that) {
    	that.locate("cursorDiv").css("font-size", times + "em");
    };

})(jQuery, fluid);
