/**
 * Cloud4all Preferences Management Tools - Sign Up UI
 * 
 * Copyright 2014 CERTH/HIT
 * 
 */

$(document).ready(function(){
	var userLang = navigator.language || navigator.userLanguage;
	var dash = userLang.indexOf('-');
    if(dash>0) userLang = userLang.substring(0, dash);

	$.ajax({
        type: "GET",
        url: "../../../src/signup/messages/"+userLang+"/loginText.json",
        dataType: "json",
        success: function(data) {
            $.each(data, function (key, val) {
            	$('.'+key).text(val);
            });
        }
    });
	$.ajax({
        type: "GET",
        url: "../../../src/signup/messages/"+userLang+"/loginVal.json",
        dataType: "json",
        success: function(data) {
            $.each(data, function (key, val) {
            	$('.'+key).val(val);
            });
        }
    });
});

