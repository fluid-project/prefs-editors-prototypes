(function ($, fluid) {

    fluid.registerNamespace("fluid.uiOptions.pmt");

    fluid.uiOptions.pmt.primarySchema = {
        "fluid.uiOptions.lineSpace": {
            "type": "number",
            "default": 1,
            "minimum": 1,
            "maximum": 5,
            "divisibleBy": 0.2
        },/* ,
        "fluid.uiOptions.textFont": {
            "type": "string",
            "default": "",
            "enum": ["", "Times New Roman", "Comic Sans", "Arial", "Verdana"]
        },
        "fluid.uiOptions.tableOfContents": {
            "type": "boolean",
            "default": false
        } */
    };

    fluid.uiOptions.pmt.auxiliarySchema = {
        // The global values:
        "namespace": "fluid.uiOptions.constructed",
        "templatePrefix": "../../src/pmt/html/", // The common path to settings panel templates
        "template": "%prefix/FullPreviewUIOptions.html",
        "messagePrefix": "../../src/shared/lib/infusion/components/uiOptions/messages/",
        "message": "%prefix/uiOptions.json",

        // The preference-specific information:
        "lineSpace": {
            "type": "fluid.uiOptions.lineSpace",
            "enactor": {
                "type": "fluid.uiOptions.enactors.lineSpace",
                "fontSizeMap": {
                    "xx-small": "9px",
                    "x-small": "11px",
                    "small": "13px",
                    "medium": "15px",
                    "large": "18px",
                    "x-large": "23px",
                    "xx-large": "30px"
                }
            },
            "panel": {
                "type": "fluid.uiOptions.panels.lineSpace",
                "container": ".flc-uiOptions-line-space",  // the css selector in the template where the panel is rendered
                "template": "%prefix/UIOptionsTemplate-lineSpace.html",
                "message": "%prefix/lineSpace.json"
            }
        }/* ,
        "textFont": {
            "type": "fluid.uiOptions.textFont",
            "classes": {
                "": "",
                "Times New Roman": "fl-font-uio-times",
                "Comic Sans": "fl-font-uio-comic-sans",
                "Arial": "fl-font-uio-arial",
                "Verdana": "fl-font-uio-verdana"
            },
            "enactor": {
                "type": "fluid.uiOptions.enactors.textFont",
                "classes": "@textFont.classes"
            },
            "panel": {
                "type": "fluid.uiOptions.panels.textFont",
                "container": ".flc-uiOptions-text-font",  // the css selector in the template where the panel is rendered
                "classnameMap": {"textFont": "@textFont.classes"},
                "template": "%prefix/UIOptionsTemplate-textFont.html",
                "message": "%prefix/textFont.json"
            }
        },
        "tableOfContents": {
            "type": "fluid.uiOptions.tableOfContents",
            "enactor": {
                "type": "fluid.uiOptions.enactors.tableOfContents",
                "tocTemplate": "../../src/shared/lib/infusion/components/tableOfContents/html/TableOfContents.html"
            },
            "panel": {
                "type": "fluid.uiOptions.panels.layoutControls",
                "container": ".flc-uiOptions-layout-controls",  // the css selector in the template where the panel is rendered
                "template": "%prefix/UIOptionsTemplate-layout.html",
                "message": "%prefix/tableOfContents.json"
            }
        } */
    };

})(jQuery, fluid);
