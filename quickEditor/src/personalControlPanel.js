(function () {

    "use strict";

    var fluid = require("../../../universal/node_modules/infusion"); // This should be fixed - universal should be a dependency of prefsEditors.
    var gpii = fluid.registerNamespace("gpii");
    var spawn = require("child_process").spawn;
    var fs = require("fs");
    var jsdom = require("jsdom");
    var path = require("path");

    fluid.defaults("gpii.personalControlPanel", {
        gradeNames: ["fluid.littleComponent", "autoInit"],
        preInitFunction: "gpii.personalControlPanel.preInit",
        components: {
            initializer: {
                type: "gpii.personalControlPanel.initializer"
            }
        }
    });

    fluid.defaults("gpii.personalControlPanel.initializer", {
        gradeNames: ["fluid.eventedComponent", "autoInit"],
        preInitFunction: "gpii.personalControlPanel.initializer.preInit",
        defaultSetup: [ { id: "http://registry.gpii.org/common/fontSize",
                          preferenceName: "Font Size",
                          preferenceDescription: "Make letters bigger or smaller.",
                          valueSpace: {start: 8, end: 24, step: 1},
                          value: 12 },

                        { id: "http://registry.gpii.org/common/foregroundColor",
                          preferenceName: "Foreground Color",
                          preferenceDescription: "Change the color of letters.",
                          valueSpace: ["Black", "White", "Green", "Blue", "Yellow"],
                          value: "Black" },

                        { id: "http://registry.gpii.org/common/highContrast",
                          preferenceName: "High Contrast",
                          preferenceDescription: "",
                          valueSpace: "boolean",
                          value: false } ],
        prefix: __dirname,
        resources: {
            mainDialog: {
                templatePath: "content/deps/pcp_templates/pcpMainDialog.html",
                outputPath: "content/temp/pcpMainDialog.html"
            },
            index: {
                templatePath: "content/deps/pcp_templates/index.html",
                outputPath: "content/index.html"
            }
        },
        events: {
            onMainDialog: null,
            onIndex: null,
            onReadyToLaunch: {
                events: {
                    onMainDialog: "onMainDialog",
                    onIndex: "onIndex"
                },
                args: ["{gpii.personalControlPanel}"]
            }
        },
        listeners: {
            "onReadyToLaunch": "gpii.personalControlPanel.launch"
        }
    });

    gpii.personalControlPanel.preInit = function (that) {
        // TODO: Support multiple sessions like LifeCycleManager

        that.start = function (displayedPreferences) {
            that.initializer.init(displayedPreferences);
        };

        that.stop = function () {
            that.options.pcpInstance.kill();
            that.initializer.removeTemporaryFiles();
        };
    };

    gpii.personalControlPanel.initializer.preInit = function (that) {
        that.removeSpaces = function (str) {
            return str.replace(/ /g, "");
        };

        that.generateMainDialog = function (displayedPreferences) {
            var templatePath = path.join(that.options.prefix, that.options.resources.mainDialog.templatePath);
            var outputPath = path.join(that.options.prefix, that.options.resources.mainDialog.outputPath);

            var mainDialogTemplateSource = fs.readFileSync(templatePath, "utf8");

            jsdom.env({
                html: mainDialogTemplateSource,
                scripts: ["http://code.jquery.com/jquery.js"],
                done: function (errors, window) {
                    var $ = window.$;

                    for (var i = 0; i < displayedPreferences.length; ++i) {
                        var prefClass = "pcp-" + that.removeSpaces(displayedPreferences[i].preferenceName);
                        var div = "<div class=\"" + prefClass + " fl-uiOptions-layout fl-col-flex\"> </div>"
                        $(".fl-uiOptions-category").append(div);
                    }

                    var output = $("body").html();
                    fs.writeFile(outputPath, output, function (err) {
                        if(err || !fs.existsSync(outputPath)) {
                            fluid.fail("Could not load the main dialog");
                        } else {
                            that.events.onMainDialog.fire();
                        }
                    });
                }
            });
        };

        that.generateIndex = function (displayedPreferences) {
            var templatePath = path.join(that.options.prefix, that.options.resources.index.templatePath);
            var outputPath = path.join(that.options.prefix, that.options.resources.index.outputPath);

            var indexTemplateSource = fs.readFileSync(templatePath, "utf8");

            jsdom.env({
                html: indexTemplateSource,
                scripts: ["http://code.jquery.com/jquery.js"],
                done: function (errors, window) {
                    var $ = window.$;

                    $("body").attr("onload", "uiOptionsInit(" + JSON.stringify(displayedPreferences) + ")");
                    $(".jsdom").remove();

                    var output = $("html").html();
                    fs.writeFile(outputPath, output, function (err) {
                        if(err || !fs.existsSync(outputPath)) {
                            fluid.fail("Could not load the index");
                        } else {
                            that.events.onIndex.fire();
                        }
                    });
                }
            });
        };

        that.init = function (displayedPreferences) {
            displayedPreferences = displayedPreferences || that.options.defaultSetup;

            that.generateMainDialog(displayedPreferences);
            that.generateIndex(displayedPreferences);
        };

        that.removeTemporaryFiles = function () {
            var resources = that.options.resources;
            var outputPath;

            for (var res in resources) {
                outputPath = path.join(that.options.prefix, that.options.resources[res].outputPath);
                fs.unlink(outputPath);
            }
        };
    };

    gpii.personalControlPanel.launch = function (personalControlPanel) {
        personalControlPanel.options.pcpInstance = spawn(path.join(__dirname, "../../node_modules/node-webkit/nw"),
                                                         [path.join(__dirname, "content")]);
    };

})();
