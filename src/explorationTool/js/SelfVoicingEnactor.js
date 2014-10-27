/*
Copyright 2013 OCAD University

Licensed under the Educational Community License (ECL), Version 2.0 or the New
BSD license. You may not use this file except in compliance with one these
Licenses.

You may obtain a copy of the ECL 2.0 License and BSD License at
https://github.com/fluid-project/infusion/raw/master/Infusion-LICENSE.txt
*/

// Declare dependencies
/* global buzz */

(function ($, fluid) {
    "use strict";

    /*******************************************************************************
     * selfVoicing
     *
     * The enactor that enables self voicing in the user interface options.
     *******************************************************************************/

    fluid.defaults("gpii.explorationTool.enactors.selfVoicing", {
        gradeNames: ["fluid.viewComponent", "fluid.prefs.enactor", "autoInit"],
        model: {
            value: false
        },
        listeners: {
            "afterAnnounce.next": "{that}.announceNext"
        },
        events: {
            afterAnnounce: null,
            onError: null
        },
        invokers: {
            handleSelfVoicing: {
                funcName: "gpii.explorationTool.enactors.selfVoicing.handleSelfVoicing",
                args: "{that}"
            },
            announce: {
                funcName: "gpii.explorationTool.enactors.selfVoicing.announce",
                args: ["{that}", "{arguments}.0"]
            },
            announceNext: {
                funcName: "gpii.explorationTool.enactors.selfVoicing.announceNext",
                args: "{that}"
            }
        },
        members: {
            seen: [],
            speaking: false
        },
        strings: {
            loaded: "text to speech enabled"
        },
        styles: {
            current: "fl-selfVoicing-current"
        },

        // Fireworks Server
        ttsUrl: "http://tts.idrc.ocadu.ca?q=%text",

        lang: "en"
    });

    gpii.explorationTool.enactors.selfVoicing.finalInit = function (that) {
        that.applier.modelChanged.addListener("value", function (newModel, oldModel) {
            if (newModel.value !== oldModel.value) {
                that.handleSelfVoicing();
            }
        });
    };

    gpii.explorationTool.enactors.selfVoicing.handleSelfVoicing = function (that) {
        if (that.model.value) {
            that.announce(that.options.strings.loaded);
        } else {
            delete that.currentElement;
            that.seen = [];
        }
    };

    gpii.explorationTool.enactors.selfVoicing.announce = function (that, text) {
        if (!that.model.value) {return;}
        var audioURL = fluid.stringTemplate(that.options.ttsUrl, {
            lang: that.options.lang,
            text: text
        });
        that.currentAnnouncement = new buzz.sound(audioURL);
        that.currentAnnouncement.bind("ended", function () {
            that.speaking = false;
            that.events.afterAnnounce.fire();
        });
        that.currentAnnouncement.bind("error", function () {
            that.speaking = false;
            that.events.onError.fire();
        });
        that.speaking = true;
        that.currentAnnouncement.play();
    };

    var fullTrim = function (string) {
        string = string.trim();
        return string.replace(/\s{2,}/gi, " ");
    };

    gpii.explorationTool.enactors.selfVoicing.announceNext = function (that) {
        var announcement = "";
        that.currentElement = that.currentElement ||
            document.activeElement;
        var nodes = $(that.currentElement).contents();
        var next = fluid.find(nodes, function (node) {
            if (that.seen.indexOf(node) > -1) {return;}

            if (node.nodeType === 8 || node.nodeName === "SCRIPT" || node.nodeName === "IFRAME") {
                that.seen.push(node);
                return;
            }

            if (node.nodeType === 3) {
                announcement = fullTrim(node.nodeValue);
                that.seen.push(node);
                if (announcement) {
                    return node;
                }
                return;
            }

            if (node.nodeType === 1) {
                if (window.getComputedStyle(node).display === "none") {
                    that.seen.push(node);
                    return;
                }
                if (node.nodeName === "IMG") {
                    announcement = fluid.find(node.attributes, function (attr) {
                        if (attr.name === "alt") {
                            return fullTrim(attr.value);
                        }
                    });
                }
                return node;
            }
        });
        if (!next && that.currentElement.parentNode.nodeName !== "HTML") {
            that.seen.push(that.currentElement);
            next = that.currentElement.parentNode;
        }
        that.currentElement = next;
        if (announcement) {
            that.announce(announcement);
        } else {
            that.announceNext();
        }
    };

})(jQuery, fluid);
