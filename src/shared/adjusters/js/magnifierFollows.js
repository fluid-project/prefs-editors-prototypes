/*
DEPRECATED - No need to maintain this adjuster.
The "Magnifier Follows" adjuster for pilots2 has different styling.
I will start work on that version and ping you when i have something ready for review.
*/

/*!
Cloud4all Preferences Management Tools

Copyright 2013 OCAD University
Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global fluid, jQuery, gpii*/
/*jslint white: true, onevar: true, funcinvoke: true, forvar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

(function ($, fluid) {

    fluid.defaults("gpii.adjuster.magnifierFollows", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.tracking": {
                "model.magnifierFollows": "",
                "controlValues.magnifierFollows": "enum"
            }
        },
        "classes": {
            "mousecursor": "gpii-increaseSize-magnifierFollowsMouseCursor gpii-increaseSize-magnifierFollowsIconLabel",
            "textcursor": "gpii-increaseSize-magnifierFollowsTextCursor gpii-increaseSize-magnifierFollowsIconLabel",
            "keyboardfocus": "gpii-increaseSize-magnifierFollowsKeyboardFocus gpii-increaseSize-magnifierFollowsIconLabel"
        },
        listeners: {
            onDomBind: "{that}.magnifierFollowsStyle"
        },
        selectors: {
            magnifierFollowsRow: ".gpiic-increaseSize-magnifierFollowsRow",
            magnifierFollowsLabel: ".gpiic-increaseSize-magnifierFollowsLabel",
            magnifierFollowsInput: ".gpiic-increaseSize-magnifierFollowsInput",
            magnifierFollowsHeading: ".gpiic-increaseSize-magnifierFollowsHeading"
        },
        protoTree: {
            magnifierFollowsHeading: {messagekey: "magnifierFollowsLabel"},
            expander: [
                {
                    type: "fluid.renderer.selection.inputs",
                    rowID: "magnifierFollowsRow",
                    labelID: "magnifierFollowsLabel",
                    inputID: "magnifierFollowsInput",
                    selectID: "magnifierFollows-radio",
                    tree: {
                        optionnames: "${{that}.options.strings.magnifierFollows}",
                        optionlist: "${{that}.options.controlValues.magnifierFollows}",
                        selection: "${magnifierFollows}"
                    }
                }
            ]
        },
        members: {
            messageResolver: "{prefsEditorLoader}.msgBundle"
        },
        stringArrayIndex: {
            magnifierFollows: ["magnifierFollows-mousecursor", "magnifierFollows-textcursor", "magnifierFollows-keyboardfocus"]
        },
        strings: {
            magnifierFollows: "{that}.stringBundle.magnifierFollows"
        },
        repeatingSelectors: ["magnifierFollowsRow"],
        controlValues: {
            magnifierFollows: ["mousecursor", "textcursor", "keyboardfocus"]
        },
        markup: {
            magnifierFollowsLabel:  "<div class=\"gpii-prefsEditor-adjusterIcons gpii-prefsEditor-adjusterIcons-sept-12 gpii-increaseSize-magnifierFollowsIcon\"></div>" +
                    "<div class=\"gpii-prefsEditor-adjusterIcons gpii-prefsEditor-adjusterIcons-sept-12 gpii-increaseSize-iconCheck gpii-increaseSize-magnifierFollowsIconCheck\"></div>" +
                    /*"%magnifierFollows" +*/
                    "<div class=\"gpii-increaseSize-magnifierFollowsLegend\">%magnifierFollows</div>"
        },
        invokers: {
            magnifierFollowsStyle: {
                funcName: "gpii.adjuster.magnifierFollows.style",
                args: ["{that}.dom.magnifierFollowsLabel", "{that}.options.strings.magnifierFollows",
                    "{that}.options.markup.magnifierFollowsLabel", "{that}.options.controlValues.magnifierFollows",
                    "{that}.options.classes"],
                    dynamic: true
            }
        }
    });

    gpii.adjuster.magnifierFollows.style = function (labels, strings, markup, magnifierFollows, style) {
        fluid.each(labels, function (label, index) {
            label = $(label);
            label.html(fluid.stringTemplate(markup, {
                magnifierFollows: strings[index]
            }));
            label.addClass(style[magnifierFollows[index]]);
        });
    };

})(jQuery, fluid);
