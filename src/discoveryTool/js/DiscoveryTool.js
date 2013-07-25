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
            highContrast: "../html/HighContrastPanelTemplate.html",
            lowContrast: "../html/LowContrastPanelTemplate.html",
            increaseSize: "../html/IncreaseSizePanelTemplate.html",
            simplify: "../html/SimplifyPanelTemplate.html",
            spoken: "../html/SpokenPanelTemplate.html"
        }
    });

    fluid.defaults("gpii.discoveryTool.rootModel", {
        gradeNames: ["fluid.uiOptions.rootModel", "autoInit"],
        members: {
            rootModel: {
                highContrast: false,
                lowContrast: false,
                increaseSize: false,
                simplify: false,
                spoken: false,

                textFont: "default",
                theme: "default",
                textSize: 1,
                lineSpace: 1,
                toc: false,
                links: false,
                inputsLarger: false,
                simplifyContent: false,
                selfVoicing: false
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
                lowContrast: false,
                increaseSize: false,
                simplify: false,
                spoken: false
            },
            convertedModel: {
                textFont: "default",
                theme: "default",
                textSize: 1,
                lineSpace: 1,
                toc: false,
                links: false,
                inputsLarger: false,
                simplifyContent: false,
                selfVoicing: false
            }
        },
        mapping: {
            highContrast: {
                theme: "bw",
                links: true,
                inputsLarger: true,
                textFont: "arial"
            },
            lowContrast: {
                theme: "lgdg",
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
                toc: true,
                simplifyContent: true
            },
            spoken: {
                selfVoicing: true
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
            lowContrast: {
                type: "gpii.discoveryTool.panels.lowContrast",
                container: "{uiOptions}.dom.lowContrast",
                createOnEvent: "{uiOptions}.events.onUIOptionsMarkupReady",
                options: {
                    gradeNames: "gpii.discoveryTool.defaultPanel",
                    rules: { // "externalModelKey": "internalModelKey"
                        "panelSelections.lowContrast": "lowContrast"
                    },
                    resources: {
                        template: "{templateLoader}.resources.lowContrast"
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
            },
            spoken: {
                type: "gpii.discoveryTool.panels.spoken",
                container: "{uiOptions}.dom.spoken",
                createOnEvent: "{uiOptions}.events.onUIOptionsMarkupReady",
                options: {
                    gradeNames: "gpii.discoveryTool.defaultPanel",
                    rules: {
                        "panelSelections.spoken": "spoken"
                    },
                    resources: {
                        template: "{templateLoader}.resources.spoken"
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
            lowContrast: ".flc-discoveryTool-lowContrast",
            increaseSize: ".flc-discoveryTool-increaseSize",
            simplify: ".flc-discoveryTool-simplify",
            spoken: ".flc-discoveryTool-spoken"
        },
        components: {
            modelTransformer: {
                type: "gpii.discoveryTool.modelTransformer",
                options: {
                    sourceApplier: "{panels}.applier",
                    rootModel: "{panels}.rootModel",
                    rules: {  // "externalModelKey": "internalModelKey"
                        "selections.highContrast": "panelSelections.highContrast",
                        "selections.lowContrast": "panelSelections.lowContrast",
                        "selections.increaseSize": "panelSelections.increaseSize",
                        "selections.simplify": "panelSelections.simplify",
                        "selections.spoken": "panelSelections.spoken",

                        "selections.textFont": "convertedModel.textFont",
                        "selections.theme": "convertedModel.theme",
                        "selections.textSize": "convertedModel.textSize",
                        "selections.lineSpace": "convertedModel.lineSpace",
                        "selections.toc": "convertedModel.toc",
                        "selections.links": "convertedModel.links",
                        "selections.inputsLarger": "convertedModel.inputsLarger",
                        "selections.simplifyContent": "convertedModel.simplifyContent",
                        "selections.selfVoicing": "convertedModel.selfVoicing"
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
     * Low Contrast:
     *
     * The Discovery Tool 'high contrast' option will set:
     * - light grey on dark grey
     * - emphasize links
     * - inputs larger
     * - sans serif font or monospaced font
     *********************/
    fluid.defaults("gpii.discoveryTool.panels.lowContrast", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        // this is being ignored - ??
        selectors: {
            lowContrast: ".flc-discoveryTool-lowContrast-choice"
        },
        model: {
            lowContrast: false
        },
        protoTree: {
            lowContrast: "${lowContrast}"
        }
    });

    gpii.discoveryTool.panels.lowContrast.preInit = function (that) {
        console.log(that);
    };

    fluid.defaults("gpii.discoveryTool.enactors.lowContrast", {
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

    /**********************************************************************************
     * simplifiedContentEnactor
     *
     * Simplify content based upon the model value.
     **********************************************************************************/

    // Note that the implementors need to provide the container for this view component
    fluid.defaults("gpii.discoveryTool.enactors.simplifiedContent", {
        gradeNames: ["fluid.viewComponent", "fluid.uiOptions.enactors", "autoInit"],
        selectors: {
            content: ".flc-uiOptions-content"
        },
        styles: {
            simplified: "fl-uiOptions-content-simplified"
        },
        model: {
            value: false
        },
        events: {
            settingChanged: null
        },
        invokers: {
            set: {
                funcName: "gpii.discoveryTool.enactors.simplifiedContent.set",
                args: ["{arguments}.0", "{that}"]
            }
        },
        listeners: {
            onCreate: {
                listener: "{that}.set",
                args: ["{that}.model.value"]
            }
        }
    });

    gpii.discoveryTool.enactors.simplifiedContent.set = function (value, that) {
        var contentContainer = that.container.find(that.options.selectors.content);
        var simplified = contentContainer.hasClass(that.options.styles.simplified);

        if (!that.initialContent || !that.article) {
            that.initialContent = contentContainer.html();
            var articleDom = contentContainer.find("article").clone();
            $("aside", articleDom).remove();
            $("img", articleDom).css("float", "none");
            $("figure", articleDom).css("float", "none");
            var article = articleDom.html();
            that.article = article ? article : that.initialContent;
            that.origBg = $("body").css("background-image");
        }

        if (value) {
            if (!simplified) {
                $("body").css("background-image", "none");
                contentContainer.html(that.article);
                contentContainer.addClass(that.options.styles.simplified);
                that.events.settingChanged.fire();
            }
        } else {
            if (simplified) {
                $("body").css("background-image", that.origBg);
                contentContainer.html(that.initialContent);
                contentContainer.removeClass(that.options.styles.simplified);
                that.events.settingChanged.fire();
            }
        }
    };

    gpii.discoveryTool.enactors.simplifiedContent.finalInit = function (that) {
        that.applier.modelChanged.addListener("value", function (newModel) {
            that.set(newModel.value);
        });
    };
    gpii.discoveryTool.updateToc = function (tocEnactor) {
        if (tocEnactor.tableOfContents) {
            gpii.discoveryTool.regenerateToc(tocEnactor.tableOfContents);
        }
    };
    gpii.discoveryTool.regenerateToc = function (that) {
        var headings = that.filterHeadings(that.locate("headings"), that.options.selectors.exclude);
        that.anchorInfo = fluid.transform(headings, function (heading) {
            return that.headingTextToAnchor(heading);
        });
        var headingsModel = that.modelBuilder.assembleModel(headings, that.anchorInfo);
        that.applier.requestChange("", headingsModel);
    };

    /************************
     * Spoken
     *********************/
    fluid.defaults("gpii.discoveryTool.panels.spoken", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        // this is being ignored - ??
        selectors: {
            spoken: ".flc-discoveryTool-spoken-choice"
        },
        model: {
            spoken: false
        },
        protoTree: {
            spoken: "${spoken}"
        }
    });

    /*************************
     * Set of all enactors
     **************************/
    fluid.defaults("gpii.discoveryTool.enactorSet", {
        gradeNames: ["fluid.uiEnhancer.starterEnactors", "autoInit"],
        components: {
            simplify: {
                type: "gpii.discoveryTool.enactors.simplifiedContent",
                container: "{uiEnhancer}.container",
                options: {
                    sourceApplier: "{uiEnhancer}.applier",
                    rules: {
                        "simplifyContent": "value"
                    },
                    model: {
                        value: "{fluid.uiOptions.rootModel}.rootModel.simplifyContent"
                    },
                    listeners: {
                        settingChanged: "{uiEnhancer}.events.simplifyContentChanged"
                    }
                }
            },
            selfVoicing: {
                type: "gpii.discoveryTool.enactors.selfVoicing",
                container: "{uiEnhancer}.container",
                options: {
                    sourceApplier: "{uiEnhancer}.applier",
                    rules: {
                        "selfVoicing": "value"
                    },
                    model: {
                        value: "{fluid.uiOptions.rootModel}.rootModel.selfVoicing"
                    }
                }
            }
        }
    });

})(jQuery, fluid);
