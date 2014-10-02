/**
 * Cloud4all Preferences Management Tools - Sign Up UI
 * 
 * Copyright 2014 CERTH/HIT
 * 
 */

var confirmPasswd;
var usernameAvailability;

(function ($, fluid) {

    "use strict";

    fluid.registerNamespace("gpii.signupPanel");

    fluid.defaults("gpii.signupPanel", {
        gradeNames: ["fluid.rendererComponent", "autoInit"],
        listeners: {
            "onCreate.showTemplate": "gpii.signupPanel.showTemplate",
            "afterRender.termsCheck": {
                "this": "{that}.dom.termsCheckBox",
                "method": "change",
                "args": ["{that}.termsCheck"]
            },
            "afterRender.usernameAvailability": {
                "this": "{that}.dom.username",
                "method": "keyup",
                "args": ["{that}.usernameAvailability"]
            },
            "afterRender.passwdStrength": {
                "this": "{that}.dom.passwd",
                "method": "keyup",
                "args": ["{that}.passwdStrength"]
            },
            "afterRender.passwdConfirm": {
                "this": "{that}.dom.cpasswd",
                "method": "keyup",
                "args": ["{that}.passwdConfirm"]
            },
            "afterRender.clickTermsLink": {
                "this": "{that}.dom.termsLink",
                "method": "click",
                "args": ["{that}.clickTermsLink"]
            },
            "afterRender.clickCreateButton": {
                "this": "{that}.dom.createButton",
                "method": "click",
                "args": ["{that}.clickCreateButton"]
            },
            "afterRender.clickRecoveryBackButton": {
                "this": "{that}.dom.recoveryBackButton",
                "method": "click",
                "args": ["{that}.clickRecoveryBackButton"]
            },
            "afterRender.clickRecoveyCheckBox": {
                "this": "{that}.dom.recoveyCheckBox",
                "method": "change",
                "args": ["{that}.clickRecoveyCheckBox"]
            },
            "afterRender.clickGotIt": {
                "this": "{that}.dom.gotIt",
                "method": "click",
                "args": ["{that}.clickGotIt"]
            }
        },
        invokers: {
        	termsCheck: {
                "funcName": "gpii.signupPanel.termsCheck",
                "args": ["{that}"],
                "dynamic": true
            },
            usernameAvailability: {
                "funcName": "gpii.signupPanel.usernameAvailability",
                "args": ["{that}"],
                "dynamic": true
            },
            passwdStrength: {
                "funcName": "gpii.signupPanel.passwdStrength",
                "args": ["{that}"],
                "dynamic": true
            },
            passwdConfirm: {
                "funcName": "gpii.signupPanel.passwdConfirm",
                "args": ["{that}"],
                "dynamic": true
            },
            clickTermsLink: {
                "funcName": "gpii.signupPanel.clickTermsLink",
                "args": ["{that}.dom.termsLink"],
                "dynamic": true
            },
            clickCreateButton: {
                "funcName": "gpii.signupPanel.clickCreateButton",
                "args": ["{that}"],
                "dynamic": true
            },
            clickRecoveryBackButton: {
                "funcName": "gpii.signupPanel.clickRecoveryBackButton",
                "args": ["{that}.dom.overlayPanel","{that}.dom.modalPanel"],
                "dynamic": true
            },
            clickRecoveyCheckBox: {
                "funcName": "gpii.signupPanel.clickRecoveyCheckBox",
                "args": ["{that}"],
                "dynamic": true
            },
            clickGotIt: {
                "funcName": "gpii.signupPanel.clickGotIt",
                "args": ["{that}"],
                "dynamic": true
            }
        },
        selectors: {
        	signUpLabel: ".signUpLabel",
        	loginLabel: ".loginLabel",
        	usbLabel: ".usbLabel",
        	rfidLabel: ".rfidLabel",
        	qrCodeLabel: ".qrCodeLabel",
        	signUpDescription1: ".signUpDescription1",
        	signUpDescription2: ".signUpDescription2",
        	recommendedForSecurity: ".recommendedForSecurity",
        	usernameLabel: ".usernameLabel",
        	passwordLabel: ".passwordLabel",
        	confirmPasswordLabel: ".confirmPasswordLabel",
        	acceptLabel: ".acceptLabel",
        	selectRecoveyMethod: ".selectRecoveyMethod",
        	recoveryID: ".recoveryID",
        	recoveryDescription: ".recoveryDescription",
        	cancelButtonValue: ".cancelButtonValue",
        	createButton: "#createButton",
        	recoveryBackButton: "#recoveryBackButton",
        	gotIt: ".gotItValue",
        	termsCheckBox: "#termsCheckBox",
        	username: "#username",
        	passwd: "#passwd",
        	cpasswd: "#cpasswd",
        	overlayPanel: ".overlay",
        	modalPanel: ".modal",
        	termsLink: "#termsLink",
        	recoveyCheckBox: "#recoveyCheckBox"
        },
        selectorsToIgnore: ["termsCheckBox","username","passwd","cpasswd","overlayPanel","modalPanel", "recoveyCheckBox"],
        protoTree: {
        	signUpLabel: {messagekey: "signUpLabel"},
        	signUpDescription1: {messagekey: "signUpDescription1"},
        	signUpDescription2: {messagekey: "signUpDescription2"},
        	loginLabel: {messagekey: "loginLabel"},
        	usbLabel: {messagekey: "usbLabel"},
        	rfidLabel: {messagekey: "rfidLabel"},
        	qrCodeLabel: {messagekey: "qrCodeLabel"},
        	recommendedForSecurity: {messagekey: "recommendedForSecurity"},
        	usernameLabel: {messagekey: "usernameLabel"},
        	passwordLabel: {messagekey: "passwordLabel"},
        	confirmPasswordLabel: {messagekey: "confirmPasswordLabel"},
        	acceptLabel: {messagekey: "acceptLabel"},
        	termsLink: {messagekey: "termsAndConditions"},
        	selectRecoveyMethod: {messagekey: "selectRecoveyMethod"},
        	recoveryID: {messagekey: "recoveryID"},
        	recoveryDescription: {messagekey: "recoveryDescription"},
            cancelButtonValue: {messagekey: "cancelButtonValue"},
            createButton: {messagekey: "createButton"},
            recoveryBackButton: {messagekey: "backValue"},
            gotIt: {messagekey: "gotIt"}
        },
        strings: {
        	"signUpLabel": "Sign-up",
        	"signUpDescription1": "Choose at least one method to access your account.",
        	"signUpDescription2": "This can be changed later.",
            "loginLabel": "LOGIN",
            "usbLabel": "USB",
            "rfidLabel": "RFID",
            "qrCodeLabel": "QR CODE",
            "recommendedForSecurity": "* Recommended for security",
            "usernameLabel": "Enter email or create username",
            "passwordLabel": "Password",
            "confirmPasswordLabel": "Confirm password",
            "acceptLabel": "I accept ",
            "termsAndConditions": "terms and conditions",
            "selectRecoveyMethod": "Select recovery method",
            "recoveryID": "Recovery ID",
            "recoveryDescription": "The following ID has been copied to your clipboard. Please save it for account recovery in case of lost password or token.",
            "cancelButtonValue": "cancel",
            "createButton": "create account",
            "backValue": "back",
            "gotIt": "got it"
        }
    });
    
    gpii.signupPanel.showTemplate = function (that) {
        fluid.fetchResources(that.options.resources, function () {
            that.refreshView();
            var oPanel = that.locate("overlayPanel");
            oPanel.hide();
            var mPanel = that.locate("modalPanel");
            mPanel.hide();
        });
    };

    gpii.signupPanel.termsCheck = function (that) {
		console.log("Checking password and username availability... ");
    	if ($("#termsCheckBox").is(":checked"))
    		if ((confirmPasswd=="Passwords match")&&(usernameAvailability=="Available"))
    			$("#createButton").attr('disabled',false);
    		else 
    			$("#createButton").attr('disabled',true);
    	else 
    		$('#createButton').attr('disabled',true);
    };

    gpii.signupPanel.passwdConfirm = function (that) {
		confirmPasswd = gpii.signupPanel.confirm($('#passwd').val(),$('#cpasswd').val());
		$('#passwdMatchDescription').html(confirmPasswd);
		gpii.signupPanel.termsCheck();
    };
    
    gpii.signupPanel.confirm = function (password,cpassword){
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

    gpii.signupPanel.usernameAvailability = function (that) {
		usernameAvailability = gpii.signupPanel.checkUsernameAvailability($('#username').val());
		$('#usernameDescription').html(usernameAvailability);
		gpii.signupPanel.termsCheck();
    };

    gpii.signupPanel.checkUsernameAvailability = function (username){
    	var arr = ["dimokas", "kalgik", "spanidis", "simeonidis", "kasper", "justin"];
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

    gpii.signupPanel.passwdStrength = function (that) {
    	$('#passwdStrengthDescription').html(gpii.signupPanel.checkPasswdStrength($('#passwd').val()));
    };

    gpii.signupPanel.checkPasswdStrength = function (password){
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
		else{
			$('#passwdStrengthDescription').removeClass();
			$('#passwdStrengthDescription').addClass('strong passwd-description');
			$('#passwdStrength').removeClass();
			$('#passwdStrength').addClass('login-adjusterIcons password-icon strong');
			return 'Strong';
		}
	}

    gpii.signupPanel.clickCreateButton = function (that) {
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
    };

    gpii.signupPanel.clickTermsLink = function (termsLink) {
		var selectedSection = $(location).attr("hash");
		termsLink.attr("href",selectedSection);
    };
    
    gpii.signupPanel.clickRecoveryBackButton = function (overlayPanel,modalPanel) {
    	overlayPanel.hide();
    	modalPanel.hide();
    };

    gpii.signupPanel.clickRecoveyCheckBox = function (that) {
		if ($("#recoveyCheckBox").is(":checked")){
			that.locate("gotIt").attr("disabled",false);
			$("#recoveryTextfield").attr("disabled",false);
			$("#recoveryDescription").removeClass("disabled");			
		}
		else{
			that.locate("gotIt").attr("disabled",true);
			$("#recoveryTextfield").attr("disabled",true);
			$("#recoveryDescription").addClass("disabled");			
		}
    };

    gpii.signupPanel.clickGotIt = function (that) {
		var loginUrl = "http://localhost:8081/user/"+$("#recoveryTextfield").val()+"/login";
		$.ajax({
			url: loginUrl,
			type: "GET",
			contentType: "application/json; charset=utf-8",
			dataType:"text",
			crossDomain: true,
			success: function(data, textStatus, jqXHR){
				window.location.href= location.origin + "/prefsEditors/demos/prefsEditor/index.html";
			},
			error: function(response) { 
				alert("Server connection error!\n\nPlease try again later.");
			}
		});
    };

})(jQuery, fluid);



