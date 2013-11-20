/*!
Cloud4all Preferences Management Tools

Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global fluid, jQuery, gpii*/
/*jslint white: true, onevar: true, funcinvoke: true, forvar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

(function ($, fluid) {
    
    fluid.registerNamespace("gpii.prefs.helpers");

    gpii.prefs.helpers.arrayOverridePolicy = function (target, source) {
        source = fluid.makeArray(source);
        return source;
    };
    
    fluid.defaults("gpii.adjuster.contrastTheme", {
        gradeNames: ["fluid.prefs.panel.contrast", "gpii.pmt.previewPerSettingEnhanced", "autoInit"],
        mergePolicy: {
            "controlValues.theme": gpii.prefs.helpers.arrayOverridePolicy
        },
        preferenceMap: {
            "gpii.primarySchema.contrast.theme": {
                "model.value": "default"
            }
        },
        selectors: {
            contrastPreview: ".gpiic-contrast-previewPerSettingFrameContrast"
        },
        selectorsToIgnore: ["contrastPreview"],
        classes: {
            "bw": "fl-theme-prefsEditor-bw gpii-prefsEditor-theme-bw fl-theme-bw",
            "yb": "fl-theme-prefsEditor-yb gpii-prefsEditor-theme-yb fl-theme-yb",
            "by": "fl-theme-prefsEditor-by gpii-prefsEditor-theme-by fl-theme-by",
            "wb": "fl-theme-prefsEditor-wb gpii-prefsEditor-theme-wb fl-theme-wb"
        },
        controlValues: {
            theme: ["bw", "yb", "by", "wb"]
        },
        invokers: {
            style: {
                funcName: "fluid.prefs.panel.contrast.style",
                args: [
                    "{that}.dom.themeLabel", "{that}.stringBundle.theme",
                    "{that}.options.markup.label", "{that}.options.controlValues.theme",
                    "{that}.options.classes"
                ],
                dynamic: true
            }
        },
        components: {
            preview: {
                type: "fluid.prefs.preview",
                createOnEvent: "afterRender",
                container: "{that}.dom.contrastPreview",
                options: {
                    templateUrl: "../../src/shared/preview/html/contrastPreview.html",
                    components: {
                        enhancer: {
                            type: "fluid.uiEnhancer",
                            container: "{preview}.enhancerContainer",
                            createOnEvent: "onReady",
                            options: {
                                gradeNames: ["fluid.prefs.stringBundle"],
                                members: {
                                    messageResolver: "{prefsEditorLoader}.msgBundle"
                                },
                                strings: {
                                    previewText: "{that}.stringBundle.contrastPreviewText"
                                },
                                selectors: {
                                    previewText: ".gpiic-preview-per-setting-label"
                                },
                                listeners: {
                                    "onCreate.setText": {
                                        "this": "{that}.dom.previewText",
                                        "method": "text",
                                        "args": ["{that}.options.strings.previewText"]
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        distributeOptions: [{
            source: "{that}.options.outerPreviewEnhancerOptions",
            target: "{that preview enhancer}.options"
        }, {
            source: "{that}.options.emptyComponentType",
            target: "{that preview enhancer magnifier}.type"
        }]
    });
})(jQuery, fluid);
