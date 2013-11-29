(function ($, fluid) {       

    /*****************************
     * Generic checkbox template *
     *****************************/
    fluid.defaults("gpii.pcp.genericDropdown", {
        gradeNames: ["fluid.uiOptions.prefPanel", "autoInit"],
        preInitFunction: "gpii.pcp.genericDropdown.genericDropdownPreInit",

        strings: {},
        controlValues: {},
        selectors: {},
        defaultModel: {},
        produceTree: "gpii.pcp.genericDropdown.produceTree",
        resources: {
            template: "{templateLoader}.resources.genericDropdown"
        },

        // These options are used for customizing the generic checkbox pane
        // The id value might be the same as the selector value
        id: null,   // or "preferenceID"
        preferenceName: null,
        preferenceDescription: null,
        valueSpace: null,
        value: "{gpii.pcp.genericDropdown}.options.valueSpace.0"
    });

    gpii.pcp.genericDropdown.genericDropdownPreInit = function (that) {
        var selectors = {};
        var id = that.options.workingId = gpii.pcp.genericDropdown.getWorkingId(that.options.id);

        selectors[id] = ".flc-uiOptions-genericControl";
        selectors[id + "Label"] = ".flc-uiOptions-genericControlLabel";
        selectors[id + "Description"] = ".flc-uiOptions-genericControlDescription";

        that.options.selectors = selectors;
        that.options.defaultModel[id] = that.options.value;
        that.options.strings[id] = that.options.valueSpace;
        that.options.controlValues[id] = that.options.valueSpace;
    };

    gpii.pcp.genericDropdown.produceTree = function (that) {
        var tree = {};
        var id = that.options.workingId;

        tree[id] = {
            optionnames: "${labelMap." + id + ".names}",
            optionlist: "${labelMap." + id + ".values}",
            selection: "${selections." + id + "}"
        };
        
        tree[id + "Label"] = that.options.preferenceName;
        tree[id + "Description"] = that.options.preferenceDescription;

        return tree;
    };

    gpii.pcp.genericDropdown.getWorkingId = function (id) {
        var suffix = "http://";
        return (id.indexOf(suffix) === 0 ? id.substr(suffix.length) : id).replace(/\./g,'*');
    };

})(jQuery, fluid);
