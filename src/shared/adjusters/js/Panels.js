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

    fluid.defaults("gpii.panelspeakText", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.speakText": {
                "model.speakText": "default"
            }
        },
        selectors: {
            speakText: ".gpiic-speakText-speakText",
            speakTextLabel: ".gpiic-speakText-speakText-label"
        },
        protoTree: {
            speakText: "${speakText}",
            speakTextLabel: {messagekey: "speakTextLabel"}
        }
    });

    fluid.defaults("gpii.panelwordsSpokenPerMinute", {
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
            wordsSpokenPerMinute: ".gpiic-speakText-wordsSpokenPerMinute",
            wordsSpokenPerMinuteLabel: ".gpiic-speakText-wordsSpokenPerMinute-label",
            wordsSpokenPerMinuteMinus: ".gpiic-speakText-wordsSpokenPerMinute-minus",
            wordsSpokenPerMinutePlus: ".gpiic-speakText-wordsSpokenPerMinute-plus"
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

    fluid.defaults("gpii.panelvolume", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.volume": {
                "model.value": "default",
                "controlValues.volume.min": "minimum",
                "controlValues.volume.step": "divisibleBy"
            }
        },
        selectors: {
            volume: ".gpiic-speakText-volume",
            volumeLabel: ".gpiic-speakText-volume-label",
            volumeMinus: ".gpiic-speakText-volume-minus",
            volumePlus: ".gpiic-speakText-volume-plus"
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

    fluid.defaults("gpii.panelvoicePitch", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.voicePitch": {
                "model.value": "default",
                "controlValues.voicePitch.min": "minimum",
                "controlValues.voicePitch.step": "divisibleBy"
            }
        },
        selectors: {
            voicePitch: ".gpiic-speakText-voicePitch",
            voicePitchLabel: ".gpiic-speakText-voicePitch-label",
            voicePitchMinus: ".gpiic-speakText-voicePitch-minus",
            voicePitchPlus: ".gpiic-speakText-voicePitch-plus"
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

    fluid.defaults("gpii.paneluniversalVolume", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.universalVolume": {
                "model.value": "default",
                "controlValues.universalVolume.min": "minimum",
                "controlValues.universalVolume.step": "divisibleBy"
            }
        },
        selectors: {
            universalVolume: ".gpiic-speakText-universalVolume",
            universalVolumeLabel: ".gpiic-speakText-universalVolume-label",
            universalVolumeMinus: ".gpiic-speakText-universalVolume-minus",
            universalVolumePlus: ".gpiic-speakText-universalVolume-plus",
            universalVolumeDescription: ".gpiic-speakText-universalVolume-description"
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

    fluid.defaults("gpii.paneluniversalLanguage", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.universalLanguage": {
                "model.universalLanguage": "default",
                "controlValues.universalLanguage": "enum"
            }
        },
        selectors: {
            universalLanguage: ".gpiic-speakText-universalLanguage",
            universalLanguageLabel: ".gpiic-speakText-universalLanguage-label"
        },
        protoTree: {
            universalLanguage: {
                selection: "${universalLanguage}",
                optionlist: "${{that}.options.controlValues.universalLanguage}"
            },
            universalLanguageLabel: {messagekey: "universalLanguageLabel"}
        }
    });

    fluid.defaults("gpii.panelscreenReaderLanguage", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.screenReaderLanguage": {
                "model.screenReaderLanguage": "default",
                "controlValues.screenReaderLanguage": "enum"
            }
        },
        selectors: {
            screenReaderLanguage: ".gpiic-speakText-screenReaderLanguage",
            screenReaderLanguageLabel: ".gpiic-speakText-screenReaderLanguage-label"
        },
        protoTree: {
            screenReaderLanguage: {
                selection: "${screenReaderLanguage}",
                optionlist: "${{that}.options.controlValues.screenReaderLanguage}"
            },
            screenReaderLanguageLabel: {messagekey: "screenReaderLanguageLabel"}
        }
    });

    fluid.defaults("gpii.paneltextHighlighting", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.textHighlighting": {
                "model.textHighlighting": "default",
                "controlValues.textHighlighting": "enum"
            }
        },
        selectors: {
            textHighlighting: ".gpiic-speakText-textHighlighting",
            textHighlightingLabel: ".gpiic-speakText-textHighlighting-label"
        },
        protoTree: {
            textHighlighting: {
                selection: "${textHighlighting}",
                optionlist: "${{that}.options.controlValues.textHighlighting}"
            },
            textHighlightingLabel: {messagekey: "textHighlightingLabel"}
        }
    });

    fluid.defaults("gpii.panelpunctuationVerbosity", {
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
                funcName: "gpii.panelpunctuationVerbosity.punctuationVerbosityStyle",
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

    gpii.panelpunctuationVerbosity.punctuationVerbosityStyle = function (labels, values, classes) {
        fluid.each(labels, function (label, index) {
            $(label).addClass(classes[values[index]]);
            $(label).append('<span></span>');
        });
    };

    fluid.defaults("gpii.panelannounceCapitals", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.announceCapitals": {
                "model.announceCapitals": "default"
            }
        },
        selectors: {
            announceCapitals: ".gpiic-speakText-announceCapitals",
            announceCapitalsLabel: ".gpiic-speakText-announceCapitals-label"
        },
        protoTree: {
            announceCapitals: "${announceCapitals}",
            announceCapitalsLabel: {messagekey: "announceCapitalsLabel"}
        }
    });

    fluid.defaults("gpii.panelspeakTutorialMessages", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.speakTutorialMessages": {
                "model.speakTutorialMessages": "default"
            }
        },
        selectors: {
            speakTutorialMessages: ".gpiic-speakText-speakTutorialMessages",
            speakTutorialMessagesLabel: ".gpiic-speakText-speakTutorialMessages-label"
        },
        protoTree: {
            speakTutorialMessages: "${speakTutorialMessages}",
            speakTutorialMessagesLabel: {messagekey: "speakTutorialMessagesLabel"}
        }
    });

    fluid.defaults("gpii.panelkeyEcho", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.keyEcho": {
                "model.keyEcho": "default"
            }
        },
        selectors: {
            keyEcho: ".gpiic-speakText-keyEcho",
            keyEchoLabel: ".gpiic-speakText-keyEcho-label"
        },
        protoTree: {
            keyEcho: "${keyEcho}",
            keyEchoLabel: {messagekey: "keyEchoLabel"}
        }
    });

    fluid.defaults("gpii.panelwordEcho", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.wordEcho": {
                "model.wordEcho": "default"
            }
        },
        selectors: {
            wordEcho: ".gpiic-speakText-wordEcho",
            wordEchoLabel: ".gpiic-speakText-wordEcho-label"
        },
        protoTree: {
            wordEcho: "${wordEcho}",
            wordEchoLabel: {messagekey: "wordEchoLabel"}
        }
    });

    fluid.defaults("gpii.panelscreenReaderBrailleOutput", {
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
