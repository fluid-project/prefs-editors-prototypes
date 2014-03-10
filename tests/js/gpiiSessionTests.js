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
    fluid.registerNamespace("gpii.tests");

    fluid.defaults("gpii.tests.gpiiSession", {
        gradeNames: ["fluid.test.testEnvironment", "autoInit"],
        components: {
            gpiiSession: {
                type: "gpii.prefs.gpiiSession"
            },
            gpiiSessionTester: {
                type: "gpii.tests.gpiiSessionTester"
            }
        }
    });

    fluid.defaults("gpii.tests.gpiiSessionTester", {
        gradeNames: ["fluid.test.testCaseHolder", "autoInit"],
        invokers: {
        },
        modules: [{
            name: "gpii.gpiiSession tests",
            tests: [
                {
                    expect: 1,
                    name: "not null",
                    func: "gpii.assertNotNull",
                    args: ["{gpiiSession}"]
                }
            ]
        }]
    });

    gpii.assertNotNull = function (value) {
        jqUnit.assertValue("Object should not be null or undefined.", value);
    };

    $(document).ready(function () {
        fluid.test.runTests([
            "gpii.tests.gpiiSession"
        ]);
    });
})(jQuery);
