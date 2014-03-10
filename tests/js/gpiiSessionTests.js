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

/*
 * Prerequisites for tests to succeed:
 * 1) GPII is running at localhost:8081
 * 2) No user is currently logged in when tests start  
 */
(function ($) {
    jqUnit.module("GPIISession Tests");
    
    jqUnit.test("no user logged in", function () {
        var session = gpii.prefs.gpiiSession();
        jqUnit.assertNoValue("Initially, no user should be logged in", session.options.loggedUser);
    });
})(jQuery);
