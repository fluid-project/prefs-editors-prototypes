(function ($, fluid) {       

    /**************************************************
     * Prefs Panel for on-screen keyboard preferences *
     **************************************************/
    /**
     * A sub-component of fluid.uiOptions that renders extra controls.
     */
    fluid.defaults("gpii.pcp.onScreenKeyboard", {
        gradeNames: ["fluid.uiOptions.prefPanel", "autoInit"],
        strings: {
            onScreenKeyboardLocation: ["Top", "Bottom", "Left", "Right"]
        },
        controlValues: {
            onScreenKeyboardLocation: ["top", "bottom", "left", "right"]
        },
        selectors: {
            onScreenKeyboardShow: ".flc-uiOptions-onScreenKeyboardShow",
            osklRow: ".flc-uiOptions-onScreenKeyboardLocation-radio",
            osklButton: ".flc-uiOptions-onScreenKeyboardLocation-radioButton",
            osklLabel: ".flc-uiOptions-onScreenKeyboardLocation-radioLabel"
        },
        repeatingSelectors: ["osklRow"],
        defaultModel: {
            onScreenKeyboardShow: false,
            onScreenKeyboardLocation: "bottom"
        },
        produceTree: "gpii.pcp.onScreenKeyboard.produceTree",
        resources: {
            template: "{templateLoader}.resources.onScreenKeyboard"
        }
    });

    gpii.pcp.onScreenKeyboard.produceTree = function (that) {
        var tree = {};
        for (var item in that.model.selections) {
            if (item === "onScreenKeyboardShow") {
                tree[item] = "${selections." + item + "}";

            } else if (item === "onScreenKeyboardLocation") {
                tree.expander = [{
                    type: "fluid.renderer.selection.inputs",
                    selectID: "onScreenKeyboardLocation",
                    rowID: "osklRow",
                    labelID: "osklLabel",
                    inputID: "osklButton",
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
