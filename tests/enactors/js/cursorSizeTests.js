/*!
Cloud4all Preferences Management Tools

Copyright 2014 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

(function () {
    "use strict";

    jqUnit.test("Test the enactor that applies cursor size", function () {
        jqUnit.expect(2);

        var baseFontSize = 16;
        var newValue = 300;
        var that = gpii.enactor.cursorSize(".gpiic-cursorSize");

        jqUnit.assertEquals("The initial font size is set", baseFontSize * 2 + "px", that.locate("cursorDiv").css("font-size"));
        that.applier.change("value", newValue);
        jqUnit.assertEquals("The new font size is applied based on the new model value " + newValue, baseFontSize * newValue / 100 + "px", that.locate("cursorDiv").css("font-size"));
    });

})();
