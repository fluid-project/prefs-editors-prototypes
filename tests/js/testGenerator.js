/*!
Copyright 2014 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/gpii/universal/LICENSE.txt
*/

(function ($) {
    "use strict";

    fluid.registerNamespace("gpii.tests");

     /*
     * Reusable helper function that generates a test given:
     * 1) The test title
     * 2) The assertion function to be used in the test
     * 3) An array of enabled mock settings (if any)
     */
    gpii.tests.mockTest = function (testTitle, assertFunction, enabledMockSettings) {
        jqUnit.test(testTitle, function () {
            $.mockjaxClear();
            fluid.each(enabledMockSettings, $.mockjax);
            assertFunction();
            $.mockjaxClear();
        });
    };

})(jQuery);
