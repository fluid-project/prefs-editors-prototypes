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
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.cursorSize": {
                "model.value": "default",
                "controlValues.cursorSize.min": "minimum",
                "controlValues.cursorSize.max": "maximum",
                "controlValues.cursorSize.divisibleBy": "divisibleBy"
            }
        },
        selectors: {
            cursorSizeSlider: ".gpiic-increaseSize-cursor-size-slider",
            cursorSizeLabel: ".gpiic-increaseSize-cursor-size-label"
        },
        selectorsToIgnore: ["cursorSizeSlider"],
        components: {
            cursorSizeSlider: {
                type: "fluid.textfieldSlider",
                container: "{that}.dom.cursorSizeSlider",
                createOnEvent: "afterRender",
                options: {
                    rules: {
                        "value": "value"
                    },
                    model: {
                        value: "{cursorSize}.model.value"
                    },
                    sourceApplier: "{cursorSize}.applier",
                    range: "{cursorSize}.options.controlValues.cursorSize",
                    sliderOptions: "{cursorSize}.options.sliderOptions"
                }
            }
        },
        protoTree: {
            cursorSizeLabel: {messagekey: "cursorSizeLabel"}
        },
        sliderOptions: {
            orientation: "horizontal",
            step: 0.2,
            range: "min"
        }
    });

    fluid.defaults("gpii.adjuster.cursorSize.preview", {
        gradeNames: ["gpii.adjuster.preview", "autoInit"],
        previewURL: "",
        previewEnactors: {
            cursorSize: {
                type: "gpii.enactor.cursorSize",
                container: "{enhancer}.container",
                options: {
                    gradeNames: ["gpii.enactors.previewConnections"]
                }
            }
        }
    });

})(jQuery, fluid);
