/*
Copyright 2013 OCAD University

Licensed under the Educational Community License (ECL), Version 2.0 or the New
BSD license. You may not use this file except in compliance with one these
Licenses.

You may obtain a copy of the ECL 2.0 License and BSD License at
https://github.com/fluid-project/infusion/raw/master/Infusion-LICENSE.txt
*/

// Declare dependencies
/*global demo:true, fluid, gpii, jQuery, window*/

// JSLint options
/*jslint white: true, funcinvoke: true, undef: true, newcap: true, nomen: true, regexp: true, bitwise: true, browser: true, forin: true, maxerr: 100, indent: 4 */

var demo = demo || {};
(function ($, fluid) {

    fluid.staticEnvironment["gpii--discoveryTool--demo"] = fluid.typeTag("gpii.discoveryTool.demo");

    var pathToTemplates = "../../src/discoveryTool/html/";
    var pathToTocTemplate = "../../src/shared/lib/infusion/components/tableOfContents/html/TableOfContents.html";

    demo.initSettingsStore = function () {
        fluid.globalSettingsStore();
    };

    demo.initPageEnhancer = function (customThemeName) {
        fluid.pageEnhancer({
            gradeNames: ["gpii.discoveryTool.enactorSet"],
            tocTemplate: pathToTocTemplate,
            classnameMap: {
                theme: {
                    "default": customThemeName
                }
            },
            events: {
                simplifyContentChanged: null
            },
            listeners: {
                simplifyContentChanged: {
                    listener: "gpii.discoveryTool.updateToc",
                    args: "{that}.tableOfContents"
                }
            }
        });
    };

    demo.initFatPanel = function (container) {
        gpii.discoveryTool(container, {
            templatePrefix: pathToTemplates,
            templateLoader: {
                options: {
                    gradeNames: ["gpii.discoveryTool.templateLoader"]
                }
            },
            uiOptions: {
                options: {
                    gradeNames: ["gpii.discoveryTool.panels", "gpii.discoveryTool.rootModel", "fluid.uiOptions.uiEnhancerRelay"]
                }
            }
        });
    };

    fluid.demands("fluid.uiOptions.fatPanel.renderIframe", ["gpii.discoveryTool"], {
        options: {
            markupProps: {
                src: "../../src/discoveryTool/html/FatPanelUIOptionsFrame.html"
            }
        }
    });

    fluid.demands("fluid.uiOptions.templateLoader", ["gpii.discoveryTool", "gpii.discoveryTool.demo"], {
        options: {
            templates: {
                uiOptions: "../../src/discoveryTool/html/DiscoveryTool.html",
                highContrast: "../../src/discoveryTool/html/HighContrastPanelTemplate.html",
                lowContrast: "../../src/discoveryTool/html/LowContrastPanelTemplate.html",
                increaseSize: "../../src/discoveryTool/html/IncreaseSizePanelTemplate.html",
                simplify: "../../src/discoveryTool/html/SimplifyPanelTemplate.html",
                spoken: "../../src/discoveryTool/html/SpokenPanelTemplate.html"
            }
        }
    });

})(jQuery, fluid);
