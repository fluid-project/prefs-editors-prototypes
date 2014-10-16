/*
Copyright 2013 OCAD University

Licensed under the Educational Community License (ECL), Version 2.0 or the New
BSD license. You may not use this file except in compliance with one these
Licenses.

You may obtain a copy of the ECL 2.0 License and BSD License at
https://github.com/fluid-project/infusion/raw/master/Infusion-LICENSE.txt
*/

// GPII store is for connecting the discovery tool with the GPII server.
// The discovery tool uses the cookie store by default, rather than the
// GPII store.
// To activate the GPII store in the discovery tool, refer to comments in
// http://issues.gpii.net/browse/GPII-185

(function ($, fluid) {
    "use strict";

    fluid.registerNamespace("gpii.explorationTool");

    /**
     * gpiiStore Subcomponent that uses GPII server for persistence.
     * It sends request to the GPII server to save and retrieve model information
     * @param {Object} options
     */
    fluid.defaults("gpii.explorationTool.gpiiStore", {
        gradeNames: ["fluid.prefs.dataSource", "autoInit"],
        url: "http://preferences.gpii.net/user/explorationTool-user-1",
        gpiiEntry: "http://registry.gpii.org/applications/gpii.explorationTool",
        invokers: {
            get: {
                funcName: "gpii.explorationTool.gpiiStore.get",
                args: ["{that}.options"]
            },
            set: {
                funcName: "gpii.explorationTool.gpiiStore.set",
                args: ["{arguments}.0", "{that}.options"]
            }
        }
    });

    gpii.explorationTool.gpiiStore.get = function (settings) {
        var gpiiModel;

        $.ajax({
            url: settings.url,
            type: "GET",
            dataType: "json",
            async: false,
            success: function (data) {
                gpiiModel = fluid.get(data, [settings.gpiiEntry, 0, "value"]);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                fluid.log("GET: Error at retrieving from GPII! Test status: " + textStatus);
                fluid.log(errorThrown);
            }
        });

        return gpiiModel;
    };

    gpii.explorationTool.gpiiStore.set = function (model, settings) {
        var dataToSave = {};

        dataToSave[settings.gpiiEntry] = [{
            value: model
        }];

        $.ajax({
            url: settings.url,
            type: "POST",
            contentType: "application/json",
            headers: {
                "X-CORS-REQUEST": "pingpong"
            },
            dataType: "json",
            data: JSON.stringify(dataToSave),
            success: function () {
                fluid.log("POST: Saved to GPII server");
            },
            error: function () {
                fluid.log("POST: Error at saving to GPII server");
            }
        });
    };

    fluid.defaults("gpii.explorationTool.gpiiSettingsStore", {
        gradeNames: ["autoInit", "fluid.globalSettingsStore"],
        storeType: "gpii.explorationTool.gpiiStore",
        distributeOptions: [{
            source: "{that}.options.storeType",
            removeSource: true,
            target: "{that > settingsStore}.type"
        }, {
            source: "{that}.options.settingsStore",
            removeSource: true,
            target: "{that > settingsStore}.options"
        }]
    });

})(jQuery, fluid);
