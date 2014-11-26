/*!
Cloud4all Preferences Management Tools

Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

(function (fluid) {
    "use strict";

    fluid.defaults("gpii.pmt", {
        gradeNames: ["fluid.prefs.GPIIEditor", "autoInit"],
        prefsEditor: {
            gradeNames: ["fluid.prefs.msgLookup"],
            members: {
                messageResolver: "{prefsEditorLoader}.msgResolver"
            },
            events: {
                onLogin: null,
                onLogout: null
            },
            selectors: {
                myPreferencesLabel: ".gpiic-pmt-preferenceSetSelectionButtonMyPreferencesLabel",
                allPreferencesLabel: ".gpiic-pmt-preferenceSetSelectionButtonAllPreferencesLabel",
                saveAndApplyButtonLabel: ".flc-prefsEditor-save",
                messageLineLabel: ".gpiic-prefsEditor-messageLine",
                notification: ".gpiic-prefsEditor-notification",
                confirmButton: ".gpiic-prefsEditor-notificationConfirmButton",
                notificationMessagePart1: ".gpiic-prefsEditor-notificationMessagePart1",
                notificationMessagePart2: ".gpiic-prefsEditor-notificationMessagePart2",
                notificationMessagePart3: ".gpiic-prefsEditor-notificationMessagePart3",
                notificationTitle: ".gpiic-prefsEditor-notificationTitle",
                notificationConfirmButton: ".gpiic-prefsEditor-notificationConfirmButton",
                quickEditorLink: ".gpiic-prefsEditor-quickEditorLink",
                logoutLink: ".gpiic-prefsEditor-userLogoutLink",
                userStatusBar: ".gpiic-prefsEditor-userStatusBar",
                setsButton: ".gpiic-prefsEditor-sets-button",
                accountButton: ".gpiic-prefsEditor-account-button",
                bottomRow: ".gpiic-pmt-bottomRow",
                contextPanel: ".gpiic-prefsEditor-contextContainer",
                contextIcon: ".gpiic-prefsEditor-context-icon",
                setLabel: ".gpiic-prefsEditor-setLabel",
                baseSetLabel: ".gpiic-prefsEditor-baseSetLabel",
                baseSetDescLabel: ".gpiic-prefsEditor-baseSetDescription",
                untitledLabel: ".gpiic-prefsEditor-untitledLabel",
                untitledDescLabel: ".gpiic-prefsEditor-untitledDescLabel",
                addSetLink: ".gpiic-prefsEditor-contextFrameLink",
                frameHeader: ".gpiic-prefsEditor-contextFrame-header",
                addIcon: ".gpiic-prefsEditor-context-addIcon",
                leftArrowIcon: ".gpiic-prefsEditor-context-leftArrowIcon",
                pencilIcon: ".gpiic-prefsEditor-context-pencilIcon",
                contextRows: ".gpiic-prefsEditor-contextFrame-rows",
                contextRow: ".gpiic-prefsEditor-contextFrame-row",
                contextEditButton: ".gpiic-prefsEditor-context-edit-button"
            },
            markup: {
                baseSet:
                    "<div class='gpiic-prefsEditor-contextFrame-row'>" +
                    "   <span class='gpiic-prefsEditor-baseSetLabel gpii-prefsEditor-contextFrame-setLabel'></span>" +
                    "   <span class='gpiic-prefsEditor-baseSetDescription gpii-prefsEditor-contextFrame-setLabelDescription'></span>" +
                    "</div>",
                untitledSet:
                    "<div class='gpiic-prefsEditor-contextFrame-row' role='region' aria-labelledby='alertHeading' aria-describedby='alertText'>" +
                    "   <span id='alertHeading' class='gpiic-prefsEditor-untitledLabel gpii-prefsEditor-contextFrame-setLabel'></span>" +
                    "   <span id='alertText' class='gpiic-prefsEditor-untitledDescLabel gpii-prefsEditor-contextFrame-setLabelDescription'></span>" +
                    "</div>",
                selectedIcon: 
                    "   <span class='gpiic-prefsEditor-context-leftArrowIcon gpii-prefsEditor-adjusterIcons gpii-prefsEditor-context-leftArrowIcon'></span>",
                pencilIcon: 
                    "   <input id='editButton' type='button' value='' aria-label='' class='gpiic-prefsEditor-context-edit-button gpii-prefsEditor-context-edit-button' tabindex='0'></input>" +
                    "   <label for='editButton' class='gpiic-prefsEditor-context-pencilIcon gpii-prefsEditor-adjusterIcons gpii-prefsEditor-pencil-icon'></span>"
            },
            styles: {
                bottomRow: "gpii-prefsEditor-panelBottomRow",
                bottomRowExtended: "gpii-prefsEditor-panelBottomRow-extended",
                contextIconLeft: "gpii-prefsEditor-context-icon-left",
                contextIconRight: "gpii-prefsEditor-context-icon-right",
                addIconMouseOut: "gpii-prefsEditor-context-addIcon",
                addIconMouseOver: "gpii-prefsEditor-context-addIconMouseOver",
                darkStyle: "gpii-prefsEditor-contextFrame-header-stylingDark",
                brightStyle: "gpii-prefsEditor-contextFrame-header-stylingBright",
                selected: "gpii-prefsEditor-contextFrame-row-selected",
                unSelected: "gpii-prefsEditor-contextFrame-row-unselected",
            },
            model: {
                userLoggedIn: false
            },
            listeners: {
                // on Session accountCreated:
                "{gpiiSession}.events.accountCreated": {
                    listener: "{that}.showSaveNotification"
                },
                // trigger login on notification confirmation
                "onReady.bindNotificationConfirmButtonClickTriggerLogin": {
                    "this": "{that}.dom.confirmButton",
                    "method": "click",
                    "args": ["{that}.events.onLogin.fire"]
                },
                "onReady.hideContextPanel": {
                    "this": "{that}.dom.contextPanel",
                    "method": "hide"
                },
                "onReady.createBaseSetBox": "{that}.createBaseSetBox",
                "onReady.createBaseSetBoxStyle": "{that}.createBaseSetBoxStyle",
                "onReady.onMouseoverAddSetLink": {
                    "this": "{that}.dom.addSetLink",
                    "method": "mouseover",
                    "args": ["{that}.mouseoverAddSetLink"]
                },
                "onReady.onMouseoutAddSetLink": {
                    "this": "{that}.dom.addSetLink",
                    "method": "mouseout",
                    "args": ["{that}.mouseoutAddSetLink"]
                },
                "onReady.createUntitledBox": {
                    "this": "{that}.dom.addSetLink",
                    "method": "click",
                    "args": ["{that}.createUntitledBox"]
                },
                "onReady.createUntitledBoxStyle": {
                    "this": "{that}.dom.addSetLink",
                    "method": "click",
                    "args": ["{that}.createUntitledBoxStyle"]
                },
                "onReady.createUntitledBoxAria": {
                    "this": "{that}.dom.addSetLink",
                    "method": "click",
                    "args": ["{that}.createUntitledBoxAria"]
                },
                "onReady.onClickSetsButton": {
                    "this": "{that}.dom.setsButton",
                    "method": "click",
                    "args": ["{that}.clickSetsButton"]
                },
                "onReady.onClickSetsToggle": {
                    "this": "{that}.dom.setsButton",
                    "method": "click",
                    "args": ["{that}.toggleContextPanel"]
                },
                // perform these onLogin
                "onLogin.setUserLoggedIn": {
                    listener: "{that}.applier.requestChange",
                    args: ["userLoggedIn", true]
                },
                "onLogin.hideNotification": {
                    "listener": "{that}.hideSaveNotification"
                },
                "onLogin.showSaveMessage": {
                    "listener": "{that}.showSaveMessage"
                },
                "onLogin.showUserStatusBar": {
                    "listener": "{that}.showUserStatusBar"
                },
                // set href of quick editor link when we log the user in
                "onLogin.setQuickEditorLinkHref": {
                    "listener": "{that}.setQuickEditorLinkHref"
                },
                // trigger logout onReset (logout link is the reset button)
                "onReset.triggerLogoutEvent": {
                    "listener": "{that}.events.onLogout.fire"
                },
                // perform these onLogout
                "onLogout.setUserLoggedIn": {
                    listener: "{that}.applier.requestChange",
                    args: ["userLoggedIn", false]
                },
                "onLogout.hideUserStatusBar": {
                    "this": "{that}.dom.userStatusBar",
                    "method": "slideUp"
                },
                "onLogout.clearMessage": {
                    "this": "{that}.dom.messageLineLabel",
                    "method": "text",
                    "args": [""]
                },
                "onLogout.hideMessageLine": {
                    "this": "{that}.dom.messageLineLabel",
                    "method": "hide"
                },
                // clear href of quick editor link when we log the user out
                "onLogout.clearQuickEditorLinkHref": {
                    "listener": "{that}.clearQuickEditorLinkHref"
                },
                "onLogout.gpiiLogout": {
                    listener: "{gpiiSession}.logout"
                },
                // set texts
                "onReady.setMyPreferencesLabelText": {
                    "this": "{that}.dom.myPreferencesLabel",
                    "method": "text",
                    "args": ["{that}.msgLookup.myPreferencesLabelText"]
                },
                "onReady.setAllPreferencesLabelText": {
                    "this": "{that}.dom.allPreferencesLabel",
                    "method": "text",
                    "args": ["{that}.msgLookup.allPreferencesLabelText"]
                },
                "onReady.setSetLabel": {
                    "this": "{that}.dom.setLabel",
                    "method": "text",
                    "args": ["{that}.msgLookup.baseSetLabel"]
                },
                "onReady.setBaseSetLabel": {
                    "this": "{that}.dom.baseSetLabel",
                    "method": "text",
                    "args": ["{that}.msgLookup.baseSetLabel"]
                },
                "onReady.setBaseSetDescLabel": {
                    "this": "{that}.dom.baseSetDescLabel",
                    "method": "text",
                    "args": ["{that}.msgLookup.baseSetDescLabel"]
                },
                "onReady.setSetsButtonText": {
                    "this": "{that}.dom.setsButton",
                    "method": "val",
                    "args": ["{that}.msgLookup.sets"]
                },
                "onReady.setSetsButtonAriaLabel": {
                    "this": "{that}.dom.setsButton",
                    "method": "attr",
                    "args": ["aria-label", "{that}.msgLookup.sets"]
                },
                "onReady.setAccountButtonText": {
                    "this": "{that}.dom.accountButton",
                    "method": "val",
                    "args": ["{that}.msgLookup.account"]
                },
                "onReady.setAccountButtonAriaLabel": {
                    "this": "{that}.dom.accountButton",
                    "method": "attr",
                    "args": ["aria-label", "{that}.msgLookup.account"]
                },
                "onReady.setAddSetLinkAriaLabel": {
                    "this": "{that}.dom.addSetLink",
                    "method": "attr",
                    "args": ["aria-label", "{that}.msgLookup.addSet"]
                },
                "onReady.setSaveAndApplyButtonText": {
                    "this": "{that}.dom.saveAndApplyButtonLabel",
                    "method": "attr",
                    "args": ["value", "{that}.msgLookup.saveAndApplyText"]
                },
                "onReady.setSaveAndApplyButtonAriaLabel": {
                    "this": "{that}.dom.saveAndApplyButtonLabel",
                    "method": "attr",
                    "args": ["aria-label", "{that}.msgLookup.saveAndApplyText"]
                },
                "onReady.setNotificationMessagePart1": {
                    "this": "{that}.dom.notificationMessagePart1",
                    "method": "text",
                    "args": ["{that}.msgLookup.notificationMessagePart1"]
                },
                "onReady.setNotificationMessagePart2": {
                    "this": "{that}.dom.notificationMessagePart2",
                    "method": "text",
                    "args": ["{that}.msgLookup.notificationMessagePart2"]
                },
                "onReady.setNotificationMessagePart3": {
                    "this": "{that}.dom.notificationMessagePart3",
                    "method": "text",
                    "args": ["{that}.msgLookup.notificationMessagePart3"]
                },
                "onReady.setNotificationTitle": {
                    "this": "{that}.dom.notificationTitle",
                    "method": "text",
                    "args": ["{that}.msgLookup.notificationTitle"]
                },
                "onReady.setNotificationConfirmButton": {
                    "this": "{that}.dom.notificationConfirmButton",
                    "method": "text",
                    "args": ["{that}.msgLookup.notificationConfirmButton"]
                },
                "onReady.setLogoutLinkText": {
                    "this": "{that}.dom.logoutLink",
                    "method": "text",
                    "args": ["{that}.msgLookup.logoutText"]
                },
                "onReady.logoutLinkPreventDefault": {
                    "this": "{that}.dom.logoutLink",
                    "method": "click",
                    "args": ["{that}.logoutLinkPreventDefault"]
                },
                "onReady.setQuickEditorLinkText": {
                    "this": "{that}.dom.quickEditorLink",
                    "method": "text",
                    "args": ["{that}.msgLookup.quickEditorText"]
                },
                // simply hide notification onReady
                "onReady.prepareSaveNotification": {
                    "this": "{that}.dom.notification",
                    "method": "hide"
                },
                "onReady.hideMessageLine": {
                    "this": "{that}.dom.messageLineLabel",
                    "method": "hide"
                },
                // hide the logout link if a user is not logged in
                "onReady.hideUserStatusBarIfNotLoggedIn": {
                    "listener": "{that}.hideUserStatusBarIfNotLoggedIn"
                },
                // this is needed for the cases where a user is already logged in
                "onReady.setQuickEditorLinkHref": {
                    "listener": "{that}.setQuickEditorLinkHref"
                },
                "onReady.addHidingListener": {
                    "listener": "{that}.applier.modelChanged.addListener",
                    "args": ["{that}.options.strings.mainVisibilitySwitch", "{that}.foldExpandedViewWhenOff"]
                }
            },
            invokers: {
                foldExpandedViewWhenOff: {
                    "funcName": "gpii.foldExpandedViewWhenOff",
                    "args": ["{that}.applier",
                             "{that}.model.gpii_primarySchema_visualAlternativesMoreLess",
                             "{that}.options.strings.extraVisibilitySwitch"
                        ],
                    "dynamic": true
                },
                showSaveNotification: {
                    "funcName": "gpii.pmt.showSaveNotification",
                    "args": ["{that}", "{arguments}.0"],
                    dynamic: true
                },
                hideSaveNotification: {
                    "funcName": "gpii.pmt.hideSaveNotification",
                    "args": ["{that}"],
                    dynamic: true
                },
                showSaveMessage: {
                    "this": "{that}.dom.messageLineLabel",
                    "method": "text",
                    "args": ["{that}.msgLookup.preferencesSavedToUSB"]
                },
                showUserStatusBar: {
                    "this": "{that}.dom.userStatusBar",
                    "method": "slideDown"
                },
                hideUserStatusBarIfNotLoggedIn: {
                    "funcName": "gpii.pmt.hideUserStatusBarIfNotLoggedIn",
                    /*
                     * TODO: Can we be sure that "{gpiiSession}.options.loggedUser" will actually have a value here?
                     * This would mean that GPIISession's "onCreate.getLoggedUser" has finished executing.
                     * Moreover, logged user acquisition from GPII is made in a synchronous call now. What if this call
                     * becomes async at some point?
                     * Ideally, we would need the onReady event of this component to be fired when the onCreate of GPIISession
                     * has finished. I could hook to "{gpiiSession}.events.onGetLoggedUserError" as i do further up with
                     * "{gpiiSession}.events.accountCreated", but it seems that if i register a listener there it is
                     * not executed because the onGetLoggedUserError event is fired from within the onCreate of GPIISession.
                     * Looks like things get complicated with when {gpiiSession} is available in the static environment,
                     * along with the event being generated from within the onCreate in GPIISession.
                     * In any case, tested this many times and, having all AJAX calls synchronous, looks like everything
                     * works as expected. We might have to synchronize everything better though if we make the AJAX calls
                     * asynchronous. The relevant JIRA for this is,
                     *      http://issues.gpii.net/browse/GPII-613
                     */
                    "args": ["{gpiiSession}.options.loggedUser", "{that}.dom.userStatusBar"]
                },
                setQuickEditorLinkHref : {
                    "this": "{that}.dom.quickEditorLink",
                    method: "attr",
                    args: ["href", "{prefsEditorLoader}.options.pcpUrl"]
                },
                clearQuickEditorLinkHref: {
                    "this": "{that}.dom.quickEditorLink",
                    method: "attr",
                    args: ["href", ""]
                },
                logoutLinkPreventDefault: {
                    "funcName": "gpii.eventUtility.preventDefaultEvent"
                },
                clickSetsButton: {
                    "funcName": "gpii.pmt.clickSetsButton",
                    "args": ["{that}"]
                },
                toggleContextPanel: {
                    "funcName": "gpii.pmt.toggleContextPanel",
                    "args": ["{that}"]
                },
                mouseoverAddSetLink: {
                    "funcName": "gpii.pmt.mouseoverAddSetLink",
                    "args": ["{that}"]
                },
                mouseoutAddSetLink: {
                    "funcName": "gpii.pmt.mouseoutAddSetLink",
                    "args": ["{that}"]
                },
                createUntitledBox: {
                    "funcName": "gpii.pmt.createUntitledBox",
                    "args": ["{that}.dom.contextRows", "{that}.options.markup.untitledSet", "{that}.msgLookup.untitledLabel", "{that}.msgLookup.untitledDescLabel", "{that}", "{that}.dom.setLabel"]
                },
                createUntitledBoxStyle: {
                    "funcName": "gpii.pmt.createUntitledBoxStyle",
                    "args": ["{that}"]
                },
                createUntitledBoxAria: {
                    "funcName": "gpii.pmt.createUntitledBoxAria",
                    "args": ["{that}","{that}.msgLookup.editText"]
                },
                createBaseSetBox: {
                    "funcName": "gpii.pmt.createBaseSetBox",
                    "args": ["{that}.dom.contextRows","{that}.options.markup.baseSet"]
                },
                createBaseSetBoxStyle: {
                    "funcName": "gpii.pmt.createBaseSetBoxStyle",
                    "args": ["{that}.dom.contextRow", "{that}.options.styles.selected", "{that}.options.markup.selectedIcon"]
                }
            },
            strings: {
                "mainVisibilitySwitch": "gpii_primarySchema_speakText",
                "extraVisibilitySwitch": "gpii_primarySchema_visualAlternativesMoreLess"
            }
        }
    });

    gpii.pmt.createUntitledBoxAria = function (that, editText) {
        var editButton = that.dom.locate("contextEditButton");
        editButton.attr("aria-label", editText);
        editButton.val(editText);
    };

    gpii.pmt.createUntitledBoxStyle = function (that) {
        var contextRows = that.dom.locate("contextRow");
        var cRow;
        fluid.each(contextRows, function (contextRow, index) {
            contextRow = $(contextRow);
            contextRow.removeClass(that.options.styles.selected);
            contextRow.addClass(that.options.styles.unSelected);
            cRow = contextRow;
        });
        
        cRow.removeClass(that.options.styles.unSelected);
        cRow.addClass(that.options.styles.selected);
        cRow.append(that.options.markup.selectedIcon);
        cRow.append(that.options.markup.pencilIcon);
    };

    gpii.pmt.createUntitledBox = function (contextRows, untitledSetMarkup, label, desc, that, setLabel) {
        var selectedIcon = that.dom.locate("leftArrowIcon");
        selectedIcon.remove();
        var pencilIcon = that.dom.locate("pencilIcon");
        pencilIcon.remove();
        var editButton = that.dom.locate("contextEditButton");
        editButton.remove();
        contextRows.append(untitledSetMarkup);
        var untitledLabel = that.dom.locate("untitledLabel");
        untitledLabel.text(label);
        var untitledDescription = that.dom.locate("untitledDescLabel");
        untitledDescription.text(desc);
        setLabel.text(label);
    };

    gpii.pmt.createBaseSetBoxStyle = function (contextRow, selectedStyle, selectedIconMarkup) {
        contextRow.addClass(selectedStyle);
        contextRow.append(selectedIconMarkup);
    };

    gpii.pmt.createBaseSetBox = function (contextRows, baseSetMarkup) {
        contextRows.html(baseSetMarkup);
    };

    gpii.pmt.toggleContextPanel = function (that) {
        var contextPanel = that.dom.locate("contextPanel");
        contextPanel.toggle();
    };

    gpii.pmt.mouseoverAddSetLink = function (that) {
        var frameHeader = that.dom.locate("frameHeader");
        frameHeader.removeClass(that.options.styles.darkStyle);
        frameHeader.addClass(that.options.styles.brightStyle);
        var addIcon = that.dom.locate("addIcon");
        addIcon.removeClass(that.options.styles.addIconMouseOut);
        addIcon.addClass(that.options.styles.addIconMouseOver);
    };

    gpii.pmt.mouseoutAddSetLink = function (that) {
        var frameHeader = that.dom.locate("frameHeader");
        frameHeader.removeClass(that.options.styles.brightStyle);
        frameHeader.addClass(that.options.styles.darkStyle);
        var addIcon = that.dom.locate("addIcon");
        addIcon.removeClass(that.options.styles.addIconMouseOver);
        addIcon.addClass(that.options.styles.addIconMouseOut);
    };

    gpii.pmt.clickSetsButton = function (that) {
        var bRow = that.dom.locate("bottomRow");
        var icon = that.dom.locate("contextIcon");
        if (bRow.hasClass(that.options.styles.bottomRow)) {
            bRow.removeClass(that.options.styles.bottomRow);
            bRow.addClass(that.options.styles.bottomRowExtended);
            icon.removeClass(that.options.styles.contextIconLeft);
            icon.addClass(that.options.styles.contextIconRight);
        }
        else if (bRow.hasClass(that.options.styles.bottomRowExtended)) {
            bRow.removeClass(that.options.styles.bottomRowExtended);
            bRow.addClass(that.options.styles.bottomRow);
            icon.removeClass(that.options.styles.contextIconRight);
            icon.addClass(that.options.styles.contextIconLeft);
        }
    };

    gpii.pmt.hideUserStatusBarIfNotLoggedIn = function (loggedUser, statusBarElement) {
        if (loggedUser === null) {
            statusBarElement.hide(0);
        }
    };

    gpii.foldExpandedViewWhenOff = function (applier, extraCurrentlyVisible, valueToBeChanged) {
        if (extraCurrentlyVisible) {
            applier.requestChange(valueToBeChanged, false);
        }
    };

    gpii.pmt.showSaveNotification = function (that, userToken) {
        // re-wrap jQuery 1.7 element as jQuery 1.9 version in order to support the "appendTo" param.
        var notificationjq1_7 = that.dom.locate("notification");
        var unwrappedNotification = fluid.unwrap(notificationjq1_7);
        var notificationjq1_9 = $(unwrappedNotification);
        // create and show it immediately
        notificationjq1_9.dialog({
            autoOpen: true,
            modal: true,
            appendTo: ".gpiic-pmt-bottomRow",
            dialogClass: "gpii-dialog-noTitle",
            closeOnEscape: false,
            position: { my: "bottom", at: "bottom", of: ".gpii-prefsEditor-preferencesContainer" }
        });
        // also set the token text
        that.dom.locate("notificationMessagePart2").text(userToken);
        that.dom.locate("messageLineLabel").show();
    };

    gpii.pmt.hideSaveNotification = function (that) {
        // re-wrap jQuery 1.7 element as jQuery 1.9 version in order to support the "appendTo" param.
        var notificationjq1_7 = that.dom.locate("notification");
        var unwrappedNotification = fluid.unwrap(notificationjq1_7);
        var notificationjq1_9 = $(unwrappedNotification);
        // destroy it on hide
        notificationjq1_9.dialog("destroy");
    };

    fluid.defaults("gpii.pmt.previewPerSettingEnhanced", {
        gradeNames: "fluid.littleComponent",
        outerPreviewEnhancerOptions: "{originalEnhancerOptions}.options.originalUserOptions",
        emptyComponentType: "fluid.emptySubcomponent"
    });
})(fluid);
