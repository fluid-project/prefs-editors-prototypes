(function ($, fluid) {

    /*****************************
     * Generic control template *
     *****************************/
    fluid.defaults("gpii.pcp.genericControl", {
        gradeNames: ["fluid.uiOptions.prefPanel", "autoInit"],
        preInitFunction: "gpii.pcp.genericControl.genericControlPreInit",

        selectors: {},
        defaultModel: {},
        produceTree: "gpii.pcp.genericControl.produceTree",
        resources: {
            template: null
        },

        determineControlType: function (valueSpace) {
            if (valueSpace === "boolean") {
                return "genericCheckbox";
            } else if (Array.isArray(valueSpace)) {
                return "genericDropdown";
            } else if (valueSpace.start !== undefined) {
                return "genericSlider";
            }

            fluid.fail("unsupported value space: " + JSON.stringify(valueSpace));
        },

        id: null,
        preferenceName: null,
        preferenceDescription: null,
        valueSpace: null,
        value: null
    });

    gpii.pcp.genericControl.genericControlPreInit = function (that) {
        // init model and selectors
        var selectors = {};
        var id = that.options.id;
        selectors[id] = ".flc-uiOptions-genericControl";
        selectors[id + "Label"] = ".flc-uiOptions-genericControlLabel";
        selectors[id + "Description"] = ".flc-uiOptions-genericControlDescription";

        that.options.selectors = selectors;
        that.options.defaultModel[id] = that.options.value;

        var controlType = that.options.determineControlType(that.options.valueSpace);

        // init template resource
        that.options.resources.template = "{templateLoader}.resources." + controlType;

        // type-specific initialization
        gpii.pcp.genericControl[controlType + "SpecificInit"](that);
        alert(JSON.stringify(that.options.resources.template, null, 4));
    };

    gpii.pcp.genericControl.genericCheckboxSpecificInit = function (that) {};

    gpii.pcp.genericControl.genericDropdownSpecificInit = function (that) {
        var id = that.options.id;
        var valueSpace = that.options.valueSpace;

        that.options.strings[id] = valueSpace;
        that.options.controlValues[id] = valueSpace;
    };

    gpii.pcp.genericControl.genericSliderSpecificInit = function (that) {
        var id = that.options.id;
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

    gpii.pcp.genericControl.produceTree = function (that) {
        var tree = {};
        var id = that.options.id;
        var controlType = that.options.determineControlType(that.options.valueSpace);

        switch(controlType) {
        case "genericCheckbox":
            tree[id] = "${selections." + id + "}";
            break;

        case "genericDropdown":
            tree[id] = {
                optionnames: "${labelMap." + id + ".names}",
                optionlist: "${labelMap." + id + ".values}",
                selection: "${selections." + id + "}"
            };
            break;

        case "genericSlider":
            tree[id] = fluid.uiOptions.createSliderNode(that, id, "fluid.textfieldSlider.slider");
            break;
        };

        tree[id + "Label"] = that.options.preferenceName;
        tree[id + "Description"] = that.options.preferenceDescription;

        return tree;
    };

})(jQuery, fluid);
