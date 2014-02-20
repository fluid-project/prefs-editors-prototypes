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

    fluid.defaults("gpii.adjuster.onOffSwitch", {
        gradeNames: ["fluid.prefs.panel", "autoInit"],
        selectors: {
            headingLabel: ".gpiic-onOffSwitch-label",
            valueCheckbox: ".gpiic-onOffSwitch-input",
            onOffSwitch: ".gpiic-prefsEditor-onOffSwitch"
        },
        selectorsToIgnore: ["onOffSwitch"],
        listeners: {
            "onDomBind.makeOnOffSwitchActivatable": {
                "this": "fluid",
                "method": "activatable",
                "args": ["{that}.dom.onOffSwitch", "{that}.triggerModelChangeOnActivate"]
            }
        },
        invokers: {
            triggerModelChangeOnActivate: {
                "funcName": "gpii.adjuster.onOffSwitch.triggerModelChangeOnActivate",
                "args": ["{that}", "{arguments}.0"]
            }
        }
    });
    
    gpii.adjuster.onOffSwitch.triggerModelChangeOnActivate = function (that, event) {
        that.locate("valueCheckbox").click();
        /*
         * This is needed because most modern browsers have the functionality of scrolling further
         * down when Space key is pressed. So, this is needed in order to suppress this functionality when the 
         * on/off switch has focus.
         */
        event.preventDefault();
    }
    
})(jQuery, fluid);
