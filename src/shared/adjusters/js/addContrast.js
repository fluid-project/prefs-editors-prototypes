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
    
    fluid.defaults("gpii.adjuster.addContrast", {
        gradeNames: ["fluid.prefs.compositePanel", "autoInit"],
        listeners: {
            /*"afterRender.setATTRaddToMyPreferencesLabel": {
                "this": "{that}.dom.addToMyPreferencesLabel",
                "method": "attr",
                "args": [{
                    "tooltip-checked": "{that}.options.strings.tooltipChecked",
                    "tooltip-unchecked": "{that}.options.strings.tooltipUnchecked"
                }]
            }*/
        },
        selectors: {
            panelLabel: ".gpiic-headerTitle"
            // markup of this element is disappearing if i add this, cannot set tooltips.
            //addToMyPreferencesLabel: ".gpiic-addToMyPreferencesLabel",
        },
        protoTree: {
            panelLabel: {messagekey: "changeContrast"}
        },
        members: {
            messageResolver: "{prefsEditorLoader}.msgBundle"
        }/*,
        strings: {
            tooltipChecked: "{that}.stringBundle.tooltipChecked",
            tooltipUnchecked: "{that}.stringBundle.tooltipUnchecked"
        }*/
    });
})(jQuery, fluid);
