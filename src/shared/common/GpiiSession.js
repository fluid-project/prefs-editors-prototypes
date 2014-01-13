/*!
Cloud4all Preferences Management Tools

Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global fluid, jQuery, gpii*/
/*jslint white: true, onevar: true, funcinvoke: true, forvar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

(function ($, fluid) {

    fluid.registerNamespace("gpii.prefs");

    /**
     * gpiiSession Subcomponent that holds GPII session information.
     * It holds user token, performs login/logout and generates events for such actions.
     */
    fluid.defaults("gpii.prefs.gpiiSession", {
        gradeNames: ["fluid.eventedComponent", "autoInit"],
        url: "http://localhost:8081/user/",
        // Maybe we should be informed for currently logged user from GPII?
        // This is relevant, http://issues.gpii.net/browse/GPII-290
        loggedUser: null,
        events: {
            onLogin: null,
            onLogout: null
        },
        invokers: {
            login: {
                "funcName": "gpii.prefs.gpiiSession.login",
                "args": ["{that}", "{arguments}.0"]
            },
            logout: {
                "funcName": "gpii.prefs.gpiiSession.logout",
                "args": ["{that}"]
            }
        }
    });

    // make this component globally public through {gpiiSession}
    gpii.prefs.gpiiSession.finalInit = function (that) {
        fluid.staticEnvironment.gpiiSession = that;
    };

    gpii.prefs.gpiiSession.login = function (that, userToken) {
        if (userToken != null) {
            $.ajax({
                url: that.options.url + userToken + "/login",
                type: "GET",
                xhrFields: {
                    withCredentials: true
                },
                success: function (data) {
                    that.options.loggedUser = userToken;
                    that.events.onLogin.fire();
                    fluid.log("GET: " + data);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    fluid.log("GET: Error at logging in user " + userToken + "! Test status: " + textStatus);
                    fluid.log(errorThrown);
                }
            });
        }
    };

    gpii.prefs.gpiiSession.logout = function (that) {
        if (that.options.loggedUser != null) {
            $.ajax({
                url: that.options.url + that.options.loggedUser + "/logout",
                type: "GET",
                xhrFields: {
                    withCredentials: true
                },
                success: function (data) {
                    that.options.loggedUser = null;
                    that.events.onLogout.fire();
                    fluid.log("GET: " + data);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    fluid.log("GET: Error at logging out user " + that.settings.loggedUser + "! Test status: " + textStatus);
                    fluid.log(errorThrown);
                }
            });
        }
    };

})(jQuery, fluid);
