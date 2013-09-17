(function ($, fluid) {
	
	fluid.uiOptions.enactors.textSize.set = function (sizeInPt, that) {
        that.container.css("font-size", sizeInPt + "pt");
    };
    
})(jQuery, fluid);
