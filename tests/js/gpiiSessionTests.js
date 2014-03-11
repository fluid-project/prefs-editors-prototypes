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
    
    // mock the /login request
    $.mockjax({
        url: session.options.url + "user/" + userToWorkWith + "/login",
        responseText: "User with token " + userToWorkWith + " was successfully logged in."
    });
    
    // mock the /token request
    $.mockjax({
        url: session.options.url + "token",
        responseText: userToWorkWith
    });
    
    // mock the /logout request
    $.mockjax({
        url: session.options.url + "user/" + userToWorkWith + "/logout",
        responseText: "User with token " + userToWorkWith + " was successfully logged out."
    });
    
    jqUnit.test("no user initially logged in", function () {
        jqUnit.assertNoValue("Initially, no user should be logged in", session.options.loggedUser);
    });
    
    jqUnit.test("login user", function () {
        session.login(userToWorkWith);
        jqUnit.assertEquals("User '" + userToWorkWith + "' should now be logged in", userToWorkWith, session.options.loggedUser);
    });
    
    jqUnit.test("get logged user", function () {
        session.getLoggedUser();
        jqUnit.assertEquals("Current user should be '" + userToWorkWith + "'", userToWorkWith, session.options.loggedUser);
    });

    jqUnit.test("logout user", function () {
        session.logout();
        jqUnit.assertNoValue("No user should be currently logged in", session.options.loggedUser);
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
