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
    fluid.registerNamespace("gpii.prefs.adjusters_pilot_2");

    gpii.prefs.adjusters_pilot_2.primarySchema = {
        "magnifier.invertColours": {
            "type": "boolean",
            "default": false
        }
    };

    gpii.prefs.adjusters_pilot_2.auxiliarySchema = {
        "namespace": "gpii.prefs.adjusters_pilot_2.auxiliarySchema",
        "templatePrefix": "../../src/shared/adjusters/html/",
        "template": "%prefix/adjustersPilots2.html",
        "messagePrefix": "../../src/shared/adjusters/messages/en/", // default
        "message": "%prefix/pmt.json",
        
        "magnifier.invertColours": {
            "type": "magnifier.invertColours",
            /*"enactor": {
                "type": "gpii.uiOptions.enactors.contrast"
            },*/
            "panel": {
                "type": "gpii.prefs.panel.magnifier.invertColours",
                "container": ".gpiic-increaseSize-magnifierInvertColours",
                "template": "%prefix/UIOptionsTemplate-magnifierInvertColours.html",
                "message": "%prefix/magnifierInvertColours.json"
            }
        }        
    };
})(jQuery, fluid);
