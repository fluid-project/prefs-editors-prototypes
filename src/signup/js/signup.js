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
            "afterRender.clickLoginLink": {
                "this": "{that}.dom.loginLink",
                "method": "click",
                "args": ["{that}.clickLoginLink"]
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
            },
            "afterRender.setAriaLabelTermsCheckBox": {
                listener: "gpii.signupPanel.setAriaLabelTerms",
                args: ["{that}.dom.termsCheckBoxLabel", "{that}.msgLookup.acceptLabel", "{that}.msgLookup.termsLink"]
            },
            "afterRender.setAriaLabelRecoveryCheckBox": {
                "this": "{that}.dom.recoveryCheckBoxLabel",
                "method": "attr",
                "args": ["aria-label", "{that}.msgLookup.recoveryID"]
            }
        },
        invokers: {
            termsCheck: {
                "funcName": "gpii.signupPanel.termsCheck",
                "args": ["{that}", "{that}.msgLookup.available", "{that}.msgLookup.notAvailable", "{that}.msgLookup.passwordsMatch", "{that}.msgLookup.passwordsDoNotMatch", "{that}.msgLookup.tooShort", "{that}.msgLookup.alphanumeric", "{that}.msgLookup.weak", "{that}.msgLookup.strong"]
            },
            usernameAvailability: {
                "funcName": "gpii.signupPanel.usernameAvailability",
                "args": ["{that}", "{that}.msgLookup.available", "{that}.msgLookup.notAvailable", "{that}.msgLookup.passwordsMatch", "{that}.msgLookup.passwordsDoNotMatch", "{that}.msgLookup.tooShort", "{that}.msgLookup.alphanumeric", "{that}.msgLookup.weak", "{that}.msgLookup.strong"]
            },
            passwdStrength: {
                "funcName": "gpii.signupPanel.passwdStrength",
                "args": ["{that}", "{that}.msgLookup.available", "{that}.msgLookup.notAvailable", "{that}.msgLookup.passwordsMatch", "{that}.msgLookup.passwordsDoNotMatch", "{that}.msgLookup.tooShort", "{that}.msgLookup.alphanumeric", "{that}.msgLookup.weak", "{that}.msgLookup.strong"]
            },
            passwdConfirm: {
                "funcName": "gpii.signupPanel.passwdConfirm",
                "args": ["{that}", "{that}.msgLookup.available", "{that}.msgLookup.notAvailable", "{that}.msgLookup.passwordsMatch", "{that}.msgLookup.passwordsDoNotMatch", "{that}.msgLookup.tooShort", "{that}.msgLookup.alphanumeric", "{that}.msgLookup.weak", "{that}.msgLookup.strong"]
            },
            clickLoginLink: {
                "funcName": "gpii.signupPanel.clickLoginLink",
                "args": []
            },
            clickTermsLink: {
                "funcName": "gpii.signupPanel.clickTermsLink",
                "args": ["{that}.dom.termsLink"]
            },
            clickCreateAccountButton: {
                "funcName": "gpii.signupPanel.clickCreateAccountButton",
                "args": ["{that}"]
            },
            clickRecoveryBackButton: {
                "funcName": "gpii.signupPanel.clickRecoveryBackButton",
                "args": ["{that}.dom.overlayPanel","{that}.dom.modalPanel"]
            },
            clickRecoveyCheckBox: {
                "funcName": "gpii.signupPanel.clickRecoveyCheckBox",
                "args": ["{that}"]
            },
            clickGotIt: {
                "funcName": "gpii.signupPanel.clickGotIt",
                "args": ["{that}"]
            }
        },
        selectors: {
            signUpLabel: ".gpiic-signup-label",
            loginLabel: ".gpiic-signup-loginLabel",
            usbLabel: ".gpiic-signup-usbLabel",
            rfidLabel: ".gpiic-signup-rfidLabel",
            qrCodeLabel: ".gpiic-signup-qrCodeLabel",
            signUpDescription: ".gpiic-signup-description",
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
            termsText: ".gpiic-signup-terms-text",
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
            termsCheckBoxLabel: ".gpiic-signup-termsCheckBoxLabel",
            recoveryCheckBoxLabel: ".gpiic-signup-recoveryCheckBoxLabel",
            loginLink: ".gpiic-signup-loginLink",
            loginLinkDescription: ".gpiic-signup-loginLinkDescription"
        },
        selectorsToIgnore: ["termsCheckBox","username","passwd","cpasswd","overlayPanel","modalPanel", "recoveyCheckBox","passwdMatchDescription","passwdMatch", "usernameDescription", "passwdStrengthDescription", "passwdStrength", "recoveryTextfield", "usernameAvailable", "termsCheckBoxLabel", "recoveryCheckBoxLabel", "termsText"],
        protoTree: {
            signUpLabel: {messagekey: "signUpLabel"},
            signUpDescription: {messagekey: "signUpDescription"},
            loginLabel: {messagekey: "loginLabel"},
            usbLabel: {messagekey: "usbLabel"},
            rfidLabel: {messagekey: "rfidLabel"},
            qrCodeLabel: {messagekey: "qrCodeLabel"},
            recommendedForSecurity: {messagekey: "recommendedForSecurity"},
            usernameLabel: {messagekey: "usernameLabel"},
            passwordLabel: {messagekey: "passwordLabel"},
            confirmPasswordLabel: {messagekey: "confirmPasswordLabel"},
            acceptLabel: {messagekey: "acceptLabel"},
            termsLink: {messagekey: "termsLink"},
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
            alphanumeric: {messagekey: "alphanumeric"},
            weak: {messagekey: "weak"},
            strong: {messagekey: "strong"},
            loginLink: {messagekey: "loginLink"},
            loginLinkDescription: {messagekey: "loginLinkDescription"}
        },
        styles: {
            match: "gpii-signup-match",
            donotMatch: "gpii-signup-donotmatch",
            iconMatch: "gpii-signup-password-icon-match",
            iconDonotMatch: "gpii-signup-password-icon-donotmatch",
            available: "gpii-signup-available",
            notAvailable: "gpii-signup-notavailable",
            usernameIconAvailable: "gpii-signup-username-icon-available",
            usernameIconNotAvailable: "gpii-signup-username-icon-notavailable",
            short: "gpii-signup-password-short",
            weak: "gpii-signup-password-weak",
            strong: "gpii-signup-password-strong",
            passwdIconShort: "gpii-signup-password-icon-short",
            passwdIcon: "gpii-signup-password-icon",
            passwdDescription: "gpii-signup-passwd-description",
            adjusterIcons: "gpii-signup-adjusterIcons",
            focus: "gpii-focus",
            matching: "gpii-signup-match gpii-signup-password-icon-match",
            notMatching: "gpii-signup-donotmatch gpii-signup-password-icon-donotmatch",
            availability: "gpii-signup-available gpii-signup-username-icon-available",
            noAvailability: "gpii-signup-notavailable gpii-signup-username-icon-notavailable",
            rejectPass: "gpii-signup-password-short gpii-signup-password-icon-short",
            weakPass: "gpii-signup-password-weak gpii-signup-password-icon",
            strongPass: "gpii-signup-password-strong gpii-signup-password-icon"
        },
        strings: {
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
                        login: "%prefix/signup.json"
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
        that.msgResolver = fluid.messageResolver({messageBase: completeMessage});
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

    /*
     *  The function is triggered when the terms and conditions checkbox is checked.
     *  The function checks whether the username is available, the password is either weak or strong and the confirmation password mathes password.
     *  The function modifies the attributes of the checkbox label and the create acount button based on the above three criteria.
     */
    gpii.signupPanel.termsCheck = function (that, available, notAvailable, passwordsMatch, passwordsDoNotMatch, tooShort, alphanumeric, weak, strong) {
        var termsCheckBoxChecked = that.locate("termsCheckBox").is(":checked");
        var usernameAvailability = gpii.signupPanel.checkUsernameAvailability(that, that.locate("username").val(), available, notAvailable);
        var strength = gpii.signupPanel.checkPasswdStrength(that, that.locate("passwd").val(), tooShort, alphanumeric, weak, strong);
        var confirmPasswd = gpii.signupPanel.confirm(that, that.locate("passwd").val(), that.locate("cpasswd").val(), passwordsMatch, passwordsDoNotMatch);
        if (termsCheckBoxChecked) {
            that.locate("termsCheckBoxLabel").attr("aria-checked", termsCheckBoxChecked);
            var disable = (confirmPasswd === passwordsMatch) && (usernameAvailability === available) && ((strength === weak) || (strength === strong));
            that.locate("createAccountButton").attr("disabled", !disable);
            that.locate("termsText").addClass(that.options.styles.focus);
        }
        else {
            that.locate("termsCheckBoxLabel").attr("aria-checked", termsCheckBoxChecked);
            that.locate("createAccountButton").attr("disabled", !termsCheckBoxChecked);
            that.locate("termsText").removeClass(that.options.styles.focus);
        }
    };

    /*
     *  The function is triggered when the user is filling in the confirmation password text field.
     */
    gpii.signupPanel.passwdConfirm = function (that, available, notAvailable, passwordsMatch, passwordsDoNotMatch, tooShort, alphanumeric, weak, strong) {
        var confirmPasswd = gpii.signupPanel.confirm(that, that.locate("passwd").val(), that.locate("cpasswd").val(), passwordsMatch, passwordsDoNotMatch);
        gpii.signupPanel.confirmStyle(that, that.locate("passwd").val(), that.locate("cpasswd").val(), that.locate("passwdMatchDescription"), that.locate("passwdMatch"));
        that.locate("passwdMatchDescription").html(confirmPasswd);
        gpii.signupPanel.termsCheck(that, available, notAvailable, passwordsMatch, passwordsDoNotMatch, tooShort, alphanumeric, weak, strong);
    };

    /*
     *  The function checks whether the confirmation password matches password.
     *  return: "passwordsMatch" in case the confirmation password matches password
     *          "passwordsDoNotMatch" in case the confirmation password does not match password
     */
    gpii.signupPanel.confirm = function (that, password, cpassword, passwordsMatch, passwordsDoNotMatch) {
        if (cpassword.length < 8) {
            return passwordsDoNotMatch;
        }
        if (cpassword===password && cpassword.length===password.length) {
            return passwordsMatch;
        }
        else {
            return passwordsDoNotMatch;
        }
    }

    /*
     *  The function adds or removes CSS classes in HTML elements with class selector passwdMatch and passwdMatchDescription.
     *  The function is based on the comparison between the confirmation password and password.
     */
    gpii.signupPanel.confirmStyle = function (that, password, cpassword, passwdMatchDescription, passwdMatch) {
        if (cpassword.length < 8) {
            if (passwdMatch.hasClass(that.options.styles.match)) {
                passwdMatch.removeClass(that.options.styles.matching);
                passwdMatchDescription.removeClass(that.options.styles.match);
            }
            passwdMatch.addClass(that.options.styles.notMatching);
            passwdMatchDescription.addClass(that.options.styles.donotMatch);
        }
        else if (cpassword===password && cpassword.length===password.length) {
            if (passwdMatch.hasClass(that.options.styles.donotMatch)) {
                passwdMatch.removeClass(that.options.styles.notMatching);
                passwdMatchDescription.removeClass(that.options.styles.donotMatch);
            }
            passwdMatch.addClass(that.options.styles.matching);
            passwdMatchDescription.addClass(that.options.styles.match);
        }
        else {
            if (passwdMatch.hasClass(that.options.styles.match)) {
                passwdMatch.removeClass(that.options.styles.matching);
                passwdMatchDescription.removeClass(that.options.styles.match);
            }
            passwdMatch.addClass(that.options.styles.notMatching);
            passwdMatchDescription.addClass(that.options.styles.donotMatch);
        }
    }

    /*
     *  The function is triggered when the user is filling in the username text field.
     */
    gpii.signupPanel.usernameAvailability = function (that, available, notAvailable, passwordsMatch, passwordsDoNotMatch, tooShort, alphanumeric, weak, strong) {
        var usernameAvailability = gpii.signupPanel.checkUsernameAvailability(that, that.locate("username").val(), available, notAvailable);
        gpii.signupPanel.usernameAvailabilityStyle(that, that.locate("username").val(), that.locate("usernameDescription"), that.locate("usernameAvailable"));
        that.locate("usernameDescription").html(usernameAvailability);
        gpii.signupPanel.termsCheck(that, available, notAvailable, passwordsMatch, passwordsDoNotMatch, tooShort, alphanumeric, weak, strong);
    };

    /*
     *  The function checks whether the username is available or not.
     *  return: "available" in case the username is available
     *          "notAvailable" in case the username is not available
     */
    gpii.signupPanel.checkUsernameAvailability = function (that, usernameVal, available, notAvailable) {
        var index;
        var found = false;

        if ((usernameVal.length < 3) || (found)) {
            return notAvailable;
        }
        else {
            return available;
        }
    }

    /*
     *  The function adds or removes CSS classes in HTML elements with class selector usernameAvailable and usernameDescription.
     */
    gpii.signupPanel.usernameAvailabilityStyle = function (that, usernameVal, usernameDescription, usernameAvailable) {
        var index;
        var found = false;

        if ((usernameVal.length < 3) || (found)) {
            if (usernameAvailable.hasClass(that.options.styles.available)) {
                usernameAvailable.removeClass(that.options.styles.availability);
                usernameDescription.removeClass(that.options.styles.available);
            }
            usernameAvailable.addClass(that.options.styles.noAvailability);
            usernameDescription.addClass(that.options.styles.notAvailable);
        }
        else {
            if (usernameAvailable.hasClass(that.options.styles.notAvailable)) {
                usernameAvailable.removeClass(that.options.styles.noAvailability);
                usernameDescription.removeClass(that.options.styles.notAvailable);
            }
            usernameAvailable.addClass(that.options.styles.availability);
            usernameDescription.addClass(that.options.styles.available);
        }
    }

    /*
     *  The function is triggered when the user is filling in the password text field.
     */
    gpii.signupPanel.passwdStrength = function (that, available, notAvailable, passwordsMatch, passwordsDoNotMatch, tooShort, alphanumeric, weak, strong) {
        var strength = gpii.signupPanel.checkPasswdStrength(that, that.locate("passwd").val(), tooShort, alphanumeric, weak, strong);
        gpii.signupPanel.passwdStrengthStyle(that, that.locate("passwd").val(), that.locate("passwdStrengthDescription"), that.locate("passwdStrength"));
        that.locate("passwdStrengthDescription").html(strength);
        gpii.signupPanel.termsCheck(that, available, notAvailable, passwordsMatch, passwordsDoNotMatch, tooShort, alphanumeric, weak, strong);
    };

    gpii.signupPanel.passwdRegExprs = {
        expr1: "([a-zA-Z])",
        expr2: "([0-9])",
        expr3: "([!,%,&,@,#,$,^,*,?,_,~])"
    };

    /*
     *  The function checks the strength of password.
     *  return: "tooShort" in case the password is less than 8 characters
     *          "alphanumeric" in case the password does not contain both letters and numbers
     *          "weak" in case the password contains both letters and numbers
     *          "strong" in case the password contains letters, numbers and special characters
     */
    gpii.signupPanel.checkPasswdStrength = function (that, password, tooShort, alphanumeric, weak, strong) {
        var strength = 0;
        if (password.length < 8) {
            return tooShort;
        }
        if (password.match(gpii.signupPanel.passwdRegExprs.expr1) || password.match(gpii.signupPanel.passwdRegExprs.expr2)) { strength = 1; }
        if (password.match(gpii.signupPanel.passwdRegExprs.expr1) && password.match(gpii.signupPanel.passwdRegExprs.expr2)) { strength = 2; }
        if ((strength === 2) && (password.match(gpii.signupPanel.passwdRegExprs.expr3))) { strength = 3; }
        if (strength === 1 ) {
            return alphanumeric;
        }
        else if (strength === 2 ) {
            return weak;
        }
        else {
            return strong;
        }
    }

    /*
     *  The function adds or removes CSS classes in HTML elements with class selector passwdStrength and passwdStrengthDescription.
     */
    gpii.signupPanel.passwdStrengthStyle = function (that, password, passwdStrengthDescription, passwdStrength) {
        var strength = 0;
        if (password.length < 8) {
            if (passwdStrengthDescription.hasClass(that.options.styles.weak)) {
                passwdStrengthDescription.removeClass(that.options.styles.weak);
                passwdStrength.removeClass(that.options.styles.weakPass);
            }
            else if (passwdStrengthDescription.hasClass(that.options.styles.strong)) {
                passwdStrengthDescription.removeClass(that.options.styles.strong);
                passwdStrength.removeClass(that.options.styles.strongPass);
            }
            passwdStrengthDescription.addClass(that.options.styles.short);
            passwdStrength.addClass(that.options.styles.rejectPass);
        }
        else{
            if (password.match(gpii.signupPanel.passwdRegExprs.expr1) || password.match(gpii.signupPanel.passwdRegExprs.expr2)) { strength = 1; }
            if (password.match(gpii.signupPanel.passwdRegExprs.expr1) && password.match(gpii.signupPanel.passwdRegExprs.expr2)) { strength = 2; }
            if ((strength === 2) && (password.match(gpii.signupPanel.passwdRegExprs.expr3))) { strength = 3; }
            if (strength === 1 ) {
                if (passwdStrengthDescription.hasClass(that.options.styles.weak)) {
                    passwdStrengthDescription.removeClass(that.options.styles.weak);
                    passwdStrength.removeClass(that.options.styles.weakPass);
                }
                else if (passwdStrengthDescription.hasClass(that.options.styles.strong)) {
                    passwdStrengthDescription.removeClass(that.options.styles.strong);
                    passwdStrength.removeClass(that.options.styles.strongPass);
                }
                passwdStrengthDescription.addClass(that.options.styles.short);
                passwdStrength.addClass(that.options.styles.rejectPass);
            }
            else if (strength === 2 ) {
                if (passwdStrengthDescription.hasClass(that.options.styles.strong)) {
                    passwdStrengthDescription.removeClass(that.options.styles.strong);
                    passwdStrength.removeClass(that.options.styles.strong);
                }
                else if (passwdStrengthDescription.hasClass(that.options.styles.short)) {
                    passwdStrengthDescription.removeClass(that.options.styles.short);
                    passwdStrength.removeClass(that.options.styles.rejectPass);
                    passwdStrength.addClass(that.options.styles.passwdIcon);
                }
                passwdStrengthDescription.addClass(that.options.styles.weak);
                passwdStrength.addClass(that.options.styles.weak);
            }
            else {
                if (passwdStrengthDescription.hasClass(that.options.styles.weak)) {
                    passwdStrengthDescription.removeClass(that.options.styles.weak);
                    passwdStrength.removeClass(that.options.styles.weak);
                }
                else if (passwdStrengthDescription.hasClass(that.options.styles.short)) {
                    passwdStrengthDescription.removeClass(that.options.styles.short);
                    passwdStrength.removeClass(that.options.styles.rejectPass);
                    passwdStrength.addClass(that.options.styles.passwdIcon);
                }
                passwdStrengthDescription.addClass(that.options.styles.strong);
                passwdStrength.addClass(that.options.styles.strong);
            }
        }
    }

    gpii.signupPanel.clickCreateAccountButton = function (that) {
        $.ajax({
            url:"http://preferences.gpii.net/user/",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType:"json",
            crossDomain: true,
            success: function(data, textStatus, jqXHR) {
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
        var recoveyCheckBoxChecked = that.locate("recoveyCheckBox").is(":checked");
        if (recoveyCheckBoxChecked) {
            that.locate("recoveryCheckBoxLabel").attr("aria-checked", recoveyCheckBoxChecked);
            that.locate("gotIt").attr("disabled", !recoveyCheckBoxChecked);
            that.locate("recoveryTextfield").attr("disabled", !recoveyCheckBoxChecked);
            that.locate("recoveryDescription").removeClass("disabled");
            that.locate("recoveryID").addClass(that.options.styles.focus);
        }
        else {
            that.locate("recoveryCheckBoxLabel").attr("aria-checked", recoveyCheckBoxChecked);
            that.locate("gotIt").attr("disabled", !recoveyCheckBoxChecked);
            that.locate("recoveryTextfield").attr("disabled", !recoveyCheckBoxChecked);
            that.locate("recoveryDescription").addClass("disabled");
            that.locate("recoveryID").removeClass(that.options.styles.focus);
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
            success: function(data, textStatus, jqXHR) {
                window.location.href= location.origin + "/prefsEditors/demos/prefsEditor/index.html";
            },
            error: function(response) {
                alert("Server connection error!\n\nPlease try again later.");
            }
        });
    };

    gpii.signupPanel.clickLoginLink = function () {
        window.location.href = location.origin + "/prefsEditors/demos/login/";
    };

    gpii.signupPanel.setAriaLabelTerms = function (label, accept, terms) {
        var text = accept + terms;
        label.attr("aria-label", text);
    }

})(jQuery, fluid);
