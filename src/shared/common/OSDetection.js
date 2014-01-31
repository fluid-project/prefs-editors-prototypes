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

    fluid.registerNamespace("gpii.os");

    fluid.enhance.isWindowsPlatform = function () {
        return navigator.platform.toUpperCase().indexOf('WIN') !== -1;
    };
    
    fluid.enhance.isLinuxPlatform = function () {
        return navigator.platform.toUpperCase().indexOf('LINUX') !== -1;
    };
    
    fluid.enhance.isUnknownPlatform = function () {
        return ((!fluid.enhance.isWindowsPlatform()) && (!fluid.enhance.isLinuxPlatform()));
    };
    
    fluid.enhance.check({
        "gpii.os.isWindowsPlatform": "fluid.enhance.isWindowsPlatform",
        "gpii.os.isLinuxPlatform": "fluid.enhance.isLinuxPlatform",
        "gpii.os.isUnknownPlatform": "fluid.enhance.isUnknownPlatform"
    });
    
})(jQuery, fluid);
