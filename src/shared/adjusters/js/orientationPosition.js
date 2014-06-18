/*!
Cloud4all Preferences Management Tools

Copyright 2014 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global fluid, jQuery, gpii*/
/*jslint white: true, onevar: true, funcinvoke: true, forvar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

(function ($, fluid) {

    fluid.defaults("gpii.adjuster.orientationPosition", {
        gradeNames: ["fluid.prefs.panel", "gpii.adjuster.singleSelectionWithKeyboard", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.orientationPosition": {
                "model.orientationPosition": "default",
                "controlValues.orientationPosition": "enum"
            }
        },
        listeners: {
            onDomBind: "{that}.orientationPositionStyle"
        },
        selectors: {
        	orientationPositionRow: ".gpiic-increaseSize-orientationPositionRow",
            orientationPositionLabel: ".gpiic-increaseSize-orientationPositionLabel",
            orientationPositionInput: ".gpiic-increaseSize-orientationPositionInput",
            orientationPositionHeading: ".gpiic-increaseSize-orientationPositionHeading",
            singleSelectionLabels: ".gpiic-increaseSize-orientationPositionLabel",
            orientationPositionContainer: ".gpiic-increaseSize-orientationPositionContainer"
        },
        selectorsToIgnore: ["orientationPositionContainer"],
        protoTree: {
            expander: [
                {
                    type: "fluid.renderer.selection.inputs",
                    rowID: "orientationPositionRow",
                    labelID: "orientationPositionLabel",
                    inputID: "orientationPositionInput",
                    selectID: "orientationPosition-radio",
                    tree: {
                        optionnames: "${{that}.options.strings.orientationPosition}",
                        optionlist: "${{that}.options.controlValues.orientationPosition}",
                        selection: "${orientationPosition}"
                    }
                }
            ],
            orientationPositionHeading: {messagekey: "orientationPositionLabel"}
        },
        members: {
            messageResolver: "{prefsEditorLoader}.msgResolver"
        },
        stringArrayIndex: {
        	orientationPosition: ["orientationPosition-top", "orientationPosition-bottom", "orientationPosition-left", "orientationPosition-right"]
        },
        strings: {
        	orientationPosition: "{that}.msgLookup.orientationPosition"
        },
        repeatingSelectors: ["orientationPositionRow"],
        controlValues: {
        	orientationPosition: ["Top", "Bottom", "Left", "Right"]
        },
        markup: {
        	orientationPositionLabel: "<div class=\"gpii-prefsEditor-adjusterIcons gpii-increaseSize-orientationPositionIcon gpii-increaseSize-orientationPositionIconMain\"></div>" +
                    "<div class=\"gpii-prefsEditor-adjusterIcons gpii-increaseSize-orientationPositionIcon gpii-increaseSize-orientationPositionFrame\"></div>" +
                    "<div class=\"gpii-prefsEditor-adjusterIcons gpii-increaseSize-orientationPositionIcon gpii-increaseSize-orientationPositionBackground\"></div>" +
                    "<span class=\"fl-hidden-accessible\">%orientationPosition</span>"
        },
        invokers: {
            "orientationPositionStyle": {
                funcName: "gpii.adjuster.orientationPosition.style",
                args: ["{that}.dom.orientationPositionLabel", "{that}.options.strings.orientationPosition",
                    "{that}.options.markup.orientationPositionLabel", "{that}.options.controlValues.orientationPosition",
                    "{that}.options.classnameMap.orientationPosition", "{that}.dom.orientationPositionContainer",
                    "{that}.dom.orientationPositionHeading"],
                dynamic: true
            }
        }
    });

    gpii.adjuster.orientationPosition.style = function (labels, strings, markup, orientationPosition, style, container, heading) {
        fluid.each(labels, function (label, index) {
            label = $(label);
            label.html(fluid.stringTemplate(markup, {
            	orientationPosition: strings[index]
            }));
            label.addClass(style[orientationPosition[index]]);
            //label.attr("tooltip", strings[index]);
        });
        container.attr("aria-labelledby", gpii.ariaUtility.getLabelId(heading));
    };

})(jQuery, fluid);
