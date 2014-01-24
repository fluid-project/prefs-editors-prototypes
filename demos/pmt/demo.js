/*!
Cloud4all Preferences Management Tools

Copyright 2013 OCAD University
Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global demo:true, fluid, jQuery, navigator, gpii*/
/*jslint white: true, funcinvoke: true, undef: true, newcap: true, regexp: true, browser: true, forin: true, continue: true, maxerr: 100, indent: 4 */

var demo = demo || {};

(function ($, fluid) {

    $(document).ready(function () {
        fluid.prefs.create("#gpiic-pmt", {
            build: {
                primarySchema: gpii.primarySchema,
                auxiliarySchema: gpii.pmt.auxiliarySchema
            },
            prefsEditor: {
                prefsEditorType: "gpii.pmt",
                components: {
                    prefsEditorLoader: {
                        options: {
                            messagePrefix: "../../src/shared/adjusters/messages/" + gpii.prefs.i18n.getDefaultLanguage() + "/"
                        }
                    }
                }
            }
        });

        // set GPII store
        gpii.prefs.gpiiSettingsStore({
            settingsStore: {
            }
        });
    });

})(jQuery, fluid);
