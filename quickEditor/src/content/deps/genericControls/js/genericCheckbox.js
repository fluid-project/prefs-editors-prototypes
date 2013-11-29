(function ($, fluid) {       

    /*****************************
     * Generic checkbox template *
     *****************************/
    fluid.defaults("gpii.pcp.genericCheckbox", {
        gradeNames: ["fluid.uiOptions.prefPanel", "autoInit"],
        preInitFunction: "gpii.pcp.genericCheckbox.genericCheckboxPreInit",

        selectors: {},
        defaultModel: {},
        produceTree: "gpii.pcp.genericCheckbox.produceTree",
        resources: {
            template: "{templateLoader}.resources.genericCheckbox"
        },

        // These options are used for customizing the generic checkbox pane
        // The id value might be the same as the selector value
        id: null,   // or "preferenceID"
        preferenceName: null,
        preferenceDescription: null,
        value: false
    });

    gpii.pcp.genericCheckbox.genericCheckboxPreInit = function (that) {
        var selectors = {};
        var id = that.options.workingId = gpii.pcp.genericCheckbox.getWorkingId(that.options.id);

        selectors[id] = ".flc-uiOptions-genericControl";
        selectors[id + "Label"] = ".flc-uiOptions-genericControlLabel";
        selectors[id + "Description"] = ".flc-uiOptions-genericControlDescription";

        that.options.selectors = selectors;
        that.options.defaultModel[id] = that.options.value;
    };

    gpii.pcp.genericCheckbox.produceTree = function (that) {
        var tree = {};
        var id = that.options.workingId;

        tree[id] = "${selections." + id + "}";
        tree[id + "Label"] = that.options.preferenceName;
        tree[id + "Description"] = that.options.preferenceDescription;

        return tree;
    };

    gpii.pcp.genericCheckbox.getWorkingId = function (id) {
        var suffix = "http://";
        return (id.indexOf(suffix) === 0 ? id.substr(suffix.length) : id).replace(/\./g,'*');
    };

})(jQuery, fluid);
