/*!
Copyright 2013 ASTEA

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/gpii/universal/LICENSE.txt
*/

// Declare dependencies
/*global fluid, jqUnit, expect, jQuery*/

// JSLint options
/*jslint white: true, funcinvoke: true, undef: true, newcap: true, nomen: true, regexp: true, bitwise: true, browser: true, forin: true, maxerr: 100, indent: 4 */

(function ($) {
    fluid.registerNamespace("gpii.prefs.gpiiStore.tests");

    jqUnit.module("GPIIStore Tests");

    var store = gpii.prefs.gpiiStore();

    exampleModel = '{"gpii_primarySchema_contrastEnabled":false,' +
                    '"gpii_primarySchema_contrast_theme":"black-white",' +
                    '"gpii_primarySchema_fontSize":12,' +
                    '"gpii_primarySchema_cursorSize":1,' +
                    '"gpii_primarySchema_magnifierEnabled":false,' +
                    '"gpii_primarySchema_magnification":100,' +
                    '"gpii_primarySchema_magnificationPosition":"TopHalf",' +
                    '"gpii_primarySchema_showCrosshairs":false,' +
                    '"gpii_primarySchema_speakText":false,' +
                    '"gpii_primarySchema_screenReaderBrailleOutput":false,' +
                    '"gpii_primarySchema_wordsSpokenPerMinute":130,' +
                    '"gpii_primarySchema_volume":80,' +
                    '"gpii_primarySchema_visualAlternativesMoreLess":false,' +
                    '"gpii_primarySchema_voicePitch":80,' +
                    '"gpii_primarySchema_screenReaderLanguage":"en",' +
                    '"gpii_primarySchema_punctuationVerbosity":"none",' +
                    '"gpii_primarySchema_announceCapitals":false,' +
                    '"gpii_primarySchema_speakTutorialMessages":false,' +
                    '"gpii_primarySchema_keyEcho":false,' +
                    '"gpii_primarySchema_wordEcho":false,' +
                    '"gpii_primarySchema_textHighlighting":"Word",' +
                    '"gpii_primarySchema_universalVolume":80,' +
                    '"gpii_primarySchema_universalLanguage":"en"}';


    convertedExampleModel = '{"http://registry.gpii.org/common/pitch":[{"value":0.8}],' +
                             '"http://registry.gpii.org/common/volume":[{"value":0.8}],' +
                             '"http://registry.gpii.org/common/keyEcho":[{"value":false}],' +
                             '"http://registry.gpii.org/common/language":[{"value":"en"}],' +
                             '"http://registry.gpii.org/common/wordEcho":[{"value":false}],' +
                             '"http://registry.gpii.org/common/fontSize":[{"value":12}],' +
                             '"http://registry.gpii.org/common/volumeTTS":[{"value":0.8}],' +
                             '"http://registry.gpii.org/common/speechRate":[{"value":130}],' +
                             '"http://registry.gpii.org/common/cursorSize":[{"value":0.2}],' +
                             '"http://registry.gpii.org/common/readingUnit":[{"value":"Word"}],' +
                             '"http://registry.gpii.org/common/magnification":[{"value":1}],' +
                             '"http://registry.gpii.org/common/showCrosshairs":[{"value":false}],' +
                             '"http://registry.gpii.org/common/announceCapitals":[{"value":false}],' +
                             '"http://registry.gpii.org/common/magnifierEnabled":[{"value":false}],' +
                             '"http://registry.gpii.org/common/highContrastTheme":[{"value":"black-white"}],' +
                             '"http://registry.gpii.org/common/magnifierPosition":[{"value":"TopHalf"}],' +
                             '"http://registry.gpii.org/common/auditoryOutLanguage":[{"value":"en"}],' +
                             '"http://registry.gpii.org/common/highContrastEnabled":[{"value":false}],' +
                             '"http://registry.gpii.org/common/punctuationVerbosity":[{"value":"none"}],' +
                             '"http://registry.gpii.org/common/speakTutorialMessages":[{"value":false}],' +
                             '"http://registry.gpii.org/common/screenReaderTTSEnabled":[{"value":false}],' +
                             '"http://registry.gpii.org/common/screenReaderBrailleOutput":[{"value":false}]}'


    gpii.prefs.gpiiStore.tests.assertNotUndefined = function () {
        jqUnit.assertValue("Object should not be null or undefined.", store);
    }

    gpii.prefs.gpiiStore.tests.assertModeflTransofrmation = function () {
        var exampleModelObject = JSON.parse(exampleModel);
        var transformedExampleModel = store.modelTransform(exampleModelObject, gpii.prefs.commonTermsTransformationRules);
        var stringifiedExampleObject = JSON.stringify(transformedExampleModel); // Comparing stringified objects, since JSON.parse(JSON.stringify(obj)) != obj


        jqUnit.assertEquals("Transforming the model from schema to http://registry.gpii.org/common/...", stringifiedExampleObject, convertedExampleModel);
    }

    gpii.prefs.gpiiStore.tests.mockTest = function (testTitle, assertFunction, enabledMockSettings) {
        jqUnit.test(testTitle, function () {
            $.mockjaxClear();
            fluid.each(enabledMockSettings, $.mockjax);
            assertFunction();
            $.mockjaxClear();
        });
    };

    gpii.prefs.gpiiStore.tests.mockTest("Object not undefined.", gpii.prefs.gpiiStore.tests.assertNotUndefined);
    gpii.prefs.gpiiStore.tests.mockTest("Model transformation is correct", gpii.prefs.gpiiStore.tests.assertModeflTransofrmation);

})(jQuery);
