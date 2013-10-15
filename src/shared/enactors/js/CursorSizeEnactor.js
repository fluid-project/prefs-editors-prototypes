/*global fluid, jQuery, gpii*/
/*jslint white: true, onevar: true, funcinvoke: true, forvar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

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
