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
    
    fluid.defaults("gpii.adjuster.contrastEnabled", {
        gradeNames: ["fluid.prefs.panel", "gpii.pmt.previewPerSettingEnhanced", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.contrastEnabled": {
                "model.contrast": "default"
            }
        },
        selectors: {
            headingLabel: ".gpiic-contrast-contrastLabel",
            valueCheckbox: ".gpiic-contrast-constrastInput",
            contrastPreview: ".gpiic-contrast-previewPerSettingFrameContrast"
        },
        selectorsToIgnore: ["contrastPreview"],
        protoTree: {
            headingLabel: {messagekey: "contrast"},
            valueCheckbox: "${contrast}"
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
