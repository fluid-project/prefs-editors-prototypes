/**
 * Cloud4all Preferences Management Tools - Context UI
 * 
 * Copyright 2014 CERTH/HIT
 * 
 */

var index=0;
var click_header_untitled=0;

function time_components_focus(component){
    $(component).attr('type', 'number');
    $(component).css("background-color","#ffcc00");
}

function time_components_focusOut(component){
    $(component).css("background-color","#ffffff");

    var onedigit=$(component).val();

    if ((onedigit!="") && ( onedigit <10 ))
    {
        var twodigits=parseInt($(component).val());
        $(component).attr('type', 'text');
        $(component).val("0"+twodigits);
    }
}

function entering_condition_tab(){
    click_header_untitled=0;
    $(".gpiic-tab-conditions").css("background-color","#f2f2f2");
    $(".gpiic-tab-share").css("background-color","#dbdbdb");
	
    $(".gpiic-context-header").show();
    $(".gpiic-link-copy-enter-email-address").hide();
	
    $(".gpiic-context-baseset-label").css("visibility","visible");
    $(".gpiic-context-deleteset-label").css("visibility","visible");
	
    $(".gpiic-context-header-devices").show();
    $(".gpiic-context-header-time").show();
}

$(document).ready(function(){
    $(".gpiic-link-copy-enter-email-address").hide();
	
    $(".gpiic-tab-conditions").click(function(){
         entering_condition_tab();
    });
	
    $(".gpiic-tab-conditions").keydown(function(e){
        if ( (e.keyCode==32) || (e.keyCode == 13))
        {
            entering_condition_tab();
        }
    });
	
    $(".gpiic-context-header-untitled").click(function(){
        $(".gpiic-context-header-untitled").css("background-color","#f2f2f2");

        if (click_header_untitled==0)
        {
            $(".gpiic-context-baseset-label").css("visibility","visible");
            $(".gpiic-context-deleteset-label").css("visibility","visible");
        }
        else if (click_header_untitled==1)
        {
            $(".gpiic-context-baseset-label").css("visibility","hidden");
            $(".gpiic-context-deleteset-label").css("visibility","hidden");
        }

    });
	
    $(".gpiic-context-header-untitled").keydown(function(e){
        $(".gpiic-context-header-untitled").css("background-color","#f2f2f2");
        if (click_header_untitled==0)
        {
            $(".gpiic-context-baseset-label").css("visibility","visible");
            $(".gpiic-context-deleteset-label").css("visibility","visible");
        }
        else if (click_header_untitled==1)
        {
            $(".gpiic-context-baseset-label").css("visibility","hidden");
            $(".gpiic-context-deleteset-label").css("visibility","hidden");
        }
    });
	
    $(".gpiic-context-time-add-new").click(function(){
        $(".gpiic-context-time-add-new-label").hide();
        $(".gpiic-context-times-notapplied").hide();
        $(".gpiic-context-time-whole-div").show();
	});
	
	$(".gpiic-context-time-add-new").keydown(function(e){
        if (e.keyCode == 32)
        {
             $(".gpiic-context-times-notapplied").hide();
             $(".gpiic-context-time-add-new-label").toggle();
             $(".gpiic-context-time-whole-div").toggle();
        }
    });

	$(".gpiic-context-time-from-hour").focus(function(){
        time_components_focus(this);
    });

    $(".gpiic-context-time-from-hour").focusout(function(){
        time_components_focusOut(this);
    });

    $(".gpiic-context-time-from-minute").focus(function(){
        time_components_focus(this);
    });

    $(".gpiic-context-time-from-minute").focusout(function(){
        time_components_focusOut(this);
    });

    $(".gpiic-context-time-to-hour").focus(function(){
        time_components_focus(this);
    });
	
    $(".gpiic-context-time-to-hour").focusout(function(){
         time_components_focusOut(this);
    });
	
    $(".gpiic-context-time-to-minute").focus(function(){
         time_components_focus(this);
	});

	$(".gpiic-context-time-to-minute").focusout(function(){
        time_components_focusOut(this);
        $(".gpiic-context-times-new-record-label").text( $(".gpiic-context-time-from-hour").val() +":"+$(".gpiic-context-time-from-minute").val() +
              $(".gpiic-context-time-to-label").text() + $(".gpiic-context-time-to-hour").val() +":"+ $(".gpiic-context-time-to-minute").val() );
        $(".gpiic-context-time-add-new").after($(".gpiic-context-times-new-record"));
        $(".gpiic-context-times-new-record").show();
        $(".gpiic-context-times-new-record-label").focus();
        $(".gpiic-context-time-add-new-label").show();
        $(".gpiic-context-time-whole-div").hide();
    });

    $(".gpiic-context-times-new-record").hover(
        function(){
            $(".gpii-context-times-new-record-line").show();
        },
        function(){
            $(".gpii-context-times-new-record-line").hide();
    });
    
    $(".gpiic-context-times-new-record").keydown(function(e){
        if ((e.keyCode == 32) || (e.keyCode ==13) )
        {
             $(".gpii-context-times-new-record-line").toggle();
        }
        else if (e.keyCode == 27)
        {
             $(".gpii-context-times-new-record-line").hide();
        }
    });
    
    $(".gpiic-context-times-new-record-fontIcon-delete").click(function(){
        $(".gpiic-context-times-new-record").hide();
        $(".gpiic-context-time-from-hour").val("0");
        $(".gpiic-context-time-from-minute").val("0");
        $(".gpiic-context-time-to-hour").val("0");
        $(".gpiic-context-time-to-minute").val("0");
    });

    $(".gpiic-context-times-new-record-fontIcon-delete").keydown(function(e){
        if ((e.keyCode == 32) || (e.keyCode ==13) )
        {
            $(".gpiic-context-times-new-record").hide();
            $(".gpiic-context-time-from-hour").val("0");
            $(".gpiic-context-time-from-minute").val("0");
            $(".gpiic-context-time-to-hour").val("0");
            $(".gpiic-context-time-to-minute").val("0");
        }
    });

    $(".gpiic-context-times-new-record-fontIcon-pencil").click(function(event){
        event.stopPropagation();
        $(".gpiic-context-time-add-new-label").hide();
        $(".gpiic-context-time-whole-div").show();
        $(".gpiic-context-time-from-hour").attr('tabindex','0');
        $(".gpiic-context-time-from-hour").focus();
    });
    
    $(".gpiic-context-times-new-record-fontIcon-pencil").keydown(function(e){
        if ((e.keyCode == 32) || (e.keyCode ==13) )
        {
            $(".gpiic-context-time-add-new-label").hide();
            $(".gpiic-context-time-whole-div").show();
            $(".gpiic-context-time-from-hour").attr('tabindex','0');
            $(".gpiic-context-time-from-hour").focus();
        }
    });

    $(".gpiic-context-devices-add-new").click(function(){
        $(".gpiic-context-devices-list").toggle();
        $(".gpiic-context-devices-notapplied").toggle();
    });
    
    $(".gpiic-context-devices-add-new").keydown(function(e){
        var add_new_label=$(".gpiic-context-devices-add-new-label").text();
        if (e.keyCode == 32) 
        {
            $(".gpiic-context-devices-list").toggle();
            $(".gpiic-context-devices-notapplied").toggle();
            $(".gpiic-context-devices-add-new-label").text( $("ul li:nth-child("+(index)+")").text() );
            $(".gpiic-context-devices-notapplied-label").text( $(".gpiic-context-device-applies-label").text()
                    + $("ul li:nth-child("+index+")").text() + 
                    $(".gpiic-context-devices-label").text() );
            if (index==0)
            {
            	$(".gpiic-context-devices-add-new-label").text(add_new_label);
            }
        }
        else if (e.keyCode == 40)
        {
        	
            $("ul li:nth-child("+(index+1)+")").addClass("gpii-context-devices-Onselect-device-list-item");
            if (index<8)
            {
                $("ul li:nth-child("+(index)+")").removeClass("gpii-context-devices-Onselect-device-list-item");
                index++;
            }
            e.stopImmediatePropagation();
        }
        else if (e.keyCode == 38)
        {
            $("ul li:nth-child("+(index-1)+")").addClass("gpii-context-devices-Onselect-device-list-item");
            if (index >1)
            {
               $("ul li:nth-child("+(index)+")").removeClass("gpii-context-devices-Onselect-device-list-item");
               index=index-1;
            }
            e.stopImmediatePropagation();
        }
        else if (e.keyCode == 27)
        {
            $(".gpiic-context-devices-list").hide();
            $(".gpiic-context-devices-notapplied").show();
        }
        else if (e.keyCode == 13)
        {
            $(".gpiic-context-devices-add-new-label").text( $("ul li:nth-child("+(index)+")").text() );
            $(".gpiic-context-devices-list").toggle();
            $(".gpiic-context-devices-notapplied").toggle();
            $(".gpiic-context-devices-notapplied-label").text( $(".gpiic-context-device-applies-label").text()
                    + $("ul li:nth-child("+index+")").text() + 
                    $(".gpiic-context-devices-label").text() );
        }
        
	});

    $(".gpiic-selection-devices li").hover(
             function(){
                var indx =$(this).parent().children().index(this);
                $("ul li:nth-child("+(indx+1)+")").addClass("gpii-context-devices-Onselect-device-list-item");
            },
            function(){
                var indx =$(this).parent().children().index(this);
                $("ul li:nth-child("+(indx+1)+")").removeClass("gpii-context-devices-Onselect-device-list-item");
    });

    $(".gpiic-selection-devices li").click(function(e){
        var indx=$(this).parent().children().index(this);
        $(".gpiic-context-devices-add-new-label").text( $("ul li:nth-child("+(indx+1)+")").text() );
        $(".gpiic-context-devices-list").toggle();
        $(".gpiic-context-devices-notapplied").toggle();
        $(".gpiic-context-devices-notapplied-label").text( $(".gpiic-context-device-applies-label").text() +
                $("ul li:nth-child("+(indx+1)+")").text() + 
                $(".gpiic-context-devices-label").text() );
    });
});
	