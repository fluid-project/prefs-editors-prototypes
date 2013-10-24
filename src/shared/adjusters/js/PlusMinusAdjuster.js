/*
 * !!!!! DEPRECATED !!!!!
 * 
 * Will use Alex's version of textFieldStepper as in,
 * 
 * https://github.com/radmanovi4/prefsEditors/blob/divide-and-conquer/src/shared/adjusters/js/textfieldStepper.js
 *
 * This file will be removed once merging with Astea's work takes place.
 * 
 */

(function ($, fluid) {
    fluid.defaults("gpii.uiOptions.panels.plusMinus", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"]
    });
    
    gpii.uiOptions.panels.plusMinus.onMinusClick = function (that, modelValue, range, modelValueName) {
        var newValue =  parseFloat(modelValue) - parseFloat(range.divisibleBy);
        gpii.uiOptions.panels.plusMinus.updateBoundedValue(that, newValue, range, modelValueName);
    };
    
    gpii.uiOptions.panels.plusMinus.updateBoundedValue = function(that, newValue, range, modelValueName)
    {
        var boundedValue;
        
        if(newValue >= parseFloat(range.min))
        {
            boundedValue = newValue;
        }
        else
        {
            boundedValue = range.min;
        }
        
        that.applier.requestChange(modelValueName, boundedValue);
        that.refreshView();

        if (boundedValue === range.min)
        {
            that.events.minRangeReached.fire();
        }
    }
    
    gpii.uiOptions.panels.plusMinus.onPlusClick = function (that, modelValue, range, modelValueName) {
        var newValue =  parseFloat(modelValue) + parseFloat(range.divisibleBy);
        gpii.uiOptions.panels.plusMinus.updateBoundedValue(that, newValue, range, modelValueName);
    };
    
    gpii.uiOptions.panels.plusMinus.onValueTextChange = function (that, elmValue, range, modelValueName) {
        gpii.uiOptions.panels.plusMinus.updateBoundedValue(that, parseFloat(elmValue), range, modelValueName);
    };
    
    gpii.uiOptions.panels.plusMinus.onValueTextPreventNonNumeric = function (event) {
        // Allow only backspace, delete and tab
        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 35 || event.keyCode == 36 || event.keyCode == 9) {
            // let it happen, don't do anything
        }
        else {
            // Ensure that it is a number and stop the keypress
            if ((event.keyCode < 48 || event.keyCode > 57 ) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault();
            }
        }
    };
    
    gpii.uiOptions.panels.updatePlusMinusAdjusterUI = function (that) {
        /*// append metric unit if there is one
        ------ DONE DECLARATIVELY----------
        -----------------------------------
        
        ------ DONE DECLARATIVELY----------
        if(that.options.metricUnit)
        {
            that.locate("valueText").val(that.model.value + that.options.metricUnit);
        }

        // if we've reached min range
        if(that.model.value == that.options.range.min)
        {    // set style
            //that.locate("minus").css("color", "lightGray");
            that.locate("minus").addClass("fl-uiOptions-plus-minus-numerical-min-reached");
            that.events.minRangeReached.fire();
        }
        else
        {    // recover style
            //that.locate("minus").css("color", "black");
            that.locate("minus").removeClass("fl-uiOptions-plus-minus-numerical-min-reached");
        }
        -----------------------------------
        */
    };
    
    gpii.uiOptions.panels.plusMinusAdjusterFinalInit = function (that) {
        /*that.applier.modelChanged.addListener("value", function(newValue)
        {
            if(newValue.value == that.options.range.min)
            {
                that.options.minRangeReached = true;
            }
            else
            {
                that.options.minRangeReached = false;
            }
        });

        that.events.afterRender.addListener(function () {
            that.updatePlusMinusAdjusterUI();

            ------ DONE DECLARATIVELY----------
            that.locate("minus").click(
                    function()
                    {
                        var newValue =  parseFloat(that.model.value) - parseFloat(that.options.range.divisibleBy);
                        if(newValue >= parseFloat(that.options.range.min))
                        {
                            //that.locate("valueText").val(newValue);
                            that.applier.requestChange("value", newValue);
                            that.updatePlusMinusAdjusterUI();
                        }
                    }
            );

            that.locate("plus").click(
                    function()
                    {
                        var newValue =  parseFloat(that.model.value) + parseFloat(that.options.range.divisibleBy);
                        that.applier.requestChange("value", newValue);
                        that.updatePlusMinusAdjusterUI();
                        //that.locate("valueText").val(newValue);
                    }
            );

            // need to catch this also because afterRender is not triggered when user edits the
            // text field manually, so " pt" is not appended to value.
            that.locate("valueText").change(
                    function()
                    {
                        var newValue = parseFloat(that.locate("valueText").val());
                        // if we are below range
                        if(newValue < parseFloat(that.options.range.min))
                        {    // set it to min
                            newValue = parseFloat(that.options.range.min);
                        }

                        //that.locate("valueText").val(that.locate("valueText").val() + " " + that.options.metricUnit);
                        that.applier.requestChange("value", newValue);
                        that.updatePlusMinusAdjusterUI();

                    }
            );

            // prevent non numeric values
            that.locate("valueText").keydown(function(event) {
                // Allow only backspace and delete
                if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 35 || event.keyCode == 36) {
                    // let it happen, don't do anything
                }
                else {
                    // Ensure that it is a number and stop the keypress
                    if ((event.keyCode < 48 || event.keyCode > 57 ) && (event.keyCode < 96 || event.keyCode > 105 )) {
                        event.preventDefault();
                    }
                }
            });
            -----------------------------------
            
            // Not very elegant solution
            var textSizePreviewFrame = that.textSizePreview;
            var textSizePreviewText = that.options.parentBundle.lookup(["previewText"]).template;
            textSizePreviewFrame.events.onReady.addListener(function () {
                textSizePreviewFrame.container.contents().find('body').find('.flc-uiOptions-preview-per-setting-label').text(textSizePreviewText);
            });
            
            var magnifierPreviewFrame = that.magnifierPreview;
            var magnifierPreviewText = that.options.parentBundle.lookup(["previewText"]).template;
            magnifierPreviewFrame.events.onReady.addListener(function () {
                magnifierPreviewFrame.container.contents().find('body').find('.flc-uiOptions-preview-per-setting-label').text(magnifierPreviewText);
            });

        });*/
    };
    
})(jQuery, fluid);