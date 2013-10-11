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
			"afterRender.setContrastAdjusters": {
				listener: "fluid.uiOptions.panels.contrast.setContrastAdjusters",
				args: ["{that}.dom.contrastAdjusters", "{that}.model.value"]
			},
			"afterRender.setATTRaddToMyPreferencesLabel": {
				"this": "{that}.dom.addToMyPreferencesLabel",
				"method": "attr",
				"args": [{
					"tooltip-checked": "{that}.options.strings.tooltipChecked",
					"tooltip-unchecked": "{that}.options.strings.tooltipUnchecked",
				}]
			},
			"onCreate.init": "fluid.uiOptions.panels.contrast.init"
		},
		selectors: {
            valueCheckbox: ".flc-uiOptions-constrastInput",
            headingLabel: ".flc-uiOptions-contrast-label",
            panelLabel: ".headerTitle",
            addToMyPreferencesLabel: ".addToMyPreferencesLabel",
            contrastAdjusters: ".fl-uiOptions-category"         
		},
        selectorsToIgnore: ["contrastAdjusters"],
		protoTree: {
			valueCheckbox: "${value}",
            headingLabel: {messagekey: "contrast"},
            panelLabel: {messagekey: "addContrast"},
            addToMyPreferencesLabel: " "
		},
		strings: {
			tooltipChecked: {
				expander: {
					func: "fluid.uiOptions.pmt.lookupMsg",
					args: ["{uiOptionsLoader}.msgBundle", "tooltipChecked"]
				}
			},
			tooltipUnchecked: {
				expander: {
					func: "fluid.uiOptions.pmt.lookupMsg",
					args: ["{uiOptionsLoader}.msgBundle", "tooltipUnchecked"]
				}
			}
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
        }]
	});
    
    fluid.uiOptions.panels.contrast.init = function (that) {
        that.events.afterRender.addListener(function (that) {
        	// Not very elegant solution
        	var previewframe = that.preview;
        	var previewText = that.options.parentBundle.lookup(["contrastPreviewText"]).template;
        	that.preview.events.onReady.addListener(function () {
        		previewframe.container.contents().find('body').find('.flc-uiOptions-preview-per-setting-label').text(previewText);
            });
        });
    };

    fluid.uiOptions.panels.contrast.setContrastAdjusters = function (contrastAdjuster, flag) {
    	contrastAdjuster[flag ? "show" : "hide"]();
    };
})(jQuery, fluid);
