/**
 * Cloud4all Preferences Management Tools - Sign Up UI
 *
 * Copyright 2014 CERTH/HIT
 * Copyright 2014 OCAD University
 *
 * Licensed under the New BSD license. You may not use this file except in
 * compliance with this License.
 * You may obtain a copy of the License at
 * https://github.com/GPII/prefsEditors/LICENSE.txt
 */

(function ($, fluid) {
    "use strict";

    fluid.registerNamespace("gpii.signupPanel");

    fluid.defaults("gpii.signupPanel.renderer", {
        gradeNames: ["fluid.rendererComponent", "fluid.prefs.msgLookup", "autoInit"],
        listeners: {
            "onCreate.render": "gpii.signupPanel.showTemplate",
            "afterRender.setLoginTabAriaLabel": {
                "this": "{that}.dom.loginTab",
                "method": "attr",
                "args": ["aria-label", "{that}.msgLookup.loginLabel"]
            },
            "afterRender.setRfidTabAriaLabel": {
                "this": "{that}.dom.rfidTab",
                "method": "attr",
                "args": ["aria-label", "{that}.msgLookup.rfidLabel"]
            },
            "afterRender.setUsbTabAriaLabel": {
                "this": "{that}.dom.usbTab",
                "method": "attr",
                "args": ["aria-label", "{that}.msgLookup.usbLabel"]
            },
            "afterRender.setQrcodeTabAriaLabel": {
                "this": "{that}.dom.qrcodeTab",
                "method": "attr",
                "args": ["aria-label", "{that}.msgLookup.qrCodeLabel"]
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
            "afterRender.clickCreateAccountButton": {
                "this": "{that}.dom.createAccountButton",
                "method": "click",
                "args": ["{that}.clickCreateAccountButton"]
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
                "args": ["{that}","{that}.msgLookup.available","{that}.msgLookup.passwordsMatch"],
                "dynamic": false
            },
            usernameAvailability: {
                "funcName": "gpii.signupPanel.usernameAvailability",
                "args": ["{that}","{that}.msgLookup.available","{that}.msgLookup.notAvailable","{that}.msgLookup.passwordsMatch"],
                "dynamic": false
            },
            passwdStrength: {
                "funcName": "gpii.signupPanel.passwdStrength",
                "args": ["{that}","{that}.msgLookup.tooShort","{that}.msgLookup.weak","{that}.msgLookup.strong"],
                "dynamic": false
            },
            passwdConfirm: {
                "funcName": "gpii.signupPanel.passwdConfirm",
                "args": ["{that}","{that}.msgLookup.available","{that}.msgLookup.passwordsMatch","{that}.msgLookup.passwordsDoNotMatch"],
                "dynamic": false
            },
            clickTermsLink: {
                "funcName": "gpii.signupPanel.clickTermsLink",
                "args": ["{that}.dom.termsLink"],
                "dynamic": false
            },
            clickCreateAccountButton: {
                "funcName": "gpii.signupPanel.clickCreateAccountButton",
                "args": ["{that}"],
                "dynamic": false
            },
            clickRecoveryBackButton: {
                "funcName": "gpii.signupPanel.clickRecoveryBackButton",
                "args": ["{that}.dom.overlayPanel","{that}.dom.modalPanel"],
                "dynamic": false
            },
            clickRecoveyCheckBox: {
                "funcName": "gpii.signupPanel.clickRecoveyCheckBox",
                "args": ["{that}"],
                "dynamic": false
            },
            clickGotIt: {
                "funcName": "gpii.signupPanel.clickGotIt",
                "args": ["{that}"],
                "dynamic": false
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
            cancelButton: ".gpiic-signup-login-cancelButton",
            createAccountButton: ".gpiic-signup-login-createAccountButton",
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
            usernameAvailable: ".gpiic-signup-login-usernameAvailable",
            loginTab: ".gpiic-signup-loginTab",
            rfidTab: ".gpiic-signup-rfidTab",
            usbTab: ".gpiic-signup-usbTab",
            qrcodeTab: ".gpiic-signup-qrcodeTab",
            termsCheckBoxLabel: ".gpiic-signup-termsCheckBoxLabel",
            recoveryCheckBoxLabel: ".gpiic-signup-recoveryCheckBoxLabel"
        },
        selectorsToIgnore: ["termsCheckBox","username","passwd","cpasswd","overlayPanel","modalPanel", "recoveyCheckBox","passwdMatchDescription","passwdMatch", "usernameDescription", "passwdStrengthDescription", "passwdStrength", "recoveryTextfield", "usernameAvailable", "loginTab", "rfidTab", "usbTab", "qrcodeTab", "termsCheckBoxLabel", "recoveryCheckBoxLabel"],
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
            cancelButton: {messagekey: "cancelButton"},
            createAccountButton: {messagekey: "createAccountButton"},
            recoveryBackButton: {messagekey: "backButton"},
            gotIt: {messagekey: "gotItButton"},
            available: {messagekey: "available"},
            notAvailable: {messagekey: "notAvailable"},
            passwordsMatch: {messagekey: "passwordsMatch"},
            passwordsDoNotMatch: {messagekey: "passwordsDoNotMatch"},
            tooShort: {messagekey: "tooShort"},
            weak: {messagekey: "weak"},
            strong: {messagekey: "strong"}
        },
        strings: {
            // "signUpLabel": "Sign-up",
            // "signUpDescription1": "Choose at least one method to access your account.",
            // "signUpDescription2": "This can be changed later.",
            // "loginLabel": "LOGIN",
            // "usbLabel": "USB",
            // "rfidLabel": "RFID",
            // "qrCodeLabel": "QR CODE",
            // "recommendedForSecurity": "* Recommended for security",
            // "usernameLabel": "Enter email or create username",
            // "passwordLabel": "Password",
            // "confirmPasswordLabel": "Confirm password",
            // "acceptLabel": "I accept ",
            // "termsAndConditions": "terms and conditions",
            // "selectRecoveyMethod": "Select recovery method",
            // "recoveryID": "Recovery ID",
            // "recoveryDescription": "The following ID has been copied to your clipboard. Please save it for account recovery in case of lost password or token.",
            // "cancelButtonValue": "cancel",
            // "createButton": "create account",
            // "backValue": "back",
            // "gotIt": "got it"
        }
    });

    fluid.defaults("gpii.signupPanel", {
        gradeNames: ["fluid.viewComponent", "autoInit"],
        components: {
            templateLoader: {
                type: "fluid.prefs.resourceLoader",
                options: {
                    templates: {
                        signup: "%prefix/html/signupPanelTemplate.html"
                    },
                    events: {
                        onResourcesLoaded: "{signupPanel}.events.onSignupTemplatesLoaded"
                    }
                }
            },
            messageLoader: {
                type: "fluid.prefs.resourceLoader",
                options: {
                    templates: {
                        login: "%prefix/login.json"
                    },
                    events: {
                        onResourcesLoaded: "{signupPanel}.events.onSignupMessagesLoaded"
                    }
                }
            },
            signUpRenderer: {
                type: "gpii.signupPanel.renderer",
                container: "{that}.container",
                createOnEvent: "onResourcesReady",
                options: {
                    parentBundle: "{signupPanel}.msgResolver",
                    resources: {
                        template: "{templateLoader}.resources.signup"
                    }
                }
            }
        },
        events: {
            onSignupTemplatesLoaded: null,
            onSignupMessagesLoaded: null,
            onMsgResolverReady: null,
            onResourcesReady: {
                events: {
                    templates: "onSignupTemplatesLoaded",
                    messages: "onSignupMessagesLoaded",
                    resolver: "onMsgResolverReady"
                },
                args: ["{that}"]
            }
        },
        distributeOptions: [{
            source: "{that}.options.signupPanelRenderer",
            removeSource: true,
            target: "{that > signupPanelRenderer}.options"
        }, {
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
            "onSignupMessagesLoaded.createMsgResolver": {
                funcName: "gpii.signupPanel.createMsgResolver",
                args: ["{arguments}.0", "{that}"]
            }
        }
    });
    
    gpii.signupPanel.createMsgResolver = function (messageResources, that) {
    	var completeMessage;
    	fluid.each(messageResources, function (oneResource) {
            var message = JSON.parse(oneResource.resourceText);
            completeMessage = $.extend({}, completeMessage, message);
        });
        //var parentResolver = fluid.messageResolver({messageBase: completeMessage});
        that.msgResolver = fluid.messageResolver({messageBase: completeMessage});
        //that.msgResolver = fluid.messageResolver({messageBase: {}, parents: [parentResolver]});
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

    var confirmPasswd; 
    var usernameAvailability;
    gpii.signupPanel.termsCheck = function (that, available, passwordsMatch) {
        if (that.locate("termsCheckBox").is(":checked")){
            that.locate("termsCheckBoxLabel").attr("aria-checked",true);
            if ((confirmPasswd===passwordsMatch)&&(usernameAvailability===available))
                that.locate("createAccountButton").attr("disabled",false);
            else
                that.locate("createAccountButton").attr("disabled",true);
        }
        else{
            that.locate("termsCheckBoxLabel").attr("aria-checked",false);
            that.locate("createAccountButton").attr("disabled",true);
        }
    };

    gpii.signupPanel.passwdConfirm = function (that, available, passwordsMatch, passwordsDoNotMatch) {
        confirmPasswd = gpii.signupPanel.confirm(that,that.locate("passwd").val(),that.locate("cpasswd").val(),that.locate("passwdMatchDescription"),that.locate("passwdMatch"), passwordsMatch, passwordsDoNotMatch);
        that.locate("passwdMatchDescription").html(confirmPasswd);
        gpii.signupPanel.termsCheck(that, available, passwordsMatch);
    };
    
    gpii.signupPanel.confirm = function (that, password, cpassword, passwdMatchDescription, passwdMatch, passwordsMatch, passwordsDoNotMatch){
        if (cpassword.length < 6) {
            passwdMatchDescription.removeClass();
            passwdMatchDescription.addClass("gpiic-signup-login-passwdMatchDescription gpii-signup-passwd-description gpii-signup-donotmatch");
            passwdMatch.removeClass();
            passwdMatch.addClass("gpiic-signup-login-passwdMatch gpii-signup-adjusterIcons gpii-signup-password-icon-donotmatch gpii-signup-donotmatch");
            return passwordsDoNotMatch;
        }
        if (cpassword===password && cpassword.length===password.length){
            passwdMatchDescription.removeClass();
            passwdMatchDescription.addClass("gpiic-signup-login-passwdMatchDescription gpii-signup-passwd-description gpii-signup-match");
            passwdMatch.removeClass();
            passwdMatch.addClass("gpiic-signup-login-passwdMatch gpii-signup-adjusterIcons gpii-signup-password-icon-match gpii-signup-match");
            return passwordsMatch;
        }
        else{
            passwdMatchDescription.removeClass();
            passwdMatchDescription.addClass("gpiic-signup-login-passwdMatchDescription gpii-signup-passwd-description gpii-signup-donotmatch");
            passwdMatch.removeClass();
            passwdMatch.addClass("gpiic-signup-login-passwdMatch gpii-signup-adjusterIcons gpii-signup-password-icon-donotmatch gpii-signup-donotmatch");
            return passwordsDoNotMatch;
        }
    }

    gpii.signupPanel.usernameAvailability = function (that, available, notAvailable, passwordsMatch) {
        usernameAvailability = gpii.signupPanel.checkUsernameAvailability(that.locate("username").val(), that.locate("usernameDescription"), that.locate("usernameAvailable"), available, notAvailable);
        that.locate("usernameDescription").html(usernameAvailability);
        gpii.signupPanel.termsCheck(that, available, passwordsMatch);
    };

    gpii.signupPanel.checkUsernameAvailability = function (usernameVal, usernameDescription, usernameAvailable, available, notAvailable){
        var index;
        var found = false;

        if (usernameVal.length < 3) {
            usernameDescription.removeClass();
            usernameDescription.addClass('gpiic-signup-login-usernameDescription gpii-signup-username-description gpii-signup-notavailable');
            usernameAvailable.removeClass();
            usernameAvailable.addClass('gpiic-signup-login-usernameAvailable gpii-signup-adjusterIcons gpii-signup-username-icon-notavailable gpii-signup-notavailable');
            return notAvailable;
        }

        if (found===true){
            usernameDescription.removeClass();
            usernameDescription.addClass('gpiic-signup-login-usernameDescription gpii-signup-username-description gpii-signup-notavailable');
            usernameAvailable.removeClass();
            usernameAvailable.addClass('gpiic-signup-login-usernameAvailable gpii-signup-adjusterIcons gpii-signup-username-icon-notavailable gpii-signup-notavailable');
            return notAvailable;
        }
        else{
            usernameDescription.removeClass();
            usernameDescription.addClass('gpiic-signup-login-usernameDescription gpii-signup-username-description gpii-signup-available');
            usernameAvailable.removeClass();
            usernameAvailable.addClass('gpiic-signup-login-usernameAvailable gpii-signup-adjusterIcons gpii-signup-username-icon-available gpii-signup-available');
            return available;
        }
    }

    gpii.signupPanel.passwdStrength = function (that, tooShort, weak, strong) {
        that.locate("passwdStrengthDescription").html(gpii.signupPanel.checkPasswdStrength(that.locate("passwd").val(), that.locate("passwdStrengthDescription"), that.locate("passwdStrength"), tooShort, weak, strong));
    };

    gpii.signupPanel.checkPasswdStrength = function (password, passwdStrengthDescription, passwdStrength, tooShort, weak, strong){
        var strength = 0;
        if (password.length < 6){
            passwdStrengthDescription.removeClass();
            passwdStrengthDescription.addClass('gpiic-signup-login-passwdStrengthDescription gpii-signup-passwd-description gpii-signup-password-short');
            passwdStrength.removeClass();
            passwdStrength.addClass('gpiic-signup-login-passwdStrength gpii-signup-adjusterIcons gpii-signup-password-icon-short gpii-signup-password-short');
            return tooShort;
        }
        if (password.length > 7) strength += 1;
        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))  strength += 1;
        if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/))  strength += 1; 
        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/))  strength += 1;
        if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1;
        if (strength < 2 ){
            passwdStrengthDescription.removeClass();
            passwdStrengthDescription.addClass('gpiic-signup-login-passwdStrengthDescription gpii-signup-passwd-description gpii-signup-password-weak');
            passwdStrength.removeClass();
            passwdStrength.addClass('gpiic-signup-login-passwdStrength gpii-signup-adjusterIcons gpii-signup-password-icon gpii-signup-password-weak');
            return weak;
        }
        else{
            passwdStrengthDescription.removeClass();
            passwdStrengthDescription.addClass('gpiic-signup-login-passwdStrengthDescription gpii-signup-passwd-description gpii-signup-password-strong');
            passwdStrength.removeClass();
            passwdStrength.addClass('gpiic-signup-login-passwdStrength gpii-signup-adjusterIcons gpii-signup-password-icon gpii-signup-password-strong');
            return strong;
        }
    }

    gpii.signupPanel.clickCreateAccountButton = function (that) {
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
            error: function(jqXHR, textStatus, errorThrown){
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
            that.locate("recoveryCheckBoxLabel").attr("aria-checked",true);
            that.locate("gotIt").attr("disabled",false);
            that.locate("recoveryTextfield").attr("disabled",false);
            that.locate("recoveryDescription").removeClass("disabled");
        }
        else{
            that.locate("recoveryCheckBoxLabel").attr("aria-checked",false);
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