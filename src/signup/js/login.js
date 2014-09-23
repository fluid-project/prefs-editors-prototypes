/**
 * Cloud4all Preferences Management Tools - Sign Up UI
 * 
 * Copyright 2014 CERTH/HIT
 * 
 */

function termsChecked(){
	if ($("#termsCheckBox").is(":checked")){
		console.log(confirmPasswd+"-"+usernameAvailability);
		if ((confirmPasswd=="Passwords match")&&(usernameAvailability=="Available"))
			$("#createButton").attr("disabled",false);
		else
			$("#createButton").attr("disabled",true);
	}
	else
		$("#createButton").attr("disabled",true);
}


$(document).ready(function(){
	$(".overlay").hide();
	$(".modal").hide();
	$("#termsCheckBox").change(function(){
		termsChecked();
	});
	$("#recoveyCheckBox").change(function(){
		if ($("#recoveyCheckBox").is(":checked")){
			$("#recoveryGotIt").attr("disabled",false);
			$("#recoveryTextfield").attr("disabled",false);
			$("#recoveryDescription").removeClass("disabled");			
		}
		else{
			$("#recoveryGotIt").attr("disabled",true);
			$("#recoveryTextfield").attr("disabled",true);
			$("#recoveryDescription").addClass("disabled");			
		}
	});
	$("#recoveryBackButton").click(function(){
		$(".overlay").hide();
		$(".modal").hide();
	});
	$("#createButton").click(function(){
		$.ajax({
			url:"http://preferences.gpii.net/user/",
			type: "POST",
			contentType: "application/json; charset=utf-8",
			dataType:"json",
			crossDomain: true,
			success: function(data, textStatus, jqXHR){ 
				var response = data;  
				var token = response.token;
				$(".overlay").show();
				$(".modal").show();
				$("#recoveryTextfield").val(token); 
			},
			error: function(jqXHR, textStatus, errorThrown) { 
				$(".overlay").show();
				$(".modal").show();
		    }
		});
  	});
	$("#termsLink").click(function(){
		var selectedSection = $(location).attr("hash");
		console.log(selectedSection);
		$(this).attr("href",selectedSection);
	});
	$("#recoveryGotIt").click(function(){
		var loginUrl = "http://localhost:8081/user/"+$("#recoveryTextfield").val()+"/login";
		$.ajax({
			url: loginUrl,
			type: "GET",
			contentType: "application/json; charset=utf-8",
			dataType:"text",
			crossDomain: true,
			success: function(data, textStatus, jqXHR){ 
				//alert(data+"\n\n"+"Entering to PMT page!");
				window.location.href="http://160.40.60.237:9999/prefsEditors/demos/prefsEditor/index.html";
			},
			error: function(response) { 
				alert("Server connection error!\n\nPlease try again later.");
			}
		});
	});
});
