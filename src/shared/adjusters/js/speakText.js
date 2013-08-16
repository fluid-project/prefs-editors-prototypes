(function (fluid) {
    fluid.defaults("speakText.primarySchema", {
        gradeNames: ["fluid.uiOptions.schemas", "autoInit"],
        schema: {
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
                // "maximum": 100,
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
                    "type": "speakText.panel"
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
            screenReaderTTSEnabled: ".gpii-screenReaderTTSEnabled",
            screenReaderSwitch: ".gpii-screenReaderSwitch",
            speechRate: ".gpii-speechRate",
            auditoryOutLanguage: ".gpii-auditoryOutLanguage",
            punctuationVerbosity: ".gpii-punctuationVerbosity",
            announceCapitals: ".gpii-announceCapitals",
            speakTutorialMessages: ".gpii-speakTutorialMessages",
            keyEcho: ".gpii-keyEcho",
            wordEcho: ".gpii-wordEcho",
            screenReaderBrailleOutput: ".gpii-screenReaderBrailleOutput",

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
            screenReaderBrailleOutputLabel: ".gpii-screenReaderBrailleOutput-label"
        },

        protoTree: {
            screenReaderTTSEnabled: "${screenReaderTTSEnabled}",
            screenReaderSwitch: "${screenReaderSwitch}",
            speechRate: "${speechRate}",
            auditoryOutLanguage: {
                selection: "${auditoryOutLanguage}",
                optionlist: "{that}.options.controlValues.auditoryOutLanguage"
            },
            punctuationVerbosity: {
                selection: "${punctuationVerbosity}",
                optionlist: "{that}.options.controlValues.punctuationVerbosity"
            },
            announceCapitals: "${announceCapitals}",
            speakTutorialMessages: "${speakTutorialMessages}",
            keyEcho: "${keyEcho}",
            wordEcho: "${wordEcho}",
            screenReaderBrailleOutput: "${screenReaderBrailleOutput}",

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
            screenReaderBrailleOutputLabel: {messagekey: "screenReaderBrailleOutputLabel"}
        },

        finalInitFunction: "speakText.finalInit"
    });

    var flag = true;

    speakText.finalInit = function (that) {
        that.applier.modelChanged.addListener("screenReaderTTSEnabled", function () {
            if (that.model.screenReaderTTSEnabled) {
                $("#more-options").text("+ more");
                $("#speech-rate").slideDown();
                $("#more-options").slideDown();

                if (flag) {
                    $("#more-options").click(function () {
                        $("#expanded-top").toggle(400);
                        $("#expanded-bottom").toggle(400);
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
                        // Allow only backspace and delete
                        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 35 || event.keyCode == 36) {
                            // let it happen, don't do anything
                        }
                        else {
                            // Ensure that it is a number and stop the keypress
                            if ((event.keyCode < 48 || event.keyCode > 57 ) && (event.keyCode < 96 || event.keyCode > 105 )) {
                                event.preventDefault();
                            }
                        }
                    });

                    flag = false;
                };
            } else {
                $("#speech-rate").slideUp();
                $("#more-options").slideUp();
                $("#expanded-top").slideUp();
                $("#expanded-bottom").slideUp();
            }
        });

        that.applier.modelChanged.addListener("speechRate", function () {
            $("#speechRate").val(that.model.speechRate);
            if (!$("#speechRate").val()) {
                that.applier.requestChange("speechRate", 0);
            }
        });
    };

    function moreOrLessOptions(currentValue) {
        if (currentValue == "+ more") {
            return "- less";
        }
        return "+ more";
    }

})(fluid);
