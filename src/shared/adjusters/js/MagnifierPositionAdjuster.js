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
    
    fluid.defaults("gpii.uiOptions.panels.magnifierPosition", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        preferenceMap: {
            "http://registry.gpii.org/common/magnificationPosition": {
                "model.magnifierPosition": "",
                "controlValues.magnifierPosition": "enum"
            }
        },
        listeners: {
            afterRender: "{that}.style"
        },
        selectors: {
            magnifierPositionRow: ".flc-uiOptions-magnifierPositionRow",
            magnifierPositionLabel: ".flc-uiOptions-magnifierPosition-label",
            magnifierPositionInput: ".flc-uiOptions-magnifierPositionInput",
            label: ".flc-uiOptions-magnifierPosition-heading"
        },
        strings: {
            magnifierPosition: {
                expander: {
                    func: "gpii.uiOptions.panels.magnifierPosition.lookupMsg",
                    args: ["{that}.options.parentBundle", "magnifierPosition", "{that}.options.controlValues.magnifierPosition"]
                }
            }
        },
        repeatingSelectors: ["magnifierPositionRow"],
        controlValues: {
            magnifierPosition: ["lens", "dockedleft", "dockedtop", "fullscreen", "dockedright", "dockedbottom"]
        },
        markup: {
            label: "<div class=\"fl-adjuster-icons fl-magnifierPosition-uio-icon fl-magnifierPosition-uio-icon-main\"></div>" +
                    "<div class=\"fl-adjuster-icons fl-magnifierPosition-uio-icon fl-magnifierPosition-uio-frame\"></div>" +
                    "<div class=\"fl-adjuster-icons fl-magnifierPosition-uio-icon fl-magnifierPosition-uio-background\"></div>" +
                    "<span class=\"fl-hidden-accessible\">%magnifierPosition</span>" +
                    "<div class=\"fl-crossout\"></div>"
        },
        invokers: {
            style: {
                funcName: "gpii.uiOptions.panels.magnifierPosition.style",
                args: ["{that}.dom.magnifierPositionLabel", "{that}.options.strings.magnifierPosition",
                    "{that}.options.markup.label", "{that}.options.controlValues.magnifierPosition",
                    "{that}.options.classnameMap.magnifierPosition"]
            }
        }
    });

    gpii.uiOptions.panels.magnifierPosition.lookupMsg = function (messageResolver, prefix, values) {
        var messages = [];
        fluid.each(values, function (value, key) {
            var looked = messageResolver.lookup([prefix + "." + value]);
            messages.push(looked ? looked.template : looked);
        });
        return messages;
    };

    gpii.uiOptions.panels.magnifierPosition.style = function (labels, strings, markup, magnifierPosition, style) {
        fluid.each(labels, function (label, index) {
            label = $(label);
            label.html(fluid.stringTemplate(markup, {
                magnifierPosition: strings[index]
            }));
            label.addClass(style[magnifierPosition[index]]);
            label.attr("tooltip", strings[index]);
        });
    };
    
})(jQuery, fluid);
