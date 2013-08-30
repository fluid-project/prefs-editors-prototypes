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

(function ($, fluid) {

    fluid.registerNamespace("gpii.discoveryTool");

    /**
     * gpiiStore Subcomponent that uses GPII server for persistence.
     * It sends request to the GPII server to save and retrieve model information
     * @param {Object} options
     */
    fluid.defaults("gpii.discoveryTool.gpiiStore", {
        gradeNames: ["fluid.uiOptions.dataSource", "autoInit"],
        url: "http://preferences.gpii.net/user/discoveryTool-user-1",
        isProcessing: false
    });

    fluid.demands("fluid.uiOptions.dataSource.get", "gpii.discoveryTool.gpiiStore", {
        funcName: "gpii.discoveryTool.gpiiStore.get",
        args: ["{that}.options"]
    });

    fluid.demands("fluid.uiOptions.dataSource.set", "gpii.discoveryTool.gpiiStore", {
        funcName: "gpii.discoveryTool.gpiiStore.set",
        args: ["{arguments}.0", "{that}.options"]
    });

    gpii.discoveryTool.gpiiStore.get = function (settings) {
        if (settings.isProcessing) {
            console.log("get rejected");
            return;
        }
        settings.isProcessing = true;

        $.ajax({
            url: settings.url,
            type: "GET",
            dataType: "json",
            success: function (data) {
                console.log("GET: Success");
                console.log(data);
                settings.isProcessing = false;
                return data;
            },
            error: function () {
                console.log("GET: Error at retrieving from GPII");
                settings.isProcessing = false;
                return;
            }
        });
    };

    gpii.discoveryTool.gpiiStore.set = function (model, settings) {
        if (settings.isProcessing) {
            console.log("post rejected");
            return;
        }
        settings.isProcessing = true;

        $.ajax({
            url: settings.url,
            type: "POST",
            data: JSON.stringify(model),
            contentType: "application/json",
            success: function (data) {
                console.log("POST: Saved to GPII server");
                settings.isProcessing = false;
            },
            error: function () {
                console.log("POST: Error at saving to GPII server");
                settings.isProcessing = false;
                return;
            }
        });
    };

    fluid.defaults("gpii.discoveryTool.gpiiSettingsStore", {
        gradeNames: ["autoInit", "fluid.globalSettingsStore"]
    });

    fluid.demands("fluid.uiOptions.store", ["fluid.globalSettingsStore", "gpii.discoveryTool.gpiiSettingsStore"], {
        funcName: "gpii.discoveryTool.gpiiStore"
    });

})(jQuery, fluid);
