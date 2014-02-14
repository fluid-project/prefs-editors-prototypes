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
    fluid.defaults("gpii.panel.visualAlternatives", {
        gradeNames: ["fluid.prefs.compositePanel", "gpii.panel.expandingAdjusters", "autoInit"],
        model: {
            moreLessEnabledSwitch: true,
            expandingAdjustersEnabledSwitch: false
        },
        selectors: {
            visualAlternativesHeader: ".gpii-visualAlternativesPresetButton-label",
            preferenceSwitchExpanding: ".gpiic-visualAlternatives-preferenceSwitchExtra",
            expandingAdjusters: ".gpiic-visualAlternatives-hidden",
            moreLess: ".gpiic-visualAlternatives-category",
            visualAlternativesHiddenPanel: ".gpiic-visualAlternatives-hiddenPanel"
        },
        selectorsToIgnore: ["visualAlternativesHiddenPanel"],
        protoTree: {
            visualAlternativesHeader: {messagekey: "visualAlternativesPresetButtonLabel"},
            preferenceSwitchExpanding: "${expandingAdjustersEnabledSwitch}"
        },
        members: {
            messageResolver: "{prefsEditorLoader}.msgBundle"
        },
        listeners: {
            "afterRender.activateComboboxScreenReader": {
                "funcName": "gpii.activateCombobox",
                "args": ["{that}",
                         "gpii_primarySchema",
                         "screenReaderLanguage"
                ]
            },
            "afterRender.activateComboboxTextHighlighting": {
                "funcName": "gpii.activateCombobox",
                "args": ["{that}",
                         "gpii_primarySchema",
                         "textHighlighting"
                ]
            },
            "afterRender.setExpandedAriaLabel": {
                "listener": "{that}.setExpandedAriaLabel"
            },
            "afterRender.setExpandedAriaExpanded": {
                "listener": "{that}.setExpandedAriaExpanded"
            },
            "afterRender.addListenerForAriaExpanded": {
                "listener": "{that}.applier.modelChanged.addListener",
                "args": ["gpii_primarySchema_visualAlternativesMoreLess", "{that}.setExpandedAriaExpanded"]
            }
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
            setExpandedAriaLabel: {
                "this": "{that}.dom.visualAlternativesHiddenPanel",
                "method": "attr",
                "args": ["aria-label", "{that}.stringBundle.additionalVisualAdjusters"]
            },
            setExpandedAriaExpanded: {
                "this": "{that}.dom.visualAlternativesHiddenPanel",
                "method": "attr",
                "args": ["aria-expanded", "{that}.model.gpii_primarySchema_visualAlternativesMoreLess"]
            }
        }
    });

})(fluid);
