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
    fluid.registerNamespace("gpii");

    gpii.primarySchema = {
        "gpii.primarySchema.fontSize": {
            "type": "number",
            "default": 12,
            "minimum": 1,
            "maximum": 1000,
            "divisibleBy": 1
        },
        "gpii.primarySchema.cursorSize": {
            "type": "number",
            "default": 1,
            "minimum": 1,
            "maximum": 5,
            "divisibleBy": 0.2
        },
        "gpii.primarySchema.magnifierEnabled": {
            "type": "boolean",
            "default": false
        },
        "gpii.primarySchema.magnification": {
            "type": "number",
            "default": 100,
            "minimum": 100,
            "maximum": 10000,
            "divisibleBy": 50
        },
        "gpii.primarySchema.magnificationPosition": {
            "type": "string",
            "default": "",
            "enum": ["lens", "dockedleft", "dockedtop", "fullscreen", "dockedright", "dockedbottom"]
        },
        "gpii.primarySchema.tracking": {
            "type": "string",
            "default": "",
            "enum": ["mousecursor", "textcursor", "keyboardfocus"]
        },
        "gpii.primarySchema.showCrosshairs": {
            "type": "boolean",
            "default": false
        },
        "gpii.primarySchema.contrast.theme": {
            "type": "string",
            "default": "default",
            "enum": ["default", "inverted", "bw", "wb", "by", "yb"]
        },
        "gpii.primarySchema.speakText": {
            "type": "boolean",
            "default": false
        },
        "gpii.primarySchema.wordsSpokenPerMinute": {
            "type": "number",
            "default": 130,
            "minimum": 0,
            "divisibleBy": 10
        },
        "gpii.primarySchema.volume": {
            "type": "number",
            "default": 80,
            "minimum": 0,
            "divisibleBy": 10
        },
        "gpii.primarySchema.screenReaderBrailleOutput": {
            "type": "boolean",
            "default": false
        },
        "gpii.primarySchema.universalVolume": {
            "type": "number",
            "default": 80,
            "minimum": 0,
            "divisibleBy": 10
        },
        "gpii.primarySchema.universalLanguage": {
            "type": "string",
            "default": "English",
            "enum": ["English", "French (français)", "German (Deutsch)", "Russian (Русский)"]
        }
    };

})(fluid);
