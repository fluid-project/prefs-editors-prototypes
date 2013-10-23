/*!
Cloud4all Preferences Management Tools

Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global fluid, jQuery, gpii*/
/*jslint white: true, onevar: true, funcinvoke: true, forvar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

(function ($, fluid) {
    
    fluid.defaults("gpii.uiOptions.panels.magnifierFollows", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        preferenceMap: {
            "http://registry.gpii.org/common/tracking": {
                "model.magnifierFollows": "",
                "controlValues.magnifierFollows": "enum"
            }
        },
        listeners: {
            afterRender: "{that}.magnifierFollowsStyle"
        },
        selectors: {
            magnifierFollowsRow: ".flc-uiOptions-magnifierFollowsRow",
            magnifierFollowsLabel: ".gpii-prefsEditor-magnifierFollows-label",
            magnifierFollowsInput: ".flc-uiOptions-magnifierFollowsInput",
            magnifierFollowsHeading: ".flc-uiOptions-magnifierFollows-heading"
        },
        strings: {
            magnifierFollows: {
                expander: {
                    func: "gpii.uiOptions.panels.magnifierFollows.lookupMsg",
                    args: ["{that}.options.parentBundle", "magnifierFollows", "{that}.options.controlValues.magnifierFollows"]
                }
            }
        },
        repeatingSelectors: ["magnifierFollowsRow"],
        controlValues: {
            magnifierFollows: ["mousecursor", "textcursor", "keyboardfocus"]
        },
        markup: {
            magnifierFollowsLabel:  "<div class=\"fl-adjuster-icons fl-adjuster-icons-sept-12 fl-magnifierFollows-uio-icon\"></div>" +
                    "<div class=\"fl-adjuster-icons fl-adjuster-icons-sept-12 fl-magnifierFollows-uio-icon-check\"></div>" +
                    /*"%magnifierFollows" +*/
                    "<div class=\"fl-magnifierFollows-legend\">%magnifierFollows</div>"
        },
        invokers: {
            magnifierFollowsStyle: {
                funcName: "gpii.uiOptions.panels.magnifierFollows.style",
                args: ["{that}.dom.magnifierFollowsLabel", "{that}.options.strings.magnifierFollows",
                    "{that}.options.markup.magnifierFollowsLabel", "{that}.options.controlValues.magnifierFollows",
                    "{that}.options.classnameMap.magnifierFollows"]
            }
        }
    });

    gpii.uiOptions.panels.magnifierFollows.lookupMsg = function (messageResolver, prefix, values) {
        var messages = [];
        fluid.each(values, function (value, key) {
            var looked = messageResolver.lookup([prefix + "." + value]);
            messages.push(looked ? looked.template : looked);
        });
        return messages;
    };

    gpii.uiOptions.panels.magnifierFollows.style = function (labels, strings, markup, magnifierFollows, style) {
        fluid.each(labels, function (label, index) {
            label = $(label);
            label.html(fluid.stringTemplate(markup, {
                magnifierFollows: strings[index]
            }));
            label.addClass(style[magnifierFollows[index]]);
        });
    };
    
})(jQuery, fluid);
