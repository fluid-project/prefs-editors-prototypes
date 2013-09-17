function setupPMTSliders(){
	// hide it on startup
    $(".flc-uiOptions-increaseSizePanel .fl-uiOptions-category").slideUp(0);
    $(".flc-uiOptions-increaseSizePanel .fl-uiOptions-category-hidden").slideUp(0);

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
	        $(".moreLess").text("- less");
	    }
		else
		{
	        $(".fl-uiOptions-category-hidden").slideUp();
	        $(".moreLess").text("+ more");
		}
	});
}