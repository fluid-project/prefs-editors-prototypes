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

    /**
     * modelMonitor Subcomponent that holds information about which preferences the user has tweaked.
     * This component doesn't do anything on its own, rather it gives a prefsEditor model-monitoring
     * capabilities by adding this as grade to the prefsEditor's options (see GPIIPrefsEditor.js).
     */
    fluid.defaults("gpii.prefs.modelMonitor", {
        gradeNames: ["fluid.littleComponent", "autoInit"],
        preferencesChangedByUser: [],
        modelListeners: {
            "*": {
                "listener": "{that}.preferenceChanged",
                "args": "{change}.path"
            }
        },
        listeners: {
            // when the prefsEditor resets, we should also clearPreferencesChangedByUser
            "onReset.clearPreferencesChangedByUser": [{
                listener: "{that}.clearPreferencesChangedByUser"
            }]
        },
        invokers: {
            preferenceChanged: {
                "funcName": "gpii.prefs.modelMonitor.addChangedPreference",
                "args": ["{that}.options.preferencesChangedByUser", "{arguments}.0"]
            },
            clearPreferencesChangedByUser: {
                "funcName": "gpii.prefs.modelMonitor.clearPreferencesChangedByUser",
                "args": ["{that}.options.preferencesChangedByUser"]
            }
        }
    });

    // make this component globally public through {modelMonitor}
    gpii.prefs.modelMonitor.finalInit = function (that) {
        fluid.staticEnvironment.modelMonitor = that;
    };
    
    gpii.prefs.modelMonitor.addChangedPreference = function (preferencesChangedByUser, changedPreference) {
        // if preference is defined and not in the array of changed ones 
        if (changedPreference && $.inArray(changedPreference, preferencesChangedByUser) === -1) {
            // add it
            preferencesChangedByUser.push(changedPreference);
        }
    }
    
    gpii.prefs.modelMonitor.clearPreferencesChangedByUser = function (preferencesChangedByUser) {
        preferencesChangedByUser.length = 0;
    }

})(jQuery, fluid);
