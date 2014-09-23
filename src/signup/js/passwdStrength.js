/**
 * Cloud4all Preferences Management Tools - Sign Up UI
 * 
 * Copyright 2014 CERTH/HIT
 * 
 */

$(document).ready(function(){
	$('#passwd').keyup(function(){
		$('#passwdStrengthDescription').html(checkStrength($('#passwd').val()));
	});	
	
	function checkStrength(password){
		var strength = 0;
		
		if (password.length < 6) { 
			$('#passwdStrengthDescription').removeClass();
			$('#passwdStrengthDescription').addClass('short passwd-description');
			$('#passwdStrength').removeClass();
			$('#passwdStrength').addClass('login-adjusterIcons password-icon-short short');
			return 'Too short'; 
		}
		
		if (password.length > 7) strength += 1;
		if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))  strength += 1;
		if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/))  strength += 1; 
		if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/))  strength += 1;
		if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1;
		
		if (strength < 2 ){
			$('#passwdStrengthDescription').removeClass();
			$('#passwdStrengthDescription').addClass('weak passwd-description');
			$('#passwdStrength').removeClass();
			$('#passwdStrength').addClass('login-adjusterIcons password-icon weak');
			return 'Weak';			
		}
/*		else if (strength == 2 ){
			$('#passwdStrengthDescription').removeClass();
			$('#passwdStrengthDescription').addClass('good passwd-description');
			$('#passwdStrength').removeClass();
			$('#passwdStrength').addClass('login-adjusterIcons password-icon good');
			return 'Good';
		}
		else if (strength == 3 ){
			$('#passwdStrengthDescription').removeClass();
			$('#passwdStrengthDescription').addClass('very-good passwd-description');
			$('#passwdStrength').removeClass();
			$('#passwdStrength').addClass('login-adjusterIcons password-icon very-good');
			return 'Very Good';
		}*/
		else{
			$('#passwdStrengthDescription').removeClass();
			$('#passwdStrengthDescription').addClass('strong passwd-description');
			$('#passwdStrength').removeClass();
			$('#passwdStrength').addClass('login-adjusterIcons password-icon strong');
			return 'Strong';
		}
	}
});

