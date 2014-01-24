/*!
Cloud4all Preferences Management Tools

Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global fluid, gpii, jQuery, navigator*/
/*jslint white: true, onevar: true, funcinvoke: true, forvar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

(function ($, fluid) {
    fluid.defaults("gpii.pmt", {
        gradeNames: ["gpii.prefs.pmt_pilot_2", "autoInit"],
        pcpUrl: "./pcp.html",
        selectors: {
            gotoPcpButton: ".flc-prefsEditor-gotoPcp"
        },
        invokers: {
            openPcp: {
                funcName: "gpii.pmt.openPcp",
                args: ["{that}.options.pcpUrl", "{gpiiSession}.options.loggedUser"],
                dynamic: true
            }
        },
        listeners: {
            "onReady.bindClick": {
                "this": "{that}.dom.gotoPcpButton",
                method: "click",
                args: "{that}.openPcp"
            },
            "onReady.setInitialModel": {
                listener: "gpii.pmt.setInitialModel",
                args: ["{that}", "{gpiiStore}"],
                priority: "last"
            }
        }
    });

	// FIXME: Figure out a better way to pass the user token.
    gpii.pmt.openPcp = function (pcpUrl, token) {
        window.open(pcpUrl + "?" + token);
        return false;
    };

    gpii.pmt.setInitialModel = function (that, gpiiStore) {
        var token = window.location.search.substring(1);
        if (token) {
            fluid.set(gpiiStore, ["gpiiSession", "options", "loggedUser"], token)
            var initialModel = gpiiStore.get();
            that.prefsEditor.applier.requestChange("", initialModel);
        }
    };

    fluid.defaults("gpii.pmt.previewPerSettingEnhanced", {
        gradeNames: "fluid.littleComponent",
        outerPreviewEnhancerOptions: "{originalEnhancerOptions}.options.originalUserOptions",
        emptyComponentType: "fluid.emptySubcomponent"
    });
})(jQuery, fluid);
