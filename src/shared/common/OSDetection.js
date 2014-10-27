/*!
Cloud4all Preferences Management Tools

Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

(function ($, fluid) {
    "use strict";

    fluid.registerNamespace("gpii.os");

    fluid.enhance.isWindowsPlatform = function () {
        return navigator.platform.toUpperCase().indexOf("WIN") !== -1;
    };

    fluid.enhance.isLinuxPlatform = function () {
        return navigator.platform.toUpperCase().indexOf("LINUX") !== -1;
    };

    fluid.enhance.check({
        "gpii.os.isWindowsPlatform": "fluid.enhance.isWindowsPlatform",
        "gpii.os.isLinuxPlatform": "fluid.enhance.isLinuxPlatform"
    });

    fluid.defaults("gpii.pcp.progressiveEnhancement", {
        gradeNames: ["fluid.progressiveCheckerForComponent"],
        componentName: "gpii.pcp.progressiveEnhancement",
        progressiveCheckerOptions: {
            checks: [
                {
                    feature: "{gpii.os.isWindowsPlatform}",
                    contextName: "gpii.pcp.auxiliarySchema.windows"
                },
                {
                    feature: "{gpii.os.isLinuxPlatform}",
                    contextName: "gpii.pcp.auxiliarySchema.linux"
                }
            ]
        }
    });
})(jQuery, fluid);
