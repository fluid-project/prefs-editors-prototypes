/*!
Cloud4all Preferences Management Tools

Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global fluid, gpii, jQuery*/
/*jslint white: true, onevar: true, funcinvoke: true, forvar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

(function ($, fluid) {
    fluid.defaults("gpii.uiOptions.panels.plusMinus", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        invokers: {
            onValueTextPreventNonNumeric: {
                funcName: "gpii.uiOptions.panels.plusMinus.onValueTextPreventNonNumeric",
                args: [
                    "{arguments}.0"
                ]
            }
        }
    });
    
    gpii.uiOptions.panels.plusMinus.onMinusClick = function (that, modelValue, range, modelValueName, minRangeReachedEvent) {
        var newValue =  parseFloat(modelValue) - parseFloat(range.divisibleBy);
        gpii.uiOptions.panels.plusMinus.updateBoundedValue(that, newValue, range, modelValueName, minRangeReachedEvent);
    };
    
    gpii.uiOptions.panels.plusMinus.updateBoundedValue = function (that, newValue, range, modelValueName, minRangeReachedEvent) {
        var boundedValue;
        
        if (newValue >= parseFloat(range.min)) {
            boundedValue = newValue;
        } else {
            boundedValue = range.min;
        }
        
        that.applier.requestChange(modelValueName, boundedValue);
        that.refreshView();
    }
    
    gpii.uiOptions.panels.plusMinus.performMinRangeCheck = function (that, boundedValue, range, minRangeReachedEvent) {
        if (boundedValue === range.min) {
            minRangeReachedEvent.fire();
        }
    }
    
    gpii.uiOptions.panels.plusMinus.onPlusClick = function (that, modelValue, range, modelValueName, minRangeReachedEvent) {
        var newValue =  parseFloat(modelValue) + parseFloat(range.divisibleBy);
        gpii.uiOptions.panels.plusMinus.updateBoundedValue(that, newValue, range, modelValueName, minRangeReachedEvent);
    };
    
    gpii.uiOptions.panels.plusMinus.onValueTextChange = function (that, elmValue, range, modelValueName, minRangeReachedEvent) {
        gpii.uiOptions.panels.plusMinus.updateBoundedValue(that, parseFloat(elmValue), range, modelValueName, minRangeReachedEvent);
    };
    
    gpii.uiOptions.panels.plusMinus.onValueTextPreventNonNumeric = function (event) {
        // Allow only backspace, delete and tab
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 35 || event.keyCode == 36 || event.keyCode == 9) {
            // let it happen, don't do anything
            var JSLintEmptyBlockFiller = 0;
        } else {
            // Ensure that it is a number and stop the keypress
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        }
    };
    
})(jQuery, fluid);
