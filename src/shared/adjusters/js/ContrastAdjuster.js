(function ($, fluid) {
	
	fluid.defaults("fluid.uiOptions.panels.contrast", {
		gradeNames: ["fluid.uiOptions.panels", "autoInit"],
		preferenceMap: {
			"fluid.uiOptions.contrast": {
				"model.value": "default"
			}
		},
		events: {
			onToggleContrastAdjusters: null
		},
		listeners: {
			"afterRender.bindEventPreferenceSwitchContrast": {
				"this": "{that}.dom.valueCheckbox",
				"method": "change",
				"args": ["{that}.events.onToggleContrastAdjusters.fire"]
			},
			"onToggleContrastAdjusters.showHide": {
				"this": "{that}.dom.contrastAdjusters",
				"method": "slideToggle"
			},
			"onToggleContrastAdjusters.printMsg": {
				"this": "console",
				"method": "log",
				"args": ["{that}.dom.contrastAdjusters"]
			},
			"afterRender.hideContrastAdjusters": {
				"this": "{that}.dom.contrastAdjusters",
				"method": "hide",
				"args": [0]
			}
		},
		selectors: {
            valueCheckbox: ".flc-uiOptions-constrastInput",
            headingLabel: ".flc-uiOptions-contrast-label",
            panelLabel: ".headerTitle",
            addToMyPreferencesLabel: ".addToMyPreferencesLabel",
            contrastAdjusters: ".flc-uiOptions-contrast .fl-uiOptions-category"         
		},
		protoTree: {
			valueCheckbox: "${value}",
            headingLabel: {messagekey: "contrast"},
            panelLabel: {messagekey: "addContrast"},
            addToMyPreferencesLabel: " "
		},
		components: {
            preview: {
                type: "fluid.uiOptions.preview",
                createOnEvent: "afterRender",
                container: ".flc-uiOptions-contrast .flc-uiOptions-preview-per-setting-frame",
                options: {
                    templateUrl: "../../src/shared/preview/html/uiOptionsContrastPreview.html",
                    events: {
                    	onPreviewLoad: null
                    },
                    listeners: {
                    	"onReady.bindEventPreviewLoad": {
							"this": "{that}.container",
							"method": "ready",
							"args": "{that}.events.onPreviewLoad.fire"
						},
						"onPreviewLoad.setPreviewText": {
							"this": "{that}.dom.previewText",
							"method": "text",
							"args": ["kjsdahfksdfhflksdj"]
						},
                    	"onReady.printPreviewText": {
							"this": "console",
							"method": "log",
							"args": ["{that}.dom.previewText"]
                    	}
                    },
                    selectors: {
                    	previewText: ".flc-uiOptions-preview-per-setting-label"
                    }
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
            target: "{that preview enhancer magnifier}.type"
        }],
		
        finalInitFunction: "fluid.uiOptions.panels.contrast.finalInit"
	});
    
    fluid.uiOptions.panels.contrast.finalInit = function (that) {
        that.events.afterRender.addListener(function (that) {
        	// Not very elegant solution
        	var previewframe = that.preview;
        	var previewText = that.options.parentBundle.lookup(["contrastPreviewText"]).template;
        	that.preview.events.onReady.addListener(function () {
        		previewframe.container.contents().find('body').find('.flc-uiOptions-preview-per-setting-label').text(previewText);
            });
        });
    };
})(jQuery, fluid);
