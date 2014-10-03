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

    fluid.defaults("gpii.tests.pcpStatusMessages", {
        gradeNames: ["fluid.test.testEnvironment", "autoInit"],
        members: {
            pcp: {
                expander: {
                    funcName: "fluid.prefs.create",
                    args: [
                        "#gpiic-pcp",
                        {
                            build: {
                                gradeNames: ["gpii.pcp.progressiveEnhancement", "gpii.pcp.auxiliarySchema.common"],
                                primarySchema: gpii.primarySchema
                            },
                            prefsEditor: {
                                gradeNames: ["demo.pcp"]
                            }
                        }
                    ]
                }
            }
        },
        components: {
            pcpMessageTester: {
                type: "gpii.tests.pcpMessageTester"
            }
        }
    });

    fluid.defaults("gpii.tests.pcpMessageTester", {
        gradeNames: ["fluid.test.testCaseHolder", "autoInit"],
        messageDialogSelector: ".gpiic-pcp-statusMessage",
        invokers: {
            fireMessage: {
                "func": "{pcpStatusMessages}.pcp.prefsEditorLoader.prefsEditor.events.onNewMessage.fire",
                "args": ["{arguments}.0"]
            },
            closeMessage: {
                "func": "{pcpStatusMessages}.pcp.prefsEditorLoader.prefsEditor.closeMessageDialog"
            }
        },
        modules: [{
            name: "pcp creation",
            tests: [{
                expect: 1,
                name: "not undefined",
                func: "jqUnit.assertNotUndefined",
                args: ["pcp is not undefined", "{pcpStatusMessages}.pcp"]
            }, {
                expect: 3,
                name: "visibility check",
                sequence: [{
                    func: jqUnit.notVisible,
                    args: ["message dialog is hidden in the first place", "{that}.options.messageDialogSelector"]
                }, {
                    func: "{that}.fireMessage",
                    args: ["Howdy user!"]
                }, {
                    func: jqUnit.isVisible,
                    args: ["a message gets shown - the message dialog pops up", "{that}.options.messageDialogSelector"]
                }, {
                    func: "{that}.closeMessage"
                }, {
                    func: jqUnit.notVisible,
                    args: ["ahe message dialog is hidden after being closed", "{that}.options.messageDialogSelector"]
                }]
            }]
        }]
    });

    $(document).ready(function () {
        fluid.test.runTests([
            "gpii.tests.pcpStatusMessages"
        ]);
    });
})(jQuery);
