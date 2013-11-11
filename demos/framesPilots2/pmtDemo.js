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
        demo.prefsBuilder = fluid.prefs.builder({
            primarySchema: gpii.prefs.pmt_pilot_2.primarySchema,
            auxiliarySchema: gpii.prefs.pmt_pilot_2.auxiliarySchema
        });
        
        demo.instantiatePrefs(container, compOpts, "gpii.prefs.pmt_pilot_2", gpii.prefs.i18n.getDefaultLanguage());
    };
    
    demo.instantiatePrefs = function (container, compOpts, prefsType, language) {
        var baseOpts = {
            prefsEditorType: prefsType,
            components: {
                prefsEditorLoader: {
                    options: {
                        messagePrefix: "../../src/shared/i18n/messages/" + language + "/"
                    }
                }
            }
        };
        $.extend(true, baseOpts, compOpts);
        fluid.invokeGlobalFunction(demo.prefsBuilder.options.assembledPrefsEditorGrade, [container, baseOpts]);
    };
})(jQuery, fluid);
