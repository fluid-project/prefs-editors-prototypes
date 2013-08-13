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

    fluid.registerNamespace("gpii.discoveryTool");

    fluid.defaults("gpii.discoveryTool.templateLoader", {
        gradeNames: ["fluid.uiOptions.resourceLoader", "autoInit"],
        templates: {
            highContrast: "%prefix/HighContrastPanelTemplate.html",
            lowContrast: "%prefix/LowContrastPanelTemplate.html",
            increaseSize: "%prefix/IncreaseSizePanelTemplate.html",
            simplify: "%prefix/SimplifyPanelTemplate.html",
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
            trySomethingNew: ".flc-discoveryTool-try",
            highContrast: ".flc-discoveryTool-highContrast",
            lowContrast: ".flc-discoveryTool-lowContrast",
            increaseSize: ".flc-discoveryTool-increaseSize",
            simplify: ".flc-discoveryTool-simplify",
            spoken: ".flc-discoveryTool-spoken"
        },
        components: {
            trySomethingNew: {
                type: "gpii.discoveryTool.trySomethingNew",
                container: "{that}.dom.trySomethingNew",
                createOnEvent: "onUIOptionsComponentReady",
                options: {
                    presetComponents: {
                        expander: {
                            func: "gpii.discoveryTool.panels.getSubcomponents",
                            args: ["{uiOptions}.modelTransformer"]
                        }
                    }

                }
            },
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
                        "spoken": "panelSelections.spoken",

                        "textFont": "convertedModel.textFont",
                        "theme": "convertedModel.theme",
                        "textSize": "convertedModel.textSize",
                        "lineSpace": "convertedModel.lineSpace",
                        "toc": "convertedModel.toc",
                        "links": "convertedModel.links",
                        "inputsLarger": "convertedModel.inputsLarger",
                        "simplifyContent": "convertedModel.simplifyContent",
                        "selfVoicing": "convertedModel.selfVoicing"
                    }
                }
            }
        }
    });

    gpii.discoveryTool.panels.getSubcomponents = function (component) {
        var subComponents = [];
        fluid.each(component.options.components, function (opts, memberName) {
            subComponents.push(fluid.get(component, memberName));
        });
        return subComponents;
    };

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
            elementsToHide: "header, footer, aside, nav, .flc-uiOptions-simplify-hide"
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
                args: ["{that}.model.value", "{that}.dom.elementsToHide"]
            }
        },
        listeners: {
            onCreate: {
                listener: "{that}.set",
                args: ["{that}.model.value", "{that}.dom.elementsToHide"]
            }
        }
    });

    gpii.discoveryTool.enactors.simplifiedContent.set = function (value, els) {
        els.toggle(!value);
    };

    gpii.discoveryTool.enactors.simplifiedContent.finalInit = function (that) {
        that.applier.modelChanged.addListener("value", function (newModel) {
            that.set();
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

    /**************************************
     * gpii.discoveryTool.trySomethingNew *
     ***************************************/

    fluid.defaults("gpii.discoveryTool.trySomethingNew", {
        gradeNames: ["fluid.viewComponent", "autoInit"],
        selectors: {
            label: "flc-discoveryTool-tryLabel"
        },
        strings: {
            label: "Try Something New" // TODO: convert to message bundle
        },
        styles: {
            hover: "fl-discoveryTool-hover"
        },
        events: {
            onHover: null,
            afterHover: null,
            onFocus: null,
            onBlur: null,
            afterActivate: null
        },
        presetComponents: [],
        numSelections: 2,
        listeners: {
            "onCreate.click": {
                "this": "{that}.container",
                "method": "click",
                "args": ["{that}.events.afterActivate.fire"]
            },
            "onCreate.mouseenter": {
                "this": "{that}.container",
                "method": "mouseenter",
                "args": ["{that}.events.onHover.fire"]
            },
            "onCreate.mouseleave": {
                "this": "{that}.container",
                "method": "mouseleave",
                "args": ["{that}.events.afterHover.fire"]
            },
            "onCreate.focus": {
                "this": "{that}.container",
                "method": "focus",
                "args": ["{that}.events.onFocus.fire"]
            },
            "onCreate.blur": {
                "this": "{that}.container",
                "method": "blur",
                "args": ["{that}.events.onBlur.fire"]
            },
            "afterActivate.preventDefault": {
                listener: "gpii.discoveryTool.trySomethingNew.preventDefault"
            },
            "afterActivate.activate": {
                listener: "{that}.randomizeSelection"
            },
            "onFocus.startCycle": {
                listener: "{that}.cycle.start"
            },
            "onBlur.stopCycle": {
                listener: "{that}.cycle.stop"
            },
            "onHover.startCycle": {
                listener: "{that}.cycle.start"
            },
            "afterHover.stopCycle": {
                listener: "{that}.cycle.stop"
            }
        },
        invokers: {
            randomizeSelection: {
                funcName: "gpii.discoveryTool.trySomethingNew.randomizeSelection",
                args: ["{that}.options.presetComponents", "{that}.options.numSelections"]
            }
        },
        components: {
            cycle: {
                type: "gpii.discoveryTool.cycle",
                options: {
                    items: "{trySomethingNew}.options.presetComponents",
                    listeners: {
                        "on.toggleClass": {
                            funcName: "gpii.discoveryTool.trySomethingNew.toggleClass",
                            args: ["{arguments}.0.container", "{trySomethingNew}.options.styles.hover"]
                        },
                        "off.toggleClass": {
                            funcName: "gpii.discoveryTool.trySomethingNew.toggleClass",
                            args: ["{arguments}.0.container", "{trySomethingNew}.options.styles.hover"]
                        }
                    }
                }
            }
        }
    });

    gpii.discoveryTool.trySomethingNew.preventDefault = function (event) {
        event.preventDefault();
    };

    gpii.discoveryTool.trySomethingNew.randomizeSelection = function (presetComponents, numSelections) {
        var components = fluid.copy(presetComponents);
        var toSelect = [];
        numSelections = Math.min(numSelections || 0, components.length);

        for (var i = 0; i < numSelections; i++) {
            var randIndex = Math.floor(Math.random() * (components.length));
            toSelect = toSelect.concat(components.splice(randIndex, 1));
        }

        fluid.each(components, function (that) {
            that.applier.requestChange("enabled", false);
            that.refreshView();
        });
        fluid.each(toSelect, function (that) {
            that.applier.requestChange("enabled", true);
            that.refreshView();
        });
    };

    gpii.discoveryTool.trySomethingNew.toggleClass = function (elm, className) {
        $(elm).toggleClass(className);
    };

    fluid.defaults("gpii.discoveryTool.cycle", {
        gradeNames: ["fluid.modelComponent", "fluid.eventedComponent", "autoInit"],
        speed: "500",
        items: [],
        events: {
            on: null,
            off: null
        },
        model: {
            enabled: false
        },
        listeners: {
            "onCreate.cycle": {
                listener: "{that}.run"
            },
            "onCreate.modelChangedListener": {
                listener: "{that}.applier.modelChanged.addListener",
                args: ["*", "{that}.run"]
            }
        },
        invokers: {
            start: {
                func: "{that}.applier.requestChange",
                args: ["enabled", true]
            },
            stop: {
                func: "{that}.applier.requestChange",
                args: ["enabled", false]
            },
            run: {
                funcName: "gpii.discoveryTool.cycle.run",
                args: ["{that}.options.items", 0, "{that}.options.speed", "{that}.model", "{that}.events.on.fire", "{that}.events.off.fire"]
            }
        }
    });

    gpii.discoveryTool.cycle.run = function (items, index, speed, model, callbackOn, callbackOff) {
        var numItems = items.length;
        if (model.enabled && numItems) {
            var boundIndex = index%numItems;
            callbackOn(items[boundIndex], boundIndex);
            setTimeout(function () {
                callbackOff(items[boundIndex], boundIndex);
                gpii.discoveryTool.cycle.run(items, ++index, speed, model, callbackOn, callbackOff);
            }, speed);
        }
    };

})(jQuery, fluid);
