(function ($, fluid) {
	
	fluid.defaults("fluid.uiOptions.panels.contrast", {
		gradeNames: ["fluid.uiOptions.panels", "autoInit"],
		preferenceMap: {
			"fluid.uiOptions.contrast": {
				"model.value": "default"
			}
		},
		selectors: {
            valueCheckbox: ".flc-uiOptions-constrastInput",
            headingLabel: ".flc-uiOptions-contrast-label"	
		},
		protoTree: {
			valueCheckbox: "${value}",
            headingLabel: {messagekey: "contrast"}
		},
		components: {
            preview: {
                type: "fluid.uiOptions.preview",
                createOnEvent: "afterRender",
                container: ".flc-uiOptions-contrast .flc-uiOptions-preview-per-setting-frame",
                options: {
                    templateUrl: "../../src/shared/preview/html/uiOptionsContrastPreview.html"
                }
            }
        },
        
        outerPreviewEnhancerOptions: "{originalEnhancerOptions}.options.originalUserOptions",
        emptyComponentType: "fluid.emptySubcomponent",
        distributeOptions: [{
            source: "{that}.options.outerPreviewEnhancerOptions",
            removeSource: true,
            target: "{that preview enhancer}.options"
        }, {
            source: "{that}.options.emptyComponentType",
            removeSource: true,
            target: "{that preview enhancer textSize}.type"
        }],
		
        finalInitFunction: "fluid.uiOptions.panels.contrast.finalInit"
	});
    
    fluid.uiOptions.panels.contrast.finalInit = function (that) {
        that.applier.modelChanged.addListener("value", function (that) {
        	if(that.value)
    		{
        		$(".flc-uiOptions-contrast .fl-uiOptions-category").slideDown();
    		}
        	else
    		{
        		$(".flc-uiOptions-contrast .fl-uiOptions-category").slideUp();
    		}
        });
        
        // need this in order not to always show content on save.
        that.events.afterRender.addListener(function (that) {
        	if(that.model.value)
    		{
        		$(".flc-uiOptions-contrast .fl-uiOptions-category").slideDown(0);
    		}
        	else
    		{
        		$(".flc-uiOptions-contrast .fl-uiOptions-category").slideUp(0);
    		}
        });
    };
	
})(jQuery, fluid);
