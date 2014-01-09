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
    fluid.defaults("gpii.panel.volumeCollectivePanel", {
        gradeNames: ["fluid.prefs.compositePanel", "autoInit"],
        selectors: {
            volumeHeader: ".gpii-volumePresetButton-label"
        },
        protoTree: {
            volumeHeader: {messagekey: "volumePresetButtonLabel"}
        },
        members: {
            messageResolver: "{prefsEditorLoader}.msgBundle"
        }
    });

})(fluid);
