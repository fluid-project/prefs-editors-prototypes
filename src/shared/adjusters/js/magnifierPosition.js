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

    fluid.defaults("gpii.adjuster.magnifierPosition", {
        gradeNames: ["fluid.prefs.panel", "gpii.adjuster.singleSelectionWithKeyboard", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.magnificationPosition": {
                "model.magnifierPosition": "default",
                "controlValues.magnifierPosition": "enum"
            }
        },
        listeners: {
            onDomBind: "{that}.magnifierPositionStyle"
        },
        selectors: {
            magnifierPositionRow: ".gpiic-increaseSize-magnifierPositionRow",
            magnifierPositionLabel: ".gpiic-increaseSize-magnifierPositionLabel",
            magnifierPositionInput: ".gpiic-increaseSize-magnifierPositionInput",
            magnifierPositionHeading: ".gpiic-increaseSize-magnifierPositionHeading"
        },
        protoTree: {
            expander: [
                {
                    type: "fluid.renderer.selection.inputs",
                    rowID: "magnifierPositionRow",
                    labelID: "magnifierPositionLabel",
                    inputID: "magnifierPositionInput",
                    selectID: "magnifierPosition-radio",
                    tree: {
                        optionnames: "${{that}.options.strings.magnifierPosition}",
                        optionlist: "${{that}.options.controlValues.magnifierPosition}",
                        selection: "${magnifierPosition}"
                    }
                }
            ],
            magnifierPositionHeading: {messagekey: "magnifierPositionLabel"}
        },
        members: {
            messageResolver: "{prefsEditorLoader}.msgBundle"
        },
        stringArrayIndex: {
            magnifierPosition: ["magnifierPosition-lens", "magnifierPosition-dockedleft", "magnifierPosition-dockedtop", "magnifierPosition-fullscreen", "magnifierPosition-dockedright", "magnifierPosition-dockedbottom"]
        },
        strings: {
            magnifierPosition: "{that}.stringBundle.magnifierPosition"
        },
        repeatingSelectors: ["magnifierPositionRow"],
        controlValues: {
            magnifierPosition: ["Lens", "LeftHalf", "TopHalf", "FullScreen", "RightHalf", "BottomHalf"]
        },
        markup: {
            magnifierPositionLabel: "<div class=\"gpii-prefsEditor-adjusterIcons gpii-increaseSize-magnifierPositionIcon gpii-increaseSize-magnifierPositionIconMain\"></div>" +
                    "<div class=\"gpii-prefsEditor-adjusterIcons gpii-increaseSize-magnifierPositionIcon gpii-increaseSize-magnifierPositionFrame\"></div>" +
                    "<div class=\"gpii-prefsEditor-adjusterIcons gpii-increaseSize-magnifierPositionIcon gpii-increaseSize-magnifierPositionBackground\"></div>" +
                    "<span class=\"fl-hidden-accessible\">%magnifierPosition</span>"
        },
        invokers: {
            "magnifierPositionStyle": {
                funcName: "gpii.adjuster.magnifierPosition.style",
                args: ["{that}.dom.magnifierPositionLabel", "{that}.options.strings.magnifierPosition",
                    "{that}.options.markup.magnifierPositionLabel", "{that}.options.controlValues.magnifierPosition",
                    "{that}.options.classnameMap.magnifierPosition", "{that}"],
                dynamic: true
            },
            setFocusHandlers: {
                funcName: "gpii.adjuster.singleSelectionWithKeyboard.setFocusHandlers",
                args: [
                    "{that}.options.selectors.magnifierPositionLabel"
                ]
            }
        }
    });

    gpii.adjuster.magnifierPosition.style = function (labels, strings, markup, magnifierPosition, style, that) {
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
