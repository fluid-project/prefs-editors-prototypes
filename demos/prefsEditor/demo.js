/*!
Cloud4all Preferences Management Tools

Copyright 2013 OCAD University
Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

var demo = demo || {};

(function ($, fluid) {
    "use strict";

    // TODO: for switching the PMT and PCP from production to development
    // mode is via a mode=dev query parameter. In the future we hope to
    // employ a system based around the kettle configuration that the rest
    // of GPII is using.
    demo.prefsServerUrl = {
        production: "http://preferences.gpii.net/",
        development: "http://localhost:8081/"
    };

    demo.isDevMode = function () {
        var queryString = document.URL.split("?")[1] || ""; // gets the query string
        var params = {};
        fluid.each(queryString.split("&"), function (paramString) {
            var param = paramString.split("=");
            params[param[0]] = param[1];
        });
        return (params.mode === "dev");
    };

    fluid.defaults("demo.prefsEd", {
        storeType: "gpii.prefs.gpiiSettingsStore",
        store: {
            url: demo.isDevMode() ? demo.prefsServerUrl.development : demo.prefsServerUrl.production
        },
        components: {
            prefsEditorLoader: {
                options: {
                    messagePrefix: "../../src/shared/adjusters/messages/" + gpii.prefs.i18n.getDefaultLanguage() + "/"
                }
            }
        }
    });

    fluid.defaults("demo.pmt", {
        gradeNames: ["demo.prefsEd"],
        prefsEditorType: "gpii.pmt",
        components: {
            prefsEditorLoader: {
                options: {
                    // Passes along any query parameters
                    pcpUrl: "./pcp.html" + window.location.search
                }
            }
        }
    });

    fluid.defaults("demo.pcp", {
        gradeNames: ["demo.prefsEd"],
        prefsEditorType: "gpii.prefsEditor",
        components: {
            prefsEditorLoader: {
                options: {
                    // Passes along any query parameters
                    pmtUrl: "./index.html" + window.location.search
                }
            }
        }
    });

})(jQuery, fluid);
