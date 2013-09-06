var demo = demo || {};
(function ($, fluid) {

    demo.initWithSchema = function (container, compOpts, uioType) {
    	var uioBuilder = fluid.uiOptions.builder({
            primarySchema: fluid.uiOptions.pmt.primarySchema,
            auxiliarySchema: fluid.uiOptions.pmt.auxiliarySchema
        });
        var baseOpts = {
            uioType: uioType
        };
        $.extend(true, baseOpts, compOpts);
        return fluid.invokeGlobalFunction(uioBuilder.options.assembledUIOGrade, [container, baseOpts]);
    };

    demo.initFullWithPreview = function (container, options) {
        return demo.initWithSchema(container, options, "fluid.uiOptions.fullPreview");
    };

    demo.initFullNoPreview = function (container, options) {
        return demo.initWithSchema(container, options, "fluid.uiOptions.fullNoPreview");
    };

    demo.initFinishedEvent = function(){
    	// hide it on startup
        $(".fl-uiOptions-category").slideUp(0);
        $(".fl-uiOptions-category-hidden").slideUp(0);

        $("#preferenceSwitch").change(function(){
			if(this.checked) {
		        $(".fl-uiOptions-category").slideDown();
		    }
			else
			{
		        $(".fl-uiOptions-category").slideUp();
			}
		});

        $(".moreLess").click(function(){
        	if (!$('.fl-uiOptions-category-hidden').is(':visible')) {
		        $(".fl-uiOptions-category-hidden").slideDown();
		        $(".moreLess").text("- less");
		    }
			else
			{
		        $(".fl-uiOptions-category-hidden").slideUp();
		        $(".moreLess").text("+ more");
			}
		});
	}
})(jQuery, fluid);