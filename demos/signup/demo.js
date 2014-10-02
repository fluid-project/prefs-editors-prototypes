/**
 * Cloud4all Preferences Management Tools - Sign Up UI
 * 
 * Copyright 2014 CERTH/HIT
 * 
 */

var demo = demo || {};

(function ($, fluid) {

    var pathToTemplates = "../../src/signup/html/";
    var pathToMessages = "../../src/signup/messages/";

    demo.initSignUpPanel = function () {
        gpii.signupPanel(".main", {
            resources: {
                template: {
                    href: pathToTemplates+"signupPanelTemplate.html"
                }
            }
        });
    };
})(jQuery, fluid);
