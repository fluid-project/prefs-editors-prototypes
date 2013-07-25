/*
Copyright 2013 OCAD University

Licensed under the Educational Community License (ECL), Version 2.0 or the New
BSD license. You may not use this file except in compliance with one these
Licenses.

You may obtain a copy of the ECL 2.0 License and BSD License at
https://github.com/fluid-project/infusion/raw/master/Infusion-LICENSE.txt
*/

// Declare dependencies
/*global fluid, gpii, jQuery, window*/

// JSLint options
/*jslint white: true, funcinvoke: true, undef: true, newcap: true, nomen: true, regexp: true, bitwise: true, browser: true, forin: true, maxerr: 100, indent: 4 */

(function ($, fluid) {

    /*******************************************************************************
     * selfVoicing
     *
     * The enactor that enables self voicing in the user interface options.
     *******************************************************************************/

    fluid.defaults("gpii.discoveryTool.enactors.selfVoicing", {
        gradeNames: ["fluid.viewComponent", "fluid.uiOptions.enactors", "autoInit"],
        model: {
            value: false
        },
        listeners: {
            "onCreate": [
                "{that}.attachAudio", {
                    listener: "{that}.announce",
                    args: "{that}.options.strings.loaded"
                }
            ],
            afterAnnounce: "{that}.announceNext"
        },
        events: {
            afterAnnounce: null
        },
        invokers: {
            handleSelfVoicing: {
                funcName: "gpii.discoveryTool.enactors.selfVoicing.handleSelfVoicing",
                args: "{that}"
            },
            attachAudio: {
                funcName: "gpii.discoveryTool.enactors.selfVoicing.attachAudio",
                args: ["{that}"]
            },
            announce: {
                funcName: "gpii.discoveryTool.enactors.selfVoicing.announce",
                args: ["{that}.audio", "{that}.options.ttsUrl", "{that}.options.lang", "{arguments}.0"]
            },
            announceNext: {
                funcName: "gpii.discoveryTool.enactors.selfVoicing.announceNext",
                args: "{that}"
            }
        },
        members: {
            seen: []
        },
        strings: {
            loaded: "text to speech enabled"
        },
        styles: {
            current: "fl-selfVoicing-current"
        },

        // HTML5 Audio configuration
        audioSelector: "#selfVoicer-audio",
        markup: '<audio type="audio/x-wav"></audio>',

        // Fireworks Server
        ttsUrl: "http://tts.idrc.ocadu.ca?q=%text"
        // Google Translate TTS Proxy
        // lang: "en",
        // ttsUrl: "http://ec2-23-23-52-224.compute-1.amazonaws.com?q=%text&tl=%lang"
    });

    gpii.discoveryTool.enactors.selfVoicing.finalInit = function (that) {
        that.applier.modelChanged.addListener("value", function () {
            that.handleSelfVoicing();
        });
    };

    gpii.discoveryTool.enactors.selfVoicing.attachAudio = function (that) {
        that.audio = $(that.options.markup);
        that.audio.attr("id", that.options.audioSelector.substr(1));
        that.audio.hide();
        $(that.options.audioSelector).remove();
        $("body").append(that.audio);
        var audioElement = that.audio[0];
        audioElement.addEventListener("canplaythrough", function () {
            if (!that.model.value) {
                return;
            }
            audioElement.play();
        });
        audioElement.addEventListener("ended", function () {
            that.events.afterAnnounce.fire();
        });
        audioElement.addEventListener("error", function () {
            if (!that.model.value) {
                return;
            }
            setTimeout(that.events.afterAnnounce.fire, 500);
        });
    };

    gpii.discoveryTool.enactors.selfVoicing.handleSelfVoicing = function (that) {
        if (that.model.value) {
            that.announce(that.options.strings.loaded);
        } else {
            delete that.currentElement;
            that.seen = [];
        }
    };

    gpii.discoveryTool.enactors.selfVoicing.announce = function (audio, url, lang, text) {
        audio.attr("src", fluid.stringTemplate(url, {
            lang: lang,
            text: text
        }));
    };

    var fullTrim = function (string) {
        string = string.trim();
        return string.replace(/\s{2,}/gi, " ");
    };

    gpii.discoveryTool.enactors.selfVoicing.announceNext = function (that) {
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
        if (!next && !that.currentElement.parentNode.nodeName !== "HTML") {
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