/*!
Cloud4all Preferences Management Tools

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
                auxiliarySchema: gpii.auxiliarySchema
            },
            prefsEditor: {
                prefsEditorType: "gpii.prefsEditor"
            }
        })
    });
})(jQuery, fluid);
