/*!
Copyright 2015 CERTH

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/gpii/universal/LICENSE.txt
*/

(function ($) {
    "use strict";
    
    fluid.registerNamespace("gpii.tests");

    fluid.defaults("gpii.tests.autoAdjustControls", {
        gradeNames: ["gpii.adjuster.autoAdjust", "autoInit"],
        strings: {
            autoAdjustLabel: "Auto-adjust",
            autoAdjustDescription: "Preferences will be automatically adjusted based on background noise and ambient light levels.",
            label: "label",
            description: "description"
        },
        model: {
            autoAdjust: false
        }
    });
    
    fluid.defaults("gpii.tests.autoAdjust", {
        gradeNames: ["fluid.test.testEnvironment", "autoInit"],
        components: {
            autoAdjuster: {
                type: "gpii.tests.autoAdjustControls",
                container: ".gpii-onOffSwitch-container"
            },
            autoAdjustTester: {
                type: "gpii.tests.autoAdjustTester"
            }
        }
    });

    fluid.defaults("gpii.tests.autoAdjustTester", {
        gradeNames: ["fluid.test.testCaseHolder", "autoInit"],
        testOptions: {
            defaultInputStatus: false,
            newValue: true
        },
        modules: [{
            name: "Auto-adjust adjuster",
            expect: 4,
            tests: [{
                    name: "Description text",
                    func: "gpii.tests.autoAdjust.validateText",
                    args: ["{autoAdjuster}.options.strings.description", "{autoAdjuster}.dom.autoAdjustDescription", "{autoAdjuster}.options.strings.autoAdjustDescription"]
                }, {
                    name: "Label text",
                    func: "gpii.tests.autoAdjust.validateText",
                    args: ["{autoAdjuster}.options.strings.label", "{autoAdjuster}.dom.headingLabel", "{autoAdjuster}.options.strings.autoAdjustLabel"]
                }, {
                    name: "Verify checkbox state (unChecked)",
                    func: "gpii.tests.verifyCheckboxState",
                    args: ["The auto adjust option is not checked by default", "{that}.options.testOptions.defaultInputStatus", "{autoAdjuster}.dom.valueCheckbox"]
                }, {
                    name: "Validate autoAdjust",
                    expect: 1,
                    sequence: [{
                        func: "{autoAdjuster}.triggerModelChangeOnActivate",
                        args: ["{autoAdjuster}", "{autoAdjuster}.events.afterRender"]
                    }, {
                        name: "Verify checkbox state (checked)",
                        event: "{autoAdjuster}.events.afterRender",
                        func: "gpii.tests.verifyCheckboxState",
                        args: ["The auto adjust option is checked", "{that}.options.testOptions.newValue", "{autoAdjuster}.dom.valueCheckbox"]
                    }]
                }]
        }]
    });

    gpii.tests.autoAdjust.validateText = function (testMessage, elm, expected) {
        jqUnit.assertEquals("Valid " + testMessage + " text", expected, elm.text());
    };

    gpii.tests.verifyCheckboxState = function (message, expectedState, checkbox) {
        jqUnit.assertEquals(message, expectedState, checkbox.is(":checked"));
    };

    $(document).ready(function () {
        fluid.test.runTests([
            "gpii.tests.autoAdjust"
        ]);
    });
})(jQuery);
