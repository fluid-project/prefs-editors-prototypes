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

    fluid.defaults("gpii.tests.contextPanel.pmt", {
        components: {
            pmt: {
                type: "gpii.pmt",
                container: ".gpiic-prefsEditor-contextContainer",
                createOnEvent: "onSettingsStoreReady",
                options: {
                    listeners: {
                        "onCreate.firePMTReady": "{gpii.tests.contextPanel.pmt}.events.onPMTReady"
                    }
                }
            },
            settingsStore: {
                type: "gpii.prefs.gpiiStore",
                options: {
                    listeners: {
                        "onCreate.fireSettingsStoreReady": "{gpii.tests.contextPanel.pmt}.events.onSettingsStoreReady"
                    }
                }
            }
        },
        events: {
            onSettingsStoreReady: null,
            onPMTReady: null
        },
        strings: {
            addSet: "add set",
            testMsg: "The ARIA value should be "
        }
    });
    
    fluid.defaults("gpii.tests.contextPanel.leftPanel", {
        gradeNames: ["fluid.test.testEnvironment", "autoInit"],
        components: {
            leftPan: {
                type: "gpii.tests.contextPanel.pmt",
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
            name: "Testing PMT",
            expect: 1,
            tests: [{
                /*expect: 1,
                name: "Test left panel of PMT",
                sequence: [{
                    listener: "gpii.tests.contextPanel.pmt.checkAria",
                    spec: {priority: "last"},
                    event: "{gpii.tests.contextPanel.pmt}.events.onPMTReady"
                }]*/
                //event: "{builderMunging > prefsEd}.events.onReady"
                name: "Testing Aria",
                func: "gpii.tests.contextPanel.leftPanel.checkAria",
                args: ["{leftPan}.options.strings.testMsg", "{leftPan > pmt}.dom.addSetLink", "{leftPan}.options.strings.addSet"]
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
