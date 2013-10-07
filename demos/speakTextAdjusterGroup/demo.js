var demo = demo || {};
(function ($, fluid) {
    demo.initGPII = function (container, compOpts) {
        var uioBuilder = fluid.uiOptions.builder({
            primarySchema: gpii.speakText.primarySchema,
            auxiliarySchema: gpii.speakText.auxiliarySchema
        });
        var baseOpts = {
            uioType: "gpii.speakText"
        };
        $.extend(true, baseOpts, compOpts);
        return fluid.invokeGlobalFunction(uioBuilder.options.assembledUIOGrade, [container, baseOpts]);
    };
})(jQuery, fluid);