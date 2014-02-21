/*!
Cloud4all Preferences Management Tools

Copyright 2013 OCAD University
Copyright 2013 Astea

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

(function (fluid) {

    fluid.defaults("gpii.adjuster.screenReaderTTSEnabled", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.screenReaderTTSEnabled": {
                "model.screenReaderTTSEnabled": "default"
            }
        },
        selectors: {
            screenReaderTTSEnabled: ".gpiic-speakText-screenReaderTTSEnabled",
            screenReaderTTSEnabledLabel: ".gpiic-speakText-screenReaderTTSEnabled-label"
        },
        protoTree: {
            screenReaderTTSEnabled: "${screenReaderTTSEnabled}",
            screenReaderTTSEnabledLabel: {messagekey: "screenReaderTTSEnabledLabel"}
        }
    });

    fluid.defaults("gpii.adjuster.speechRate", {
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
            speechRateLabel: ".gpiic-speakText-speechRate-label",
            speechRate: ".gpiic-speakText-speechRate-stepper"
        },
        selectorsToIgnore: ["speechRate"],
        components: {
            textfieldStepper: {
                type: "gpii.adjuster.textfieldStepper",
                container: "{that}.dom.speechRate",
                createOnEvent: "afterRender",
                options: {
                    sourceApplier: "{speechRate}.applier",
                    rules: {
                        "value": "value"
                    },
                    model: {
                        value: "{speechRate}.model.value"
                    },
                    range: "{speechRate}.options.controlValues.speechRate",
                    labelledbyDomElement: "{speechRate}.dom.speechRateLabel"
                }
            }
        },
        protoTree: {
            speechRateLabel: {messagekey: "speechRateLabel"}
        }
    });

    fluid.defaults("gpii.adjuster.auditoryOutLanguage", {
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
        },
        protoTree: {
            auditoryOutLanguage: {
                selection: "${auditoryOutLanguage}",
                optionlist: "${{that}.options.controlValues.auditoryOutLanguage}"
            },
            auditoryOutLanguageLabel: {messagekey: "auditoryOutLanguageLabel"}
        },
        listeners: {
            "afterRender.activateCombobox": {
                "listener": "gpii.adjuster.auditoryOutLanguage.activateCombobox",
                "args": ["{that}"]
            }
        }
    });

    gpii.adjuster.auditoryOutLanguage.activateCombobox = function (that) {
        // Since infusion is using jQuery 1.7.1, fluid.locate() returns a jQuery 1.7.1 element.
        // As the combo box requires jQuery 1.9.1, unwrap the 1.7.1 element and rewrap it with
        // jQuery 1.9.1 before passing to combobox()
        var dropdown = that.locate("auditoryOutLanguage");
        var unwrappedDropdown = fluid.unwrap(dropdown);
        var dropdownReadyForCombobox = $(unwrappedDropdown);
        dropdownReadyForCombobox.combobox({
            labelDomElement: that.locate("auditoryOutLanguageLabel")
        }).change(function (event, newValue) {
            that.applier.requestChange("auditoryOutLanguage", newValue);
        });
    };

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
            punctuationVerbosityLabel: {messagekey: "punctuationVerbosityLabel"},
            punctuationVerbosityDescription: {messagekey: "punctuationVerbosityDescription"}
        },
        repeatingSelectors: ["punctuationVerbosityRow"],
        listeners: {
            afterRender: "{that}.style"
        },
        invokers: {
            style: {
                funcName: "gpii.adjuster.punctuationVerbosity.punctuationVerbosityStyle",
                args: [
                    "{that}.dom.punctuationVerbosityOptionLabel",
                    "{that}.options.controlValues.punctuationVerbosity",
                    "{that}.options.classnameMap.punctuationVerbosity"
                ],
                "dynamic": true
            }
        }
    });

    gpii.adjuster.punctuationVerbosity.punctuationVerbosityStyle = function (labels, values, classes) {
        fluid.each(labels, function (label, index) {
            $(label).addClass(classes[values[index]]);
            $(label).append('<span></span>');
        });
    };

    fluid.defaults("gpii.adjuster.announceCapitals", {
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

    fluid.defaults("gpii.adjuster.speakTutorialMessages", {
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
            wordEcho: ".gpiic-speakText-wordEcho",
            wordEchoLabel: ".gpiic-speakText-wordEcho-label"
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
