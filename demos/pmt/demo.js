var demo = demo || {};
var uioBuilder;
var defaultLanguage;

(function ($, fluid) {

    demo.initPMT = function (container, compOpts) {
        uioBuilder = fluid.uiOptions.builder({
            primarySchema: fluid.uiOptions.pmt.primarySchema,
            auxiliarySchema: fluid.uiOptions.pmt.auxiliarySchema
        });
        
        /* get browser default lang */
        if (navigator.userLanguage) {
            defaultLanguage = navigator.userLanguage.substring(0,2).toLowerCase();
        } else {
            defaultLanguage = navigator.language.substring(0,2).toLowerCase();
        }

        demo.instantiateUIO(container, compOpts, "fluid.uiOptions.pmt", defaultLanguage);
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
