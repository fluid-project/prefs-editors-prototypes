/*!
Copyright 2014 ASTEA

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/gpii/universal/LICENSE.txt
*/

(function () {
    "use strict";

    fluid.registerNamespace("gpii.prefs.gpiiStore.tests");

    jqUnit.module("GPIIStore Tests");

    // The store object to work with throughout the tests
    var store = gpii.prefs.gpiiStore();

    // Test data
    var userToWorkWith = "sammy";
    var userToBeCreated = "userThatHasJustBeenCreated";

    var exampleModel = {
        "gpii_primarySchema_volume": 80,
        "gpii_primarySchema_keyEcho": false,
        "gpii_primarySchema_wordEcho": false,
        "gpii_primarySchema_fontSize": 12,
        "gpii_primarySchema_speakText": false,
        "gpii_primarySchema_voicePitch": 80,
        "gpii_primarySchema_cursorSize": 1,
        "gpii_primarySchema_magnification": 100,
        "gpii_primarySchema_contrast_theme": "black-white",
        "gpii_primarySchema_showCrosshairs": false,
        "gpii_primarySchema_universalVolume": 80,
        "gpii_primarySchema_contrastEnabled": false,
        "gpii_primarySchema_announceCapitals": false,
        "gpii_primarySchema_textHighlighting": "Word",
        "gpii_primarySchema_magnifierEnabled": false,
        "gpii_primarySchema_universalLanguage": "en",
        "gpii_primarySchema_punctuationVerbosity": "none",
        "gpii_primarySchema_screenReaderLanguage": "en",
        "gpii_primarySchema_wordsSpokenPerMinute": 130,
        "gpii_primarySchema_speakTutorialMessages": false,
        "gpii_primarySchema_magnificationPosition": "TopHalf",
        "gpii_primarySchema_screenReaderBrailleOutput": false
    };

    var convertedExampleModel = {
        "http://registry.gpii.org/common/pitch":[{"value":0.8}],
        "http://registry.gpii.org/common/volume":[{"value":0.8}],
        "http://registry.gpii.org/common/keyEcho":[{"value":false}],
        "http://registry.gpii.org/common/language":[{"value":"en"}],
        "http://registry.gpii.org/common/wordEcho":[{"value":false}],
        "http://registry.gpii.org/common/fontSize":[{"value":12}],
        "http://registry.gpii.org/common/volumeTTS":[{"value":0.8}],
        "http://registry.gpii.org/common/speechRate":[{"value":130}],
        "http://registry.gpii.org/common/cursorSize":[{"value":0.2}],
        "http://registry.gpii.org/common/readingUnit":[{"value":"Word"}],
        "http://registry.gpii.org/common/magnification":[{"value":1}],
        "http://registry.gpii.org/common/showCrosshairs":[{"value":false}],
        "http://registry.gpii.org/common/announceCapitals":[{"value":false}],
        "http://registry.gpii.org/common/magnifierEnabled":[{"value":false}],
        "http://registry.gpii.org/common/highContrastTheme":[{"value":"black-white"}],
        "http://registry.gpii.org/common/magnifierPosition":[{"value":"TopHalf"}],
        "http://registry.gpii.org/common/auditoryOutLanguage":[{"value":"en"}],
        "http://registry.gpii.org/common/highContrastEnabled":[{"value":false}],
        "http://registry.gpii.org/common/punctuationVerbosity":[{"value":"none"}],
        "http://registry.gpii.org/common/speakTutorialMessages":[{"value":false}],
        "http://registry.gpii.org/common/screenReaderTTSEnabled":[{"value":false}],
        "http://registry.gpii.org/common/screenReaderBrailleOutput":[{"value":false}]
    };

    /*
     * Mock settings used in the various test scenarios.
     */
    var loginSuccessMockSettings =
    {
        url: store.gpiiSession.options.url + "user/" + userToWorkWith + "/login",
        responseText: "User with token " + userToWorkWith + " was successfully logged in."
    };

    var loginSuccessNewUserMockSettings =
    {
        url: store.gpiiSession.options.url + "user/" + userToBeCreated + "/login",
        responseText: "User with token " + userToBeCreated + " was successfully logged in."
    };

    var getRequestMockSettings =
    {
        url: store.gpiiSession.options.url + "user/" + userToWorkWith,
        dataType: "json",
        responseText: {
            "preferences": convertedExampleModel
        }
    };

    var setRequestNoUserMockSettings =
    {
        url: store.gpiiSession.options.url + "user/",
        dataType: "json",
        responseText: {
            "token": userToBeCreated
        }
    };

    var setRequestUserLoggedMockSettings =
    {
        url: store.gpiiSession.options.url + "user/" + userToWorkWith,
        dataType: "json",
        responseText: {
            "token": userToWorkWith
        }
    };

    /*
     * State-changing and assertion functions used in the various tests.
     */
    gpii.prefs.gpiiStore.tests.assertNotUndefined = function () {
        jqUnit.assertValue("Object should not be null or undefined.", store);
    };

    gpii.prefs.gpiiStore.tests.assertModeflTransofrmation = function () {
        var transformedExampleModel = store.modelTransform(exampleModel, gpii.prefs.commonTermsTransformationRules);

        jqUnit.assertDeepEq("Transforming the model from schema to http://registry.gpii.org/common/...", transformedExampleModel, convertedExampleModel);
    };

    gpii.prefs.gpiiStore.tests.assertInvertedModeflTransofrmation = function () {
        var inverseTransformedExampleModel = store.inverseModelTransform(convertedExampleModel, gpii.prefs.commonTermsInverseTransformationRules);

        jqUnit.assertDeepEq("Transforming the model from http://registry.gpii.org/common/... to schema-like", inverseTransformedExampleModel, exampleModel);
    };

    gpii.prefs.gpiiStore.tests.assertGetInvokerNoLoggedUser = function () {
        var gpiiModel = store.get();

        jqUnit.assertNoValue("Settings object is undefined when no user is logged.", gpiiModel);
    };

    gpii.prefs.gpiiStore.tests.assertGetSettingsFromLoggedUser = function () {
        var keys = ["volume", "keyEcho", "wordEcho", "fontSize", "speakText", "voicePitch", "cursorSize", "magnification", "contrast_theme", "showCrosshairs", "universalVolume", "contrastEnabled", "announceCapitals", "textHighlighting", "magnifierEnabled", "universalLanguage", "punctuationVerbosity", "screenReaderLanguage", "wordsSpokenPerMinute", "speakTutorialMessages", "magnificationPosition", "screenReaderBrailleOutput"];

        var modelKeys = fluid.transform(keys, function (key) {
            return "gpii_primarySchema_" + key;
        });

        store.gpiiSession.login(userToWorkWith);
        var gpiiModel = store.get();

        jqUnit.assertDeepEq("Checking if the GET invoker successfully calls the transform function.", Object.keys(gpiiModel), modelKeys);
    };

    gpii.prefs.gpiiStore.tests.assertSetInvokerNoLoggedUser = function () {
        store.set();

        jqUnit.assertValue("Set creates token.", store.gpiiSession.options.loggedUser);
    };


    gpii.prefs.gpiiStore.tests.assertSetInvokerUserLogged = function () {
        store.gpiiSession.login(userToWorkWith);
        store.set();

        jqUnit.assertEquals("Checking if after set the same user is logged.", store.gpiiSession.options.loggedUser, userToWorkWith);
    };

    // Perform the various tests.
    gpii.tests.mockTest("Object not undefined.", gpii.prefs.gpiiStore.tests.assertNotUndefined);
    gpii.tests.mockTest("Model transformation check.", gpii.prefs.gpiiStore.tests.assertModeflTransofrmation);
    gpii.tests.mockTest("Inverted model transformation check.", gpii.prefs.gpiiStore.tests.assertInvertedModeflTransofrmation);
    gpii.tests.mockTest("Set when no user is logged.", gpii.prefs.gpiiStore.tests.assertSetInvokerNoLoggedUser, [setRequestNoUserMockSettings, loginSuccessNewUserMockSettings]);
    gpii.tests.mockTest("Set when user is already logged.", gpii.prefs.gpiiStore.tests.assertSetInvokerUserLogged, [loginSuccessMockSettings, setRequestUserLoggedMockSettings]);
    gpii.tests.mockTest("Get when no user is logged.", gpii.prefs.gpiiStore.tests.assertGetInvokerNoLoggedUser);
    gpii.tests.mockTest("Get when user is logged.", gpii.prefs.gpiiStore.tests.assertGetSettingsFromLoggedUser, [loginSuccessMockSettings, getRequestMockSettings]);


})();
