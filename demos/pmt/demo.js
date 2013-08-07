var demo = demo || {};
(function ($, fluid) {

    demo.initWithSchema = function (container, compOpts, uioType, template) {
    	var uioBuilder = fluid.uiOptions.builder({
            primarySchema: fluid.uiOptions.pmt.primarySchema,
            auxiliarySchema: fluid.uiOptions.pmt.auxiliarySchema
        });
        var baseOpts = {
            components: {
                uiOptions: {
                    type: uioType
                }
            }
        };
        $.extend(true, baseOpts, compOpts);
        return fluid.invokeGlobalFunction(uioBuilder.options.assembledUIOGrade, [container, baseOpts]);
    };

    demo.initFullWithPreview = function (container, options) {
        return demo.initWithSchema(container, options, "fluid.uiOptions.fullPreview", "%prefix/FullPreviewUIOptions.html");
    };

    demo.initFullNoPreview = function (container, options) {
        return demo.initWithSchema(container, options, "fluid.uiOptions.fullNoPreview", "%prefix/FullNoPreviewUIOptions.html");
    };

})(jQuery, fluid);