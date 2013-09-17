(function ($, fluid) {
	
	fluid.defaults("fluid.uiOptions.panels.magnifierFollows", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        preferenceMap: {
            "fluid.uiOptions.magnifierFollows": {
                "model.value": "",
                "controlValues.magnifierFollows": "enum"
            }
        },
        listeners: {
            afterRender: "{that}.style"
        },
        selectors: {
        	magnifierFollowsRow: ".flc-uiOptions-magnifierFollowsRow",
        	magnifierFollowsLabel: ".flc-uiOptions-magnifierFollows-label",
        	magnifierFollowsInput: ".flc-uiOptions-magnifierFollowsInput",
            label: ".flc-uiOptions-magnifierFollows-heading"
        },
        strings: {
        	magnifierFollows: {
                expander: {
                    func: "fluid.uiOptions.panels.magnifierFollows.lookupMsg",
                    args: ["{that}.options.parentBundle", "magnifierFollows", "{that}.options.controlValues.magnifierFollows"]
                }
            }
        },
        repeatingSelectors: ["magnifierFollowsRow"],
        protoTree: {
            label: {messagekey: "magnifierFollowsLabel"},
            expander: {
                type: "fluid.renderer.selection.inputs",
                rowID: "magnifierFollowsRow",
                labelID: "magnifierFollowsLabel",
                inputID: "magnifierFollowsInput",
                selectID: "magnifierFollows-radio",
                tree: {
                    optionnames: "${{that}.options.strings.magnifierFollows}",
                    optionlist: "${{that}.options.controlValues.magnifierFollows}",
                    selection: "${value}"
                }
            }
        },
        controlValues: {
        	magnifierFollows: ["mousecursor", "textcursor", "keyboardfocus"]
        },
        markup: {
            label: 	"<div class=\"fl-adjuster-icons fl-adjuster-icons-sept-12 fl-magnifierFollows-uio-icon\"></div>" +
            		"<div class=\"fl-adjuster-icons fl-adjuster-icons-sept-12 fl-magnifierFollows-uio-icon-check\"></div>" +
            		/*"%magnifierFollows" +*/
            		"<div class=\"fl-magnifierFollows-legend\">%magnifierFollows</div>" +
            		"<div class=\"fl-crossout\"></div>"
        },
        invokers: {
            style: {
                funcName: "fluid.uiOptions.panels.magnifierFollows.style",
                args: ["{that}.dom.magnifierFollowsLabel", "{that}.options.strings.magnifierFollows",
                    "{that}.options.markup.label", "{that}.options.controlValues.magnifierFollows",
                    "{that}.options.classnameMap.magnifierFollows"]
            }
        }
    });

	fluid.uiOptions.panels.magnifierFollows.lookupMsg = function (messageResolver, prefix, values) {
        var messages = [];
        fluid.each(values, function (value, key) {
            var looked = messageResolver.lookup([prefix + "." + value]);
            messages.push(looked ? looked.template : looked);
        });
        return messages;
    };

    fluid.uiOptions.panels.magnifierFollows.style = function (labels, strings, markup, magnifierFollows, style) {
        fluid.each(labels, function (label, index) {
            label = $(label);
            label.html(fluid.stringTemplate(markup, {
            	magnifierFollows: strings[index]
            }));
            label.addClass(style[magnifierFollows[index]]);
        });
    };
	
})(jQuery, fluid);
