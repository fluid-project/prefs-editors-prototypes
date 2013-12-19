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
        gradeNames: ["fluid.prefs.compositePanel", "autoInit"],
        model: {
            moreLessEnabledSwitch: true
        },
        selectors: {
            visualAlternativesHeader: ".gpii-visualAlternativesPresetButton-label",
            preferenceSwitchExpanding: ".gpiic-visualAlternatives-preferenceSwitchExtra",
            expandingAdjusters: ".gpiic-visualAlternatives-hidden",
            moreLess: ".gpiic-visualAlternatives-category"
        },
        protoTree: {
            visualAlternativesHeader: {messagekey: "visualAlternativesPresetButtonLabel"},
            preferenceSwitchExpanding: "${moreLessEnabledSwitch}"
        },
        members: {
            messageResolver: "{prefsEditorLoader}.msgBundle"
        },
        listeners: {
            "afterRender.activateCombobox": {
                "funcName": "gpii.activateCombobox",
                "args": ["{that}",
                         "gpii_primarySchema",
                         "screenReaderLanguage"
                ]
            }
        },
        finalInitFunction: "baba"
    });

    baba = function (that) {
        hook = that;
    }
})(fluid);
