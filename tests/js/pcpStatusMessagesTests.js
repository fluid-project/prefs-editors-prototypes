/*!
Copyright 2014 Astea

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

    fluid.defaults("gpii.tests.pcpCreationEnsurer", {
        gradeNames: ["fluid.eventedComponent", "autoInit"],
        listeners: {
            "onReady": {
                "funcName": "gpii.tests.pcpCreationEnsurer.runTestsWhenPCPIsReady",
                "args": ["{that}"]
            }
        }
    });

    gpii.tests.pcpCreationEnsurer.runTestsWhenPCPIsReady = function (that) {
        fluid.test.runTests([
            "gpii.tests.pcpStatusMessages"
        ]);
    };

    fluid.defaults("gpii.tests.pcpStatusMessages", {
        gradeNames: ["fluid.test.testEnvironment", "autoInit"],
        components: {
            pcpMessageTester: {
                type: "gpii.tests.pcpMessageTester"
            }
        }
    });

    fluid.defaults("gpii.tests.pcpMessageTester", {
        gradeNames: ["fluid.test.testCaseHolder", "autoInit"],
        invokers: {},
        modules: [{}]
    });

    $(document).ready(function () {
        var pcp = fluid.prefs.create("#gpiic-pcp", {
            build: {
                gradeNames: ["gpii.pcp.progressiveEnhancement", "gpii.pcp.auxiliarySchema.common"],
                primarySchema: gpii.primarySchema
            },
            prefsEditor: {
                gradeNames: ["demo.pcp", "gpii.tests.pcp"]
            }
        });
    });
})(jQuery);
