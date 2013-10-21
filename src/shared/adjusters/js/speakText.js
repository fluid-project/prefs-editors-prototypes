/*!
Cloud4all Preferences Management Tools

Copyright 2013 Astea

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/


(function ($, fluid) {
    fluid.defaults("gpii.speakText", {
        gradeNames: ["fluid.uiOptions.fullNoPreview", "autoInit"],
        uiOptions: {
            partiallyExpandedSlideSpeed: 500,
            fullyExpandedSlideSpeed: 600,
            model: {
                partialAdjustersVisibility: false,
                extraAdjustersVisibility: false
            },
            events: {
                onToggleSpeakTextAdjusters: null,
                onShowAdjusters: null,
                onHidePartialAdjusters: null,
                onHideAllAdjusters: null,
                onToggleSpeakTextExtraAdjusters: null,
                onShowExtraAdjuster: null,
                onHideExtraAdjuster: null,
                onHideSpeakTextTickIcon: null
            },
            listeners: {
                "onReady.setATTRaddToMyPreferencesStar": {
                    "this": "{that}.dom.addToMyPreferencesStar",
                    "method": "attr",
                    "args": [{
                        "tooltip-checked": "{that}.options.strings.tooltipChecked",
                        "tooltip-unchecked": "{that}.options.strings.tooltipUnchecked"
                    }]
                },
                "onHideSpeakTextTickIcon.hideTick": {
                    "this": "{that}.dom.speakTextTickIcon",
                    "method": "hide"
                },
                "onReady.hideWhiteTickIcon": {
                    "listener": "{that}.hideWhiteTickIcon"
                },
                "onReady.bindEventPreferenceSwitchSpeakText": {
                    "this": "{that}.dom.preferencesSwitchSpeakText",
                    "method": "change",
                    "args": ["{that}.updateModelValue"]
                },
                "onCreate.addPartialVisibilityListener": {
                    "listener": "{that}.applier.modelChanged.addListener",
                    "args": ["partialAdjustersVisibility", "{that}.showHidePartial"]
                },
                "onCreate.addExtraVisibilityListener": {
                    "listener": "{that}.applier.modelChanged.addListener",
                    "args": ["extraAdjustersVisibility", "{that}.showHideExtra"]
                },
                "onReady.setTextSpeakTextHeader": {
                    "this": "{that}.dom.speakTextHeader",
                    "method": "text",
                    "args": ["{that}.options.strings.speakTextHeader"]
                },
                "onReady.setTextMoreText": {
                    "this": "{that}.dom.moreLess",
                    "method": "text",
                    "args": ["{that}.options.strings.moreText"]
                },
                "onReady.bindEventMoreLess": {
                    "this": "{that}.dom.moreLess",
                    "method": "click",
                    "args": ["{that}.updateExtraModelValue"]
                },
                "onShowAdjusters.showPartialAdjusters": {
                    "this": "{that}.dom.speakTextPartialAdjusters",
                    "method": "slideDown",
                    "args": ["{that}.options.partiallyExpandedSlideSpeed"]
                },
                "onShowAdjusters.showWhiteTickIcon": {
                    "this": "{that}.dom.speakTextTickIcon",
                    "method": "show"
                },
                "onShowAdjusters.setHeaderTextBold.addBoldClass": {
                    "this": "{that}.dom.speakTextHeader",
                    "method": "addClass",
                    "args": ["{that}.options.styles.boldText"]
                },
                "onShowAdjusters.setHeaderTextBold.removeNormalClass": {
                    "this": "{that}.dom.speakTextHeader",
                    "method": "removeClass",
                    "args": ["{that}.options.styles.normalText"]
                },
                "onShowAdjusters.setTextMoreText": {
                    "this": "{that}.dom.moreLess",
                    "method": "text",
                    "args": ["{that}.options.strings.moreText"]
                },
                "onHidePartialAdjusters.hideAdjusters": {
                    "this": "{that}.dom.speakTextPartialAdjusters",
                    "method": "slideUp",
                    "args": ["{that}.options.partiallyExpandedSlideSpeed"]
                },
                "onHidePartialAdjusters.setHeaderTextNormal.addNormalClass": {
                    "this": "{that}.dom.speakTextHeader",
                    "method": "addClass",
                    "args": ["{that}.options.styles.normalText"]
                },
                "onHidePartialAdjusters.setHeaderTextNormal.removeBoldClass": {
                    "this": "{that}.dom.speakTextHeader",
                    "method": "removeClass",
                    "args": ["{that}.options.styles.boldText"]
                },
                "onHidePartialAdjusters.hideTick": {
                    "listener": "{that}.hideWhiteTickIcon"
                },
                "onHideAllAdjusters.hideExtra": {
                    "this": "{that}.dom.speakTextExtraAdjusters",
                    "method": "slideUp",
                    "args": ["{that}.options.partiallyExpandedSlideSpeed"]
                },
                "onHideAllAdjusters.setHeaderTextNormal.addNormalClass": {
                    "this": "{that}.dom.speakTextHeader",
                    "method": "addClass",
                    "args": ["{that}.options.styles.normalText"]
                },
                "onHideAllAdjusters.setHeaderTextNormal.removeBoldClass": {
                    "this": "{that}.dom.speakTextHeader",
                    "method": "removeClass",
                    "args": ["{that}.options.styles.boldText"]
                },
                "onHideAllAdjusters.hideTick": {
                    "listener": "{that}.hideWhiteTickIcon"
                },
                "onShowExtraAdjuster.show": {
                    "this": "{that}.dom.speakTextExtraAdjusters",
                    "method": "slideToggle",
                    "args": ["{that}.options.fullyExpandedSlideSpeed"]
                },
                "onHideExtraAdjuster.hide": {
                    "this": "{that}.dom.speakTextExtraAdjusters",
                    "method": "slideToggle",
                    "args": ["{that}.options.fullyExpandedSlideSpeed"]
                },
                "onShowExtraAdjuster.setLessText": {
                    "this": "{that}.dom.moreLess",
                    "method": "text",
                    "args": ["{that}.options.strings.lessText"]
                },
                "onHideExtraAdjuster.setMoreText": {
                    "this": "{that}.dom.moreLess",
                    "method": "text",
                    "args": ["{that}.options.strings.moreText"]
                }
            },
            invokers: {
                updateModelValue: {
                    "funcName": "gpii.speakText.updateModelHeaderClicked",
                    "args": ["{that}",
                             "{that}.model.partialAdjustersVisibility",
                             "{that}.model.extraAdjustersVisibility"
                    ]
                },
                updateExtraModelValue: {
                    "funcName": "gpii.speakText.updateModelMoreLessClicked",
                    "args": ["{that}",
                             "{that}.model.extraAdjustersVisibility"
                    ]
                },
                showHidePartial: {
                    "funcName": "gpii.speakText.showHidePartial",
                    "args": ["{that}.model.partialAdjustersVisibility",
                             "{that}.events.onShowAdjusters.fire",
                             "{that}.events.onHidePartialAdjusters.fire",
                             "{that}.events.onHideAllAdjusters.fire"
                    ]
                },
                showHideExtra: {
                    "funcName": "gpii.speakText.showHideExtra",
                    "args": ["{that}.model.extraAdjustersVisibility",
                             "{that}.events.onShowExtraAdjuster.fire",
                             "{that}.events.onHideExtraAdjuster.fire"
                    ]
                },
                toggleSpeakTextExtraAdjusters: {
                    "funcName": "gpii.speakText.toggleSpeakTextExtraAdjusters",
                    "args": [
                        "{that}",
                        "{that}.events.onShowExtraAdjuster.fire",
                        "{that}.events.onHideExtraAdjuster.fire"
                    ]
                },
                hideWhiteTickIcon: {
                    "funcName": "gpii.speakText.fireHideEvent",
                    "args": ["{that}.events.onHideSpeakTextTickIcon.fire"]
                }
            },
            selectors: {
                addToMyPreferencesStar: ".addToMyPreferencesLabel",
                preferencesSwitchSpeakText: "#presetButton",
                speakTextPartialAdjusters: ".partially-expanded",
                moreLess: ".more-options-label",
                speakTextExtraAdjusters: ".fully-expanded",
                speakTextHeader: ".gpii-speakTextPresetButton-label",
                speakTextTickIcon: ".white-tick-icon"
            },
            strings: {
                speakTextHeader: {
                    expander: {
                        func: "gpii.speakText.lookupMsg",
                        args: ["{uiOptionsLoader}.msgBundle", "speakTextPresetButtonLabel"]
                    }
                },
                moreText: {
                    expander: {
                        func: "gpii.speakText.lookupMsg",
                        args: ["{uiOptionsLoader}.msgBundle", "moreText"]
                    }
                },
                lessText: {
                    expander: {
                        func: "gpii.speakText.lookupMsg",
                        args: ["{uiOptionsLoader}.msgBundle", "lessText"]
                    }
                },
                tooltipChecked: {
                    expander: {
                        func: "gpii.speakText.lookupMsg",
                        args: ["{uiOptionsLoader}.msgBundle", "tooltipChecked"]
                    }
                },
                tooltipUnchecked: {
                    expander: {
                        func: "gpii.speakText.lookupMsg",
                        args: ["{uiOptionsLoader}.msgBundle", "tooltipUnchecked"]
                    }
                }
            },
            styles: {
                boldText: "bold-font-weight",
                normalText: "normal-font-weight"
            }
        }
    });

    gpii.speakText.updateModelHeaderClicked = function (that, partialVisible, extraVisible) {
        if (extraVisible) {
            that.applier.requestChange("partialAdjustersVisibility", false);
            that.applier.requestChange("extraAdjustersVisibility", false);
        } else if (partialVisible && !extraVisible) {
            that.applier.requestChange("partialAdjustersVisibility", false);
        } else {
            that.applier.requestChange("partialAdjustersVisibility", true);
        }
    };

    gpii.speakText.updateModelMoreLessClicked = function (that, extraVisible) {
        that.applier.requestChange("extraAdjustersVisibility", !extraVisible);
    };

    gpii.speakText.showHidePartial = function (state, showEvent, hidePartialEvent, hideExtraEvent) {
        if (state) {
            showEvent();
        } else {
            hidePartialEvent();
        }
    };

    gpii.speakText.showHideExtra = function (state, showEvent, hideEvent) {
        if (state)
            showEvent();
        else
            hideEvent();
    };

    gpii.speakText.fireHideEvent = function (hideEvent) {
        hideEvent();
    };

    gpii.speakText.lookupMsg = function (messageResolver, value) {
        var looked = messageResolver.lookup([value]);
        return looked ? looked.template : looked;
    };

})(jQuery, fluid);
