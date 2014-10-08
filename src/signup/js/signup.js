/**
 * Cloud4all Preferences Management Tools - Sign Up UI
 * 
 * Copyright 2014 CERTH/HIT
 * 
 */

var confirmPasswd;
var usernameAvailability;
var completeMessage;
(function ($, fluid) {

    "use strict";

    fluid.registerNamespace("gpii.signupPanel");

    fluid.defaults("gpii.signupPanel.messageLoader", {
        gradeNames: ["fluid.prefs.resourceLoader", "autoInit"],
        templates: {
            login: "../../src/signup/messages/en/login.json"
        }
    });
    
    fluid.defaults("gpii.signupPanel", {
        gradeNames: ["fluid.rendererComponent", "autoInit"],
        members: {
            messageResolver: "{signupPanel}.msgResolver"
        },
    	components: {
            templateLoader: {
                type: "fluid.prefs.resourceLoader",
                options: {
                    events: {
                        onResourcesLoaded: "{signupPanel}.events.onSignupTemplatesLoaded"
                    }
                }
            },
            messageLoader: {
                type: "fluid.prefs.resourceLoader",
                options: {
                    events: {
                        onResourcesLoaded: "{signupPanel}.events.onSignupMessagesLoaded"
                    }
                }
            }
        },
        events: {
            onSignupTemplatesLoaded: null,
            onSignupMessagesLoaded: null,
            onMsgResolverReady: null,
        },
        distributeOptions: [{
            source: "{that}.options.templateLoader",
            removeSource: true,
            target: "{that > templateLoader}.options"
        }, {
            source: "{that}.options.messageLoader",
            removeSource: true,
            target: "{that > messageLoader}.options"
        }, {
            source: "{that}.options.templatePrefix",
            target: "{that > templateLoader > resourcePath}.options.value"
        }, {
            source: "{that}.options.messagePrefix",
            target: "{that > messageLoader > resourcePath}.options.value"
        }],
        listeners: {
            "onCreate.showTemplate": "gpii.signupPanel.showTemplate",
            onSignupMessagesLoaded: {
                funcName: "gpii.signupPanel.createMsgResolver",
                args: ["{arguments}.0", "{that}"]
            },
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
        	signUpLabel: ".gpiic-signup-label",
        	loginLabel: ".gpiic-signup-loginLabel",
        	usbLabel: ".gpiic-signup-usbLabel",
        	rfidLabel: ".gpiic-signup-rfidLabel",
        	qrCodeLabel: ".gpiic-signup-qrCodeLabel",
        	signUpDescription1: ".gpiic-signup-description1",
        	signUpDescription2: ".gpiic-signup-description2",
        	recommendedForSecurity: ".gpiic-signup-login-recommendedForSecurity",
        	usernameLabel: ".gpiic-signup-login-usernameLabel",
        	passwordLabel: ".gpiic-signup-login-passwordLabel",
        	confirmPasswordLabel: ".gpiic-signup-login-confirmPasswordLabel",
        	acceptLabel: ".gpiic-signup-login-acceptLabel",
        	selectRecoveyMethod: ".gpiic-signup-login-selectRecoveyMethod",
        	recoveryID: ".gpiic-signup-login-recoveryID",
        	recoveryDescription: ".gpiic-signup-login-recoveryDescription",
        	cancelButtonValue: ".gpiic-signup-login-cancelButtonValue",
        	createButton: ".gpiic-signup-login-createAccountButton",
        	recoveryBackButton: ".gpiic-signup-login-recoveryBackButton",
        	gotIt: ".gpiic-signup-login-gotItButton",
        	termsCheckBox: ".gpiic-signup-login-termsCheckBox",
        	username: ".gpiic-signup-login-usernameTextfield",
        	passwd: ".gpiic-signup-login-passwdTextfield",
        	cpasswd: ".gpiic-signup-login-cpasswdTextfield",
        	overlayPanel: ".gpiic-signup-login-overlay",
        	modalPanel: ".gpiic-signup-login-modal",
        	termsLink: ".gpiic-signup-login-termsLink",
        	recoveyCheckBox: ".gpiic-signup-login-recoveyCheckBox",
        	passwdMatchDescription: ".gpiic-signup-login-passwdMatchDescription",
        	passwdMatch: ".gpiic-signup-login-passwdMatch",
        	passwdStrengthDescription: ".gpiic-signup-login-passwdStrengthDescription",
        	passwdStrength: ".gpiic-signup-login-passwdStrength",
        	recoveryTextfield: ".gpiic-signup-login-recoveryTextfield",
        	usernameDescription: ".gpiic-signup-login-usernameDescription",
        	usernameAvailable: ".gpiic-signup-login-usernameAvailable"
        },
        selectorsToIgnore: ["termsCheckBox","username","passwd","cpasswd","overlayPanel","modalPanel", "recoveyCheckBox","passwdMatchDescription","passwdMatch", "usernameDescription", "passwdStrengthDescription", "passwdStrength", "recoveryTextfield", "usernameAvailable"],
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
    
    gpii.signupPanel.createMsgResolver = function (messageResources, that) {
    	
    	fluid.each(messageResources, function (oneResource) {
    		var message = JSON.parse(oneResource.resourceText);
    		completeMessage = $.extend({}, completeMessage, message);
    	});
    	var parentResolver = fluid.messageResolver({messageBase: completeMessage});
    	that.msgResolver = fluid.messageResolver({messageBase: {}, parents: [parentResolver]});
    	that.events.onMsgResolverReady.fire();
    };
    
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
    	if (that.locate("termsCheckBox").is(":checked"))
    		if ((confirmPasswd=="Passwords match")&&(usernameAvailability=="Available"))
    			that.locate("createButton").attr("disabled",false);
    		else 
    			that.locate("createButton").attr("disabled",true);
    	else 
    		that.locate("createButton").attr("disabled",true);
    };

    gpii.signupPanel.passwdConfirm = function (that) {
		confirmPasswd = gpii.signupPanel.confirm(that,that.locate("passwd").val(),that.locate("cpasswd").val(),that.locate("passwdMatchDescription"),that.locate("passwdMatch"));
		that.locate("passwdMatchDescription").html(confirmPasswd);
		gpii.signupPanel.termsCheck(that);
    };
    
    gpii.signupPanel.confirm = function (that, password, cpassword, passwdMatchDescription, passwdMatch){
		if (cpassword.length < 6) { 
			passwdMatchDescription.removeClass();
			passwdMatchDescription.addClass("gpiic-signup-login-passwdMatchDescription passwd-description donotmatch");
			passwdMatch.removeClass();
			passwdMatch.addClass("gpiic-signup-login-passwdMatch login-adjusterIcons password-icon-donotmatch donotmatch");
			return "Passwords do not match";			
		}
		
		if (cpassword==password && cpassword.length==password.length){
			passwdMatchDescription.removeClass();
			passwdMatchDescription.addClass("gpiic-signup-login-passwdMatchDescription passwd-description match");
			passwdMatch.removeClass();
			passwdMatch.addClass("gpiic-signup-login-passwdMatch login-adjusterIcons password-icon-match match");
			return "Passwords match";			
		}
		else{
			passwdMatchDescription.removeClass();
			passwdMatchDescription.addClass("gpiic-signup-login-passwdMatchDescription passwd-description donotmatch");
			passwdMatch.removeClass();
			passwdMatch.addClass("gpiic-signup-login-passwdMatch login-adjusterIcons password-icon-donotmatch donotmatch");
			return "Passwords do not match";			
		}
	}

    gpii.signupPanel.usernameAvailability = function (that) {
		usernameAvailability = gpii.signupPanel.checkUsernameAvailability(that.locate("username").val(), that.locate("usernameDescription"), that.locate("usernameAvailable"));
		that.locate("usernameDescription").html(usernameAvailability);
		gpii.signupPanel.termsCheck(that);
    };

    gpii.signupPanel.checkUsernameAvailability = function (usernameVal, usernameDescription, usernameAvailable){
    	var arr = ["dimokas", "kalgik", "spanidis", "simeonidis", "kasper", "justin"];
    	var index;
		var found = false;

		if (usernameVal.length < 3) { 
			usernameDescription.removeClass();
			usernameDescription.addClass('gpiic-signup-login-usernameDescription username-description notavailable');
			usernameAvailable.removeClass();
			usernameAvailable.addClass('gpiic-signup-login-usernameAvailable login-adjusterIcons username-icon-notavailable notavailable');
			return 'Not available'; 
		}

		for	(index = 0; index < arr.length; index++) {
		    if (usernameVal==arr[index])
				found = true;
		}
		if (found==true){
			usernameDescription.removeClass();
			usernameDescription.addClass('gpiic-signup-login-usernameDescription username-description notavailable');
			usernameAvailable.removeClass();
			usernameAvailable.addClass('gpiic-signup-login-usernameAvailable login-adjusterIcons username-icon-notavailable notavailable');
			return 'Not available';			
		}
		else{
			usernameDescription.removeClass();
			usernameDescription.addClass('gpiic-signup-login-usernameDescription username-description available');
			usernameAvailable.removeClass();
			usernameAvailable.addClass('gpiic-signup-login-usernameAvailable login-adjusterIcons username-icon-available available');
			return 'Available';			
		}
	}

    gpii.signupPanel.passwdStrength = function (that) {
    	that.locate("passwdStrengthDescription").html(gpii.signupPanel.checkPasswdStrength(that.locate("passwd").val(), that.locate("passwdStrengthDescription"), that.locate("passwdStrength")));
    };

    gpii.signupPanel.checkPasswdStrength = function (password, passwdStrengthDescription, passwdStrength){
		var strength = 0;
		if (password.length < 6) { 
			passwdStrengthDescription.removeClass();
			passwdStrengthDescription.addClass('gpiic-signup-login-passwdStrengthDescription short passwd-description');
			passwdStrength.removeClass();
			passwdStrength.addClass('gpiic-signup-login-passwdStrength login-adjusterIcons password-icon-short short');
			return 'Too short'; 
		}
		if (password.length > 7) strength += 1;
		if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))  strength += 1;
		if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/))  strength += 1; 
		if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/))  strength += 1;
		if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1;
		
		if (strength < 2 ){
			passwdStrengthDescription.removeClass();
			passwdStrengthDescription.addClass('gpiic-signup-login-passwdStrengthDescription weak passwd-description');
			passwdStrength.removeClass();
			passwdStrength.addClass('gpiic-signup-login-passwdStrength login-adjusterIcons password-icon weak');
			return 'Weak';			
		}
		else{
			passwdStrengthDescription.removeClass();
			passwdStrengthDescription.addClass('gpiic-signup-login-passwdStrengthDescription strong passwd-description');
			passwdStrength.removeClass();
			passwdStrength.addClass('gpiic-signup-login-passwdStrength login-adjusterIcons password-icon strong');
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
				that.locate("overlayPanel").show();
				that.locate("modalPanel").show();
				that.locate("recoveryTextfield").val(token); 
			},
			error: function(jqXHR, textStatus, errorThrown) { 
				that.locate("overlayPanel").show();
				that.locate("modalPanel").show();
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
		if (that.locate("recoveyCheckBox").is(":checked")){
			that.locate("gotIt").attr("disabled",false);
			that.locate("recoveryTextfield").attr("disabled",false);
			that.locate("recoveryDescription").removeClass("disabled");			
		}
		else{
			that.locate("gotIt").attr("disabled",true);
			that.locate("recoveryTextfield").attr("disabled",true);
			that.locate("recoveryDescription").addClass("disabled");			
		}
    };

    gpii.signupPanel.clickGotIt = function (that) {
		var loginUrl = "http://localhost:8081/user/"+that.locate("recoveryTextfield").val()+"/login";
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



