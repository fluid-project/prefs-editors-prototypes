/*!
GPII Canopy MatchMaker Tests

Copyright 2012 OCAD University
Copyright 2012 Raising The Floor - International

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/gpii/universal/LICENSE.txt
*/

// Declare dependencies
/*global require, fluid, jqUnit, gpii, start*/

var fluid = fluid || require("universal");
var gpii = fluid.registerNamespace("gpii");

(function () {
    "use strict";

    fluid.registerNamespace("gpii.tests.prefEditors");

    gpii.tests.prefEditors.runTests = function() {
        jqUnit.module("prefEditors");
        jqUnit.test("prefEditors pass", function() {
            jqUnit.assertTrue("Passing pref editors test", true);
        });
    };

}());