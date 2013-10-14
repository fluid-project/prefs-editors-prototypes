(function ($, fluid) {
    
	gpii.uiOptions.panels.updatePlusMinusAdjusterUI = function (that) {
        // append metric unit if there is one
        if(that.options.metricUnit)
        {
            that.locate("valueText").val(that.model.value + that.options.metricUnit);
        }

        // if we've reached min range
        if(that.model.value == that.options.range.min)
        {    // set style
            //that.locate("minus").css("color", "lightGray");
            that.locate("minus").addClass("flc-uiOptions-plus-minus-numerical-min-reached");
            that.events.minRangeReached.fire();
        }
        else
        {    // recover style
            //that.locate("minus").css("color", "black");
            that.locate("minus").removeClass("flc-uiOptions-plus-minus-numerical-min-reached");
        }
    };
    
    gpii.uiOptions.panels.plusMinusAdjusterFinalInit = function (that) {
        that.applier.modelChanged.addListener("value", function(newValue)
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
            
            // Not very elegant solution
            var previewframe = that.preview;
            var previewText = that.options.parentBundle.lookup(["previewText"]).template;
            that.preview.events.onReady.addListener(function () {
                previewframe.container.contents().find('body').find('.flc-uiOptions-preview-per-setting-label').text(previewText);
            });
        });
    };
    
})(jQuery, fluid);
