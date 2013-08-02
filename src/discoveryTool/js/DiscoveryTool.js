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
        gradeNames: ["fluid.uiOptions.resourceLoader", "autoInit"],
        templates: {
            highContrast: "%prefix/HighContrastPanelTemplate.html",
            lowContrast: "%prefix/LowContrastPanelTemplate.html",
            increaseSize: "%prefix/IncreaseSizePanelTemplate.html",
            simplify: "%prefix/SimplifyPanelTemplate.html",
            moreText: "%prefix/MoreTextPanelTemplate.html",
            spoken: "%prefix/SpokenPanelTemplate.html",
            uiOptions: "%prefix/DiscoveryTool.html"
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
                moreText: false,
                spoken: false,

                textFont: "default",
                theme: "default",
                textSize: 1,
                lineSpace: 1,
                toc: false,
                links: false,
                inputsLarger: false,
                simplifyContent: false,
                showAltText: false,
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
                moreText: false,
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
                showAltText: false,
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
            moreText: {
                showAltText: true
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
                priority: "first",
                options: {
                    gradeNames: "gpii.discoveryTool.defaultPanel",
                    rules: { // "externalModelKey": "internalModelKey"
                        "panelSelections.highContrast": "enabled"
                    },
                    resources: {
                        template: "{templateLoader}.resources.highContrast"
                    },
                    listeners: {
                        afterDisabled: "{that}.refreshView"
                    }
                }
            },
            lowContrast: {
                type: "gpii.discoveryTool.panels.lowContrast",
                container: "{uiOptions}.dom.lowContrast",
                createOnEvent: "{uiOptions}.events.onUIOptionsMarkupReady",
                options: {
                    gradeNames: "gpii.discoveryTool.defaultPanel",
                    rules: {
                        "panelSelections.lowContrast": "enabled"
                    },
                    resources: {
                        template: "{templateLoader}.resources.lowContrast"
                    },
                    listeners: {
                        // All of the listeners for toggling the contrasts are inside of
                        // lowContrast because the highContrast component has to be created
                        // before the IoC reference will resolve correctly.
                        "{highContrast}.events.afterEnabled": {
                            listener: "{that}.applier.requestChange",
                            args: ["enabled", false]
                        },
                        "afterEnabled": {
                            listener: "{highContrast}.applier.requestChange",
                            args: ["enabled", false]
                        },
                        afterDisabled: "{that}.refreshView"
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
                        "panelSelections.increaseSize": "enabled"
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
                        "panelSelections.simplify": "enabled"
                    },
                    resources: {
                        template: "{templateLoader}.resources.simplify"
                    }
                }
            },
            moreText: {
                type: "gpii.discoveryTool.panels.moreText",
                container: "{uiOptions}.dom.moreText",
                createOnEvent: "{uiOptions}.events.onUIOptionsMarkupReady",
                options: {
                    gradeNames: "gpii.discoveryTool.defaultPanel",
                    rules: {
                        "panelSelections.moreText": "enabled"
                    },
                    resources: {
                        template: "{templateLoader}.resources.moreText"
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
                        "panelSelections.spoken": "enabled"
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
            moreText: ".flc-discoveryTool-moreText",
            spoken: ".flc-discoveryTool-spoken"
        },
        components: {
            modelTransformer: {
                type: "gpii.discoveryTool.modelTransformer",
                options: {
                    sourceApplier: "{panels}.applier",
                    rootModel: "{panels}.rootModel",
                    rules: {  // "externalModelKey": "internalModelKey"
                        "highContrast": "panelSelections.highContrast",
                        "lowContrast": "panelSelections.lowContrast",
                        "increaseSize": "panelSelections.increaseSize",
                        "simplify": "panelSelections.simplify",
                        "moreText": "panelSelections.moreText",
                        "spoken": "panelSelections.spoken",

                        "textFont": "convertedModel.textFont",
                        "theme": "convertedModel.theme",
                        "textSize": "convertedModel.textSize",
                        "lineSpace": "convertedModel.lineSpace",
                        "toc": "convertedModel.toc",
                        "links": "convertedModel.links",
                        "inputsLarger": "convertedModel.inputsLarger",
                        "simplifyContent": "convertedModel.simplifyContent",
                        "showAltText": "convertedModel.showAltText",
                        "selfVoicing": "convertedModel.selfVoicing"
                    }
                }
            }
        }
    });

    fluid.defaults("gpii.discoveryTool.togglePanel", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        finalInitFunction: "gpii.discoveryTool.togglePanel.finalInit",
        selectors: {
            toggle: ".flc-discoveryTool-togglePanel.toggle"
        },
        events: {
            afterDisabled: null,
            afterEnabled: null
        },
        model: {
            enabled: false
        },
        protoTree: {
            toggle: "${enabled}"
        }
    });

    gpii.discoveryTool.togglePanel.finalInit = function (that) {
        that.applier.modelChanged.addListener("enabled", function (newModel, oldModel) {
            if (newModel.enabled !== oldModel.enabled) {
                that.events[newModel.enabled ? "afterEnabled" : "afterDisabled"].fire(that);
            }
        });
    };

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
        gradeNames: ["gpii.discoveryTool.togglePanel", "autoInit"],
        selectors: {
            toggle: ".flc-discoveryTool-highContrast-choice"
        }
    });

    fluid.defaults("gpii.discoveryTool.enactors.highContrast", {
        gradeNames: ["fluid.viewComponent", "fluid.uiOptions.enactors", "autoInit"]
    });

    /************************
     * Low Contrast:
     *
     * The Discovery Tool 'low contrast' option will set:
     * - light grey on dark grey
     * - emphasize links
     * - inputs larger
     * - sans serif font or monospaced font
     *********************/
    fluid.defaults("gpii.discoveryTool.panels.lowContrast", {
        gradeNames: ["gpii.discoveryTool.togglePanel", "autoInit"],
        selectors: {
            toggle: ".flc-discoveryTool-lowContrast-choice"
        }
    });

    fluid.defaults("gpii.discoveryTool.enactors.lowContrast", {
        gradeNames: ["fluid.viewComponent", "fluid.uiOptions.enactors", "autoInit"]
    });

    /************************
     * Increase Size
     *********************/
    fluid.defaults("gpii.discoveryTool.panels.increaseSize", {
        gradeNames: ["gpii.discoveryTool.togglePanel", "autoInit"],
        // this is being ignored - ??
        selectors: {
            toggle: ".flc-discoveryTool-increaseSize-choice"
        }
    });

    /************************
     * Simplify
     *********************/
    fluid.defaults("gpii.discoveryTool.panels.simplify", {
        gradeNames: ["gpii.discoveryTool.togglePanel", "autoInit"],
        // this is being ignored - ??
        selectors: {
            toggle: ".flc-discoveryTool-simplify-choice"
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
        that.applier.modelChanged.addListener("value", function (newModel, oldModel) {
            if (newModel.value !== oldModel.value) {
                that.set(newModel.value);
            }
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

    /***********************
     * More Text
     ***********************/
    fluid.defaults("gpii.discoveryTool.panels.moreText", {
        gradeNames: ["gpii.discoveryTool.togglePanel", "autoInit"],
        // this is being ignored - ??
        selectors: {
            toggle: ".flc-discoveryTool-moreText-choice"
        }
    });

    /**********************************************************************************
     * showAltText enactor
     **********************************************************************************/

    // Note that the implementors need to provide the container for this view component
    fluid.defaults("gpii.discoveryTool.enactors.showAltText", {
        gradeNames: ["fluid.viewComponent", "fluid.uiOptions.enactors", "autoInit"],
        selectors: {
            content: ".flc-uiOptions-content",
            altTexts: ".flc-discoveryTool-altText",
            altTextText: ".flc-discoveryTool-altTextText",
            images: "img, [role~='img']"
        },
        styles: {
            hidden: "fl-hidden"
        },
        model: {
            value: false
        },
        events: {
            settingChanged: null
        },
        invokers: {
            set: {
                funcName: "gpii.discoveryTool.enactors.showAltText.set",
                args: ["{arguments}.0", "{that}"]
            }
        },
        members: {
            docScannedForImages: false
        },
        altTextDivTemplate: "<div class='flc-discoveryTool-altText fl-discoveryTool-altText'><span class='fl-discoveryTool-altTextIcon'></span><span class='flc-discoveryTool-altTextText'></span></div>"
    });

    gpii.discoveryTool.enactors.showAltText.finalInit = function (that) {
        that.applier.modelChanged.addListener("value", function (newModel, oldModel) {
            if (newModel.value !== oldModel.value) {
                that.set(newModel.value);
            }
        });
    };
    gpii.discoveryTool.enactors.showAltText.set = function (value, that) {
        if (!that.docScannedForImages) {
            var imgs = that.dom.fastLocate("images");
            fluid.each(imgs, function (img, index) {
                var img = $(img);
                var alt = img.attr("alt");
                var altDiv = $(that.options.altTextDivTemplate);
                $(that.options.selectors.altTextText, altDiv).text(alt);
                img.after(altDiv);
            });
            that.docScannedForImages = true;
        }
        that.dom.fastLocate("altTexts").toggleClass(that.options.styles.hidden, !value)
    };

    /************************
     * Spoken
     *********************/
    fluid.defaults("gpii.discoveryTool.panels.spoken", {
        gradeNames: ["gpii.discoveryTool.togglePanel", "autoInit"],
        // this is being ignored - ??
        selectors: {
            toggle: ".flc-discoveryTool-spoken-choice"
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
            moreText: {
                type: "gpii.discoveryTool.enactors.showAltText",
                container: "{uiEnhancer}.container",
                options: {
                    sourceApplier: "{uiEnhancer}.applier",
                    rules: {
                        "showAltText": "value"
                    },
                    model: {
                        value: "{fluid.uiOptions.rootModel}.rootModel.showAltText"
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
