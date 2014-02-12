/*!
Cloud4all Preferences Management Tools

Copyright 2013 OCAD University
Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global fluid, jQuery*/
/*jslint white: true, onevar: true, funcinvoke: true, forvar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

(function ($, fluid) {

    fluid.defaults("gpii.adjuster.textSizePMT", {
        gradeNames: ["gpii.adjuster.textSizePCP", "autoInit"],
    });

    fluid.defaults("gpii.adjuster.textSizePMT.preview", {
        gradeNames: ["gpii.adjuster.previewWithText", "autoInit"],
        previewURL: "",
        previewEnactors: {
            textSize: {
                type: "gpii.enactor.textSize",
                container: "{enhancer}.container",
                options: {
                    gradeNames: ["gpii.enactors.previewConnections"]
                }
            },
            contrastTheme: {
                type: "gpii.enactor.contrastThemeNoPreview",
                container: "{enhancer}.container",
                options: {
                    gradeNames: ["gpii.enactors.previewConnections"]
                }
            }
        }
    });

})(jQuery, fluid);
