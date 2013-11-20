/*!
Cloud4all Preferences Management Tools

Copyright 2013 Astea

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

(function (fluid) {    
    gpii.arrayMergePolicy = function (target, source) {
        target = fluid.makeArray(target);
        source = fluid.makeArray(source);
        fluid.each(source, function (selector) {
            if ($.inArray(selector, target) < 0) {
                target.push(selector);
            }
        });
        return target;
    };

    fluid.defaults("gpii.panel.speakText", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.speakText": {
                "model.speakText": "default"
            }
        },
        selectors: {
            speakText: ".gpiic-speakText",
            speakTextLabel: ".gpiic-speakText-label"
        },
        protoTree: {
            speakText: "${speakText}",
            speakTextLabel: {messagekey: "speakTextLabel"}
        }
    });

    fluid.defaults("gpii.panel.wordsSpokenPerMinute", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.wordsSpokenPerMinute": {
                "model.value": "default", /* WARNING
                A temporary solution is to store "default" in model.VALUE
                With the separation into smaller components this actually
                won't be an issue */
                "controlValues.wordsSpokenPerMinute.min": "minimum",
                "controlValues.wordsSpokenPerMinute.step": "divisibleBy"
            }
        },
        selectors: {
            wordsSpokenPerMinute: ".gpiic-wordsSpokenPerMinute",
            wordsSpokenPerMinuteLabel: ".gpiic-wordsSpokenPerMinute-label",
            wordsSpokenPerMinuteMinus: ".gpiic-wordsSpokenPerMinute-minus",
            wordsSpokenPerMinutePlus: ".gpiic-wordsSpokenPerMinute-plus"
        },
        protoTree: {
            preferencesSwitchSpeakText: {messagekey: "speakTextPresetButtonLabel"},

            wordsSpokenPerMinute: {
                decorators: {
                    type: "fluid",
                    func: "gpii.textfieldStepper",
                    options: {
                        sourceApplier: "{that}.applier",
                        rules: {
                            "value": "value"
                        },
                        model: {
                            value: "{that}.model.value"
                        },
                        range: "{that}.options.controlValues.wordsSpokenPerMinute"
                    }
                }
            },
            wordsSpokenPerMinuteLabel: {messagekey: "wordsSpokenPerMinuteLabel"},
            wordsSpokenPerMinuteMinus: {messagekey: "stepperMinus"},
            wordsSpokenPerMinutePlus: {messagekey: "stepperPlus"}
        }
    });

    fluid.defaults("gpii.panel.volume", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.volume": {
                "model.value": "default",
                "controlValues.volume.min": "minimum",
                "controlValues.volume.step": "divisibleBy"
            }
        },
        selectors: {
            volume: ".gpiic-volume",
            volumeLabel: ".gpiic-volume-label",
            volumeMinus: ".gpiic-volume-minus",
            volumePlus: ".gpiic-volume-plus"
        },
        protoTree: {
            volume: {
                decorators: {
                    type: "fluid",
                    func: "gpii.textfieldStepper",
                    options: {
                        sourceApplier: "{that}.applier",
                        rules: {
                            "value": "value"
                        },
                        model: {
                            value: "{that}.model.value"
                        },
                        range: "{that}.options.controlValues.volume"
                    }
                }
            },
            volumeLabel: {messagekey: "volumeLabel"},
            volumeMinus: {messagekey: "stepperMinus"},
            volumePlus: {messagekey: "stepperPlus"}
        }
    });

    fluid.defaults("gpii.panel.voicePitch", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.voicePitch": {
                "model.value": "default",
                "controlValues.voicePitch.min": "minimum",
                "controlValues.voicePitch.step": "divisibleBy"
            }
        },
        selectors: {
            voicePitch: ".gpiic-voicePitch",
            voicePitchLabel: ".gpiic-voicePitch-label",
            voicePitchMinus: ".gpiic-voicePitch-minus",
            voicePitchPlus: ".gpiic-voicePitch-plus"
        },
        protoTree: {
            voicePitch: {
                decorators: {
                    type: "fluid",
                    func: "gpii.textfieldStepper",
                    options: {
                        sourceApplier: "{that}.applier",
                        rules: {
                            "value": "value"
                        },
                        model: {
                            value: "{that}.model.value"
                        },
                        range: "{that}.options.controlValues.voicePitch"
                    }
                }
            },
            voicePitchLabel: {messagekey: "voicePitchLabel"},
            voicePitchMinus: {messagekey: "stepperMinus"},
            voicePitchPlus: {messagekey: "stepperPlus"}
        }
    });

    fluid.defaults("gpii.panel.universalVolume", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.universalVolume": {
                "model.value": "default",
                "controlValues.universalVolume.min": "minimum",
                "controlValues.universalVolume.step": "divisibleBy"
            }
        },
        selectors: {
            universalVolume: ".gpiic-universalVolume",
            universalVolumeLabel: ".gpiic-universalVolume-label",
            universalVolumeMinus: ".gpiic-universalVolume-minus",
            universalVolumePlus: ".gpiic-universalVolume-plus",
            universalVolumeDescription: ".gpiic-universalVolume-description"
        },
        protoTree: {
            universalVolume: {
                decorators: {
                    type: "fluid",
                    func: "gpii.textfieldStepper",
                    options: {
                        sourceApplier: "{that}.applier",
                        rules: {
                            "value": "value"
                        },
                        model: {
                            value: "{that}.model.value"
                        },
                        range: "{that}.options.controlValues.universalVolume"
                    }
                }
            },
            universalVolumeLabel: {messagekey: "universalVolumeLabel"},
            universalVolumeMinus: {messagekey: "stepperMinus"},
            universalVolumePlus: {messagekey: "stepperPlus"},
            universalVolumeDescription: {messagekey: "universalVolumeDescription"}  
        }
    });

    fluid.defaults("gpii.panel.universalLanguage", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.universalLanguage": {
                "model.universalLanguage": "default",
                "controlValues.universalLanguage": "enum"
            }
        },
        selectors: {
            universalLanguage: ".gpiic-universalLanguage",
            universalLanguageLabel: ".gpiic-universalLanguage-label"
        },
        protoTree: {
            universalLanguage: {
                selection: "${universalLanguage}",
                optionlist: "${{that}.options.controlValues.universalLanguage}"
            },
            universalLanguageLabel: {messagekey: "universalLanguageLabel"}
        }
    });

    fluid.defaults("gpii.panel.screenReaderLanguage", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.screenReaderLanguage": {
                "model.screenReaderLanguage": "default",
                "controlValues.screenReaderLanguage": "enum"
            }
        },
        selectors: {
            screenReaderLanguage: ".gpiic-screenReaderLanguage",
            screenReaderLanguageLabel: ".gpiic-screenReaderLanguage-label"
        },
        protoTree: {
            screenReaderLanguage: {
                selection: "${screenReaderLanguage}",
                optionlist: "${{that}.options.controlValues.screenReaderLanguage}"
            },
            screenReaderLanguageLabel: {messagekey: "screenReaderLanguageLabel"}
        }
    });

    fluid.defaults("gpii.panel.textHighlighting", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.textHighlighting": {
                "model.textHighlighting": "default",
                "controlValues.textHighlighting": "enum"
            }
        },
        selectors: {
            textHighlighting: ".gpiic-textHighlighting",
            textHighlightingLabel: ".gpiic-textHighlighting-label"
        },
        protoTree: {
            textHighlighting: {
                selection: "${textHighlighting}",
                optionlist: "${{that}.options.controlValues.textHighlighting}"
            },
            textHighlightingLabel: {messagekey: "textHighlightingLabel"}
        }
    });

    fluid.defaults("gpii.panel.punctuationVerbosity", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        mergePolicy: {
            repeatingSelectors: gpii.arrayMergePolicy
        },
        preferenceMap: {
            "gpii.primarySchema.punctuationVerbosity": {
                "model.punctuationVerbosity": "default",
                "controlValues.punctuationVerbosity": "enum"
            }
        },
        selectors: {
            punctuationVerbosityRow: ".gpiic-punctuationVerbosity-row",
            punctuationVerbosityOptionLabel: ".gpiic-punctuationVerbosity-option-label",
            punctuationVerbosityInput: ".gpiic-punctuationVerbosity",
            punctuationVerbosityLabel: ".gpiic-punctuationVerbosity-label"
        },
        repeatingSelectors: ["punctuationVerbosityRow"],
        listeners: {
            afterRender: "{that}.style"
        },
        invokers: {
            style: {
                funcName: "gpii.panel.punctuationVerbosity.punctuationVerbosityStyle",
                args: [
                    "{that}.dom.punctuationVerbosityOptionLabel",
                    "{that}.options.controlValues.punctuationVerbosity",
                    "{that}.options.classnameMap.punctuationVerbosity"
                ],
                "dynamic": true
            }
        },
        protoTree: {
            expander: {
                type: "fluid.renderer.selection.inputs",
                rowID: "punctuationVerbosityRow",
                labelID: "punctuationVerbosityOptionLabel",
                inputID: "punctuationVerbosityInput",
                selectID: "punctuationVerbosity-selection",
                tree: {
                    optionnames: "${{that}.options.controlValues.punctuationVerbosity}",
                    optionlist: "${{that}.options.controlValues.punctuationVerbosity}",
                    selection: "${punctuationVerbosity}"
                }
            },
            punctuationVerbosityLabel: {messagekey: "punctuationVerbosityLabel"},
            punctuationVerbosityDescription: {messagekey: "punctuationVerbosityDescription"}
        }

    });

    gpii.panel.punctuationVerbosity.punctuationVerbosityStyle = function (labels, values, classes) {
        fluid.each(labels, function (label, index) {
            $(label).addClass(classes[values[index]]);
            $(label).append('<span></span>');
        });
    };

    fluid.defaults("gpii.panel.announceCapitals", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.announceCapitals": {
                "model.announceCapitals": "default"
            }
        },
        selectors: {
            announceCapitals: ".gpiic-announceCapitals",
            announceCapitalsLabel: ".gpiic-announceCapitals-label"
        },
        protoTree: {
            announceCapitals: "${announceCapitals}",
            announceCapitalsLabel: {messagekey: "announceCapitalsLabel"}
        }
    });

    fluid.defaults("gpii.panel.speakTutorialMessages", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.speakTutorialMessages": {
                "model.speakTutorialMessages": "default"
            }
        },
        selectors: {
            speakTutorialMessages: ".gpiic-speakTutorialMessages",
            speakTutorialMessagesLabel: ".gpiic-speakTutorialMessages-label"
        },
        protoTree: {
            speakTutorialMessages: "${speakTutorialMessages}",
            speakTutorialMessagesLabel: {messagekey: "speakTutorialMessagesLabel"}
        }
    });

    fluid.defaults("gpii.panel.keyEcho", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.keyEcho": {
                "model.keyEcho": "default"
            }
        },
        selectors: {
            keyEcho: ".gpiic-keyEcho",
            keyEchoLabel: ".gpiic-keyEcho-label"
        },
        protoTree: {
            keyEcho: "${keyEcho}",
            keyEchoLabel: {messagekey: "keyEchoLabel"}
        }
    });

    fluid.defaults("gpii.panel.wordEcho", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.wordEcho": {
                "model.wordEcho": "default"
            }
        },
        selectors: {
            wordEcho: ".gpiic-wordEcho",
            wordEchoLabel: ".gpiic-wordEcho-label"
        },
        protoTree: {
            wordEcho: "${wordEcho}",
            wordEchoLabel: {messagekey: "wordEchoLabel"}
        }
    });

    fluid.defaults("gpii.panel.screenReaderBrailleOutput", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.screenReaderBrailleOutput": {
                "model.screenReaderBrailleOutput": "default"
            }
        },
        selectors: {
            screenReaderBrailleOutput: ".gpiic-screenReaderBrailleOutput",
            screenReaderBrailleOutputLabel: ".gpiic-screenReaderBrailleOutput-label",
            screenReaderBrailleOutputDescription: ".gpiic-screenReaderBrailleOutput-description"
        },
        protoTree: {
            screenReaderBrailleOutput: "${screenReaderBrailleOutput}",
            screenReaderBrailleOutputLabel: {messagekey: "screenReaderBrailleOutputLabel"},
            screenReaderBrailleOutputDescription: {messagekey: "screenReaderBrailleOutputDescription"}
        }
    });


})(fluid);
