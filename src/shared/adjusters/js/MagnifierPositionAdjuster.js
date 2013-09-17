(function ($, fluid) {
	
	fluid.defaults("fluid.uiOptions.panels.magnifierPosition", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        preferenceMap: {
            "fluid.uiOptions.magnifierPosition": {
                "model.value": "",
                "controlValues.magnifierPosition": "enum"
            }
        },
        listeners: {
            afterRender: "{that}.style"
        },
        selectors: {
            magnifierPositionRow: ".flc-uiOptions-magnifierPositionRow",
            magnifierPositionLabel: ".flc-uiOptions-magnifierPosition-label",
            magnifierPositionInput: ".flc-uiOptions-magnifierPositionInput",
            label: ".flc-uiOptions-magnifierPosition-heading"
        },
        strings: {
        	magnifierPosition: {
                expander: {
                    func: "fluid.uiOptions.panels.magnifierPosition.lookupMsg",
                    args: ["{that}.options.parentBundle", "magnifierPosition", "{that}.options.controlValues.magnifierPosition"]
                }
            }
        },
        repeatingSelectors: ["magnifierPositionRow"],
        protoTree: {
            label: {messagekey: "magnifierPositionLabel"},
            expander: {
                type: "fluid.renderer.selection.inputs",
                rowID: "magnifierPositionRow",
                labelID: "magnifierPositionLabel",
                inputID: "magnifierPositionInput",
                selectID: "magnifierPosition-radio",
                tree: {
                    optionnames: "${{that}.options.strings.magnifierPosition}",
                    optionlist: "${{that}.options.controlValues.magnifierPosition}",
                    selection: "${value}"
                }
            }
        },
        controlValues: {
            magnifierPosition: ["lens", "dockedleft", "dockedtop", "fullscreen", "dockedright", "dockedbottom"]
        },
        markup: {
            label: "<div class=\"fl-adjuster-icons fl-magnifierPosition-uio-icon fl-magnifierPosition-uio-icon-main\"></div>" +
		    		"<div class=\"fl-adjuster-icons fl-magnifierPosition-uio-icon fl-magnifierPosition-uio-frame\"></div>" +
		    		"<div class=\"fl-adjuster-icons fl-magnifierPosition-uio-icon fl-magnifierPosition-uio-background\"></div>" +
            		"<span class=\"fl-hidden-accessible\">%magnifierPosition</span>" +
            		"<div class=\"fl-crossout\"></div>"
        },
        invokers: {
            style: {
                funcName: "fluid.uiOptions.panels.magnifierPosition.style",
                args: ["{that}.dom.magnifierPositionLabel", "{that}.options.strings.magnifierPosition",
                    "{that}.options.markup.label", "{that}.options.controlValues.magnifierPosition",
                    "{that}.options.classnameMap.magnifierPosition"]
            }
        }
    });

	fluid.uiOptions.panels.magnifierPosition.lookupMsg = function (messageResolver, prefix, values) {
        var messages = [];
        fluid.each(values, function (value, key) {
            var looked = messageResolver.lookup([prefix + "." + value]);
            messages.push(looked ? looked.template : looked);
        });
        return messages;
    };

    fluid.uiOptions.panels.magnifierPosition.style = function (labels, strings, markup, magnifierPosition, style) {
        fluid.each(labels, function (label, index) {
            label = $(label);
            label.html(fluid.stringTemplate(markup, {
                magnifierPosition: strings[index]
            }));
            label.addClass(style[magnifierPosition[index]]);
            label.attr("tooltip", strings[index]);
        });
    };
	
})(jQuery, fluid);
