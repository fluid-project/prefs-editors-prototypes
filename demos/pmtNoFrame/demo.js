/*!
Cloud4all Preferences Management Tools

Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global demo:true, fluid, jQuery, navigator, gpii*/
/*jslint white: true, funcinvoke: true, undef: true, newcap: true, regexp: true, browser: true, forin: true, continue: true, maxerr: 100, indent: 4 */

var demo = demo || {};

(function ($, fluid) {
    demo.initPMT = function (container, compOpts) {
        demo.builder = fluid.prefs.builder({
            primarySchema: gpii.primarySchema,
            auxiliarySchema: gpii.pmt.auxiliarySchema
        });

        demo.instantiatePMT(container, compOpts, "gpii.pmt", gpii.prefs.i18n.getDefaultLanguage());
    };

    demo.instantiatePMT = function (container, compOpts, prefsEditorType, language) {
        var baseOpts = {
            prefsEditorType: prefsEditorType,
            components: {
                prefsEditorLoader: {
                    options: {
                        messagePrefix: "../../src/shared/adjusters/messages/" + language + "/"
                    }
                }
            }
        };
        $.extend(true, baseOpts, compOpts);
        fluid.invokeGlobalFunction(demo.builder.options.assembledPrefsEditorGrade, [container, baseOpts]);
    };
})(jQuery, fluid);
