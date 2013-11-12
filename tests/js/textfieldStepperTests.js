/*!
Copyright 2013 OCAD University

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

    fluid.defaults("gpii.tests.textfieldStepper", {
        gradeNames: ["fluid.test.testEnvironment", "autoInit"],
        components: {
            stepper: {
                type: "gpii.textfieldStepper",
                container: ".gpiic-textfieldStepper",
                options: {
                    listeners: {
                        afterRender: "console.log"
                    },
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
        invokers: {
            decText: {
                "this": "{stepper}.dom.decrement",
                method: "text"
            },
            incText: {
                "this": "{stepper}.dom.increment",
                method: "text"
            },
            uitText: {
                "this": "{stepper}.dom.unit",
                method: "text"
            },
            inputValue: {
                "this": "{stepper}.dom.valueField",
                method: "val"
            }
        },
        modules: [{
            name: "gpii.textfieldStepper tests",
            tests: [{
                expect: 1,
                name: "decrement text",
                func: "gpii.assertText",
                args: ["{stepper}.dom.decrement", "{stepper}.options.strings.decrement"]
            }, {
                expect: 1,
                name: "increment text",
                func: "gpii.assertText",
                args: ["{stepper}.dom.increment", "{stepper}.options.strings.increment"]
            }, {
                expect: 1,
                name: "unit text",
                func: "gpii.assertText",
                args: ["{stepper}.dom.unit", "{stepper}.options.strings.unit"]
            }, {
                expect: 1,
                name: "input value",
                func: "gpii.assertValue",
                args: ["{stepper}.dom.valueField", "{stepper}.model.value"]
            }, {
                name: "Changing the value",
                expect: 12,
                sequence: [{
                    func: "{stepper}.increment"
                }, {
                    listenerMaker: "gpii.tests.makeStateChecker",
                    makerArgs: ["{stepper}.model", "{stepper}.dom.valueField", 3],
                    event: "{stepper}.events.afterRender"
                }, {
                    func: "{stepper}.decrement"
                }, {
                    listenerMaker: "gpii.tests.makeStateChecker",
                    makerArgs: ["{stepper}.model", "{stepper}.dom.valueField", 0],
                    event: "{stepper}.events.afterRender"
                }, {
                    jQueryTrigger: "click",
                    element: "{stepper}.dom.increment"
                }, {
                    listenerMaker: "gpii.tests.makeStateChecker",
                    makerArgs: ["{stepper}.model", "{stepper}.dom.valueField", 3],
                    event: "{stepper}.events.afterRender"
                }, {
                    jQueryTrigger: "click",
                    element: "{stepper}.dom.decrement"
                }, {
                    listenerMaker: "gpii.tests.makeStateChecker",
                    makerArgs: ["{stepper}.model", "{stepper}.dom.valueField", 0],
                    event: "{stepper}.events.afterRender"
                }, {
                    func: "gpii.tests.setInput",
                    args: ["{stepper}.dom.valueField", 2]
                }, {
                    listenerMaker: "gpii.tests.makeStateChecker",
                    makerArgs: ["{stepper}.model", "{stepper}.dom.valueField", 2],
                    event: "{stepper}.events.afterRender"
                }, {
                    func: "gpii.tests.setInput",
                    args: ["{stepper}.dom.valueField", 6]
                }, {
                    listenerMaker: "gpii.tests.makeStateChecker",
                    makerArgs: ["{stepper}.model", "{stepper}.dom.valueField", 5],
                    event: "{stepper}.events.afterRender"
                }, {
                    func: "gpii.tests.setInput",
                    args: ["{stepper}.dom.valueField", -6]
                }, {
                    listenerMaker: "gpii.tests.makeStateChecker",
                    makerArgs: ["{stepper}.model", "{stepper}.dom.valueField", -5],
                    event: "{stepper}.events.afterRender"
                }, {
                    func: "gpii.tests.setInput",
                    args: ["{stepper}.dom.valueField", "abc"]
                }, {
                    listenerMaker: "gpii.tests.makeStateChecker",
                    makerArgs: ["{stepper}.model", "{stepper}.dom.valueField", -5],
                    event: "{stepper}.events.afterRender"
                }]
            }]
        }]
    });

    gpii.assertText = function (elm, expected) {
        jqUnit.assertEquals("The text should be set.", expected, elm.text());
    };

    gpii.assertValue = function (elm, expected) {
        jqUnit.assertEquals("The value should be set.", expected, elm.val());
    };

    gpii.tests.click = function (elm) {
        elm.click();
    };

    gpii.tests.setInput = function (input, value) {
        input.val(value);
        input.change();
    };

    gpii.tests.makeStateChecker = function (model, input, expected) {
        return function () {
            jqUnit.assertEquals("The model should be updated", expected, model.value);
            jqUnit.assertEquals("The textfield's value should be set", expected, input.val());
        };
    };

    $(document).ready(function () {
        fluid.test.runTests([
            "gpii.tests.textfieldStepper"
        ]);
    });
})(jQuery);
