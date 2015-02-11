/*!
Copyright 2015 CERTH

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/gpii/universal/LICENSE.txt
*/


(function ($) {
    "use strict";

    fluid.registerNamespace("gpii.tests");

    $(document).ready(function () {
        jqUnit.module("Auto Adjust Tests");
        var checked = 'on';
        var unChecked = 'off';
        
        jqUnit.test("Test checkbox value", function () {
            jqUnit.expect(2);
            
            // The following line (inside comments) creates an error.
            //var that = gpii.adjuster.autoAdjust(".gpiic-onOffSwitch-container");
            
            jqUnit.assertEquals("Auto adjust value", checked, $(".gpiic-onOffSwitch-input").val());
            $(".gpiic-onOffSwitch-input").val(unChecked); 
            jqUnit.assertEquals("Auto adjust value", unChecked, $(".gpiic-onOffSwitch-input").val());
        });
    });
})(jQuery);
