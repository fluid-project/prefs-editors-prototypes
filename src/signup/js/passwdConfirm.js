/**
 * Cloud4all Preferences Management Tools - Sign Up UI
 * 
 * Copyright 2014 CERTH/HIT
 * 
 */

var confirmPasswd;
$(document).ready(function(){
	$('#cpasswd').keyup(function(){
		confirmPasswd = confirm($('#passwd').val(),$('#cpasswd').val());
		$('#passwdMatchDescription').html(confirmPasswd);
		termsChecked();
	});	
	
	function confirm(password,cpassword){

		if (cpassword.length < 6) { 
			$('#passwdMatchDescription').removeClass();
			$('#passwdMatchDescription').addClass('passwd-description donotmatch');
			$('#passwdMatch').removeClass();
			$('#passwdMatch').addClass('login-adjusterIcons password-icon-donotmatch donotmatch');
			return 'Passwords do not match';			
		}
		
		if (cpassword==password && cpassword.length==password.length){
			$('#passwdMatchDescription').removeClass();
			$('#passwdMatchDescription').addClass('passwd-description match');
			$('#passwdMatch').removeClass();
			$('#passwdMatch').addClass('login-adjusterIcons password-icon-match match');
			return 'Passwords match';			
		}
		else{
			$('#passwdMatchDescription').removeClass();
			$('#passwdMatchDescription').addClass('passwd-description donotmatch');
			$('#passwdMatch').removeClass();
			$('#passwdMatch').addClass('login-adjusterIcons password-icon-donotmatch donotmatch');
			return 'Passwords do not match';			
		}
	}
});

