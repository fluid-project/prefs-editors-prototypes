/*!
Copyright 2013 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/gpii/universal/LICENSE.txt
*/

var fluid_1_5 = fluid_1_5 || {};

(function ($, fluid) {

    fluid.defaults("gpii.adjuster.preview", {
        gradeNames: ["fluid.rendererComponent", "autoInit"],
        mergePolicy: {
            selectorsToIgnore: fluid.prefs.compositePanel.arrayMergePolicy
        },
        selectors: {
            preview: ".gpiic-adjuster-preview"
        },
        selectorsToIgnore: ["preview"],
        components: {
            preview: {
                type: "fluid.prefs.preview",
                createOnEvent: "afterRender",
                container: "{that}.dom.preview",
                options: {
                    model: "{prefsEditor}.model",
                }
            }
        },
        previewEnactors: {},
        previewURL: "",
        distributeOptions: [{
            source: "{that}.options.previewURL",
            target: "{that preview}.options.templateUrl"
        }, {
            source: "{that}.options.previewEnactors",
            target: "{that preview enhancer}.options.components"
        }]
    });

    fluid.defaults("gpii.adjuster.previewWithText", {
        gradeNames: ["gpii.adjuster.preview", "autoInit"],
        components: {
            preview: {
                options: {
                    components: {
                        enhancer: {
                            options: {
                                gradeNames: ["fluid.prefs.msgLookup"],
                                members: {
                                   messageResolver: "{prefsEditorLoader}.msgResolver"
                                },
                                strings: {
                                   previewText: "{that}.msgLookup.previewText"
                                },
                                selectors: {
                                    text: ".gpiic-adjuster-preview-text"
                                },
                                listeners: {
                                    "onCreate.setText": {
                                        "this": "{that}.dom.text",
                                        "method": "text",
                                        "args": ["{that}.options.strings.previewText"]
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    });

    fluid.defaults("gpii.enactors.previewConnections", {
        gradeNames: ["fluid.prefs.enactor", "autoInit"],
        preferenceMap: {},
        model: {
            expander: {
                funcName: "gpii.enactors.previewConnections.fetchInitialModel",
                args: ["{that}.options.rules", "{prefsEditor}.model"]
            }
        },
        sourceApplier: "{enhancer}.applier",
        rules: {
            expander: {
                funcName: "gpii.enactors.previewConnections.generateRules",
                args: ["{that}.options.preferenceMap"]
            }
        }
    });

    gpii.enactors.previewConnections.generateRules = function (prefMap) {
        var modelPrefix = "model.";
        var rules = {};
        fluid.each(prefMap, function (prefRules, prefKey) {
            $.each(prefRules, function (prefRule) {
                if (prefRule.indexOf(modelPrefix) === 0) {
                    rules[fluid.prefs.subPanel.safePrefKey(prefKey)] = prefRule.slice(modelPrefix.length);
                }
            });
        });
        return rules;
    };

    gpii.enactors.previewConnections.fetchInitialModel = function (rules, sourceModel) {
        var modelPrefix = "model.";
        var model = {};
        fluid.each(rules, function (internal, external) {
            var externalVal = fluid.get(sourceModel, external);
            fluid.set(model, internal, externalVal);
        });
        return model;
    };

 })(jQuery, fluid_1_5);
