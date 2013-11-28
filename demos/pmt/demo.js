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
    demo.initGPII = function (container, compOpts) {
        var uioBuilder = fluid.prefs.builder({
            primarySchema: gpii.pmt.primarySchema,
            auxiliarySchema: gpii.pmt.auxiliarySchema
        });
        var baseOpts = {
            prefsEditorType: "gpii.pmt"
        };
        $.extend(true, baseOpts, compOpts);
        return fluid.invokeGlobalFunction(uioBuilder.options.assembledPrefsEditorGrade, [container, baseOpts]);
    };
})(jQuery, fluid);
