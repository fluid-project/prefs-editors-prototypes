/*!
Copyright 2015 CERTH

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/gpii/universal/LICENSE.txt
*/

(function ($) {
    "use strict";
    
    fluid.registerNamespace("gpii.tests.contextPanel");

    fluid.defaults("gpii.tests.contextPanel.pmtTestUtils", {
        gradeNames: ["gpii.pmt", "autoInit"],
        strings: {
            addSet: "add set",
            testMsg: "The ARIA value should be "
        }
    });

    fluid.defaults("gpii.tests.contextPanel.leftPanel", {
        gradeNames: ["fluid.test.testEnvironment", "autoInit"],
        components: {
            leftPan: {
                type: "gpii.tests.contextPanel.pmtTestUtils",
                container: ".gpiic-prefsEditor-contextContainer"
            },
            leftPanTester: {
                type: "gpii.tests.contextPanel.leftPanelTester"
            }
        }
    });

    fluid.defaults("gpii.tests.contextPanel.leftPanelTester", {
        gradeNames: ["fluid.test.testCaseHolder", "autoInit"],
        testOptions: {
            defaultInputStatus: false,
            newValue: true
        },
        modules: [{
            name: "Test left panel of PMT",
            expect: 1,
            tests: [{
                name: "Testing Aria",
                func: "gpii.tests.contextPanel.leftPanel.checkAria",
                args: ["{leftPan}.options.strings.testMsg", "{leftPan}.dom.addSetLink", "{leftPan}.options.strings.addSet"]
            }]
        }]
    });

    gpii.tests.contextPanel.leftPanel.checkAria = function (testMessage, elm, expected) {
        testMessage += expected;
        jqUnit.assertEquals(testMessage, expected, elm.attr("aria-label"));
    };

    $(document).ready(function () {
        fluid.test.runTests([
            "gpii.tests.contextPanel.leftPanel"
        ]);
    });
})(jQuery);
