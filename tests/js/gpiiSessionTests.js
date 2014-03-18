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
    fluid.registerNamespace("gpii.prefs.gpiiSession.tests");

    jqUnit.module("GPIISession Tests");

    // The session object to work with throughout the tests
    var session = gpii.prefs.gpiiSession();
    
    // Test data
    var userToWorkWith = "alsa";
    var non_existent_user = "non_existent_user";
    
    /*
     * Mock settings used in the various test scenarios.
     */
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
    
    /*
     * State-changing and assertion functions used in the various tests.
     */
    gpii.prefs.gpiiSession.tests.assertNoUserInitially = function () {
        jqUnit.assertNoValue("Initially, no user should be logged in", session.options.loggedUser);        
    };
    
    gpii.prefs.gpiiSession.tests.assertLoginUser = function () {
        session.login(userToWorkWith);
        jqUnit.assertEquals("User '" + userToWorkWith + "' should now be logged in", userToWorkWith, session.options.loggedUser);
    };
    
    gpii.prefs.gpiiSession.tests.assertGetLoggedUser = function () {
        session.getLoggedUser();
        jqUnit.assertEquals("Current user should be '" + userToWorkWith + "'", userToWorkWith, session.options.loggedUser);
    };
    
    gpii.prefs.gpiiSession.tests.assertLogoutUser = function () {
        session.logout();
        jqUnit.assertNoValue("No user should be currently logged in", session.options.loggedUser);
    };
    
    gpii.prefs.gpiiSession.tests.assertLoginUserError = function () {
        session.login(non_existent_user);
        jqUnit.assertNoValue("Should not be able to login 'non_existent_user'", session.options.loggedUser);
    };
    
    gpii.prefs.gpiiSession.tests.assertGetLoggedUserError = function () {
        session.getLoggedUser();
        jqUnit.assertNoValue("No user should be currently logged into the system", session.options.loggedUser);
    };
    
    gpii.prefs.gpiiSession.tests.assertLoginUserLogoutError = function () {
        session.login(userToWorkWith);
        session.logout();
        jqUnit.assertEquals("User '" + userToWorkWith + "' should still be logged in", userToWorkWith, session.options.loggedUser);
    };
    
    gpii.prefs.gpiiSession.tests.assertSetLoggedUser = function () {
        session.setLoggedUser(userToWorkWith);
        jqUnit.assertEquals("User '" + userToWorkWith + "' should have been logged in externally", userToWorkWith, session.options.loggedUser);
    };
    
    gpii.prefs.gpiiSession.tests.assertClearLoggedUser = function () {
        session.clearLoggedUser();
        jqUnit.assertNoValue("User should have been logged out externally", session.options.loggedUser);
    };
    
    /*
     * Reusable helper function that generates a test given:
     * 1) The test title
     * 2) The assertion function to be used in the test
     * 3) An array of enabled mock settings (if any) 
     */
    gpii.prefs.gpiiSession.tests.mockTest = function (testTitle, assertFunction, enabledMockSettings) {
        jqUnit.test(testTitle, function () {
            $.mockjaxClear();
            fluid.each(enabledMockSettings, $.mockjax);
            assertFunction();
            $.mockjaxClear();
        });
    };
    
    // Perform the various tests.
    gpii.prefs.gpiiSession.tests.mockTest("no user initially logged in", gpii.prefs.gpiiSession.tests.assertNoUserInitially);
    gpii.prefs.gpiiSession.tests.mockTest("login user", gpii.prefs.gpiiSession.tests.assertLoginUser, [loginSuccessMockSettings]);
    gpii.prefs.gpiiSession.tests.mockTest("get logged user", gpii.prefs.gpiiSession.tests.assertGetLoggedUser, [tokenSuccessMockSettings]);
    gpii.prefs.gpiiSession.tests.mockTest("logout user", gpii.prefs.gpiiSession.tests.assertLogoutUser, [logoutSuccessMockSettings]);
    gpii.prefs.gpiiSession.tests.mockTest("login user error", gpii.prefs.gpiiSession.tests.assertLoginUserError, [loginErrorMockSettings]);
    gpii.prefs.gpiiSession.tests.mockTest("get logged user error", gpii.prefs.gpiiSession.tests.assertGetLoggedUserError, [tokenErrorMockSettings]);
    gpii.prefs.gpiiSession.tests.mockTest("login " + userToWorkWith + " and logout user error", gpii.prefs.gpiiSession.tests.assertLoginUserLogoutError, [loginSuccessMockSettings, logoutErrorMockSettings]);
    gpii.prefs.gpiiSession.tests.mockTest("set logged user", gpii.prefs.gpiiSession.tests.assertSetLoggedUser);
    gpii.prefs.gpiiSession.tests.mockTest("clear logged user", gpii.prefs.gpiiSession.tests.assertClearLoggedUser);
    
})(jQuery);
