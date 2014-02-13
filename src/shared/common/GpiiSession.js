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
        url: "http://localhost:8081/",
        // Maybe we should be informed for currently logged user from GPII?
        // This is relevant, http://issues.gpii.net/browse/GPII-290
        loggedUser: null,
        events: {
            onLogin: null,
            onLogout: null,
            accountCreated: null,
            onGetLoggedUserSuccess: null,
            onGetLoggedUserError: null
        },
        invokers: {
            login: {
                "funcName": "gpii.prefs.gpiiSession.login",
                "args": ["{that}", "{arguments}.0"]
            },
            logout: {
                "funcName": "gpii.prefs.gpiiSession.logout",
                "args": ["{that}"]
            },
            getLoggedUser: {
                "funcName": "gpii.prefs.gpiiSession.getLoggedUser",
                "args": ["{that}", "{that}.events.onGetLoggedUserSuccess", "{that}.events.onGetLoggedUserError"]
            },
            setLoggedUser: {
                "funcName": "gpii.prefs.gpiiSession.setLoggedUser",
                "args": ["{that}", "{arguments}.0"]
            },
            clearLoggedUser: {
                "funcName": "gpii.prefs.gpiiSession.clearLoggedUser",
                "args": ["{that}"]
            }
        },
        listeners: {
            "onCreate.getLoggedUser": {
                "listener": "{that}.getLoggedUser"
            },
            "onGetLoggedUserSuccess.setLoggedUser": {
                "listener": "{that}.setLoggedUser"
            },
            "onGetLoggedUserError.clearLoggedUser": {
                "listener": "{that}.clearLoggedUser"
            },
            "accountCreated.loginUser": {
                "listener": "{that}.login"
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
                url: that.options.url + "user/" + userToken + "/login",
                type: "GET",
                // TODO: This is non-async because we want to serially streamline the logout/login that is triggered
                // by the GPIIStore "refresh" of system level applications when setting preferences.
                async: false,
                /*xhrFields: {
                    withCredentials: true
                },*/
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
                url: that.options.url + "user/" + that.options.loggedUser + "/logout",
                type: "GET",
                // TODO: This is non-async because we want to serially streamline the logout/login that is triggered
                // by the GPIIStore "refresh" of system level applications when setting preferences.
                async: false,
                /*xhrFields: {
                    withCredentials: true
                },*/
                success: function (data) {
                    that.options.loggedUser = null;
                    that.events.onLogout.fire();
                    fluid.log("GET: " + data);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    fluid.log("GET: Error at logging out user " + that.options.loggedUser + "! Test status: " + textStatus);
                    fluid.log(errorThrown);
                }
            });
        }
    };
    
    gpii.prefs.gpiiSession.getLoggedUser = function (that, onGetLoggedUserSuccessEvent, onGetLoggedUserErrorEvent) {
        $.ajax({
            url: that.options.url + "token",
            type: "GET",
            // TODO: This is non-async because we want the "loggedUser" to be set before any "get" or "set"
            // in the GPIIStore is invoked.
            async: false,
            /*xhrFields: {
                withCredentials: true
            },*/
            success: function (data) {
                fluid.log("GET: " + data);

                onGetLoggedUserSuccessEvent.fire(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                fluid.log("GET: Error at getting logged user's token! Test status: " + textStatus);
                fluid.log(errorThrown);
                
                onGetLoggedUserErrorEvent.fire();
            }
        });
    };

    gpii.prefs.gpiiSession.setLoggedUser = function (that, data) {
        that.options.loggedUser = data;
    };
    
    gpii.prefs.gpiiSession.clearLoggedUser = function (that) {
        that.options.loggedUser = null;
    };
    
})(jQuery, fluid);
