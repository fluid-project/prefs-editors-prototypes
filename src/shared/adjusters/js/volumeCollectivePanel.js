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
    "use strict";
    
    fluid.defaults("gpii.panel.volumeCollectivePanel", {
        gradeNames: ["fluid.prefs.compositePanel", "autoInit"],
        selectors: {
            volumeHeader: ".gpii-volumePresetButton-label",
            volumeSection: ".gpiic-volume-section"
        },
        selectorsToIgnore: ["volumeSection"],
        protoTree: {
            volumeHeader: {messagekey: "volumePresetButtonLabel"}
        },
        members: {
            messageResolver: "{prefsEditorLoader}.msgResolver"
        },
        listeners: {
            "afterRender.setSectionName": {
                "this": "{that}.dom.volumeSection",
                "method": "attr",
                "args": ["aria-label", "{that}.msgLookup.volumePresetButtonLabel"]
            }
        }
    });

})(fluid);
