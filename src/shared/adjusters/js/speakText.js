(function (fluid) {
    fluid.defaults("speakText.primarySchema", {
        gradeNames: ["fluid.uiOptions.schemas", "autoInit"],
        schema: {
            "addOrRemovePreference": {
                "type": "boolean",
                "default": false
            },
            "screenReaderTTSEnabled": {
                "type": "boolean",
                "default": false
            },
            "screenReaderSwitch": {
                "type": "boolean",
                "default": true
            },
            "speechRate": {
                "type": "number",
                "default": 130,
                "minimum": 0,
                "divisibleBy": 10
            },
            "auditoryOutLanguage": {
                "type": "string",
                "default": "English",
                "enum": ["English", "Deutsch", "Français", "Русский"]
            },
            "punctuationVerbosity": {
                "type": "string",
                "default": "none",
                "enum": ["none", "some", "most", "all"]
            },
            "announceCapitals": {
                "type": "boolean",
                "default": false
            },
            "speakTutorialMessages": {
                "type": "boolean",
                "default": false
            },
            "keyEcho": {
                "type": "boolean",
                "default": false
            },
            "wordEcho": {
                "type": "boolean",
                "default": false
            },
            "screenReaderBrailleOutput": {
                "type": "boolean",
                "default": false
            }
        }
    });

    fluid.defaults("speakText.auxSchema", {
        gradeNames: ["fluid.uiOptions.auxSchema", "autoInit"],
        auxiliarySchema: {
            "namespace": "gpii.adjusters.speakText",
            "templatePrefix": "../../src/shared/lib/infusion/components/uiOptions/html/",
            "messagePrefix": "",
            "template": "./speakTextFrame.html", //main template for all three groups (speakText, incSize, highContrast)

            "screenReaderTTSEnabled": {
                "type": "screenReaderTTSEnabled",
                "panel": {
                    "type": "speakText.panel",
                    "container": ".gpii-speak-text-group", // container for the speakText panel, holding all speakText adjusters
                    "template": "../../src/shared/adjusters/html/newestSpeakText.html", // same as above
                    "message": "../../src/shared/adjusters/messages/speakText.json"
                }
            },

            "addOrRemovePreference": {
                "type": "addOrRemovePreference",
                "panel": {
                    "type": "speakText.panel"
                }
            },

            "screenReaderSwitch": {
                "type": "screenReaderSwitch",
                "panel": {
                    "type": "speakText.panel"
                }
            },

            "speechRate": {
                "type": "speechRate",
                "panel": {
                    "type": "speakText.panel"
                }
            },

            "auditoryOutLanguage": {
                "type": "auditoryOutLanguage",
                "panel": {
                    "type": "speakText.panel"
                }
            },

            "punctuationVerbosity": {
                "type": "punctuationVerbosity",
                "panel": {
                    "type": "speakText.panel",
                    "classnameMap": {"punctuationVerbosity": "@punctuationVerbosity.classes"},
                },
                "classes": {
                    "none": "radioButton-left",
                    "some": "radioButton-middle radioButton-second",
                    "most": "radioButton-middle radioButton-third",
                    "all": "radioButton-right"
                }
            },

            "announceCapitals": {
                "type": "announceCapitals",
                "panel": {
                    "type": "speakText.panel"
                }
            },

            "speakTutorialMessages": {
                "type": "speakTutorialMessages",
                "panel": {
                    "type": "speakText.panel"
                }
            },

            "keyEcho": {
                "type": "keyEcho",
                "panel": {
                    "type": "speakText.panel"
                }
            },

            "wordEcho": {
                "type": "wordEcho",
                "panel": {
                    "type": "speakText.panel"
                }
            },

            "screenReaderBrailleOutput": {
                "type": "screenReaderBrailleOutput",
                "panel": {
                    "type": "speakText.panel"
                }
            }
        }
    });

    fluid.defaults("speakText.panel", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        preferenceMap: {
            "addOrRemovePreference": {
                "model.addOrRemovePreference": "default"
            },
            "screenReaderTTSEnabled": {
                "model.screenReaderTTSEnabled": "default"
            },
            "screenReaderSwitch": {
                "model.screenReaderSwitch": "default"
            },
            "speechRate": {
                "model.speechRate": "default",
                "model.minimum": "minimum",
                "model.divisibleBy": "divisibleBy"
            },
            "auditoryOutLanguage": {
                "model.auditoryOutLanguage": "default",
                "controlValues.auditoryOutLanguage": "enum"
            },
            "punctuationVerbosity": {
                "model.punctuationVerbosity": "default",
                "controlValues.punctuationVerbosity": "enum"
            },
            "announceCapitals": {
                "model.announceCapitals": "default"
            },
            "speakTutorialMessages": {
                "model.speakTutorialMessages": "default"
            },
            "keyEcho": {
                "model.keyEcho": "default"
            },
            "wordEcho": {
                "model.wordEcho": "default"
            },
            "screenReaderBrailleOutput": {
                "model.screenReaderBrailleOutput": "default"
            }
        },

        selectors: {
            addOrRemovePreference: ".gpii-addOrRemovePreference",
            screenReaderTTSEnabled: ".gpii-screenReaderTTSEnabled",
            screenReaderSwitch: ".gpii-screenReaderSwitch",
            speechRate: ".gpii-speechRate",
            auditoryOutLanguage: ".gpii-auditoryOutLanguage",

            punctuationVerbosityRow: ".gpii-punctuationVerbosity-row",
            punctuationVerbosityOptionLabel: ".gpii-punctuationVerbosity-option-label",
            punctuationVerbosityInput: ".gpii-punctuationVerbosity",

            announceCapitals: ".gpii-announceCapitals",
            speakTutorialMessages: ".gpii-speakTutorialMessages",
            keyEcho: ".gpii-keyEcho",
            wordEcho: ".gpii-wordEcho",
            screenReaderBrailleOutput: ".gpii-screenReaderBrailleOutput",

            addOrRemovePreferenceLabel: ".gpii-addOrRemovePreference-label",
            screenReaderTTSEnabledLabel: ".gpii-screenReaderTTSEnabled-label",
            screenReaderSwitchLabel: ".gpii-screenReaderSwitch-label",
            speechRateLabel: ".gpii-speechRate-label",
            speechRateMinus: ".gpii-speechRate-minus",
            speechRatePlus: ".gpii-speechRate-plus",
            auditoryOutLanguageLabel: ".gpii-auditoryOutLanguage-label",
            punctuationVerbosityLabel: ".gpii-punctuationVerbosity-label",
            announceCapitalsLabel: ".gpii-announceCapitals-label",
            speakTutorialMessagesLabel: ".gpii-speakTutorialMessages-label",
            keyEchoLabel: ".gpii-keyEcho-label",
            wordEchoLabel: ".gpii-wordEcho-label",
            screenReaderBrailleOutputLabel: ".gpii-screenReaderBrailleOutput-label",

            screenReaderBrailleOutputDescription: ".gpii-screenReaderBrailleOutput-description",

            // moreOptions: ".more-options"
        },

        repeatingSelectors: ["punctuationVerbosityRow"],

        protoTree: {
            expander: {
                type: "fluid.renderer.selection.inputs",
                rowID: "punctuationVerbosityRow",
                labelID: "punctuationVerbosityOptionLabel",
                inputID: "punctuationVerbosityInput",
                selectID: "punctuationVerbosity-selection",
                tree: {
                    optionnames: "{that}.options.controlValues.punctuationVerbosity",
                    optionlist: "{that}.options.controlValues.punctuationVerbosity",
                    selection: "${punctuationVerbosity}"
                }
            },

            addOrRemovePreference: "${addOrRemovePreference}",
            screenReaderTTSEnabled: "${screenReaderTTSEnabled}",
            screenReaderSwitch: "${screenReaderSwitch}",
            speechRate: "${speechRate}",
            auditoryOutLanguage: {
                selection: "${auditoryOutLanguage}",
                optionlist: "{that}.options.controlValues.auditoryOutLanguage"
            },

            announceCapitals: "${announceCapitals}",
            speakTutorialMessages: "${speakTutorialMessages}",
            keyEcho: "${keyEcho}",
            wordEcho: "${wordEcho}",
            screenReaderBrailleOutput: "${screenReaderBrailleOutput}",

            addOrRemovePreferenceLabel: {messagekey: "addOrRemovePreferenceLabelOff"},
            screenReaderTTSEnabledLabel: {messagekey: "screenReaderTTSEnabledLabel"},
            screenReaderSwitchLabel: {messagekey: "screenReaderSwitchLabel"},
            speechRateLabel: {messagekey: "speechRateLabel"},
            speechRateMinus: {messagekey: "speechRateMinus"},
            speechRatePlus: {messagekey: "speechRatePlus"},
            auditoryOutLanguageLabel: {messagekey: "auditoryOutLanguageLabel"},
            punctuationVerbosityLabel: {messagekey: "punctuationVerbosityLabel"},
            announceCapitalsLabel: {messagekey: "announceCapitalsLabel"},
            speakTutorialMessagesLabel: {messagekey: "speakTutorialMessagesLabel"},
            keyEchoLabel: {messagekey: "keyEchoLabel"},
            wordEchoLabel: {messagekey: "wordEchoLabel"},
            screenReaderBrailleOutputLabel: {messagekey: "screenReaderBrailleOutputLabel"},

            screenReaderBrailleOutputDescription: {messagekey: "screenReaderBrailleOutputDescription"},
            punctuationVerbosityDescription: {messagekey: "punctuationVerbosityDescription"}
        },

        // strings: {
        //     moreText: {
        //         expander: {
        //             func: "lookupMsg",
        //             args: ["{that}.msgBundle", "moreOptionsMoreText"]
        //         }
        //     },

        //     lessText: {
        //         expander: {
        //             func: "lookupMsg",
        //             args: ["{that}.msgBundle", "moreOptionsLessText"]
        //         }
        //     }
        // },

        finalInitFunction: "speakText.finalInit",

        listeners: {
            afterRender: "{that}.style"
        },

        invokers: {
            style: {
                funcName: "speakText.panel.punctuationVerbosityStyle",
                args: [
                    "{that}.dom.punctuationVerbosityOptionLabel",
                    "{that}.options.controlValues.punctuationVerbosity",
                    "{that}.options.classnameMap.punctuationVerbosity"
                ]
            }
        }
    });

    var flag = true;

    speakText.finalInit = function (that) {
        that.applier.modelChanged.addListener("screenReaderTTSEnabled", function () {
            if (that.model.screenReaderTTSEnabled) {
                $(".more-options").text("+ more");
                // that.locate("moreOptions").text(that.options.strings.moreText);
                $("#speech-rate").slideDown();
                $(".more-options").slideDown();

                if (flag) {
                    $(".more-options").click(function () {
                        $("#expanded-top").toggle(400);
                        $("#expanded-bottom").toggle(400);
                        $(".gpii-addOrRemovePreference-label").toggle();
                        $(this).text(moreOrLessOptions($(this).text()));
                    });

                    $(".gpii-speechRate-minus").click(function () {
                        var newValue = parseInt(that.model.speechRate) - that.model.divisibleBy;
                        if (newValue >= that.model.minimum) {
                            that.applier.requestChange("speechRate", newValue);
                        }
                    });

                    $(".gpii-speechRate-plus").click(function () {
                        var newValue = parseInt(that.model.speechRate) + that.model.divisibleBy;
                        that.applier.requestChange("speechRate", newValue);
                    });

                    $("#speechRate").keydown(function(event) {
                        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 35 || event.keyCode == 36) {
                            // let it happen, don't do anything
                        }
                        else {
                            if ((event.keyCode < 48 || event.keyCode > 57 ) && (event.keyCode < 96 || event.keyCode > 105 )) {
                                event.preventDefault();
                            }
                        }
                    });

                    $(".gpii-addOrRemovePreference-label").hover(function () {
                        $("#prompt-message").show();
                    }, function () {
                        $("#prompt-message").hide();
                    });

                    flag = false;
                };
            } else {
                $("#speech-rate").slideUp();
                $(".more-options").slideUp();
                $("#expanded-top").slideUp();
                $("#expanded-bottom").slideUp();
                $(".gpii-addOrRemovePreference-label").hide();
            }
        });

        that.applier.modelChanged.addListener("addOrRemovePreference", function () {
            if (that.model.addOrRemovePreference) {
                $.getJSON('../../src/shared/adjusters/messages/speakText.json', function (data) {
                $(".gpii-addOrRemovePreference-label").text(data["addOrRemovePreferenceLabelOn"]);
            });
            } else {
                 $.getJSON('../../src/shared/adjusters/messages/speakText.json', function (data) {
                 $(".gpii-addOrRemovePreference-label").text(data["addOrRemovePreferenceLabelOff"])
            });
            }
        });

        that.applier.modelChanged.addListener("speechRate", function () {
            $("#speechRate").val(that.model.speechRate);
            if (!$("#speechRate").val()) {
                that.applier.requestChange("speechRate", 0);
            }
        });
    };

    // lookupMsg = function (messageResolver, value) {
    //     var looked = messageResolver.lookup([value]);
    //     return looked ? looked.template : looked;
    // };

    function moreOrLessOptions(currentValue) {
        if (currentValue == "+ more") {
            return "- less";
        }
        return "+ more";
    };

    speakText.panel.punctuationVerbosityStyle = function (labels, values, classes) {
        fluid.each(labels, function (label, index) {
            $(label).addClass(classes[values[index]]);
        });

        // FIXME: This is probably not the best idea, but it works for now.
        var contents = $(".gpii-punctuationVerbosity-row").contents()
        $(".gpii-punctuationVerbosity-row").replaceWith(contents);
    };

})(fluid);
