/*!
Cloud4all Preferences Management Tools

Copyright 2013-2014 OCAD University
Copyright 2013 Astea

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

(function (fluid) {
    fluid.defaults("gpii.panel.visualAlternatives", {
        gradeNames: ["fluid.prefs.compositePanel", "gpii.panel.expandingAdjusters", "autoInit"],
        model: {
            moreLessEnabledSwitch: true,
            expandingAdjustersEnabledSwitch: false
        },
        selectors: {
            visualAlternativesHeader: ".gpii-visualAlternativesPresetButton-label",
            expandingAdjusters: ".gpiic-visualAlternatives-hidden",
            moreLess: ".gpiic-visualAlternatives-category",
            visualAlternativesHiddenPanel: ".gpiic-visualAlternatives-hiddenPanel",
            voicePitchInput: ".gpiic-voicePitch .gpiic-textfieldStepper-valueField",
            visualAlternativesMoreLess: ".gpiic-visualAlternativesMoreLess-label",
            speakTextContainer: ".gpiic-speakText-container",
            visualAlternativesSection: ".gpiic-visualAlternatives-section"
        },
        selectorsToIgnore: ["visualAlternativesHiddenPanel", "voicePitchInput", "visualAlternativesMoreLess", "speakTextContainer", "visualAlternativesSection"],
        protoTree: {
            visualAlternativesHeader: {messagekey: "visualAlternativesPresetButtonLabel"}
        },
        members: {
            messageResolver: "{prefsEditorLoader}.msgResolver"
        },
        listeners: {
        	"afterRender.setSectionName": {
                "this": "{that}.dom.visualAlternativesSection",
                "method": "attr",
                "args": ["aria-label", "{that}.msgLookup.visualAlternativesPresetButtonLabel"]
            },
            "afterRender.setExpandedAriaLabel": {
                "this": "{that}.dom.visualAlternativesHiddenPanel",
                "method": "attr",
                "args": ["aria-label", "{that}.msgLookup.additionalVisualAdjusters"]
            },
            "afterRender.setContainerAriaLabel": {
                "this": "{that}.dom.speakTextContainer",
                "method": "attr",
                "args": ["aria-label", "{that}.msgLookup.additionalVisualAdjusters"]
            },
            "afterRender.setExpandedAriaExpanded": {
                "listener": "{that}.setExpandedAriaExpanded"
            },
            "afterRender.addListenerForAriaExpanded": {
                "listener": "{that}.applier.modelChanged.addListener",
                "args": ["gpii_primarySchema_visualAlternativesMoreLess", "{that}.setExpandedAriaExpanded"]
            },
            "afterRender.bindVisualAlternativesMoreLessChange": {
                listener: "{that}.applier.modelChanged.addListener",
                args: ["gpii_primarySchema_visualAlternativesMoreLess", "{that}.setFocusOnVisualAlternativesMoreLess"]
            },
            "afterRender.setContainerAriaRelevant": "{that}.setAriaRelevant"
        },
        invokers: {
            toggleMoreLessInstant: {
                "funcName": "gpii.panel.expandingAdjusters.showOrHideDependingOnState",
                "args": [
                    "{that}.model.gpii_primarySchema_speakText",
                    "{that}.events.onShowMoreLess.fire",
                    "{that}.events.onHideMoreLess.fire",
                    0
                ],
                dynamic: true
            },
            setExpandedAriaExpanded: {
                "this": "{that}.dom.visualAlternativesHiddenPanel",
                "method": "attr",
                "args": ["aria-expanded", "{that}.model.gpii_primarySchema_visualAlternativesMoreLess"]
            },
            setFocusOnVisualAlternativesMoreLess: {
                funcName: "gpii.panel.visualAlternatives.setFocusOnVisualAlternativesMoreLess",
                args: ["{that}.dom.voicePitchInput", "{that}.dom.visualAlternativesMoreLess", "{that}.model.gpii_primarySchema_visualAlternativesMoreLess"]
            },
            setAriaRelevant: {
                funcName: "gpii.ariaUtility.setAriaRelevant",
                args: ["{that}.dom.speakTextContainer", "{that}.model.gpii_primarySchema_speakText"],
                dynamic: true
            }
        }
    });

    gpii.panel.visualAlternatives.setFocusOnVisualAlternativesMoreLess = function (voicePitchInputElement, visualAlternativesMoreLessElement, visualAlternativesMoreLessExpanded) {
        if (visualAlternativesMoreLessExpanded) {
            fluid.focus(voicePitchInputElement);
        } else {
            fluid.focus(visualAlternativesMoreLessElement);
        }
    };

})(fluid);
