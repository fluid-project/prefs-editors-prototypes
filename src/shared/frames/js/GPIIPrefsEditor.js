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
    
    /**************************************
    * GPII Preferences Editor *
    **************************************/

    fluid.defaults("fluid.prefs.GPIIEditor", {
        gradeNames: ["fluid.prefs.prefsEditorLoader", "autoInit"],
        components: {
            prefsEditor: {
                container: "{that}.container",
                options: {
                    statusMessageID: "gpiic-prefsEditor-messageLine",
                    listeners: {
                        onReset: [{
                            listener: "{that}.applyChanges"
                        }],
                        onReady: {
                            listener: "{GPIIEditor}.events.onReady",
                            args: "{GPIIEditor}"
                        },
                        "onReady.addAriaControlsForLogoutLink": {
                            "this": "{that}.dom.logoutLink",
                            "method": "attr",
                            "args": ["aria-controls", "{that}.options.statusMessageID"]
                        },
                        "onReady.addStatusMessageID": {
                            "this": "{that}.dom.messageLineLabel",
                            "method": "attr",
                            "args": ["id", "{that}.options.statusMessageID"]
                        },
                        "onLogout.updateStatus": {
                            "this": "{that}.dom.messageLineLabel",
                            "method": "text",
                            "args": ["{that}.msgLookup.onLogoutMessage"]
                        }
                    },
                    selectors: {
                        messageLineLabel: ".gpiic-prefsEditor-messageLine"
                    }
                }
            }
        },
        events: {
            onReady: null
        }
    });
})(jQuery, fluid);
