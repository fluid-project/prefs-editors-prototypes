/*
Copyright 2013 OCAD University
Copyright 2013 CERTH/HIT

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

// GPII store is for connecting the preference tools with the GPII server.
// The preference tools uses the cookie store by default, rather than the
// GPII store.
// To activate the GPII store in the preference tools, refer to comments in
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
        // instantiate the gpiiSession component
        components: {
            gpiiSession: {
                type: "gpii.prefs.gpiiSession"
            }
        },
        gpiiEntry: "http://registry.gpii.org/applications/gpii.prefs",
        invokers: {
            get: {
                funcName: "gpii.prefs.gpiiStore.get",
                args: ["{that}.options", "{gpiiSession}.options"]
            },
            set: {
                funcName: "gpii.prefs.gpiiStore.set",
                args: ["{arguments}.0", "{that}.options", "{gpiiSession}"]
            }
        }
    });

    gpii.prefs.gpiiStore.get = function (settings, sessionSettings) {
        var gpiiModel;

        if (sessionSettings.loggedUser != null) {

            var urlToPost = sessionSettings.loggedUser ? (sessionSettings.url + sessionSettings.loggedUser) : (sessionSettings.url);

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

    gpii.prefs.gpiiStore.set = function (model, settings, session) {
        var dataToSave = {};

        dataToSave[settings.gpiiEntry] = [{
            value: model
        }];

        var urlToPost = session.options.loggedUser ? (session.options.url + session.options.loggedUser) : (session.options.url);

        $.ajax({
            url: urlToPost,
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(dataToSave),
            success: function (data) {
                if (session.options.loggedUser != data.token) {
                    // new user, login
                    session.login(data.token);
                }
                fluid.log("POST: Saved to GPII server");
            },
            error: function () {
                fluid.log("POST: Error at saving to GPII server");
            }
        });
    };

    fluid.defaults("gpii.prefs.gpiiSettingsStore", {
        gradeNames: ["fluid.globalSettingsStore", "autoInit"],
        settingsStoreType: "gpii.prefs.gpiiStore",
        distributeOptions: [{
            source: "{that}.options.settingsStoreType",
            removeSource: true,
            target: "{that > settingsStore}.type"
        }/*, {
            source: "{that}.options.settingsStore",
            removeSource: true,
            target: "{that > settingsStore}.options"
        }*/]
    });

})(jQuery, fluid);
