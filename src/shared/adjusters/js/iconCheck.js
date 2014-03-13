/*!
Cloud4all Preferences Management Tools

Copyright 2013 CERTH/HIT
Copyright 2014 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global fluid, jQuery, gpii*/
/*jslint white: true, onevar: true, funcinvoke: true, forvar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

(function ($, fluid) {

    fluid.defaults("gpii.adjuster.iconCheck", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        listeners: {
            "onDomBind.iconCheckStyle": "{that}.iconCheckStyle"
        },
        selectors: {
            iconCheckAdjusterIcon: ".gpiic-iconCheckAdjusterIcon"
        },
        selectorsToIgnore: ["iconCheckAdjusterIcon"],
        "class": "",    // must be provided by implementors
        invokers: {
            iconCheckStyle: {
                "this": "{that}.dom.iconCheckAdjusterIcon",
                "method": "addClass",
                "args": ["{that}.options.class"]
            }
        }
    });

})(jQuery, fluid);