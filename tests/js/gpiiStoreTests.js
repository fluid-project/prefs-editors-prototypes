/*!
Copyright 2013 ASTEA

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
    fluid.registerNamespace("gpii.prefs.gpiiStore.tests");

    jqUnit.module("GPIIStore Tests");

    var store = gpii.prefs.gpiiStore();

    gpii.prefs.gpiiStore.tests.assertNoValue = function () {
        jqUnit.assertValue("Object should not be null or undefined.", store);
    }


    gpii.prefs.gpiiStore.tests.mockTest = function (testTitle, assertFunction, enabledMockSettings) {
        jqUnit.test(testTitle, function () {
            $.mockjaxClear();
            fluid.each(enabledMockSettings, $.mockjax);
            assertFunction();
            $.mockjaxClear();
        });
    };


    gpii.prefs.gpiiStore.tests.mockTest("Object should not be null or undefined.", gpii.prefs.gpiiStore.tests.assertNoValue);

})(jQuery);
