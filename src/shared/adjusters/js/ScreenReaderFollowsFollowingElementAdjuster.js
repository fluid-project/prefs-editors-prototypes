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
    
    fluid.defaults("gpii.prefs.panel.followingElement.screenReader", {
        gradeNames: ["gpii.prefs.panel.followingElement", "autoInit"],
        preferenceMap: {
            "screenReader.tracking": {
                "model.value": "",
                "controlValues.followingElement": "enum"
            }
        },
        selectors: {
            screenReaderTrackingRow: ".gpiic-followingElementRow",
            screenReaderTrackingLabel: ".gpiic-followingElementLabel",
            screenReaderTrackingInput: ".gpiic-followingElementInput"
        },
        repeatingSelectors: ["screenReaderTrackingRow"],
        protoTree: {
            followingElementHeading: {messagekey: "screenReaderFollowsLabel"},
            expander: {
                type: "fluid.renderer.selection.inputs",
                rowID: "screenReaderTrackingRow",
                labelID: "screenReaderTrackingLabel",
                inputID: "screenReaderTrackingInput",
                selectID: "screenReaderTracking-radio",
                tree: {
                    optionnames: "${{that}.options.strings.followingElement}",
                    optionlist: "${{that}.options.controlValues.followingElement}",
                    selection: "${value}"
                }
            }
        },
        invokers: {
            followingElementStyle: {
                funcName: "gpii.prefs.panel.followingElement.style",
                args: [
                    "{that}.dom.screenReaderTrackingLabel", "{that}.options.strings.followingElement",
                    "{that}.options.markup.followingElementLabel", "{that}.options.controlValues.followingElement",
                    "{that}.options.classnameMap.followingElement"
                ],
                dynamic: true
            }
        }
    });
    
})(jQuery, fluid);
