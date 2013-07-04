/*
Copyright 2013 OCAD University

Licensed under the Educational Community License (ECL), Version 2.0 or the New
BSD license. You may not use this file except in compliance with one these
Licenses.

You may obtain a copy of the ECL 2.0 License and BSD License at
https://github.com/fluid-project/infusion/raw/master/Infusion-LICENSE.txt
*/

// Declare dependencies
/*global demo:true, fluid, gpii, jQuery, window*/

// JSLint options
/*jslint white: true, funcinvoke: true, undef: true, newcap: true, nomen: true, regexp: true, bitwise: true, browser: true, forin: true, maxerr: 100, indent: 4 */

(function ($, fluid) {

    fluid.staticEnvironment["gpii--discoveryTool"] = fluid.typeTag("gpii.discoveryTool");
    fluid.registerNamespace("gpii.discoveryTool");

    /**
     * These paths will need to be customized for the integration
     */
    fluid.demands("fluid.uiOptions.templateLoader", ["gpii.discoveryTool"], {
        options: {
            templates: {
                uiOptions: "../html/DiscoveryTool.html"
            }
        }
    });
    fluid.defaults("gpii.discoveryTool.templateLoader", {
        gradeNames: ["fluid.uiOptions.templateLoader", "autoInit"],
        templates: {
            highContrast: "../html/HighContrastPanelTemplate.html"
        }
    });

    fluid.defaults("gpii.discoveryTool.rootModel", {
        gradeNames: ["fluid.uiOptions.rootModel", "autoInit"],
        members: {
            rootModel: {
                highContrast: false,
                increaseSize: false,
                simplify: false,

                textFont: "default",          // key from classname map
                theme: "default",             // key from classname map
                textSize: 1,                  // in points
                lineSpace: 1,               // in ems
                toc: false,                   // boolean
                links: false,                 // boolean
                inputsLarger: false           // boolean
            }
        }
    });

    /*****************
     * The Discovery Tool
     * An instance of a Fat Panel UIO
     ****************/
    fluid.defaults("gpii.discoveryTool", {
        gradeNames: ["fluid.uiOptions.fatPanel", "autoInit"]
    });

    fluid.defaults("gpii.discoveryTool.defaultPanel", {
        gradeNames: ["fluid.uiOptions.defaultPanel", "autoInit"],
        sourceApplier: "{modelTransformer}.applier"
    });

    /*************
     * A component that transforms the panels' boolean models into UIO model values
     * and relays the changes
     *************/
    fluid.defaults("gpii.discoveryTool.modelTransformer", {
        gradeNames: ["fluid.modelComponent", "fluid.uiOptions.modelRelay", "autoInit"],
        model: {
            panelSelections: {
                highContrast: false,
                increaseSize: false,
                simplify: false
            },
            convertedModel: {
                textFont: "default",
                theme: "default",
                textSize: 1,
                lineSpace: 1,
                toc: false,
                links: false,
                inputsLarger: false
            }
        },
        mapping: {
            highContrast: {
                theme: "bw",
                links: true,
                inputsLarger: true,
                textFont: "arial"
            },
            increaseSize: {
                textSize: 1.5,
                lineSpace: 1.3
            },
            simplify: {
                textSize: 1.2,
                lineSpace: 1.2,
                toc: true
            }
        },
        invokers: {
            convertModel: "gpii.discoveryTool.modelTransformer.convertModel"
        },
        components: {
            highContrast: {
                type: "gpii.discoveryTool.panels.highContrast",
                container: "{uiOptions}.dom.highContrast",
                createOnEvent: "{uiOptions}.events.onUIOptionsMarkupReady",
                options: {
                    gradeNames: "gpii.discoveryTool.defaultPanel",
                    rules: { // "externalModelKey": "internalModelKey"
                        "panelSelections.highContrast": "highContrast"
                    },
                    resources: {
                        template: "{templateLoader}.resources.highContrast"
                    }
                }
            },
            increaseSize: {
                type: "gpii.discoveryTool.panels.increaseSize",
                container: "{uiOptions}.dom.increaseSize",
                createOnEvent: "{uiOptions}.events.onUIOptionsMarkupReady",
                options: {
                    gradeNames: "gpii.discoveryTool.defaultPanel",
                    rules: {
                        "panelSelections.increaseSize": "increaseSize"
                    },
                    resources: {
                        template: "{templateLoader}.resources.increaseSize"
                    }
                }
            },
            simplify: {
                type: "gpii.discoveryTool.panels.simplify",
                container: "{uiOptions}.dom.simplify",
                createOnEvent: "{uiOptions}.events.onUIOptionsMarkupReady",
                options: {
                    gradeNames: "gpii.discoveryTool.defaultPanel",
                    rules: {
                        "panelSelections.simplify": "simplify"
                    },
                    resources: {
                        template: "{templateLoader}.resources.simplify"
                    }
                }
            }
        }
    });
    gpii.discoveryTool.modelTransformer.finalInit = function (that) {
        that.applier.modelChanged.addListener("panelSelections", function (newModel, oldModel, request) {
            var convertedModel = that.convertModel(that, newModel.panelSelections);
            that.applier.requestChange("convertedModel", convertedModel);
        });
    };
    gpii.discoveryTool.modelTransformer.convertModel = function (that, sourceModel) {
        var result = fluid.copy(that.options.rootModel);

        var mergedMapping = {};
        fluid.each(that.options.rootModel, function (rootValue, rootKey) {
            fluid.each(sourceModel, function (modelValue, modelKey) {
                gpii.discoveryTool.modelTransformer.transformModel(modelValue, modelKey, rootKey, that.options.mapping, mergedMapping);
            });
        });
        $.extend(result, mergedMapping);
        return result;
    };
    gpii.discoveryTool.modelTransformer.transformModel = function (modelValue, modelKey, rootKey, mapping, mergedMapping) {
        if (modelValue) {
            var previousValue = mergedMapping[rootKey];
            var newValue = mapping[modelKey][rootKey];
            if (!previousValue || previousValue < newValue || newValue === true) {
                mergedMapping[rootKey] = newValue;
            }
        }
    };

    /***********
     * The set of all panels
     **********/
    fluid.defaults("gpii.discoveryTool.panels", {
        gradeNames: ["fluid.uiOptions", "autoInit"],
        selectors: {
            highContrast: ".flc-discoveryTool-highContrast",
            increaseSize: ".flc-discoveryTool-increaseSize",
            simplify: ".flc-discoveryTool-simplify"
        },
        components: {
            modelTransformer: {
                type: "gpii.discoveryTool.modelTransformer",
                options: {
                    sourceApplier: "{panels}.applier",
                    rootModel: "{panels}.rootModel",
                    rules: {  // "externalModelKey": "internalModelKey"
                        "selections.highContrast": "panelSelections.highContrast",
                        "selections.increaseSize": "panelSelections.increaseSize",
                        "selections.simplify": "panelSelections.simplify",

                        "selections.textFont": "convertedModel.textFont",
                        "selections.theme": "convertedModel.theme",
                        "selections.textSize": "convertedModel.textSize",
                        "selections.lineSpace": "convertedModel.lineSpace",
                        "selections.toc": "convertedModel.toc",
                        "selections.links": "convertedModel.links",
                        "selections.inputsLarger": "convertedModel.inputsLarger"
                    }
                }
            }
        }
    });


    /************************
     * High Contrast:
     *
     * The Discovery Tool 'high contrast' option will set:
     * - black on white
     * - emphasize links
     * - inputs larger
     * - sans serif font or monospaced font
     *********************/
    fluid.defaults("gpii.discoveryTool.panels.highContrast", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        // this is being ignored - ??
        selectors: {
            highContrast: ".flc-discoveryTool-highContrast-choice"
        },
        model: {
            highContrast: false
        },
        protoTree: {
            highContrast: "${highContrast}"
        }
    });

    fluid.defaults("gpii.discoveryTool.enactors.highContrast", {
        gradeNames: ["fluid.viewComponent", "fluid.uiOptions.enactors", "autoInit"]
    });

    /************************
     * Increase Size
     *********************/
    fluid.defaults("gpii.discoveryTool.panels.increaseSize", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        // this is being ignored - ??
        selectors: {
            increaseSize: ".flc-discoveryTool-increaseSize-choice"
        },
        model: {
            increaseSize: false
        },
        protoTree: {
            increaseSize: "${increaseSize}"
        }
    });

    /************************
     * Simplify
     *********************/
    fluid.defaults("gpii.discoveryTool.panels.simplify", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        // this is being ignored - ??
        selectors: {
            simplify: ".flc-discoveryTool-simplify-choice"
        },
        model: {
            simplify: false
        },
        protoTree: {
            simplify: "${simplify}"
        }
    });

})(jQuery, fluid);
