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
    
    fluid.defaults("gpii.adjuster.followingElement.screenReader", {
        gradeNames: ["gpii.adjuster.followingElement", "autoInit"],
        preferenceMap: {
            "screenReader.tracking": {
                "model.value": "",
                "controlValues.followingElement": "enum"
            }
        },
        protoTree: {
            followingElementHeading: {messagekey: "screenReaderFollowsLabel"},
            expander: {
                type: "fluid.renderer.selection.inputs",
                rowID: "followingElementRow",
                labelID: "followingElementLabel",
                inputID: "followingElementInput",
                selectID: "screenReaderTracking-radio",
                tree: {
                    optionnames: "${{that}.stringBundle.followingElement}",
                    optionlist: "${{that}.options.controlValues.followingElement}",
                    selection: "${value}"
                }
            }
        }
    });
    
})(jQuery, fluid);
