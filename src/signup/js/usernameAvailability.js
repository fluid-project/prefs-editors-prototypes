/**
 * Cloud4all Preferences Management Tools - Sign Up UI
 * 
 * Copyright 2014 CERTH/HIT
 * 
 */

var usernameAvailability;
$(document).ready(function(){
	var arr = ["dimokas", "kalgik", "spanidis", "simeonidis", "kasper", "justin"];
	$('#username').keyup(function(){
		usernameAvailability = check($('#username').val());
		$('#usernameDescription').html(usernameAvailability);
		termsChecked();
	});	
	
	function check(username){
		var index;
		var found = false;

		if (username.length < 3) { 
			$('#usernameDescription').removeClass();
			$('#usernameDescription').addClass('username-description notavailable');
			$('#usernameAvailable').removeClass();
			$('#usernameAvailable').addClass('login-adjusterIcons username-icon-notavailable notavailable');
			return 'Not available'; 
		}

		for	(index = 0; index < arr.length; index++) {
		    if (username==arr[index])
				found = true;
		}
		if (found==true){
			$('#usernameDescription').removeClass();
			$('#usernameDescription').addClass('username-description notavailable');
			$('#usernameAvailable').removeClass();
			$('#usernameAvailable').addClass('login-adjusterIcons username-icon-notavailable notavailable');
			return 'Not available';			
		}
		else{
			$('#usernameDescription').removeClass();
			$('#usernameDescription').addClass('username-description available');
			$('#usernameAvailable').removeClass();
			$('#usernameAvailable').addClass('login-adjusterIcons username-icon-available available');
			return 'Available';			
		}
	}
});

