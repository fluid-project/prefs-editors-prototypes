(function ($, fluid) {       

    /**************************************************
     * Prefs Panel for audio feedback preferences *
     **************************************************/
    /**
     * A sub-component of fluid.uiOptions that renders extra controls.
     */
    fluid.defaults("gpii.pcp.audioFeedback", {
rendererOptions: {
    debugMode: true
},
        gradeNames: ["fluid.uiOptions.prefPanel", "autoInit"],
        strings: {
            audioFeedbackPlay: ["Yes", "No"]
        },
        controlValues: {
            audioFeedbackPlay: ["yes", "no"]
        },
        audioFeedbackVolume: {
            min: 0,
            max: 100,
            sliderOptions: {
                orientation: "horizontal",
                step: 10
            }
        },
        selectors: {
            audioFeedbackVolume: ".flc-uiOptions-audioFeedbackVolume",
            audioFeedbackRow: ".flc-uiOptions-audioFeedback-radio",
            audioFeedbackButton: ".flc-uiOptions-audioFeedback-radioButton",
            audioFeedbackLabel: ".flc-uiOptions-audioFeedback-radioLabel"
        },
        repeatingSelectors: ["audioFeedbackRow"],
        defaultModel: {
            audioFeedbackPlay: false,
            audioFeedbackVolume: 50
        },
        produceTree: "gpii.pcp.audioFeedback.produceTree",
        resources: {
            template: "{templateLoader}.resources.audioFeedback"
        }
    });

    gpii.pcp.audioFeedback.produceTree = function (that) {
        var tree = {};
        for (var item in that.model.selections) {
            if (item === "audioFeedbackPlay") {
                tree[item] = "${selections." + item + "}";

            } else if (item === "audioFeedbackVolume") {
                tree[item] = fluid.uiOptions.createSliderNode(that, item, "fluid.textfieldSlider.slider");
            }
        }

        return tree;
    };

})(jQuery, fluid);
