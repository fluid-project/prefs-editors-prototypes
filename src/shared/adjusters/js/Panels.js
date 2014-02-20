/*!
Cloud4all Preferences Management Tools

Copyright 2013 Astea

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

(function (fluid) {
    fluid.defaults("gpii.adjuster.speakText", {
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

    fluid.defaults("gpii.adjuster.wordsSpokenPerMinute", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.wordsSpokenPerMinute": {
                "model.value": "default",
                "controlValues.wordsSpokenPerMinute.min": "minimum",
                "controlValues.wordsSpokenPerMinute.step": "divisibleBy"
            }
        },
        selectors: {
            wordsSpokenPerMinuteLabel: ".gpiic-speakText-wordsSpokenPerMinute-label",
            wordsSpokenPerMinute: ".gpiic-speakText-wordsSpokenPerMinute-stepper"
        },
        selectorsToIgnore: ["wordsSpokenPerMinute"],
        components: {
            textfieldStepper: {
                type: "gpii.adjuster.textfieldStepper",
                container: "{that}.dom.wordsSpokenPerMinute",
                createOnEvent: "afterRender",
                options: {
                    sourceApplier: "{wordsSpokenPerMinute}.applier",
                    rules: {
                        "value": "value"
                    },
                    model: {
                        value: "{wordsSpokenPerMinute}.model.value"
                    },
                    range: "{wordsSpokenPerMinute}.options.controlValues.wordsSpokenPerMinute"
                }
            }
        },
        protoTree: {
            wordsSpokenPerMinuteLabel: {messagekey: "wordsSpokenPerMinuteLabel"}
        }
    });


    fluid.defaults("gpii.adjuster.volume", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.volume": {
                "model.value": "default",
                "controlValues.volume.min": "minimum",
                "controlValues.volume.step": "divisibleBy"
            }
        },
        selectors: {
            volumeLabel: ".gpiic-speakText-volume-label",
            volume: ".gpiic-speakText-volume-stepper"
        },
        selectorsToIgnore: ["volume"],
        components: {
            textfieldStepper: {
                type: "gpii.adjuster.textfieldStepper",
                container: "{that}.dom.volume",
                createOnEvent: "afterRender",
                options: {
                    sourceApplier: "{volume}.applier",
                    rules: {
                        "value": "value"
                    },
                    model: {
                        value: "{volume}.model.value"
                    },
                    range: "{volume}.options.controlValues.volume"
                }
            }
        },
        protoTree: {
            volumeLabel: {messagekey: "volumeLabel"}
        }
    });

    fluid.defaults("gpii.adjuster.visualAlternativesMoreLess", {
        gradeNames: ["fluid.prefs.panel", "fluid.prefs.stringBundle", "autoInit"],
        members: {
            messageResolver: "{prefsEditorLoader}.msgBundle"
        },
        preferenceMap: {
            "gpii.primarySchema.visualAlternativesMoreLess": {
                "model.visualAlternativesMoreLess": "default"
            }
        },
        selectors: {
            visualAlternativesMoreLessLabel: ".gpiic-visualAlternativesMoreLess-label"
        },
        selectorsToIgnore: ["visualAlternativesMoreLessIcon"],
        protoTree: {
            expander: {
                type: "fluid.renderer.condition",
                condition: "${{that}.model.visualAlternativesMoreLess}",
                trueTree: {
                    visualAlternativesMoreLessLabel: {messagekey: "less"}
                },
                falseTree: {
                    visualAlternativesMoreLessLabel: {messagekey: "more"}
                }
            }
        },
        listeners: {
            "onDomBind.bindEventToggleMoreLessSwitch": {
                "this": "{that}.dom.visualAlternativesMoreLessLabel",
                "method": "click",
                "args": ["{that}.visualAlternativesMoreLessRequestChange"]
            },
            "onDomBind.addListener": {
                "listener": "{that}.applier.modelChanged.addListener",
                "args": ["visualAlternativesMoreLess", "{that}.toggleVisualAlternativesMoreLess"]
            }
        },
        invokers: {
            toggleVisualAlternativesMoreLess: {
                "funcName": "gpii.visualAlternativesMoreLessConfiguration",
                "args": ["{that}.model.visualAlternativesMoreLess",
                         "{that}.dom.visualAlternativesMoreLessLabel",
                         "{that}.stringBundle.more",
                         "{that}.stringBundle.less"
                    ],
                "dynamic": true
            },
            visualAlternativesMoreLessRequestChange: {
                "funcName": "gpii.visualAlternativesMoreLessRequestChange",
                "args": ["{that}"],
                "dynamic": true
            }
        }
    });

    gpii.visualAlternativesMoreLessConfiguration = function (modelValue, label, more, less) {
        var newText = modelValue ? less : more;
        label.attr("value", newText);
    };

    gpii.visualAlternativesMoreLessRequestChange = function (that) {
        that.applier.requestChange("visualAlternativesMoreLess", !that.model.visualAlternativesMoreLess);
    };

    fluid.defaults("gpii.adjuster.voicePitch", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.voicePitch": {
                "model.value": "default",
                "controlValues.voicePitch.min": "minimum",
                "controlValues.voicePitch.step": "divisibleBy"
            }
        },
        selectors: {
            voicePitchLabel: ".gpiic-speakText-voicePitch-label",
            voicePitch: ".gpiic-speakText-voicePitch-stepper"
        },
        selectorsToIgnore: ["voicePitch"],
        components: {
            textfieldStepper: {
                type: "gpii.adjuster.textfieldStepper",
                container: "{that}.dom.voicePitch",
                createOnEvent: "afterRender",
                options: {
                    sourceApplier: "{voicePitch}.applier",
                    rules: {
                        "value": "value"
                    },
                    model: {
                        value: "{voicePitch}.model.value"
                    },
                    range: "{voicePitch}.options.controlValues.voicePitch"
                }
            }
        },
        protoTree: {
            voicePitchLabel: {messagekey: "voicePitchLabel"}
        }
    });

    fluid.defaults("gpii.adjuster.universalVolume", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.universalVolume": {
                "model.value": "default",
                "controlValues.universalVolume.min": "minimum",
                "controlValues.universalVolume.step": "divisibleBy"
            }
        },
        selectors: {
            universalVolumeLabel: ".gpiic-speakText-universalVolume-label",
            universalVolume: ".gpiic-speakText-universalVolume-stepper",
            universalVolumeDescription: ".gpiic-universalVolume-description"
        },
        selectorsToIgnore: ["universalVolume"],
        components: {
            textfieldStepper: {
                type: "gpii.adjuster.textfieldStepper",
                container: "{that}.dom.universalVolume",
                createOnEvent: "afterRender",
                options: {
                    sourceApplier: "{universalVolume}.applier",
                    rules: {
                        "value": "value"
                    },
                    model: {
                        value: "{universalVolume}.model.value"
                    },
                    range: "{universalVolume}.options.controlValues.universalVolume"
                }
            }
        },
        protoTree: {
            universalVolumeLabel: {messagekey: "universalVolumeLabel"},
            universalVolumeDescription: {messagekey: "universalVolumeDescription"}
        }
    });

    fluid.defaults("gpii.adjuster.universalLanguage", {
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
        stringArrayIndex: {
            languages: ["language-english", "language-french", "language-german", "language-russian"]
        },
        protoTree: {
            universalLanguage: {
                selection: "${universalLanguage}",
                optionnames: "${{that}.stringBundle.languages}",
                optionlist: "${{that}.options.controlValues.universalLanguage}"
            },
            universalLanguageLabel: {messagekey: "universalLanguageLabel"}
        }
    });

    fluid.defaults("gpii.adjuster.screenReaderLanguage", {
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
        stringArrayIndex: {
            languages: ["language-english", "language-french", "language-german", "language-russian"]
        },
        protoTree: {
            screenReaderLanguage: {
                selection: "${screenReaderLanguage}",
                optionnames: "${{that}.stringBundle.languages}",
                optionlist: "${{that}.options.controlValues.screenReaderLanguage}"
            },
            screenReaderLanguageLabel: {messagekey: "screenReaderLanguageLabel"}
        }
    });

    fluid.defaults("gpii.adjuster.textHighlighting", {
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

    fluid.defaults("gpii.adjuster.punctuationVerbosity", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.punctuationVerbosity": {
                "model.punctuationVerbosity": "default",
                "controlValues.punctuationVerbosity": "enum"
            }
        },
        selectors: {
            announceLabel: ".gpiic-speakText-announce-label",
            punctuationVerbosityRow: ".gpiic-speakText-punctuationVerbosity-row",
            punctuationVerbosityOptionLabel: ".gpiic-speakText-punctuationVerbosity-option-label",
            punctuationVerbosityInput: ".gpiic-speakText-punctuationVerbosity",
            punctuationVerbosityLabel: ".gpiic-speakText-punctuationVerbosity-label"
        },
        protoTree: {
            announceLabel: {messagekey: "announce"},
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
            punctuationVerbosityLabel: {messagekey: "punctuationVerbosityLabel"}
        },
        repeatingSelectors: ["punctuationVerbosityRow"],
        listeners: {
            onDomBind: "{that}.style",
            "onDomBind.makeOptionLabelsActivatable": {
                "this": "fluid",
                "method": "activatable",
                "args": ["{that}.dom.punctuationVerbosityOptionLabel", "{that}.makeOptionLabelsActivatable"]
            }
        },
        invokers: {
            style: {
                funcName: "gpii.adjuster.punctuationVerbosity.punctuationVerbosityStyle",
                args: [
                    "{that}.options.selectors.punctuationVerbosityOptionLabel",
                    "{that}.options.controlValues.punctuationVerbosity",
                    "{that}.options.classnameMap.punctuationVerbosity"
                ]
            },
            makeOptionLabelsActivatable: {
                funcName: "gpii.adjuster.punctuationVerbosity.makeOptionLabelsActivatable"
            }
        }

    });

    gpii.adjuster.punctuationVerbosity.punctuationVerbosityStyle = function (labelsClass, values, classes) {
        labels = $(labelsClass); // Used because "{that}.dom.punctuationVerbosityOptionLabel"
                                 // (like that.locate("punctuationVerbosityOptionLabel")) fails to return
                                 // the array of labels.

        fluid.each(labels, function (label, index) {
            $(label).addClass(classes[values[index]]);
            $(label).append('<span></span>');
        });
    };

    gpii.adjuster.punctuationVerbosity.makeOptionLabelsActivatable = function (event) {
        // activating options labels triggers a click on them
        event.target.click();
    };

    fluid.defaults("gpii.adjuster.announceCapitals", {
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

    fluid.defaults("gpii.adjuster.speakTutorialMessages", {
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

    fluid.defaults("gpii.adjuster.keyEcho", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.keyEcho": {
                "model.keyEcho": "default"
            }
        },
        selectors: {
            readBackLabel: ".gpiic-speakText-readBack-label",
            keyEcho: ".gpiic-speakText-keyEcho",
            keyEchoLabel: ".gpiic-speakText-keyEcho-label"
        },
        protoTree: {
            readBackLabel: {messagekey: "readBackLabel"},
            keyEcho: "${keyEcho}",
            keyEchoLabel: {messagekey: "keyEchoLabel"}
        }
    });

    fluid.defaults("gpii.adjuster.wordEcho", {
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

    fluid.defaults("gpii.adjuster.screenReaderBrailleOutput", {
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
