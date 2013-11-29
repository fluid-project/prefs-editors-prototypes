(function ($, fluid) {       

    /****************************************************************
     * Sample Prefs Panel showing rendering of each type of control *
     ****************************************************************/
    fluid.defaults("gpii.pcp.controlRenderingSample", {
        gradeNames: ["fluid.uiOptions.prefPanel", "autoInit"],
        strings: {
            sampleDropdown: ["English", "French"],
            sampleRadioButtons: ["Option 1", "Option 2", "Option 3"]
        },
        controlValues: {
            sampleDropdown: ["en", "fr"] ,
            sampleRadioButtons: ["opt1", "opt2", "opt3"]
        },
        sampleSlider: {
            min: 0,
            max: 100,
            sliderOptions: {
                orientation: "horizontal",
                step: 10
            }
        },
        selectors: {
            sampleSlider: ".flc-uiOptions-sampleSlider",
            sampleCheckbox: ".flc-uiOptions-sampleCheckbox",
            sampleDropdown: ".flc-uiOptions-sampleDropdown",
            radioRow: ".flc-uiOptions-sampleRadioButtons-radio",
            radioButton: ".flc-uiOptions-sampleRadioButtons-radioButton",
            radioLabel: ".flc-uiOptions-sampleRadioButtons-radioLabel"
        },
        repeatingSelectors: ["radioRow"],
        defaultModel: {
            sampleCheckbox: false,             // boolean
            sampleDropdown: "en",               // ISO 639-1 language code
            sampleSlider: 50,                    // number between 0 and 100
            sampleRadioButtons: "opt2"
        },
        produceTree: "gpii.pcp.controlRenderingSample.produceTree",
        resources: {
            template: "{templateLoader}.resources.controlRenderingSample"
        }
    });

    gpii.pcp.controlRenderingSample.produceTree = function (that) {
        var tree = {};
        for (var item in that.model.selections) {
            if (item === "sampleCheckbox") {
                tree[item] = "${selections." + item + "}";

            } else if (item === "sampleDropdown") {
                tree[item] = {
                    optionnames: "${labelMap." + item + ".names}",
                    optionlist: "${labelMap." + item + ".values}",
                    selection: "${selections." + item + "}"
                };

            } else if (item === "sampleSlider") {
                tree[item] = fluid.uiOptions.createSliderNode(that, item, "fluid.textfieldSlider.slider");

            } else if (item === "sampleRadioButtons") {
                tree.expander = [{
                    type: "fluid.renderer.selection.inputs",
                    selectID: "sampleRadioButtons",
                    rowID: "radioRow",
                    labelID: "radioLabel",
                    inputID: "radioButton",
                    tree: {
                        optionnames: "${labelMap." + item + ".names}",
                        optionlist: "${labelMap." + item + ".values}",
                        selection: "${selections." + item + "}"
                    }
                }];
            }
        }

        return tree;
    };

})(jQuery, fluid);
