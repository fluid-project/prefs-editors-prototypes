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
    
    fluid.defaults("gpii.adjuster.contrast", {
        gradeNames: ["fluid.prefs.panel", "gpii.pmt.previewPerSettingEnhanced", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.highContrast": {
                "model.contrast": "default"
            }
        },
        events: {
            onToggleContrastAdjusters: null
        },
        listeners: {
            "afterRender.bindEventPreferenceSwitchContrast": {
                "this": "{that}.dom.valueCheckbox",
                "method": "change",
                "args": ["{that}.events.onToggleContrastAdjusters.fire"]
            },
            "onToggleContrastAdjusters.showHide": {
                "this": "{that}.dom.contrastAdjusters",
                "method": "slideToggle"
            },
            "afterRender.setContrastAdjusters": {
                listener: "gpii.adjuster.contrast.setContrastAdjusters",
                args: ["{that}.dom.contrastAdjusters", "{that}.model.contrast"]
            },
            "afterRender.setATTRaddToMyPreferencesLabel": {
                "this": "{that}.dom.addToMyPreferencesLabel",
                "method": "attr",
                "args": [{
                    "tooltip-checked": "{that}.options.strings.tooltipChecked",
                    "tooltip-unchecked": "{that}.options.strings.tooltipUnchecked"
                }]
            }
        },
        selectors: {
            valueCheckbox: ".gpiic-contrast-constrastInput",
            headingLabel: ".gpiic-contrast-contrastLabel",
            panelLabel: ".gpiic-headerTitle",
            addToMyPreferencesLabel: ".gpiic-addToMyPreferencesLabel",
            contrastAdjusters: ".gpiic-category",
            contrastPreview: ".gpiic-contrast-previewPerSettingFrameContrast"
        },
        selectorsToIgnore: ["contrastAdjusters", "addToMyPreferencesLabel", "contrastPreview"],
        protoTree: {
            valueCheckbox: "${contrast}",
            headingLabel: {messagekey: "contrast"},
            panelLabel: {messagekey: "addContrast"}
        },
        members: {
            messageResolver: "{prefsEditorLoader}.msgBundle"
        },
        strings: {
            tooltipChecked: "{that}.stringBundle.tooltipChecked",
            tooltipUnchecked: "{that}.stringBundle.tooltipUnchecked"
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
    
    gpii.adjuster.contrast.setContrastAdjusters = function (contrastAdjuster, flag) {
        contrastAdjuster[flag ? "show" : "hide"]();
    };
})(jQuery, fluid);
