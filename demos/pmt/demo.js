var demo = demo || {};
(function ($, fluid) {

    demo.initPMT = function (container, compOpts) {
        var uioBuilder = fluid.uiOptions.builder({
            primarySchema: fluid.uiOptions.pmt.primarySchema,
            auxiliarySchema: fluid.uiOptions.pmt.auxiliarySchema
        });
        var baseOpts = {
            uioType: "fluid.uiOptions.pmt"
        };
        $.extend(true, baseOpts, compOpts);
        return fluid.invokeGlobalFunction(uioBuilder.options.assembledUIOGrade, [container, baseOpts]);
    };
})(jQuery, fluid);
