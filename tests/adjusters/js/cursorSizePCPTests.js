/*!
Cloud4all Preferences Management Tools

Copyright 2014 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

(function () {
    "use strict";

    fluid.registerNamespace("gpii.tests");

    /***************************************************************************************
     * gpii.tests.prefsEditorLoader to be shared by panels that require {prefsEditorLoader}
     ***************************************************************************************/

    gpii.tests.messages = {
        "cursorSizeLabel": "Cursor Size"
    };

    var parentResolver = fluid.messageResolver({messageBase: gpii.tests.messages});

    fluid.defaults("gpii.tests.prefsEditorLoader", {
        gradeNames: ["fluid.eventedComponent", "autoInit"],
        strings: {},
        parentBundle: {
            expander: {
                funcName: "fluid.messageResolver",
                args: [{messageBase: {}, parents: [parentResolver]}]
            }
        },
        members: {
            msgResolver: "{prefsEditorLoader}.options.parentBundle"
        }
    });

    /***************************************************************************************
     * Tests for gpii.adjuster.cursorSizePCP
     ***************************************************************************************/

    var initialStepperValue = 200, min = 100, max = 500, step = 100;

    fluid.defaults("gpii.tests.cursorSizePCPTests", {
        gradeNames: ["fluid.test.testEnvironment", "autoInit"],
        components: {
            cursorSizePCP: {
                type: "gpii.adjuster.cursorSizePCP",
                container: ".gpiic-cursorSizePCP",
                createOnEvent: "{cursorSizePCPTester}.events.onTestCaseStart",
                options: {
                    gradeNames: ["gpii.tests.prefsEditorLoader"],
                    stepperTemplate: "../../../src/shared/components/textfieldStepper/html/textfieldStepperTemplate.html",
                    model: {
                        value: initialStepperValue
                    },
                    controlValues: {
                        cursorSize: {
                            min: min,
                            max: max,
                            step: step
                        }
                    },
                    renderOnInit: true
                }
            },
            cursorSizePCPTester: {
                type: "gpii.tests.cursorSizePCPTester"
            }
        }
    });

    gpii.tests.cursorSizePCPTests.testDefault = function (that) {
        jqUnit.assertEquals("The label has been rendered", gpii.tests.messages.cursorSizeLabel, that.locate("cursorSizeLabel").html());
        jqUnit.assertEquals("The initial model value for setting up the stepper has been rendered", initialStepperValue, that.cursorSizeStepper.locate("valueField").val());
    };

    gpii.tests.cursorSizePCPTests.pressStepper = function (that) {
        that.cursorSizeStepper.locate("increment").click();
    };

    gpii.tests.cursorSizePCPTests.checkModel = function (path, expectedValue) {
        return function (newModel) {
            jqUnit.assertEquals("Expected model value " + expectedValue + " at path " + path, expectedValue, fluid.get(newModel, path));
        };
    };

    fluid.defaults("gpii.tests.cursorSizePCPTester", {
        gradeNames: ["fluid.test.testCaseHolder", "autoInit"],
        modules: [{
            name: "Test the PCP cursor size adjuster",
            tests: [{
                expect: 3,
                name: "Test the rendering of the PCP cursor size adjuster",
                sequence: [{
                    listener: "gpii.tests.cursorSizePCPTests.testDefault",
                    event: "{cursorSizePCPTests cursorSizePCP}.events.onStepperReady"
                }, {
                    func: "gpii.tests.cursorSizePCPTests.pressStepper",
                    args: ["{cursorSizePCP}"]
                }, {
                    listenerMaker: "gpii.tests.cursorSizePCPTests.checkModel",
                    makerArgs: ["value", "300"],
                    spec: {path: "value", priority: "last"},
                    changeEvent: "{cursorSizePCP}.applier.modelChanged"
                }]
            }]
        }]
    });

    $(document).ready(function () {
        fluid.test.runTests([
            "gpii.tests.cursorSizePCPTests"
        ]);
    });

})();
