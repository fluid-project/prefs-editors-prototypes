/*!
Cloud4all Preferences Management Tools

Copyright 2013 CERTH/HIT
Copyright 2014 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

(function ($, fluid) {
    "use strict";
    
    fluid.defaults("gpii.adjuster.followingElement.magnifier", {
        gradeNames: ["gpii.adjuster.followingElement", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.tracking": {
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
                    optionnames: "${{that}.msgLookup.followingElement}",
                    optionlist: "${{that}.options.controlValues.followingElement}",
                    selection: "${value}"
                }
            }
        },
        listeners: {
            "onDomBind.setInitialAria": {
                listener: "{that}.adjustAria",
                args: "{that}.model.value"
            }
        },
        modelListeners: {
            value: {
                listener: "{that}.adjustAria",
                args: ["{change}.value"]
            }
        }
    });

})(jQuery, fluid);
