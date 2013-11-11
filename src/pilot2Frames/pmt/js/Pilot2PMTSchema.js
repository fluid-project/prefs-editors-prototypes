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
    };

    gpii.prefs.pmt_pilot_2.auxiliarySchema = {
        "namespace": "gpii.prefs.pmt_pilot_2.auxiliarySchema",
        "templatePrefix": "../../src/pilot2Frames/pmt/html/",
        "template": "%prefix/PrefsEditorTemplate-PMT.html",
        "messagePrefix": "../../src/shared/i18n/messages/en/", // default
        "message": "%prefix/frames.json"
    };
})(jQuery, fluid);
