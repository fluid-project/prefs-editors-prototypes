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
            if($.inArray(selector, target) < 0) {
                target.push(selector);
            }
        });
        return target;
    };

    fluid.defaults("speakText.panels.screenReaderTTSEnabled", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        preferenceMap: {
            "screenReaderTTSEnabled": {
                "model.screenReaderTTSEnabled": "default"
            }
        },
        selectors: {
            screenReaderTTSEnabled: ".gpii-screenReaderTTSEnabled",
            screenReaderTTSEnabledLabel: ".gpii-screenReaderTTSEnabled-label"
        }
    });

    fluid.defaults("speakText.panels.speechRate", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        preferenceMap: {
            "speechRate": {
                "model.value": "default", /* WARNING
                A temporary solution is to store "default" in model.VALUE
                With the separation into smaller components this actually
                won't be an issue */
                "controlValues.speechRate.min": "minimum",
                "controlValues.speechRate.step": "divisibleBy"
            }
        },
        selectors: {
            speechRate: ".gpii-speechRate",
            speechRateLabel: ".gpii-speechRate-label",
            speechRateMinus: ".gpii-speechRate-minus",
            speechRatePlus: ".gpii-speechRate-plus"
        }
    });

    fluid.defaults("speakText.panels.auditoryOutLanguage", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        preferenceMap: {
            "auditoryOutLanguage": {
                "model.auditoryOutLanguage": "default",
                "controlValues.auditoryOutLanguage": "enum"
            }
        },
        selectors: {
            auditoryOutLanguage: ".gpii-auditoryOutLanguage",
            auditoryOutLanguageLabel: ".gpii-auditoryOutLanguage-label"
        }
    });

    fluid.defaults("speakText.panels.punctuationVerbosity", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        mergePolicy: {
            repeatingSelectors: gpii.speakText.arrayMergePolicy
        },
        preferenceMap: {
            "punctuationVerbosity": {
                "model.punctuationVerbosity": "default",
                "controlValues.punctuationVerbosity": "enum"
            }
        },
        selectors: {
            punctuationVerbosityRow: ".gpii-punctuationVerbosity-row",
            punctuationVerbosityOptionLabel: ".gpii-punctuationVerbosity-option-label",
            punctuationVerbosityInput: ".gpii-punctuationVerbosity",
            punctuationVerbosityLabel: ".gpii-punctuationVerbosity-label"
        },
        repeatingSelectors: ["punctuationVerbosityRow"],
        listeners: {
            afterRender: "{that}.style"
        },
        invokers: {
            style: {
                funcName: "speakText.panels.punctuationVerbosity.punctuationVerbosityStyle",
                args: [
                    "{that}.dom.punctuationVerbosityOptionLabel",
                    "{that}.options.controlValues.punctuationVerbosity",
                    "{that}.options.classnameMap.punctuationVerbosity"
                ]
            }
        }
    });

    speakText.panels.punctuationVerbosity.punctuationVerbosityStyle = function (labels, values, classes) {
        fluid.each(labels, function (label, index) {
            $(label).addClass(classes[values[index]]);
            $(label).append('<span></span>');
        });
    };


    fluid.defaults("speakText.panels.announceCapitals", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        preferenceMap: {
            "announceCapitals": {
                "model.announceCapitals": "default"
            }
        },
        selectors: {
            announceCapitals: ".gpii-announceCapitals",
            announceCapitalsLabel: ".gpii-announceCapitals-label"
        }
    });

    fluid.defaults("speakText.panels.speakTutorialMessages", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        preferenceMap: {
            "speakTutorialMessages": {
                "model.speakTutorialMessages": "default"
            }
        },
        selectors: {
            speakTutorialMessages: ".gpii-speakTutorialMessages",
            speakTutorialMessagesLabel: ".gpii-speakTutorialMessages-label"
        }
    });

    fluid.defaults("speakText.panels.keyEcho", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        preferenceMap: {
            "keyEcho": {
                "model.keyEcho": "default"
            }
        },
        selectors: {
            keyEcho: ".gpii-keyEcho",
            keyEchoLabel: ".gpii-keyEcho-label"
        }
    });

    fluid.defaults("speakText.panels.wordEcho", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        preferenceMap: {
            "wordEcho": {
                "model.wordEcho": "default"
            }
        },
        selectors: {
            wordEcho: ".gpii-wordEcho",
            wordEchoLabel: ".gpii-wordEcho-label"
        }
    });

    fluid.defaults("speakText.panels.screenReaderBrailleOutput", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        preferenceMap: {
            "screenReaderBrailleOutput": {
                "model.screenReaderBrailleOutput": "default"
            }
        },
        selectors: {
            screenReaderBrailleOutput: ".gpii-screenReaderBrailleOutput",
            screenReaderBrailleOutputLabel: ".gpii-screenReaderBrailleOutput-label",
            screenReaderBrailleOutputDescription: ".gpii-screenReaderBrailleOutput-description"
        },
        protoTree: {
            screenReaderBrailleOutput: "${screenReaderBrailleOutput}",
            screenReaderBrailleOutputLabel: {messagekey: "screenReaderBrailleOutputLabel"},
            screenReaderBrailleOutputDescription: {messagekey: "screenReaderBrailleOutputDescription"}
        }
    });

})(fluid);
