/**
 * Cloud4all Preferences Management Tools - Context UI
 * 
 * Copyright 2014 CERTH/HIT
 * 
 */

function entering_sharing_tab(){
    click_header_untitled=1; 

    $(".gpiic-tab-share").css("background-color","#f2f2f2");
    $(".gpiic-tab-conditions").css("background-color","#dbdbdb");

    $(".gpiic-context-header").show();
    $(".gpiic-link-copy-enter-email-address").show();

    $(".gpiic-context-baseset-label").css("visibility","hidden");

    $(".gpiic-context-deleteset-label").css("visibility","hidden");

    $(".gpiic-context-header-devices").hide();
    $(".gpiic-context-header-time").hide();
}

function validateEmail(emailaddress) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(emailaddress)) {
        return true;
    }
    else {
        return false;
    }
}

var sendwithGmail = function(opts){
    var str = 'http://mail.google.com/mail/?view=cm&fs=1'+
              '&to=' + opts.to +
              '&su=' + opts.subject +
              '&body=' + opts.message.replace(/\n/g,'%0A') +
              '&ui=1';
    location.href = str;
};

var sendviaMailTo = function (opts) {
    var link = "mailto:" +opts.to
    + "&subject=" + opts.subject
    + "&body=" + opts.body
    + "&attachment="+opts.attachment;
    window.location.href = link;
};

var sendwithGmailAttachment = function (opts){
    //GET https://www.googleapis.com/gmail/v1/users/userId/messages/messageId/attachments/id
    var str = 'https://www.googleapis.com/gmail/v1/users/'+
        opts.userId + //userId 
        '/messages/'+
        opts.messageId +
        '/attachments/'+
        opts.id +'?key={AIzaSyC1hzDRl4xD8jnn7Ry6pGdQOVDtwpjOItA}';
    location.href = str;
};

$(document).ready(function(){
    $(".gpiic-tab-share").click(function(){
        entering_sharing_tab();

    });

    $(".gpiic-tab-share").keydown(function(e){
        if ( (e.keyCode==32) || (e.keyCode == 13))
        {
            entering_sharing_tab();
        }
    });

    $(".gpiic-enter-email-address-input").focus(function(e){
        $(".gpiic-enter-email-address-input").select();
	});

    $(".gpiic-enter-email-address-input").focusout(function(e){
        if (validateEmail($(".gpiic-enter-email-address-input").val() )){
            $(".gpiic-enter-email-address").css("border-color","#ffffff");
            
            $(".gpii-email-copy a:link").css("pointer-events","auto");
            
            $(".gpiic-email-copy").css("background-color","#00aaaa");
            $(".gpiic-email-copy").css("border-color","#00aaaa");
            $(".gpiic-email-copy-label").css("background-color","#00aaaa");
            $(".gpiic-email-copy-label").css("color","#ffffff");
            $(".gpiic-email-copy-fontIcon:before").css("background-color","#00aaaa");
        }
        else if (!validateEmail($(".gpiic-enter-email-address-input").val() )){
            $(".gpiic-enter-email-address").css("border-color","red");
        }
       
	});

    $(".gpiic-enter-message-input").focus(function(){
        $(".gpiic-enter-message-input").select();
    });

    $(".gpiic-email-copy").click(function(){
		/*sendwithGmail({
			 	to: $(".gpiic-enter-email-address-input").val(), 
			    subject: 'CLOUD4ALL:Share needs and preferences',
			    message: $(".gpiic-enter-message-input").val()
		});*/
        sendviaMailTo({
            to: $(".gpiic-enter-email-address-input").val(), 
            subject: 'CLOUD4ALL:Share needs and preferences',
            body: $(".gpiic-enter-message-input").val(),
            attachment : "sharing.js"
        });
    });

});