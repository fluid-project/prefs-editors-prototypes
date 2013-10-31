/*!
Cloud4all Preferences Management Tools

Copyright 2013 Astea

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

(function (fluid) {
    
    gpii.speakText.arrayMergePolicy = function (target, source) {
        target = fluid.makeArray(target);
        source = fluid.makeArray(source);
        fluid.each(source, function (selector) {
            if ($.inArray(selector, target) < 0) {
                target.push(selector);
            }
        });
        return target;
    };

    fluid.defaults("speakText.panel.screenReaderTTSEnabled", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.screenReaderTTSEnabled": {
                "model.screenReaderTTSEnabled": "default"
            }
        },
        selectors: {
            screenReaderTTSEnabled: ".gpiic-speakText-screenReaderTTSEnabled",
            screenReaderTTSEnabledLabel: ".gpiic-speakText-screenReaderTTSEnabled-label"
        }
    });

    fluid.defaults("speakText.panel.speechRate", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.speechRate": {
                "model.value": "default", /* WARNING
                A temporary solution is to store "default" in model.VALUE
                With the separation into smaller components this actually
                won't be an issue */
                "controlValues.speechRate.min": "minimum",
                "controlValues.speechRate.step": "divisibleBy"
            }
        },
        selectors: {
            speechRate: ".gpiic-speakText-speechRate",
            speechRateLabel: ".gpiic-speakText-speechRate-label",
            speechRateMinus: ".gpiic-speakText-speechRate-minus",
            speechRatePlus: ".gpiic-speakText-speechRate-plus"
        }
    });

    fluid.defaults("speakText.panel.volume", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.volume": {
                "model.value2": "default",
                "controlValues.volume.min": "minimum",
                "controlValues.volume.step": "divisibleBy"
            }
        },
        selectors: {
            volume: ".gpiic-speakText-volume",
            volumeLabel: ".gpiic-speakText-volume-label",
            volumeMinus: ".gpiic-speakText-volume-minus",
            volumePlus: ".gpiic-speakText-volume-plus"
        }
    });

    fluid.defaults("speakText.panel.auditoryOutLanguage", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.auditoryOutLanguage": {
                "model.auditoryOutLanguage": "default",
                "controlValues.auditoryOutLanguage": "enum"
            }
        },
        selectors: {
            auditoryOutLanguage: ".gpiic-speakText-auditoryOutLanguage",
            auditoryOutLanguageLabel: ".gpiic-speakText-auditoryOutLanguage-label"
        }
    });

    fluid.defaults("speakText.panel.punctuationVerbosity", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        mergePolicy: {
            repeatingSelectors: gpii.speakText.arrayMergePolicy
        },
        preferenceMap: {
            "gpii.primarySchema.punctuationVerbosity": {
                "model.punctuationVerbosity": "default",
                "controlValues.punctuationVerbosity": "enum"
            }
        },
        selectors: {
            punctuationVerbosityRow: ".gpiic-speakText-punctuationVerbosity-row",
            punctuationVerbosityOptionLabel: ".gpiic-speakText-punctuationVerbosity-option-label",
            punctuationVerbosityInput: ".gpiic-speakText-punctuationVerbosity",
            punctuationVerbosityLabel: ".gpiic-speakText-punctuationVerbosity-label"
        },
        repeatingSelectors: ["punctuationVerbosityRow"],
        listeners: {
            afterRender: "{that}.style"
        },
        invokers: {
            style: {
                funcName: "speakText.panel.punctuationVerbosity.punctuationVerbosityStyle",
                args: [
                    "{that}.dom.punctuationVerbosityOptionLabel",
                    "{that}.options.controlValues.punctuationVerbosity",
                    "{that}.options.classnameMap.punctuationVerbosity"
                ]
            }
        }
    });

    speakText.panel.punctuationVerbosity.punctuationVerbosityStyle = function (labels, values, classes) {
        fluid.each(labels, function (label, index) {
            $(label).addClass(classes[values[index]]);
            $(label).append('<span></span>');
        });
    };

    fluid.defaults("speakText.panel.announceCapitals", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.announceCapitals": {
                "model.announceCapitals": "default"
            }
        },
        selectors: {
            announceCapitals: ".gpiic-speakText-announceCapitals",
            announceCapitalsLabel: ".gpiic-speakText-announceCapitals-label"
        }
    });

    fluid.defaults("speakText.panel.speakTutorialMessages", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.speakTutorialMessages": {
                "model.speakTutorialMessages": "default"
            }
        },
        selectors: {
            speakTutorialMessages: ".gpiic-speakText-speakTutorialMessages",
            speakTutorialMessagesLabel: ".gpiic-speakText-speakTutorialMessages-label"
        }
    });

    fluid.defaults("speakText.panel.keyEcho", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.keyEcho": {
                "model.keyEcho": "default"
            }
        },
        selectors: {
            keyEcho: ".gpiic-speakText-keyEcho",
            keyEchoLabel: ".gpiic-speakText-keyEcho-label"
        }
    });

    fluid.defaults("speakText.panel.wordEcho", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.wordEcho": {
                "model.wordEcho": "default"
            }
        },
        selectors: {
            wordEcho: ".gpiic-speakText-wordEcho",
            wordEchoLabel: ".gpiic-speakText-wordEcho-label"
        }
    });

    fluid.defaults("speakText.panel.screenReaderBrailleOutput", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.screenReaderBrailleOutput": {
                "model.screenReaderBrailleOutput": "default"
            }
        },
        selectors: {
            screenReaderBrailleOutput: ".gpiic-speakText-screenReaderBrailleOutput",
            screenReaderBrailleOutputLabel: ".gpiic-speakText-screenReaderBrailleOutput-label",
            screenReaderBrailleOutputDescription: ".gpiic-speakText-screenReaderBrailleOutput-description"
        },
        protoTree: {
            screenReaderBrailleOutput: "${screenReaderBrailleOutput}",
            screenReaderBrailleOutputLabel: {messagekey: "screenReaderBrailleOutputLabel"},
            screenReaderBrailleOutputDescription: {messagekey: "screenReaderBrailleOutputDescription"}
        }
    });

})(fluid);
