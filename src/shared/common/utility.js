/*!
Cloud4all Preferences Management Tools

Copyright 2014 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global fluid, jQuery, gpii*/
/*jslint white: true, onevar: true, funcinvoke: true, forvar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

(function ($, fluid) {

    fluid.registerNamespace("gpii.utility");

    gpii.utility.getLabelId = function (labelDomElement) {
        if (!labelDomElement) {
            return;
        }
        var labelId = labelDomElement.attr("id");
        // Add a dom id if labelDomElement doesn't have one
        if (!labelId) {
            labelId = fluid.allocateGuid();
            labelDomElement.attr("id", labelId);
        }
        return labelId;
    };

    gpii.utility.setAriaRelevant = function (container, enabled) {
        container.attr("aria-relevant", enabled ? "additions" : "removals");
    };

    gpii.utility.setAriaChecked = function (container, checked) {
        container.attr("aria-checked", checked);
    };

})(jQuery, fluid);
