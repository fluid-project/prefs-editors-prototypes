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

    var pathToTemplates = "../../src/explorationTool/html/";
    var pathToMessages = "../../src/explorationTool/messages/";
    var pathToTocTemplate = "../../src/shared/lib/infusion/components/tableOfContents/html/TableOfContents.html";

    demo.initSettingsStore = function () {
        return fluid.globalSettingsStore();
    };

    demo.initPageEnhancer = function (customThemeName) {
        return fluid.pageEnhancer({
            uiEnhancer: {
                gradeNames: ["gpii.explorationTool.enactorSet"],
                tocTemplate: pathToTocTemplate,
                classnameMap: {
                    theme: {
                        "default": customThemeName
                    }
                },
                moreTextSelector: "article img, article [role~='img']"
            }
        });
    };

    demo.initExplorationTool = function (container) {
        return gpii.explorationTool(container, {
            templatePrefix: pathToTemplates,
            messagePrefix: pathToMessages,
            templateLoader: {
                gradeNames: ["gpii.explorationTool.templateLoader"]
            },
            messageLoader: {
                gradeNames: ["gpii.explorationTool.messageLoader"]
            },
            uiOptions: {
                gradeNames: ["gpii.explorationTool.panels", "gpii.explorationTool.rootModel", "fluid.uiOptions.uiEnhancerRelay"]
            },
            iframeHtml: "../../src/explorationTool/html/FatPanelUIOptionsFrame.html"
        });
    };

})(jQuery, fluid);
