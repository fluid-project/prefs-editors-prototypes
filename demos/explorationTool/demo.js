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

    demo.initOverviewPanel = function () {
        fluid.overviewPanel(".flc-overviewPanel", {
            resources: {
                template: {
                    href: "overviewPanelTemplate.html"
                }
            },
            strings: {
                titleBegin: "A",
                titleLinkText: "GPII",
                titleEnd: "preferences editor demo",
                componentName: "Preferences Exploration Tool",
                infusionCodeLinkText: "Exporation Tool code",
                feedbackText: "Have a comment?",
                feedbackLinkText: "Email us"
            },
            markup: {
                description: "The Preferences Exploration Tool offers a set of starter preferences to try - from reading content aloud so it's easier to follow along, to enhancing keyboard interactions so it's easier to use.",
                instructions: "<ul><li>To access the preference editor on this page, click on the \"doesn't make sense?\" link in the bottom right corner of the page.</li>" +
                                "<li>Try adjusting the appearance of the page by selecting options from the panel that opens. You will see the changes applied to the page immediately</li>" +
                                "<li>To try randomly selected changes, click the \"try something new\" link at the left end of the panel.</li></ul>"
            },
            links: {
                titleLink: "http://gpii.net",
                demoCodeLink: "https://github.com/fluid-project/prefsEditors/tree/master/demos/explorationTool",
                infusionCodeLink: "https://github.com/fluid-project/prefsEditors/",
                designLink: "http://wiki.fluidproject.org/display/fluid/Preference+Editing+Tools+Design",
                feedbackLink: "mailto:fluid-work@fluidproject.org?subject=Prefs Exploration Tool feedback"
            }
        });
    };

    demo.initCookieStore = function () {
        return fluid.globalSettingsStore();
    };

    demo.initGpiiStore = function (gpiiServerURL) {
        return gpii.explorationTool.gpiiSettingsStore({
            settingsStore: {
                url: gpiiServerURL
            }
        });
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
            prefsEditor: {
                gradeNames: ["gpii.explorationTool.panels", "gpii.explorationTool.rootModel", "fluid.prefs.uiEnhancerRelay"]
            },
            iframeHtml: "../../src/explorationTool/html/SeparatedPanelFrame.html"
        });
    };

})(jQuery, fluid);
