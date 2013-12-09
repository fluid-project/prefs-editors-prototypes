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
    
    fluid.defaults("gpii.adjuster.contrastThemePMT", {
        gradeNames: ["gpii.adjuster.contrastThemePCP", "autoInit"],
        mergePolicy: {
            selectorsToIgnore: fluid.prefs.compositePanel.arrayMergePolicy
        },
        preferenceMap: {
            "gpii.primarySchema.contrast.theme": {
                "model.value": "default"
            }
        },
        selectors: {
            contrastPreview: ".gpiic-contrast-previewPerSettingFrameContrast"
        },
        selectorsToIgnore: ["contrastPreview"]
    });
    
    fluid.defaults("gpii.adjuster.contrastThemePMT.preview", {
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
