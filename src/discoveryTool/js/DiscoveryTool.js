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

    /**
     * These paths will need to be customized for the integration
     */
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

    fluid.defaults("gpii.discoveryTool.messageLoader", {
        gradeNames: ["fluid.uiOptions.resourceLoader", "autoInit"],
        templates: {
            uiOptions: "%prefix/DiscoveryTool.json"
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
                showMoreText: false,
                selfVoicing: false
            }
        }
    });

    /*****************
     * The Discovery Tool
     * An instance of a Fat Panel UIO
     ****************/
    fluid.defaults("gpii.discoveryTool", {
        gradeNames: ["fluid.uiOptions.fatPanel", "autoInit"],
        selectors: {
            discoverIcon: ".flc-icon-discover"
        },
        keyBinding: {
            hideTool: $.ui.keyCode.ESCAPE
        },
        slidingPanel: {
            strings: {
                showLabel: {
                    expander: {
                        func: "gpii.discoveryTool.lookupMsg",
                        args: ["{slidingPanel}.msgBundle", "slidingPanelShowLabel"]
                    }
                },
                hideLabel: {
                    expander: {
                        func: "gpii.discoveryTool.lookupMsg",
                        args: ["{slidingPanel}.msgBundle", "slidingPanelHideLabel"]
                    }
                }
            },
            invokers: {
                showDiscoveryIcon: {
                    "this": "{discoveryTool}.dom.discoverIcon",
                    method: "show"
                },
                hideDiscoveryIcon: {
                    "this": "{discoveryTool}.dom.discoverIcon",
                    method: "hide"
                },
                setLabel: {
                    "this": "{that}.dom.toggleButton",
                    method: "attr",
                    args: ["aria-label", "{arguments}.0"]
                }
            },
            listeners: {
                "onCreate.showIcon": "{that}.showDiscoveryIcon",
                "onCreate.showLabel": {
                    listener: "{that}.setLabel",
                    args: "{that}.options.strings.showLabel"
                },
                "onPanelHide.showIcon": "{that}.showDiscoveryIcon",
                "onPanelHide.showLabel": {
                    listener: "{that}.setLabel",
                    args: "{that}.options.strings.showLabel"
                },
                "onPanelShow.showIcon": "{that}.hideDiscoveryIcon",
                "onPanelShow.showLabel": {
                    listener: "{that}.setLabel",
                    args: "{that}.options.strings.hideLabel"
                }
            }
        },
        invokers: {
            hideToolPanel: "{slidingPanel}.hidePanel",
            hideToolPanelInIframe: {
                funcName: "gpii.discoveryTool.hideToolPanelInIframe",
                args: ["{that}.hideToolPanel", "{slidingPanel}.dom.toggleButton"]
            }
        },
        listeners: {
            afterRender: {
                listener: "gpii.discoveryTool.initHideFuncs",
                args: "{that}",
                priority: "last"
            }
        }
    });

    // Pressing escape inside the discovery tool does:
    // 1. Hide the tool panel;
    // 2. Move focus to "show/hide" button
    gpii.discoveryTool.hideToolPanelInIframe = function (genericHideFunc, elementToFocus) {
        genericHideFunc();
        elementToFocus.focus();
    };

    gpii.discoveryTool.bindHideKey = function (key, element, hideFunc) {
        if (!element) {
            return;
        }

        var keybindingOpts = {
            additionalBindings: [{
                key: key,
                activateHandler: function (event) {
                    hideFunc();
                    event.preventDefault();
                }
            }]
        };

        element.fluid("tabbable");
        fluid.activatable(element, null, keybindingOpts);
    };

    // Hide the discovery tool when clicking outside of the discovery tool panel or pressing escape
    gpii.discoveryTool.initHideFuncs = function (that) {
        var html = $("html");

        html.click(function () {
            that.hideToolPanel();
        });

        that.container.click(function (event) {
            event.stopPropagation();
        });

        var iframeHtml = that.iframeRenderer.iframe.contents().find("html");

        // Bind hide function onto the main page and the iframe for discovery tool
        gpii.discoveryTool.bindHideKey(that.options.keyBinding.hideTool, html, that.hideToolPanel);
        gpii.discoveryTool.bindHideKey(that.options.keyBinding.hideTool, iframeHtml, that.hideToolPanelInIframe);
    };

    // Currently this code is duplicated from SlidingPanel.js
    // FLUID-5119 filed to move it to the framework, after which this should be removed in favour of the
    // generalized code.
    gpii.discoveryTool.lookupMsg = function (messageResolver, value) {
        var looked = messageResolver.lookup([value]);
        return looked ? looked.template : looked;
    };

    /*************
     * The base grade component for each individual panel
     *************/
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
                showMoreText: false,
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
                showMoreText: true
            },
            spoken: {
                selfVoicing: true
            }
        },
        invokers: {
            convertModel: "gpii.discoveryTool.modelTransformer.convertModel",
            relayConvertedModel: {
                funcName: "gpii.discoveryTool.modelTransformer.relayConvertedModel",
                args: ["{that}", "{arguments}.0"]
            }
        },
        listeners: {
            "{uiOptions}.events.onReady": {
                listener: "{that}.applier.modelChanged.addListener",
                args: ["panelSelections", "{that}.relayConvertedModel"]
            }
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
                        "{highContrast}.events.afterEnabled": [{
                            listener: "{that}.applier.requestChange",
                            args: ["enabled", false],
                            namespace: "disableLowContrast"
                        }, {
                            listener: "{that}.refreshView",
                            namespace: "refreshLowContrast"
                        }],
                        "afterEnabled.disableHighContrast": {
                            listener: "{highContrast}.applier.requestChange",
                            args: ["enabled", false]
                        },
                        "afterEnabled.refreshHighContrast": {
                            listener: "{highContrast}.refreshView",
                            priority: "last"
                        }
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

    gpii.discoveryTool.modelTransformer.relayConvertedModel = function (that, newModel) {
        var convertedModel = that.convertModel(that, newModel.panelSelections);
        that.applier.requestChange("convertedModel", convertedModel);
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
            moreText: ".flc-discoveryTool-moreText",
            spoken: ".flc-discoveryTool-spoken"
        },
        components: {
            trySomethingNew: {
                type: "gpii.discoveryTool.trySomethingNew",
                container: "{that}.dom.trySomethingNew",
                createOnEvent: "onReady",
                options: {
                    strings: {
                        label: {
                            expander: {
                                func: "gpii.discoveryTool.lookupMsg",
                                args: ["{uiOptionsLoader}.msgBundle", "trySomethingNewText"]
                            }
                        }
                    },
                    presetPanels: {
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
                        "showMoreText": "convertedModel.showMoreText",
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
            simplified: "fl-simplify"
        },
        model: {
            value: false
        },
        events: {
            settingChanged: null,
            onApplySimplify: null,
            onRemoveSimplify: null
        },
        invokers: {
            set: {
                funcName: "gpii.discoveryTool.enactors.simplifiedContent.set",
                args: ["{that}.model.value", "{that}"]
            }
        },
        listeners: {
            onCreate: "{that}.set",
            "onApplySimplify.applyCss": {
                "this": "{that}.container",
                method: "addClass",
                args: "{that}.options.styles.simplified"
            },
            "onApplySimplify.hideElements": {
                "this": "{that}.dom.elementsToHide",
                method: "hide"
            },
            "onRemoveSimplify.removeCss": {
                "this": "{that}.container",
                method: "removeClass",
                args: "{that}.options.styles.simplified"
            },
            "onRemoveSimplify.showElements": {
                "this": "{that}.dom.elementsToHide",
                method: "show"
            }
        }
    });

    gpii.discoveryTool.enactors.simplifiedContent.set = function (value, that) {
        if (value) {
            that.events.onApplySimplify.fire();
        } else {
            that.events.onRemoveSimplify.fire();
        }
    };

    gpii.discoveryTool.enactors.simplifiedContent.finalInit = function (that) {
        that.applier.modelChanged.addListener("value", function (newModel) {
            that.set();
        });
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
     * showMoreText enactor
     **********************************************************************************/

    // Note that the implementors need to provide the container for this view component
    fluid.defaults("gpii.discoveryTool.enactors.showMoreText", {
        gradeNames: ["fluid.viewComponent", "fluid.uiOptions.enactors", "autoInit"],
        selectors: {
            content: ".flc-uiOptions-content",
            moreTexts: ".flc-discoveryTool-moreText-container",
            images: "img, [role~='img']",
            textEl: "details" // selector of element in 'markup.moreText' where text should be inserted
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
        listeners: {
            onCreate: {
                listener: "{that}.set",
                args: ["{that}.model.value"]
            }
        },
        invokers: {
            addMoreTextMarkup: {
                funcName: "gpii.discoveryTool.enactors.showMoreText.addMoreTextMarkup",
                args: ["{that}.dom.images", "{that}.getMoreText", "{that}.buildMoreTextMarkup"]
            },
            getMoreText: "gpii.discoveryTool.enactors.showMoreText.getAltText",
            buildMoreTextMarkup: {
                funcName: "gpii.discoveryTool.enactors.showMoreText.buildMoreTextMarkup",
                args: ["{that}.options.markup.moreText", "{that}.options.selectors.textEl", "{arguments}.0"]
            },
            set: {
                funcName: "gpii.discoveryTool.enactors.showMoreText.set",
                args: ["{arguments}.0", "{that}"]
            }
        },
        members: {
            moreTextMarkupAdded: false
        },
        markup: {
            moreText: "<div class='flc-discoveryTool-moreText-container fl-discoveryTool-moreText fl-fix'><details><summary></summary></details></div>"
        }
    });

    gpii.discoveryTool.enactors.showMoreText.addMoreTextMarkup = function (imgs, getMoreTextFunc, buildMoreTextMarkupFunc) {
        fluid.each(imgs, function (img) {
            img = $(img);
            var text = getMoreTextFunc(img);
            if (text) {
                img.after(buildMoreTextMarkupFunc(text));
            }
        });
    };

    gpii.discoveryTool.enactors.showMoreText.getAltText = function (img) {
        return img.attr("alt") || img.attr("aria-label");
    };

    gpii.discoveryTool.enactors.showMoreText.buildMoreTextMarkup = function (markup, textElSelector, text) {
        var container = $(markup);
        var textEl = $(textElSelector, container);
        if (textEl.length < 1) { // in case the textEl _is_ the container
            container.append(text);
        } else {
            textEl.append(text);
        }
        return container;
    };

    gpii.discoveryTool.enactors.showMoreText.finalInit = function (that) {
        that.applier.modelChanged.addListener("value", function (newModel, oldModel) {
            if (newModel.value !== oldModel.value) {
                that.set(newModel.value);
            }
        });
    };
    gpii.discoveryTool.enactors.showMoreText.set = function (value, that) {
        if (!that.moreTextMarkupAdded) {
            that.addMoreTextMarkup();
            that.moreTextMarkupAdded = true;
        }
        that.dom.fastLocate("moreTexts").toggleClass(that.options.styles.hidden, !value);
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
            tableOfContents: {
                options: {
                    components: {
                        tableOfContents: {
                            options: {
                                selectors: {
                                    // Only look for headings thare within the simplified text, since the ToC is only rendered on simplify.
                                    headings: ":header:visible:not(.flc-toc-tocContainer :header, header :header, footer :header, aside :header, nav :header, .flc-uiOptions-simplify-hide :header)"
                                }
                            }
                        }
                    }
                }
            },
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
                    }
                }
            },
            moreText: {
                type: "gpii.discoveryTool.enactors.showMoreText",
                container: "{uiEnhancer}.container",
                options: {
                    sourceApplier: "{uiEnhancer}.applier",
                    rules: {
                        "showMoreText": "value"
                    },
                    model: {
                        value: "{fluid.uiOptions.rootModel}.rootModel.showMoreText"
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
            label: ".flc-discoveryTool-tryLabel"
        },
        strings: {
            label: "Try Something New"
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
        presetPanels: [],
        numSelections: 2,
        listeners: {
            "onCreate.setLabel": {
                "this": "{that}.dom.label",
                "method": "html",
                "args": ["{that}.options.strings.label"]
            },
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
                args: ["{that}.options.presetPanels", "{that}.options.numSelections"]
            }
        },
        components: {
            cycle: {
                type: "gpii.discoveryTool.cycle",
                options: {
                    items: "{trySomethingNew}.options.presetPanels",
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

    gpii.discoveryTool.trySomethingNew.randomizeSelection = function (presetPanels, numSelections) {
        var components = fluid.copy(presetPanels);
        var toSelect = [];
        numSelections = Math.min(numSelections, components.length);

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

    /*
     * Cycles through an array of items, one at a time based on the specified speed.
     * The items can be anything. When the cycle is started, each item will gain "focus"
     * one after another. As an item gains focus it fires the "on" event. Before the next
     * item is focused the current one will fire the "off" event. No two items will be
     * focused at the same time. The cycle will wrap around the array and continue until
     * stopped.
     */
    fluid.defaults("gpii.discoveryTool.cycle", {
        gradeNames: ["fluid.modelComponent", "fluid.eventedComponent", "autoInit"],
        speed: "500",
        items: [],
        events: {
            on: null,
            off: null
        },
        model: {
            enabled: false,
            inStep: false
        },
        listeners: {
            "onCreate.cycle": {
                listener: "{that}.step"
            },
            "onCreate.modelChangedListenerEnabled": {
                listener: "{that}.applier.modelChanged.addListener",
                args: ["enabled", "{that}.step"]
            },
            "on.setModel": {
                listener: "{that}.applier.requestChange",
                args: ["inStep", true]
            },
            "off.setModel": {
                listener: "{that}.applier.requestChange",
                args: ["inStep", false]
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
            step: {
                funcName: "gpii.discoveryTool.cycle.step",
                args: ["{that}.options.items", 0, "{that}.options.speed", "{that}.model", "{that}.events.on.fire", "{that}.events.off.fire"]
            }
        }
    });

    gpii.discoveryTool.cycle.step = function (items, index, speed, model, callbackOn, callbackOff) {
        var numItems = items.length;
        if (model.enabled && !model.inStep && numItems) {
            var boundIndex = index % numItems;
            callbackOn(items[boundIndex], boundIndex);
            setTimeout(function () {
                callbackOff(items[boundIndex], boundIndex);
                gpii.discoveryTool.cycle.step(items, ++index, speed, model, callbackOn, callbackOff);
            }, speed);
        }
    };

})(jQuery, fluid);
