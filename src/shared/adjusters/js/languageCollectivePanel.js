/*!
Cloud4all Preferences Management Tools

Copyright 2013-2014 OCAD University
Copyright 2013 Astea

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

(function (fluid) {
    fluid.defaults("gpii.panel.languageCollectivePanel", {
        gradeNames: ["fluid.prefs.compositePanel", "autoInit"],
        selectors: {
            languageHeader: ".gpii-languagePresetButton-label",
            languageSection: ".gpiic-language-section"
        },
        selectorsToIgnore: ["languageSection"],
        protoTree: {
            languageHeader: {messagekey: "languagePresetButtonLabel"}
        },
        members: {
            messageResolver: "{prefsEditorLoader}.msgResolver"
        },
        listeners: {
            "afterRender.setSectionName": {
                "this": "{that}.dom.languageSection",
                "method": "attr",
                "args": ["aria-label", "{that}.msgLookup.languagePresetButtonLabel"]
            }
        }
    });

    gpii.activateCombobox = function (that, common_in_primary, adjuster, titleLabel) {
        // Since infusion is using jQuery 1.7.1, fluid.locate() returns a jQuery 1.7.1 element.
        // As the combo box requires jQuery 1.9.1, unwrap the 1.7.1 element and rewrap it with
        // jQuery 1.9.1 before passing to combobox()

        var dropdown = that.locate(common_in_primary + "_" + adjuster + "_" + adjuster);
        var dropdownlabel = that.locate(common_in_primary + "_" + adjuster + "_" + adjuster + "Label");
        var unwrappedDropdown = fluid.unwrap(dropdown);
        var dropdownReadyForCombobox = $(unwrappedDropdown);

        dropdownReadyForCombobox.combobox({
            labelDomElement: dropdownlabel,
            title: that.msgLookup.lookup(titleLabel)
        }).change(function (event, newValue) {
            that.applier.requestChange(common_in_primary + "_" + adjuster, newValue);
        });
    };

})(fluid);
