/*!
Copyright 2013 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/gpii/universal/LICENSE.txt
*/

(function ($) {
    "use strict";

    fluid.registerNamespace("gpii.tests");

    fluid.defaults("gpii.tests.textfieldStepper", {
        gradeNames: ["fluid.test.testEnvironment", "autoInit"],
        components: {
            stepper: {
                type: "gpii.textfieldStepper",
                container: ".gpiic-textfieldStepper",
                options: {
                    strings: {
                        unit: "pt"
                    },
                    model: {
                        value: 0
                    },
                    range: {
                        min: -5,
                        max: 5,
                        step: 3
                    },
                    renderOnInit: true
                }
            },
            textfieldStepperTester: {
                type: "gpii.tests.textfieldStepperTester"
            }
        }
    });

    fluid.defaults("gpii.tests.textfieldStepperTester", {
        gradeNames: ["fluid.test.testCaseHolder", "autoInit"],
        modules: [{
            name: "gpii.textfieldStepper tests",
            tests: [{
                expect: 1,
                name: "decrement text",
                func: "gpii.tests.assertText",
                args: ["{stepper}.dom.decrement", "{stepper}.options.strings.decrement"]
            }, {
                expect: 1,
                name: "increment text",
                func: "gpii.tests.assertText",
                args: ["{stepper}.dom.increment", "{stepper}.options.strings.increment"]
            }, {
                expect: 1,
                name: "unit text",
                func: "gpii.tests.assertText",
                args: ["{stepper}.dom.unit", "{stepper}.options.strings.unit"]
            }, {
                expect: 1,
                name: "input value",
                func: "gpii.tests.assertValue",
                args: ["{stepper}.dom.valueField", "{stepper}.model.value"]
            }, {
                expect: 1,
                name: "input field attribute - min",
                func: "gpii.tests.assertAttr",
                args: ["{stepper}.dom.valueField", "min", "{stepper}.options.range.min"]
            }, {
                expect: 1,
                name: "input field attribute - max",
                func: "gpii.tests.assertAttr",
                args: ["{stepper}.dom.valueField", "max", "{stepper}.options.range.max"]
            }, {
                expect: 1,
                name: "input field attribute - step",
                func: "gpii.tests.assertAttr",
                args: ["{stepper}.dom.valueField", "step", "{stepper}.options.range.step"]
            }, {
                name: "Changing the value",
                expect: 14,
                sequence: [{
                    func: "{stepper}.increment"
                }, {
                    listener: "gpii.tests.makeStateChecker",
                    args: ["{stepper}", 3],
                    event: "{stepper}.events.afterRender"
                }, {
                    func: "{stepper}.decrement"
                }, {
                    listener: "gpii.tests.makeStateChecker",
                    args: ["{stepper}", 0],
                    event: "{stepper}.events.afterRender"
                }, {
                    jQueryTrigger: "click",
                    element: "{stepper}.dom.increment"
                }, {
                    listener: "gpii.tests.makeStateChecker",
                    args: ["{stepper}", 3],
                    event: "{stepper}.events.afterRender"
                }, {
                    jQueryTrigger: "click",
                    element: "{stepper}.dom.decrement"
                }, {
                    listener: "gpii.tests.makeStateChecker",
                    args: ["{stepper}", 0],
                    event: "{stepper}.events.afterRender"
                }, {
                    func: "gpii.tests.setInput",
                    args: ["{stepper}.dom.valueField", 2]
                }, {
                    listener: "gpii.tests.makeStateChecker",
                    args: ["{stepper}", 2],
                    event: "{stepper}.events.afterRender"
                }, {
                    func: "gpii.tests.setInput",
                    args: ["{stepper}.dom.valueField", 6]
                }, {
                    listener: "gpii.tests.makeStateChecker",
                    args: ["{stepper}", 5],
                    event: "{stepper}.events.afterRender"
                }, {
                    func: "gpii.tests.setInput",
                    args: ["{stepper}.dom.valueField", -6]
                }, {
                    listener: "gpii.tests.makeStateChecker",
                    args: ["{stepper}", -5],
                    event: "{stepper}.events.afterRender"
                }]
            }]
        }]
    });

    gpii.tests.assertText = function (elm, expected) {
        jqUnit.assertEquals("The text should be set.", expected, elm.text());
    };

    gpii.tests.assertValue = function (elm, expected) {
        jqUnit.assertEquals("The value should be set.", expected, elm.val());
    };

    gpii.tests.assertAttr = function (elm, attribute, expected) {
        jqUnit.assertEquals("The value of the element attribute should be set.", expected, elm.attr(attribute));
    };

    gpii.tests.setInput = function (input, value) {
        input.val(value);
        input.change();
    };

    gpii.tests.makeStateChecker = function (that, expected) {
        jqUnit.assertEquals("The model should be updated", expected, that.model.value);
        jqUnit.assertEquals("The textfield's value should be set", expected, that.locate("valueField").val());
    };

    $(document).ready(function () {
        fluid.test.runTests([
            "gpii.tests.textfieldStepper"
        ]);
    });
})(jQuery);
