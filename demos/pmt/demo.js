var demo = demo || {};
var uioBuilder;

(function ($, fluid) {

    demo.initPMT = function (container, compOpts) {
        uioBuilder = fluid.uiOptions.builder({
            primarySchema: fluid.uiOptions.pmt.primarySchema,
            auxiliarySchema: fluid.uiOptions.pmt.auxiliarySchema
        });
        demo.instantiateUIO(container, compOpts, "fluid.uiOptions.pmt", "en");
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
