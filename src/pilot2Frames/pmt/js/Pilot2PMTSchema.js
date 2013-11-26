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
    fluid.registerNamespace("gpii.prefs.pmt_pilot_2");

    gpii.prefs.pmt_pilot_2.primarySchema = {
        "gpii.primarySchema.cursorSize": {
            "type": "number",
            "default": 1,
            "minimum": 1,
            "maximum": 5,
            "divisibleBy": 0.2
        }
    };

    gpii.prefs.pmt_pilot_2.auxiliarySchema = {
        "namespace": "gpii.prefs.pmt_pilot_2.auxiliarySchema",
        "templatePrefix": "../../src/shared/adjusters/html/",
        "template": "../../src/pilot2Frames/pmt/html/PrefsEditorTemplate-PMT.html",
        "messagePrefix": "../../src/shared/adjusters/messages/en/", // default
        "message": "../../src/shared/frames/messages/" + gpii.prefs.i18n.getDefaultLanguage() + "/frames.json",
        "groups": {
            "combinedPMTPanels": {
                "container": ".gpiic-prefsEditor-preferences",
                "template": "%prefix/increaseSizeTemplate.html",
                "type": "gpii.panel.increaseSize",
                "panels": ["cursorSizePanel"]
            }
        },
        "cursorSizePanel": {
            "type": "gpii.primarySchema.cursorSize",
            "enactor": {
                "type": "gpii.enactor.cursorSize"
            },
            "panel": {
                "type": "gpii.adjuster.cursorSize",
                "container": ".gpiic-prefsEditor-cursorSize", // the css selector in the template where the panel is rendered
                "template": "%prefix/cursorSizeTemplate.html",
                "message": "%prefix/increaseSize.json"
            }
        }
    };
})(jQuery, fluid);
