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

// GPII store is for connecting the discovery tool with the GPII server.
// The discovery tool uses the cookie store by default, rather than the
// GPII store.
// To activate the GPII store in the discovery tool, refer to comments in
// http://issues.gpii.net/browse/GPII-185

(function ($, fluid) {

    fluid.registerNamespace("gpii.prefs");

    /**
     * gpiiStore Subcomponent that uses GPII server for persistence.
     * It sends request to the GPII server to save and retrieve model information
     * @param {Object} options
     */
    fluid.defaults("gpii.prefs.gpiiStore", {
        gradeNames: ["fluid.prefs.dataSource", "autoInit"],
        gpiiEntry: "http://registry.gpii.org/applications/gpii.prefs",
        loggedUser: null,
        invokers: {
            get: {
                funcName: "gpii.prefs.gpiiStore.get",
                args: ["{that}.options"]
            },
            set: {
                funcName: "gpii.prefs.gpiiStore.set",
                args: ["{arguments}.0", "{that}.options"]
            }
        }
    });

    gpii.prefs.gpiiStore.get = function (settings) {
        var gpiiModel;
        if (settings.loggedUser != null) {

            var urlToPost = settings.loggedUser ? (settings.url + settings.loggedUser) : (settings.url);
            
            $.ajax({
                url: urlToPost,
                type: "GET",
                dataType: "json",
                async: false,
                success: function (data) {
                    gpiiModel = fluid.get(data, ["preferences", settings.gpiiEntry, 0, "value"]);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    fluid.log("GET: Error at retrieving from GPII! Test status: " + textStatus);
                    fluid.log(errorThrown);
                }
            });            
        }

        return gpiiModel;
    };

    gpii.prefs.gpiiStore.set = function (model, settings) {
        var dataToSave = {};

        dataToSave[settings.gpiiEntry] = [{
            value: model
        }];

        var urlToPost = settings.loggedUser ? (settings.url + settings.loggedUser) : (settings.url);
        
        $.ajax({
            url: urlToPost,
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(dataToSave),
            success: function (data) {
                if (settings.loggedUser != data.token) {
                    // new user, set the logged user on save
                    settings.loggedUser = data.token;
                    // also login here, do we pollute the store functionality with that?
                    // maybe logging in/out should be performed by another component?
                    // interaction through proper events?
                    $.ajax({
                        url: settings.url + settings.loggedUser + "/login",
                        type: "GET",
                        success: function (data) {
                            fluid.log("GET: " + data);
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            fluid.log("GET: Error at logging in user " + settings.loggedUser + "! Test status: " + textStatus);
                            fluid.log(errorThrown);
                        }
                    });
                }
                fluid.log("POST: Saved to GPII server");
            },
            error: function () {
                fluid.log("POST: Error at saving to GPII server");
            }
        });
    };

    fluid.defaults("gpii.prefs.gpiiSettingsStore", {
        gradeNames: ["autoInit", "fluid.globalSettingsStore"],
        storeType: "gpii.prefs.gpiiStore",
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
