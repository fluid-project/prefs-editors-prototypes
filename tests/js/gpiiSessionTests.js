/*!
Copyright 2014 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/gpii/universal/LICENSE.txt
*/

// Declare dependencies
/*global fluid, jqUnit, expect, jQuery*/

// JSLint options
/*jslint white: true, funcinvoke: true, undef: true, newcap: true, nomen: true, regexp: true, bitwise: true, browser: true, forin: true, maxerr: 100, indent: 4 */

(function ($) {
    jqUnit.module("GPIISession Tests");

    var session = gpii.prefs.gpiiSession();
    var userToWorkWith = "alsa";
    var non_existent_user = "non_existent_user";
    
    var loginSuccessMockSettings = 
    {
        url: session.options.url + "user/" + userToWorkWith + "/login",
        responseText: "User with token " + userToWorkWith + " was successfully logged in."
    };
    
    var tokenSuccessMockSettings = 
    {
        url: session.options.url + "token",
        responseText: userToWorkWith
    };
    
    var logoutSuccessMockSettings = 
    {
        url: session.options.url + "user/" + userToWorkWith + "/logout",
        responseText: "User with token " + userToWorkWith + " was successfully logged out."
    };
    
    var loginErrorMockSettings = 
    {
        url: session.options.url + "user/" + non_existent_user + "/login",
        status: 500,
        contentType: 'application/json',
        responseText: '{"isError": true, "message": "not_found: missing"}'
    };
    
    var tokenErrorMockSettings = 
    {
        url: session.options.url + "token",
        status: 500,
        contentType: 'application/json',
        responseText: '{"isError": true, "message": "No user currently logged into the system"}'
    };
    
    var logoutErrorMockSettings = 
    {
        url: session.options.url + "user/" + userToWorkWith + "/logout",
        status: 500,
        contentType: 'application/json',
        responseText: '{"isError": true, "message": "There was an error logging out user ' + userToWorkWith + '"}'
    };
    
    jqUnit.test("no user initially logged in", function () {
        jqUnit.assertNoValue("Initially, no user should be logged in", session.options.loggedUser);
    });
    
    jqUnit.test("login user", function () {
        $.mockjaxClear();
        $.mockjax(loginSuccessMockSettings);

        session.login(userToWorkWith);
        jqUnit.assertEquals("User '" + userToWorkWith + "' should now be logged in", userToWorkWith, session.options.loggedUser);
        $.mockjaxClear();
    });
    
    jqUnit.test("get logged user", function () {
        $.mockjaxClear();
        $.mockjax(tokenSuccessMockSettings);
        
        session.getLoggedUser();
        jqUnit.assertEquals("Current user should be '" + userToWorkWith + "'", userToWorkWith, session.options.loggedUser);
        $.mockjaxClear();
    });

    jqUnit.test("logout user", function () {
        $.mockjaxClear();
        $.mockjax(logoutSuccessMockSettings);

        session.logout();
        jqUnit.assertNoValue("No user should be currently logged in", session.options.loggedUser);
        $.mockjaxClear();
    });

    jqUnit.test("login user error", function () {
        $.mockjaxClear();
        $.mockjax(loginErrorMockSettings);

        session.login(non_existent_user);
        jqUnit.assertNoValue("Should not be able to login 'non_existent_user'", session.options.loggedUser);
        $.mockjaxClear();
    });
    
    jqUnit.test("get logged user error", function () {
        $.mockjaxClear();
        $.mockjax(tokenErrorMockSettings);
        
        session.getLoggedUser();
        jqUnit.assertNoValue("No user should be currently logged into the system", session.options.loggedUser);
        $.mockjaxClear();
    });

    jqUnit.test("login " + userToWorkWith + " and logout user error", function () {
        $.mockjaxClear();
        $.mockjax(loginSuccessMockSettings);
        $.mockjax(logoutErrorMockSettings);

        session.login(userToWorkWith);
        session.logout();
        jqUnit.assertEquals("User '" + userToWorkWith + "' should still be logged in", userToWorkWith, session.options.loggedUser);
        $.mockjaxClear();
    });

    jqUnit.test("set logged user", function () {
        session.setLoggedUser(userToWorkWith);
        jqUnit.assertEquals("User '" + userToWorkWith + "' should have been logged in externally", userToWorkWith, session.options.loggedUser);
    });

    jqUnit.test("clear logged user", function () {
        session.clearLoggedUser();
        jqUnit.assertNoValue("User should have been logged out externally", session.options.loggedUser);
    });

})(jQuery);
