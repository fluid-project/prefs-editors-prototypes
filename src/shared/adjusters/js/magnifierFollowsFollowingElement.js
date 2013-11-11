/*!
Cloud4all Preferences Management Tools

Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global fluid, jQuery, gpii*/
/*jslint white: true, onevar: true, funcinvoke: true, forvar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

(function ($, fluid) {
    
    fluid.defaults("gpii.prefs.panel.followingElement.magnifier", {
        gradeNames: ["gpii.prefs.panel.followingElement", "autoInit"],
        preferenceMap: {
            "magnifier.tracking": {
                "model.value": "",
                "controlValues.followingElement": "enum"
            }
        },
        protoTree: {
            followingElementHeading: {messagekey: "magnifierFollowsLabel"},
            expander: {
                type: "fluid.renderer.selection.inputs",
                rowID: "followingElementRow",
                labelID: "followingElementLabel",
                inputID: "followingElementInput",
                selectID: "magnifierTracking-radio",
                tree: {
                    optionnames: "${{that}.options.strings.followingElement}",
                    optionlist: "${{that}.options.controlValues.followingElement}",
                    selection: "${value}"
                }
            }
        }
    });
    
})(jQuery, fluid);
