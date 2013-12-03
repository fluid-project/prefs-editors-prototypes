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
        gradeNames: ["fluid.prefs.panel.contrast", "autoInit"],
        mergePolicy: {
            "controlValues.theme": gpii.prefs.helpers.arrayOverridePolicy
        },
        preferenceMap: {
            "gpii.primarySchema.contrast.theme": {
                "model.value": "default"
            }
        },
        selectors: {
            contrastPreview: ".gpiic-contrast-previewPerSettingFrameContrast",
            contrastOptions: ".gpiic-contrast-contrastOptions"
        },
        selectorsToIgnore: ["contrastPreview", "contrastOptions"],
        listeners: {
            "afterRender.setContrastOptionstext": {
                "this": "{that}.dom.contrastOptions",
                "method": "text",
                "args": ["{that}.stringBundle.contrastOptions"]
            },
            onDomBind: "{that}.style"
        },
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
        }
    });
    
    fluid.defaults("gpii.adjuster.contrastTheme.preview", {
        gradeNames: ["gpii.adjuster.previewWithText", "autoInit"],
        components: {
            preview: {
                options: {
                    components: {
                        enhancer: {
                            options: {
                                strings: {
                                    // override preview text
                                    previewText: "{that}.stringBundle.contrastPreviewText"
                                }
                            }
                        }
                    }
                }
            }
        },
        previewURL: "",
        previewEnactors: {
            contrastTheme: {
                type: "gpii.enactor.contrastTheme",
                container: "{enhancer}.container",
                options: {
                    gradeNames: ["gpii.enactors.previewConnections"]
                }
            },
            textSize: {
                type: "gpii.enactor.textSize",
                container: "{enhancer}.container",
                options: {
                    gradeNames: ["gpii.enactors.previewConnections"]
                }
            }
        }
    });

})(jQuery, fluid);
