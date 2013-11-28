/*!
Cloud4all Preferences Management Tools

Copyright 2013 OCAD University
Copyright 2013 Astea

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

var demo = demo || {};

(function ($, fluid) {

    $(document).ready(function () {
        fluid.prefs.create(".flc-prefsEditor", {
            build: {
                primarySchema: gpii.primarySchema,
                auxiliarySchema: gpii.pcp.auxiliarySchema
            },
            prefsEditor: {
                prefsEditorType: "gpii.speakText"
            }
        });
    });

})(jQuery, fluid);
