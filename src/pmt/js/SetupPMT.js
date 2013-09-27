var language = "en";

function setupPMT(that){
	// hide it on startup
    $(".flc-uiOptions-increaseSizePanel .fl-uiOptions-category-hidden").slideUp(0);
    $(".flc-uiOptions-increaseSizePanel .fl-uiOptions-category").slideUp(0);

    $("#preferenceSwitchIncreaseSize").change(function(){
		if(this.checked) {
	        $(".flc-uiOptions-increaseSizePanel .fl-uiOptions-category").slideDown();
	    }
		else
		{
	        $(".flc-uiOptions-increaseSizePanel .fl-uiOptions-category").slideUp();
		}
	});

    $(".moreLess").click(function(){
    	if (!$('.fl-uiOptions-category-hidden').is(':visible')) {
	        $(".fl-uiOptions-category-hidden").slideDown();

	        var lessText = that.options.msgBundle.lookup(["less"]);
	        $(".moreLess").text("- " + (lessText ? lessText.template : lessText));
	    }
		else
		{
	        $(".fl-uiOptions-category-hidden").slideUp();

	        var moreText = that.fluid_uiOptions_panels_contrast.options.parentBundle.lookup(["more"]);
	        $(".moreLess").text("+ " + (moreText ? moreText.template : moreText));
		}
	});
    
    $(".fl-uiOptions-language-select").change (function () {
    	language = $(this).val();
    	
    	that.events.onUIOptionsRefresh.fire();
    }); 
    
    // TODO: is this the correct way? Could it be more declaratively?
    that.locate("increaseSizeHeader").text(that.options.strings.increaseSizeHeader);
    
    that.locate("addToMyPreferencesStar").attr("tooltip-checked", that.options.msgBundle.lookup(["tooltipChecked"]).template);
    that.locate("addToMyPreferencesStar").attr("tooltip-unchecked", that.options.msgBundle.lookup(["tooltipUnchecked"]).template);
    that.locate("languageLabel").text(that.options.msgBundle.lookup(["languageLabel"]).template);
    that.locate("saveButton").attr("value", that.options.msgBundle.lookup(["saveButtonText"]).template);
    that.locate("resetButton").attr("value", that.options.msgBundle.lookup(["resetButtonText"]).template);
    that.locate("cancelButton").attr("value", that.options.msgBundle.lookup(["cancelButtonText"]).template);
    that.locate("moreLess").text("+ " + that.options.msgBundle.lookup(["more"]).template);
}