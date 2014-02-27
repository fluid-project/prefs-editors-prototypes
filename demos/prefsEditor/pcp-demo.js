/*!
Cloud4all Preferences Management Tools

Copyright 2013 OCAD University
Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global demo:true, fluid, jQuery, navigator, gpii*/
/*jslint white: true, funcinvoke: true, undef: true, newcap: true, regexp: true, browser: true, forin: true, continue: true, maxerr: 100, indent: 4 */

var demo = demo || {};

(function ($, fluid) {

    var prefsServerUrl = {
        production: "http://preferences.gpii.net/",
        development: "http://localhost:8081/"
    };

    var isDevMode = function () {
        var queryString = document.URL.split("?")[1] || ""; // gets the query string
        var params = {};
        fluid.each(queryString.split("&"), function (paramString) {
            var param = paramString.split("=");
            params[param[0]] = param[1];
        });
        return !!(params["mode"] === "dev");
    };

    $(document).ready(function () {
        fluid.prefs.create("#gpiic-pcp", {
            build: {
                gradeNames: ["gpii.pcp.progressiveEnhancement", "gpii.pcp.auxiliarySchema.common"],
                primarySchema: gpii.primarySchema
            },
            prefsEditor: {
                prefsEditorType: "gpii.prefsEditor",
                storeType: "gpii.prefs.gpiiSettingsStore",
                store: {
                    url: isDevMode() ? prefsServerUrl.development : prefsServerUrl.production
                },
                components: {
                    prefsEditorLoader: {
                        options: {
                            messagePrefix: "../../src/shared/adjusters/messages/" + gpii.prefs.i18n.getDefaultLanguage() + "/",
                            pmtUrl: "./index.html"
                        }
                    }
                }
            }
        });
    });

})(jQuery, fluid);
