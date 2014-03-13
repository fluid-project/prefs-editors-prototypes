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
                    gradeNames: ["gpii.prefs.modelMonitor"],
                    listeners: {
                        onReset: [{
                            listener: "{that}.applyChanges"
                        }],
                        onReady: {
                            listener: "{GPIIEditor}.events.onReady",
                            args: "{GPIIEditor}"
                        }
                    }
                }
            }
        },
        events: {
            onReady: null
        }
    });
})(jQuery, fluid);
