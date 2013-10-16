/*!
Cloud4all Preferences Management Tools

Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global demo:true, fluid, jQuery, navigator, uioBuilder:true, gpii*/
/*jslint white: true, funcinvoke: true, undef: true, newcap: true, regexp: true, browser: true, forin: true, continue: true, maxerr: 100, indent: 4 */

var demo = demo || {};
var uioBuilder;

(function ($, fluid) {
    demo.initPMT = function (container, compOpts) {
        uioBuilder = fluid.uiOptions.builder({
            primarySchema: gpii.uiOptions.pmt.primarySchema,
            auxiliarySchema: gpii.uiOptions.pmt.auxiliarySchema
        });
        
        demo.instantiateUIO(container, compOpts, "gpii.uiOptions.pmt", gpii.uiOptions.getDefaultLanguage());
    };
    
    demo.instantiateUIO = function (container, compOpts, uioType, language) {
        var baseOpts = {
            uioType: uioType,
            components: {
                uiOptionsLoader: {
                    options: {
                        messagePrefix: "../../src/shared/adjusters/messages/" + language + "/"
                    }
                }
            }
        };
        $.extend(true, baseOpts, compOpts);
        fluid.invokeGlobalFunction(uioBuilder.options.assembledUIOGrade, [container, baseOpts]);
    };
})(jQuery, fluid);
