/*!
Cloud4all Preferences Management Tools

Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global fluid, jQuery*/
/*jslint white: true, onevar: true, funcinvoke: true, forvar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

(function ($, fluid) {

    fluid.defaults("gpii.adjuster.cursorSize", {
        gradeNames: ["fluid.prefs.panel", "gpii.pmt.previewPerSettingEnhanced", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.cursorSize": {
                "model.value": "default",
                "controlValues.cursorSize.min": "minimum",
                "controlValues.cursorSize.max": "maximum",
                "controlValues.cursorSize.divisibleBy": "divisibleBy"
            }
        },
        components: {
            cursorSizePreview: {
                type: "fluid.prefs.preview",
                createOnEvent: "afterRender",
                container: "{that}.dom.cursorSizePreview",
                options: {
                    templateUrl: "../../src/shared/preview/html/cursorPreview.html"
                }
            }
        },
        selectors: {
            cursorSizeSlider: ".gpiic-increaseSize-cursor-size-slider",
            cursorSizeLabel: ".gpiic-increaseSize-cursor-size-label",
            cursorSizePreview: ".gpiic-increaseSize-previewPerSettingFrameCursorSize"
        },
        selectorsToIgnore: ["cursorSizePreview"],
        protoTree: {
            cursorSizeLabel: {messagekey: "cursorSizeLabel"},
            cursorSizeSlider: {
                decorators: {
                    type: "fluid",
                    func: "fluid.textfieldSlider",
                    options: {
                        rules: {
                            "value": "value"
                        },
                        model: {
                            value: "{that}.model.value"
                        },
                        sourceApplier: "{that}.applier",
                        range: "{that}.options.controlValues.cursorSize",
                        sliderOptions: "{that}.options.sliderOptions"
                    }
                }
            }
        },
        sliderOptions: {
            orientation: "horizontal",
            step: 0.2,
            range: "min"
        },

        distributeOptions: [{
            source: "{that}.options.outerPreviewEnhancerOptions",
            target: "{that cursorSizePreview enhancer}.options"
        }, {
            source: "{that}.options.emptyComponentType",
            target: "{that cursorSizePreview enhancer textSize}.type"
        }, {
            source: "{that}.options.emptyComponentType",
            target: "{that cursorSizePreview enhancer magnifier}.type"
        }]
    });

})(jQuery, fluid);