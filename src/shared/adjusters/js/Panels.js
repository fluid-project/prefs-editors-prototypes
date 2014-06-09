/*!
Cloud4all Preferences Management Tools

Copyright 2013 Astea
Copyright 2014 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

(function (fluid) {
    fluid.defaults("gpii.adjuster.speakText", {
        gradeNames: ["gpii.adjuster.onOffSwitch", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.speakText": {
                "model.speakText": "default"
            }
        },
        protoTree: {
            valueCheckbox: "${speakText}",
            headingLabel: {messagekey: "speakTextLabel"}
        },
        onOffModelKey: "speakText"
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
                    range: "{wordsSpokenPerMinute}.options.controlValues.wordsSpokenPerMinute",
                    labelledbyDomElement: "{wordsSpokenPerMinute}.dom.wordsSpokenPerMinuteLabel"
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
                "controlValues.volume.max": "maximum",
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
                    range: "{volume}.options.controlValues.volume",
                    labelledbyDomElement: "{volume}.dom.volumeLabel"
                }
            }
        },
        protoTree: {
            volumeLabel: {messagekey: "volumeLabel"}
        }
    });

    fluid.defaults("gpii.adjuster.visualAlternativesMoreLess", {
        gradeNames: ["fluid.prefs.panel", "fluid.prefs.msgLookup", "autoInit"],
        members: {
            messageResolver: "{prefsEditorLoader}.msgResolver"
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
                         "{that}.msgLookup.more",
                         "{that}.msgLookup.less"
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
                "controlValues.voicePitch.max": "maximum",
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
                    range: "{voicePitch}.options.controlValues.voicePitch",
                    labelledbyDomElement: "{voicePitch}.dom.voicePitchLabel"
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
                "controlValues.universalVolume.max": "maximum",
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
                    range: "{universalVolume}.options.controlValues.universalVolume",
                    labelledbyDomElement: "{universalVolume}.dom.universalVolumeLabel"
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
            languages: ["language-english", "language-greek", "language-german", "language-spanish"]
        },
        protoTree: {
            universalLanguage: {
                selection: "${universalLanguage}",
                optionnames: "${{that}.msgLookup.languages}",
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
            languages: ["language-english", "language-greek", "language-german", "language-spanish"]
        },
        protoTree: {
            screenReaderLanguage: {
                selection: "${screenReaderLanguage}",
                optionnames: "${{that}.msgLookup.languages}",
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
        stringArrayIndex: {
            textHighlightingLevel: ["textHighlighting-word", "textHighlighting-line", "textHighlighting-sentence", "textHighlighting-paragraph"]
        },
        protoTree: {
            textHighlighting: {
                selection: "${textHighlighting}",
                optionnames: "${{that}.msgLookup.textHighlightingLevel}",
                optionlist: "${{that}.options.controlValues.textHighlighting}"
            },
            textHighlightingLabel: {messagekey: "textHighlightingLabel"}
        }
    });

    fluid.defaults("gpii.adjuster.punctuationVerbosity", {
        gradeNames: ["fluid.prefs.panel", "gpii.adjuster.singleSelectionWithKeyboard", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.punctuationVerbosity": {
                "model.punctuationVerbosity": "default",
                "controlValues.punctuationVerbosity": "enum"
            }
        },
        selectors: {
            announceLabel: ".gpiic-speakText-announce-label",
            punctuationVerbosityContainer: ".gpiic-punctuationVerbosity-container",
            punctuationVerbosityRow: ".gpiic-speakText-punctuationVerbosity-row",
            punctuationVerbosityOptionLabel: ".gpiic-speakText-punctuationVerbosity-option-label",
            punctuationVerbosityInput: ".gpiic-speakText-punctuationVerbosity",
            punctuationVerbosityLabel: ".gpiic-speakText-punctuationVerbosity-label",
            singleSelectionLabels: ".gpiic-speakText-punctuationVerbosity-option-label"
        },
        selectorsToIgnore: ["punctuationVerbosityContainer"],
        stringArrayIndex: {
            punctuationVerbosityLevel: ["punctuationVerbosity-none", "punctuationVerbosity-some", "punctuationVerbosity-most", "punctuationVerbosity-all"]
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
                    optionnames: "${{that}.msgLookup.punctuationVerbosityLevel}",
                    optionlist: "${{that}.options.controlValues.punctuationVerbosity}",
                    selection: "${punctuationVerbosity}"
                }
            },
            punctuationVerbosityLabel: {messagekey: "punctuationVerbosityLabel"}
        },
        repeatingSelectors: ["punctuationVerbosityRow"],
        listeners: {
            "onDomBind.style": "{that}.style"
        },
        invokers: {
            style: {
                funcName: "gpii.adjuster.punctuationVerbosity.punctuationVerbosityStyle",
                args: [
                    "{that}.dom.punctuationVerbosityOptionLabel",
                    "{that}.options.controlValues.punctuationVerbosity",
                    "{that}.options.classnameMap.punctuationVerbosity",
                    "{that}.dom.punctuationVerbosityContainer",
                    "{that}.dom.punctuationVerbosityLabel",
                    "{that}.dom.announceLabel"
                ],
                "dynamic": true
            }
        }
    });

    gpii.adjuster.punctuationVerbosity.punctuationVerbosityStyle = function (labels, values, classes, container, titleLabel, announceLabel) {
        fluid.each(labels, function (label, index) {
            label = $(label);
            label.addClass(classes[values[index]]);
            label.prepend('<span></span>');
        });
        container.attr("aria-labelledby", gpii.ariaUtility.getLabelId(titleLabel));

        /**
         Most PMT and PCP checkboxes displayed on UI are using nested divs for cosmetic reason. It results
         in an issue that the regular way for grouping checkboxes that helps screen readers to announce
         the group title when focusing on the first checkbox stops working. The workaround here is to use
         "aria-describedby" to associate the title with each checkbox. This is not ideal.
         An example of a grouped checkbox: http://test.cita.illinois.edu/aria/checkbox/checkbox1.php
         **/
        container.attr("aria-describedby", gpii.ariaUtility.getLabelId(announceLabel));
    };

    fluid.defaults("gpii.adjuster.announceCapitals", {
        gradeNames: ["fluid.prefs.panel", "gpii.adjuster.activatableLabelsClickOnActivate", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.announceCapitals": {
                "model.announceCapitals": "default"
            }
        },
        selectors: {
            announceCapitals: ".gpiic-announceCapitals",
            announceCapitalsLabel: ".gpiic-announceCapitals-label",
            activatableLabelsSelector: ".gpiic-announceCapitals-checkbox-label"
        },
        selectorsToIgnore: ["activatableLabelsSelector"],
        protoTree: {
            announceCapitals: "${announceCapitals}",
            announceCapitalsLabel: {messagekey: "announceCapitalsLabel"}
        },
        listeners: {
            "onDomBind.setAriaChecked": {
                listener: "{that}.setAriaChecked",
                args: "{that}.model.announceCapitals"
            }
        },
        modelListeners: {
            announceCapitals: {
                listener: "{that}.setAriaChecked",
                args: ["{change}.value"]
            }
        },
        invokers: {
            setAriaChecked: {
                funcName: "gpii.ariaUtility.setAriaChecked",
                args: ["{that}.dom.activatableLabelsSelector", "{arguments}.0"]
            }
        }
    });

    fluid.defaults("gpii.adjuster.speakTutorialMessages", {
        gradeNames: ["fluid.prefs.panel", "gpii.adjuster.activatableLabelsClickOnActivate", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.speakTutorialMessages": {
                "model.speakTutorialMessages": "default"
            }
        },
        selectors: {
            speakTutorialMessages: ".gpiic-speakTutorialMessages",
            speakTutorialMessagesLabel: ".gpiic-speakTutorialMessages-label",
            activatableLabelsSelector: ".gpiic-speakTutorialMessages-checkbox-label"
        },
        selectorsToIgnore: ["activatableLabelsSelector"],
        protoTree: {
            speakTutorialMessages: "${speakTutorialMessages}",
            speakTutorialMessagesLabel: {messagekey: "speakTutorialMessagesLabel"}
        },
        listeners: {
            "onDomBind.setAriaChecked": {
                listener: "{that}.setAriaChecked",
                args: "{that}.model.speakTutorialMessages"
            }
        },
        modelListeners: {
            speakTutorialMessages: {
                listener: "{that}.setAriaChecked",
                args: ["{change}.value"]
            }
        },
        invokers: {
            setAriaChecked: {
                funcName: "gpii.ariaUtility.setAriaChecked",
                args: ["{that}.dom.activatableLabelsSelector", "{arguments}.0"]
            }
        }
    });

    fluid.defaults("gpii.adjuster.keyEcho", {
        gradeNames: ["fluid.prefs.panel", "gpii.adjuster.activatableLabelsClickOnActivate", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.keyEcho": {
                "model.keyEcho": "default"
            }
        },
        selectors: {
            readBackLabel: ".gpiic-speakText-readBack-label",
            keyEcho: ".gpiic-speakText-keyEcho",
            keyEchoLabel: ".gpiic-speakText-keyEcho-label",
            activatableLabelsSelector: ".gpiic-keyEcho-checkbox-label"
        },
        selectorsToIgnore: ["activatableLabelsSelector"],
        protoTree: {
            readBackLabel: {messagekey: "readBackLabel"},
            keyEcho: "${keyEcho}",
            keyEchoLabel: {messagekey: "keyEchoLabel"}
        },
        listeners: {
            /**
             Most PMT and PCP checkboxes displayed on UI are using nested divs for cosmetic reason. It results
             in an issue that the regular way for grouping checkboxes that helps screen readers to announce
             the group title when focusing on the first checkbox stops working. The workaround here is to use
             "aria-describedby" to associate the title with each checkbox. This is not ideal.
             An example of a grouped checkbox: http://test.cita.illinois.edu/aria/checkbox/checkbox1.php
             **/
            "onDomBind.addAriaDesc": {
                "this": "{that}.dom.activatableLabelsSelector",
                method: "attr",
                args: ["aria-describedby", {expander: {funcName: "gpii.ariaUtility.getLabelId", args: "{that}.dom.readBackLabel"}}]
            },
            "onDomBind.setAriaChecked": {
                listener: "{that}.setAriaChecked",
                args: "{that}.model.keyEcho"
            }
        },
        modelListeners: {
            keyEcho: {
                listener: "{that}.setAriaChecked",
                args: ["{change}.value"]
            }
        },
        invokers: {
            setAriaChecked: {
                funcName: "gpii.ariaUtility.setAriaChecked",
                args: ["{that}.dom.activatableLabelsSelector", "{arguments}.0"]
            }
        }
    });

    fluid.defaults("gpii.adjuster.wordEcho", {
        gradeNames: ["fluid.prefs.panel", "gpii.adjuster.activatableLabelsClickOnActivate", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.wordEcho": {
                "model.wordEcho": "default"
            }
        },
        selectors: {
            wordEcho: ".gpiic-wordEcho",
            wordEchoLabel: ".gpiic-wordEcho-label",
            activatableLabelsSelector: ".gpiic-wordEcho-checkbox-label"
        },
        selectorsToIgnore: ["activatableLabelsSelector"],
        protoTree: {
            wordEcho: "${wordEcho}",
            wordEchoLabel: {messagekey: "wordEchoLabel"}
        },
        listeners: {
            "onDomBind.setAriaChecked": {
                listener: "{that}.setAriaChecked",
                args: "{that}.model.wordEcho"
            }
        },
        modelListeners: {
            wordEcho: {
                listener: "{that}.setAriaChecked",
                args: ["{change}.value"]
            }
        },
        invokers: {
            setAriaChecked: {
                funcName: "gpii.ariaUtility.setAriaChecked",
                args: ["{that}.dom.activatableLabelsSelector", "{arguments}.0"]
            }
        }
    });

    fluid.defaults("gpii.adjuster.screenReaderBrailleOutput", {
        gradeNames: ["gpii.adjuster.onOffSwitch", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.screenReaderBrailleOutput": {
                "model.screenReaderBrailleOutput": "default"
            }
        },
        selectors: {
            screenReaderBrailleOutputDescription: ".gpiic-screenReaderBrailleOutput-description"
        },
        protoTree: {
            valueCheckbox: "${screenReaderBrailleOutput}",
            headingLabel: {messagekey: "screenReaderBrailleOutputLabel"},
            screenReaderBrailleOutputDescription: {messagekey: "screenReaderBrailleOutputDescription"}
        },
        onOffModelKey: "screenReaderBrailleOutput"
    });

})(fluid);
