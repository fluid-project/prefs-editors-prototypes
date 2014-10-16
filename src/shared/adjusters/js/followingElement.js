/*!
Cloud4all Preferences Management Tools

Copyright 2013 CERTH/HIT
Copyright 2014 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

(function ($, fluid) {
    "use strict";

    fluid.defaults("gpii.adjuster.followingElement", {
        gradeNames: ["fluid.prefs.panel", "gpii.adjuster.activatableLabelsClickOnActivate", "autoInit"],
        listeners: {
            "onDomBind.style": "{that}.followingElementStyle",
            "onDomBind.addAriaDesc": {
                listener: "gpii.adjuster.followingElement.addAriaDesc",
                args: ["{that}.dom.followingElementLabel", "{that}.dom.followingElementHeading"]
            },
            "onDomBind.addAriaLabel": {
                listener: "gpii.adjuster.followingElement.addAriaLabel",
                args: ["{that}.dom.followingElementLabel", "{that}.msgLookup.followingElement"]
            }
        },
        selectors: {
            followingElementRow: ".gpiic-followingElementRow",
            followingElementLabel: ".gpiic-followingElementLabel",
            followingElementInput: ".gpiic-followingElementInput",
            followingElementHeading: ".gpiic-followingElementHeading",
            activatableLabelsSelector: ".gpiic-followingElementLabel"
        },
        members: {
            messageResolver: "{prefsEditorLoader}.msgResolver"
        },
        stringArrayIndex: {
            followingElement: ["followingElement-mousecursor", "followingElement-textcursor", "followingElement-keyboardfocus"]
        },
        repeatingSelectors: ["followingElementRow"],
        controlValues: {
            followingElement: ["mouse", "caret", "focus"],
            followingElementBorder: ["topOnly", "bottomOnly", "noBorder"]
        },
        markup: {
            followingElementLabel:
                    "<span class='gpiic-iconCheckAdjusterIcon gpii-prefsEditor-adjusterIcons'></span>" +
                    "<span class='gpii-iconCheckAdjusterContainer'>" +
                    "   <span class='gpiic-iconCheckAdjusterDescription gpii-iconCheckAdjusterDescription gpii-table-cell-valign-label'>%followingElement</span>" +
                    "   <span class='gpii-table-cell-valign-label'>" +
                    "       <span class='gpii-prefsEditor-adjusterIcons gpii-iconCheckAdjusterCheckIcon'></span>" +
                    "   </span>" +
                    "</span>"
        },
        invokers: {
            followingElementStyle: {
                funcName: "gpii.adjuster.followingElement.style",
                args: [
                    "{that}.dom.followingElementLabel", "{that}.msgLookup.followingElement",
                    "{that}.options.markup.followingElementLabel", "{that}.options.controlValues.followingElement",
                    "{that}.options.classnameMap.followingElement",
                    "{that}.options.controlValues.followingElementBorder", "{that}.options.classnameMap.followingElementBorder"
                ],
                dynamic: true
            },
            adjustAria: {
                funcName: "gpii.adjuster.followingElement.adjustAria",
                args: ["{that}.dom.followingElementLabel", "{that}.options.controlValues.followingElement", "{arguments}.0"],
                dynamic: true
            }
        }
    });

    gpii.adjuster.followingElement.style = function (labels, strings, markup, followingElement, style, followingElementBorder, borderStyle) {
        fluid.each(labels, function (label, index) {
            label = $(label);
            label.html(fluid.stringTemplate(markup, {
                followingElement: strings[index]
            }));
            label.find(".gpiic-iconCheckAdjusterIcon").addClass(style[followingElement[index]]);

            if (index === 0) {
                label.addClass(borderStyle[followingElementBorder[0]]);
            } else if (index === labels.length - 1) {
                label.addClass(borderStyle[followingElementBorder[1]]);
            } else {
                label.addClass(borderStyle[followingElementBorder[2]]);
            }
        });
    };

    /**
     Most PMT and PCP checkboxes displayed on UI are using nested divs for cosmetic reason. It results
     in an issue that the regular way for grouping checkboxes that helps screen readers to announce
     the group title when focusing on the first checkbox stops working. The workaround here is to use
     "aria-describedby" to associate the title with each checkbox. This is not ideal.
     An example of a grouped checkbox: http://test.cita.illinois.edu/aria/checkbox/checkbox1.php
     **/
    gpii.adjuster.followingElement.addAriaDesc = function (labels, headingDom) {
        fluid.each(labels, function (label) {
            $(label).attr("aria-describedby", gpii.ariaUtility.getLabelId(headingDom));
        });
    };

    gpii.adjuster.followingElement.addAriaLabel = function (labels, strings) {
        fluid.each(labels, function (label, index) {
            $(label).attr("aria-label", strings[index]);
        });
    };

    gpii.adjuster.followingElement.adjustAria = function (checkboxArray, staticControls, valueArray) {
        fluid.each(checkboxArray, function (checkbox) {
            $(checkbox).attr("aria-checked", false);
        });

        fluid.each(valueArray, function (value) {
            var valueIndex = staticControls.indexOf(value);

            if (valueIndex !== -1) {
                $(checkboxArray[valueIndex]).attr("aria-checked", true);
            }
        });
    };

})(jQuery, fluid);
