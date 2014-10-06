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
            },
            checkText: {
                "funcName": "jqUnit.assertEquals",
                "args": ["{arguments}.0", {
                    expander: {
                        "this": "{pcpStatusMessages}.pcp.prefsEditorLoader.prefsEditor.dom.messageLineLabel",
                        "method": "text"
                    }
                },
                "{arguments}.1"],
                "dynamic": true
            },
            fireSettingChange: {
                "func": "{pcpStatusMessages}.pcp.prefsEditorLoader.prefsEditor.events.onSettingChanged.fire"
            },
            fireLogout: {
                "func": "{pcpStatusMessages}.pcp.prefsEditorLoader.prefsEditor.events.onLogout.fire"
            }
        },
        modules: [{
            name: "message dialog",
            tests: [{
                expect: 1,
                name: "not undefined",
                func: "jqUnit.assertNotUndefined",
                args: ["pcp is not undefined", "{pcpStatusMessages}.pcp"]
            }, {
                expect: 3,
                name: "show and close single message visibility check",
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
                    args: ["the message dialog is hidden after being closed", "{that}.options.messageDialogSelector"]
                }]
            }, {
                expect: 7,
                name: "visibility check with multiple messages piling up",
                sequence: [{
                    func: jqUnit.notVisible,
                    args: ["message dialog is hidden in the first place", "{that}.options.messageDialogSelector"]
                }, {
                    func: "{that}.fireMessage",
                    args: ["First message"]
                }, {
                    func: jqUnit.isVisible,
                    args: ["a message gets shown", "{that}.options.messageDialogSelector"]
                }, {
                    func: "{that}.fireMessage",
                    args: ["Second message"]
                }, {
                    func: "{that}.checkText",
                    args: ["the first message is being shown", "First message"]
                }, {
                    func: "{that}.closeMessage"
                }, {
                    func: "{that}.checkText",
                    args: ["the second message is being shown", "Second message"]
                }, {
                    func: "{that}.fireMessage",
                    args: ["Repeating message"]
                }, {
                    func: "{that}.fireMessage",
                    args: ["Repeating message"]
                }, {
                    func: "{that}.fireMessage",
                    args: ["Repeating message"]
                }, {
                    func: "{that}.fireMessage",
                    args: ["Last message"]
                }, {
                    func: "{that}.closeMessage"
                }, {
                    func: "{that}.checkText",
                    args: ["the repeating message is being shown", "Repeating message"]
                }, {
                    func: "{that}.closeMessage"
                }, {
                    func: "{that}.checkText",
                    args: ["the repeating message is being shown only once though", "Last message"]
                }, {
                    func: "{that}.closeMessage"
                }, {
                    func: jqUnit.notVisible,
                    args: ["the message dialog is hidden after being closed", "{that}.options.messageDialogSelector"]
                }]
            }, {
                expect: 5,
                name: "firing events which trigger messages",
                sequence: [{
                    func: jqUnit.notVisible,
                    args: ["message dialog is hidden in the first place", "{that}.options.messageDialogSelector"]
                }, {
                    func: "{that}.fireSettingChange"
                }, {
                    func: jqUnit.isVisible,
                    args: ["model change triggers a message", "{that}.options.messageDialogSelector"]
                }, {
                    func: "{that}.checkText",
                    args: ["the appropriate text for model change is shown", "{pcpStatusMessages}.pcp.prefsEditorLoader.prefsEditor.msgLookup.onSettingChangedMessage"]
                }, {
                    func: "{that}.fireLogout"
                }, {
                    func: "{that}.closeMessage"
                }, {
                    func: "{that}.checkText",
                    args: ["the appropriate text for log out is shown", "{pcpStatusMessages}.pcp.prefsEditorLoader.prefsEditor.msgLookup.onLogoutMessage"]
                }, {
                    func: "{that}.closeMessage"
                }, {
                    func: jqUnit.notVisible,
                    args: ["the message dialog is hidden after being closed", "{that}.options.messageDialogSelector"]
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
