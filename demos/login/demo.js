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

var demo = demo || {};

(function ($, fluid) {
    demo.initLoginPanel = function () {
        gpii.loginPanel(".gpii-login-main", {
            templatePrefix: "../../src/login/",
            messagePrefix: "../../src/login/messages/" + gpii.prefs.i18n.getDefaultLanguage() +"/"
        });
    };

})(jQuery, fluid);
