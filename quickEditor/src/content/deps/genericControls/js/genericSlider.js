(function ($, fluid) {       

    /*****************************
     * Generic checkbox template *
     *****************************/
    fluid.defaults("gpii.pcp.genericSlider", {
        gradeNames: ["fluid.uiOptions.prefPanel", "autoInit"],
        preInitFunction: "gpii.pcp.genericSlider.genericSliderPreInit",

        selectors: {},
        defaultModel: {},
        produceTree: "gpii.pcp.genericSlider.produceTree",
        resources: {
            template: "{templateLoader}.resources.genericSlider"
        },

        // These options are used for customizing the generic checkbox pane
        // The id value might be the same as the selector value
        id: null,   // or "preferenceID"
        preferenceName: null,
        preferenceDescription: null,
        valueSpace: null,
        value: "{gpii.pcp.genericSlider}.options.valueSpace.start"
    });

    gpii.pcp.genericSlider.genericSliderPreInit = function (that) {
        var selectors = {};
        var id = that.options.workingId = gpii.pcp.genericSlider.getWorkingId(that.options.id);

        selectors[id] = ".flc-uiOptions-genericControl";
        selectors[id + "Label"] = ".flc-uiOptions-genericControlLabel";
        selectors[id + "Description"] = ".flc-uiOptions-genericControlDescription";

        that.options.selectors = selectors;
        that.options.defaultModel[id] = that.options.value;

        var valueSpace = that.options.valueSpace;
        that.options[id] = {
            min: valueSpace.start,
            max: valueSpace.end,
            sliderOptions: {
                orientation: "horizontal",
                step: valueSpace.step
            }
        };
    };

    gpii.pcp.genericSlider.produceTree = function (that) {
        var tree = {};
        var id = that.options.workingId;

        tree[id] = fluid.uiOptions.createSliderNode(that, id, "fluid.textfieldSlider");
        tree[id + "Label"] = that.options.preferenceName;
        tree[id + "Description"] = that.options.preferenceDescription;

        return tree;
    };

    gpii.pcp.genericSlider.getWorkingId = function (id) {
        var suffix = "http://";
        return (id.indexOf(suffix) === 0 ? id.substr(suffix.length) : id).replace(/\./g,'*');
    };

})(jQuery, fluid);
