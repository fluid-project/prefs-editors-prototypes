(function ($, fluid) {
    fluid.defaults("gpii.speakText", {
        gradeNames: ["fluid.uiOptions.fullNoPreview", "autoInit"],
        uiOptions: {
            partiallyExpandedSlideSpeed: 500,
            fullyExpandedSlideSpeed: 600,
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
                         "tooltip-unchecked": "{that}.options.strings.tooltipUnchecked",
                     }]
                },
                "onHideSpeakTextTickIcon": {
                    "this": "{that}.dom.speakTextTickIcon",
                    "method": "hide"
                },
                "onReady.hideWhiteTickIcon": {
                    "listener": "{that}.hideWhiteTickIcon"
                },
                "onReady.bindEventPreferenceSwitchSpeakText": {
                    "this": "{that}.dom.preferencesSwitchSpeakText",
                    "method": "change",
                    "args": ["{that}.events.onToggleSpeakTextAdjusters.fire"]
                },
                "onToggleSpeakTextAdjusters.toggleSpeakTextAdjusters": {
                    "listener": "{that}.toggleSpeakTextAdjusters"
                },
                "onReady.setTextSpeakTextHeader": {
                    "this": "{that}.dom.speakTextHeader",
                    "method": "text",
                    "args": ["{that}.options.strings.speakTextHeader"]
                },
                "onReady.setTextMoreLess": {
                     "this": "{that}.dom.moreLess",
                     "method": "text",
                     "args": ["{that}.options.strings.moreText"]
                },
                "onReady.bindEventMoreLess": {
                    "this": "{that}.dom.moreLess",
                    "method": "click",
                    "args": ["{that}.events.onToggleSpeakTextExtraAdjusters.fire"]
                },
                "onToggleSpeakTextExtraAdjusters.toggleSpeakTextExtraAdjusters": {
                    "listener": "{that}.toggleSpeakTextExtraAdjusters"
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
                "onHidePartialAdjusters.hideAdjusters": {
                    "this": "{that}.dom.speakTextPartialAdjusters",
                    "method": "slideUp",
                    "args": ["{that}.options.partiallyExpandedSlideSpeed"]
                },
                "onHidePartialAdjusters.hideTick": {
                    "listener": "{that}.hideWhiteTickIcon"
                },
                "onHideAllAdjusters.hidePartial": {
                    "this": "{that}.dom.speakTextPartialAdjusters",
                    "method": "slideUp",
                    "args": ["{that}.options.partiallyExpandedSlideSpeed"]
                },
                "onHideAllAdjusters.hideExtra": {
                    "this": "{that}.dom.speakTextExtraAdjusters",
                    "method": "slideUp",
                    "args": ["{that}.options.partiallyExpandedSlideSpeed"]
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
                toggleSpeakTextAdjusters: {
                    "funcName": "gpii.speakText.toggleSpeakTextAdjusters",
                    "args": [
                        "{that}.dom.speakTextPartialAdjusters",
                        "{that}.dom.speakTextExtraAdjusters",
                        "{that}.events.onShowAdjusters.fire",
                        "{that}.events.onHidePartialAdjusters.fire",
                        "{that}.events.onHideAllAdjusters.fire"
                    ]
                },
                toggleSpeakTextExtraAdjusters: {
                    "funcName": "gpii.speakText.toggleSpeakTextExtraAdjusters",
                     "args": [
                         "{that}.dom.speakTextExtraAdjusters",
                         "{that}.events.onShowExtraAdjuster.fire",
                         "{that}.events.onHideExtraAdjuster.fire"
                     ]
                },
                hideWhiteTickIcon: {
                    "funcName": "gpii.speakText.hideWhiteTickIcon",
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
                speakTextTickIcon: ".white-tick-icon",
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
            }
        }
    });

    gpii.speakText.toggleSpeakTextAdjusters = function (partial, extra, showEvent, hidePartialEvent, hideAllEvent) {
        if (extra.is(":visible")) {
            hideAllEvent();
        } else if (partial.is(":visible")) {
            hidePartialEvent();
        } else {
            showEvent();
        }
    }

    gpii.speakText.toggleSpeakTextExtraAdjusters = function (elm, showEvent, hideEvent) {
        if (elm.is(":visible")) {
            hideEvent();
        } else {
            showEvent();
        }
    };

    gpii.speakText.hideWhiteTickIcon = function (hideEvent) {
        hideEvent();
    }

    gpii.speakText.lookupMsg = function (messageResolver, value) {
        var looked = messageResolver.lookup([value]);
        return looked ? looked.template : looked;
    };

})(jQuery, fluid);
