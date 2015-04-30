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
        gradeNames: ["fluid.prefs.GPIIEditor", "fluid.prefs.rootModel", "autoInit"],
        prefsEditor: {
            gradeNames: ["fluid.prefs.msgLookup", "fluid.prefs.panel"],
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
                contextEditButton: ".gpiic-prefsEditor-context-edit-button",
                baseSetEditButton: ".gpiic-prefsEditor-context-edit-baseSet-button",
                baseSetPencilIcon: ".gpiic-prefsEditor-context-baseSet-pencilIcon",
                overlayPanel: ".gpiic-context-overlay",
                modalPanel: ".gpiic-context-modal",
                /* context selectors */
                conditionsTabLabel: ".gpiic-context-conditions-label",
                shareTabLabel: ".gpiic-context-share-label",
                baseSetDescription: ".gpiic-context-baseset-label",
                deleteSetLabel: ".gpiic-context-deleteset-label",
                notAppliedToAnyDevicesLabel: ".gpiic-context-devices-notapplied-label",
                devicesLabel: ".gpiic-context-header-devices-label",
                allLabel: ".gpiic-select-device-all-label",
                desktopLabel: ".gpiic-select-device-desktop-label",
                laptopLabel: ".gpiic-select-device-laptop-label",
                tabletLabel: ".gpiic-select-device-tablet-label",
                phoneLabel: ".gpiic-select-device-phone-label",
                kioskLabel: ".gpiic-select-device-kiosk-label",
                bankMachineLabel: ".gpiic-select-device-bankmachine-label",
                otherLabel: ".gpiic-select-device-other-label",
                notAppliedAtAnyTimesLabel: ".gpiic-context-times-notapplied-label",
                timeLabel: ".gpiic-context-header-time-label",
                toLabel: ".gpiic-context-time-to-label",
                cancelButton: ".gpiic-context-cancelButton",
                doneButton: ".gpiic-context-doneButton",
                linkCopyButton: ".gpiic-context-linkCopyButton",
                downloadCopyButton: ".gpiic-context-linkDownloadButton",
                emailCopyButton: ".gpiic-context-emailCopyButton",
                untitledText: ".gpiic-context-header-untitled",
                emailAddressLabel: ".gpiic-enter-email-address-input",
                enterMessageLabel: ".gpiic-enter-message-input",
                tabConditions: ".gpiic-tab-conditions",
                tabShare: ".gpiic-tab-share",
                contextHeader: ".gpiic-context-header",
                sharingEmail: ".gpiic-link-copy-enter-email-address",
                contextHeaderDevices: ".gpiic-context-header-devices",
                contextHeaderTime: ".gpiic-context-header-time",
                copyIcon: ".gpiic-email-copy-fontIcon",
                selectDevice: ".gpiic-context-devices-list-items",
                timeInputsDiv: ".gpiic-context-time-whole-div",
                timeFromHour: ".gpiic-context-time-from-hour",
                timeFromMinute: ".gpiic-context-time-from-minute",
                timeToHour: ".gpiic-context-time-to-hour",
                timeToMinute: ".gpiic-context-time-to-minute",
                fromColon: ".gpiic-context-time-from-colon",
                toColon: ".gpiic-context-time-to-colon",
                recordLine: ".gpiic-context-times-new-record-line",
                editTime: ".gpiic-prefsEditor-editTime-button",
                deleteTime: ".gpiic-prefsEditor-deleteTime-button",
                conditionsLink: ".gpiic-prefsEditor-conditionsLink",
                sharingLink: ".gpiic-prefsEditor-sharingLink",
                /* Overlay panel about set name error */
                setNameOverlayPanel: ".gpiic-error-overlay",
                setNameModalPanel: ".gpiic-error-modal",
                accountNotDetected: ".gpiic-error-header",
                doNotMatch: ".gpiic-error-description",
                backButton: ".gpiic-error-backButton",
                timeOverlayPanel: ".gpiic-time-error-overlay",
                timeModalPanel: ".gpiic-time-error-modal",
                timeErrorHeader: ".gpiic-time-error-header",
                timeErrorDescription: ".gpiic-time-error-description",
                timeBackButton: ".gpiic-time-error-backButton"
            },
            markup: {
                /*baseSet:
                    "<div class='gpiic-prefsEditor-contextFrame-row'>" +
                    "   <span class='gpiic-prefsEditor-baseSetLabel gpii-prefsEditor-contextFrame-setLabel'></span>" +
                    "   <span class='gpiic-prefsEditor-baseSetDescription gpii-prefsEditor-contextFrame-setLabelDescription'></span>" +
                    "</div>",*/
                untitledSet:
                    "<div class='gpiic-prefsEditor-contextFrame-row' role='region' aria-labelledby='alertHeading' aria-describedby='alertText'>" +
                    "   <span id='alertHeading' class='gpiic-prefsEditor-untitledLabel gpii-prefsEditor-contextFrame-setLabel'></span>" +
                    "   <span id='alertText' class='gpiic-prefsEditor-untitledDescLabel gpii-prefsEditor-contextFrame-setLabelDescription'></span>" +
                    "</div>",
                selectedIcon: "<span class='gpiic-prefsEditor-context-leftArrowIcon gpii-prefsEditor-adjusterIcons gpii-prefsEditor-context-leftArrowIcon'></span>",
                pencilIcon: "   <input id='editButton' onclick='gpii.pmt.onEditClick($(\"#overlay\"), $(\"#modal\"), this)' type='button' value='' aria-label='' class='gpiic-prefsEditor-context-edit-button gpii-prefsEditor-context-edit-button' tabindex='0'></input>" +
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
                visible: "gpii-context-visible",
                invisible: "gpii-context-invisible",
                activeTab: "gpii-tab-active",
                deactiveTab: "gpii-tab-deactive",
                bgHeader: "gpii-context-header-bg-pressed",
                disabled: "disabled",
                invalidTime: "gpii-context-time-invalid"
            },
            model: {
                userLoggedIn: false
            },
            listeners: {
                // on Session accountCreated:
                "onReady.hidePanels": "{that}.hidePanels",
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
                "onReady.enableTabConditions": "{that}.enableTabConditions",
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
                "onReady.editTime": {
                    "this": "{that}.dom.editTime",
                    "method": "click",
                    "args": ["{that}.editTime"]
                },
                "onReady.editTimeWithKeyPress": {
                    "this": "{that}.dom.editTime",
                    "method": "keyup",
                    "args": ["{that}.editTimeWithKeyPress"]
                },
                "onReady.initObjs": "{that}.initObjs",
                "onReady.setAccountNotDetected": {
                    "this": "{that}.dom.accountNotDetected",
                    "method": "text",
                    "args": ["{that}.msgLookup.accountNotDetected"]
                },
                "onReady.setDoNotMatch": {
                    "this": "{that}.dom.doNotMatch",
                    "method": "text",
                    "args": ["{that}.msgLookup.doNotMatch"]
                },
                "onReady.setBackButton": {
                    "this": "{that}.dom.backButton",
                    "method": "val",
                    "args": ["{that}.msgLookup.back"]
                },
                "onReady.clickBackButton": {
                    "this": "{that}.dom.backButton",
                    "method": "click",
                    "args": ["{that}.clickBackButton"]
                },
                "onReady.setBaseSetEditButton": {
                    "this": "{that}.dom.baseSetEditButton",
                    "method": "val",
                    "args": ["{that}.msgLookup.editText"]
                },
                "onReady.setBaseSetEditButtonAriaLabel": {
                    "this": "{that}.dom.baseSetEditButton",
                    "method": "attr",
                    "args": ["aria-label", "{that}.msgLookup.editText"]
                },
                "onReady.clickBaseSetEditButton": {
                    "this": "{that}.dom.baseSetEditButton",
                    "method": "click",
                    "args": ["{that}.clickBaseSetEditButton"]
                },
                "onReady.setEditTimeAriaLabel": {
                    "this": "{that}.dom.editTime",
                    "method": "attr",
                    "args": ["aria-label", "{that}.msgLookup.editTime"]
                },
                "onReady.deleteTime": {
                    "this": "{that}.dom.deleteTime",
                    "method": "click",
                    "args": ["{that}.deleteTime"]
                },
                "onReady.deleteTimeWithKeyPress": {
                    "this": "{that}.dom.deleteTime",
                    "method": "keyup",
                    "args": ["{that}.deleteTimeWithKeyPress"]
                },
                "onReady.setDeleteTimeAriaLabel": {
                    "this": "{that}.dom.deleteTime",
                    "method": "attr",
                    "args": ["aria-label", "{that}.msgLookup.deleteTime"]
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
                "onReady.setAccountButtonClick": {
                    "this": "{that}.dom.accountButton",
                    "method": "click",
                    "args": ["{that}.clickAccount"]
                },
                "onReady.setAddSetLinkAriaLabel": {
                    "this": "{that}.dom.addSetLink",
                    "method": "attr",
                    "args": ["aria-label", "{that}.msgLookup.addSet"]
                },
                "onReady.setConditionsAriaLabel": {
                    "this": "{that}.dom.conditionsLink",
                    "method": "attr",
                    "args": ["aria-label", "{that}.msgLookup.conditionsTabLabel"]
                },
                "onReady.setSharingAriaLabel": {
                    "this": "{that}.dom.sharingLink",
                    "method": "attr",
                    "args": ["aria-label", "{that}.msgLookup.shareTabLabel"]
                },
                "onReady.clickSharingLink": {
                    "this": "{that}.dom.sharingLink",
                    "method": "click",
                    "args": ["{that}.clickSharingLink"]
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
                "onReady.clickSaveAndApplyButton": {
                    "this": "{that}.dom.saveAndApplyButtonLabel",
                    "method": "click",
                    "args": ["{that}.clickSaveAndApplyButton"]
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
                },
                "onReady.setUntitledText": {
                    "this": "{that}.dom.untitledText",
                    "method": "val",
                    "args": ["{that}.msgLookup.untitledText"]
                },
                "onReady.setConditionsTabLabel": {
                    "this": "{that}.dom.conditionsTabLabel",
                    "method": "text",
                    "args": ["{that}.msgLookup.conditionsTabLabel"]
                },
                "onReady.setShareTabLabel": {
                    "this": "{that}.dom.shareTabLabel",
                    "method": "text",
                    "args": ["{that}.msgLookup.shareTabLabel"]
                },
                "onReady.setDoneButton": {
                    "this": "{that}.dom.doneButton",
                    "method": "val",
                    "args": ["{that}.msgLookup.doneLabel"]
                },
                "onReady.setCancelButton": {
                    "this": "{that}.dom.cancelButton",
                    "method": "val",
                    "args": ["{that}.msgLookup.cancelLabel"]
                },
                "onReady.setDevicesLabel": {
                    "this": "{that}.dom.devicesLabel",
                    "method": "text",
                    "args": ["{that}.msgLookup.devicesLabel"]
                },
                "onReady.setTimeLabel": {
                    "this": "{that}.dom.timeLabel",
                    "method": "text",
                    "args": ["{that}.msgLookup.timeLabel"]
                },
                "onReady.setFromColonText": {
                    "this": "{that}.dom.fromColon",
                    "method": "text",
                    "args": ["{that}.msgLookup.colon"]
                },
                "onReady.setToColonText": {
                    "this": "{that}.dom.toColon",
                    "method": "text",
                    "args": ["{that}.msgLookup.colon"]
                },
                "onReady.setNotAppliedToAnyDevicesLabel": {
                    "this": "{that}.dom.notAppliedToAnyDevicesLabel",
                    "method": "text",
                    "args": ["{that}.msgLookup.notAppliedToAnyDevicesLabel"]
                },
                "onReady.setNotAppliedAtAnyTimesLabel": {
                    "this": "{that}.dom.notAppliedAtAnyTimesLabel",
                    "method": "text",
                    "args": ["{that}.msgLookup.notAppliedAtAnyTimesLabel"]
                },
                "onReady.setBaseSetDescription": {
                    "this": "{that}.dom.baseSetDescription",
                    "method": "text",
                    "args": ["{that}.msgLookup.baseSetDescription"]
                },
                "onReady.setDeleteSetLabel": {
                    "this": "{that}.dom.deleteSetLabel",
                    "method": "text",
                    "args": ["{that}.msgLookup.deleteSetLabel"]
                },
                "onReady.clickCancelButton": {
                    "this": "{that}.dom.cancelButton",
                    "method": "click",
                    "args": ["{that}.clickCancelButton"]
                },
                "onReady.clickDoneButton": {
                    "this": "{that}.dom.doneButton",
                    "method": "click",
                    "args": ["{that}.clickDoneButton"]
                },
                "onReady.clickUntitled": {
                    "this": "{that}.dom.untitledText",
                    "method": "click",
                    "args": ["{that}.clickUntitled"]
                },
                "onReady.clickTabConditions": {
                    "this": "{that}.dom.tabConditions",
                    "method": "click",
                    "args": ["{that}.enableTabConditions"]
                },
                "onReady.clickTabShare": {
                    "this": "{that}.dom.tabShare",
                    "method": "click",
                    "args": ["{that}.enableTabShare"]
                },
                "onReady.setEmailCopyButton": {
                    "this": "{that}.dom.emailCopyButton",
                    "method": "val",
                    "args": ["{that}.msgLookup.emailCopyButton"]
                },
                "onReady.setEmailAddressLabel": {
                    "this": "{that}.dom.emailAddressLabel",
                    "method": "attr",
                    "args": ["value", "{that}.msgLookup.emailAddressLabel"]
                },
                "onReady.setEnterMessageLabel": {
                    "this": "{that}.dom.enterMessageLabel",
                    "method": "text",
                    "args": ["{that}.enterMessage"]
                },
                "onReady.setLinkCopyButton": {
                    "this": "{that}.dom.linkCopyButton",
                    "method": "val",
                    "args": ["{that}.msgLookup.linkCopyButton"]
                },
                "onReady.setDownloadCopyButton": {
                    "this": "{that}.dom.downloadCopyButton",
                    "method": "val",
                    "args": ["{that}.msgLookup.downloadCopyButton"]
                },
                "onReady.emailValidation": {
                    "this": "{that}.dom.emailAddressLabel",
                    "method": "keyup",
                    "args": ["{that}.emailValidation"]
                },
                "onReady.onClickEmailCopyButton": {
                    "this": "{that}.dom.emailCopyButton",
                    "method": "click",
                    "args": ["{that}.clickEmailCopyButton"]
                },
                "onReady.setTabletText": {
                    "this": "{that}.dom.tabletLabel",
                    "method": "text",
                    "args": ["{that}.msgLookup.tabletLabel"]
                },
                "onReady.setLaptopText": {
                    "this": "{that}.dom.laptopLabel",
                    "method": "text",
                    "args": ["{that}.msgLookup.laptopLabel"]
                },
                "onReady.setDesktopText": {
                    "this": "{that}.dom.desktopLabel",
                    "method": "text",
                    "args": ["{that}.msgLookup.desktopLabel"]
                },
                "onReady.setAllText": {
                    "this": "{that}.dom.allLabel",
                    "method": "text",
                    "args": ["{that}.msgLookup.allLabel"]
                },
                "onReady.setPhoneText": {
                    "this": "{that}.dom.phoneLabel",
                    "method": "text",
                    "args": ["{that}.msgLookup.phoneLabel"]
                },
                "onReady.setKioskText": {
                    "this": "{that}.dom.kioskLabel",
                    "method": "text",
                    "args": ["{that}.msgLookup.kioskLabel"]
                },
                "onReady.setBankMachineText": {
                    "this": "{that}.dom.bankMachineLabel",
                    "method": "text",
                    "args": ["{that}.msgLookup.bankMachineLabel"]
                },
                "onReady.setOtherText": {
                    "this": "{that}.dom.otherLabel",
                    "method": "text",
                    "args": ["{that}.msgLookup.otherLabel"]
                },
                "onReady.selectDevice": {
                    "this": "{that}.dom.selectDevice",
                    "method": "keyup",
                    "args": ["{that}.selectDevice"]
                },
                "onReady.setToLabel": {
                    "this": "{that}.dom.toLabel",
                    "method": "text",
                    "args": ["{that}.msgLookup.toLabel"]
                },
                "onReady.setFromHour": {
                    "this": "{that}.dom.timeFromHour",
                    "method": "focusout",
                    "args": ["{that}.populateFromHour"]
                },
                "onReady.setFromMinute": {
                    "this": "{that}.dom.timeFromMinute",
                    "method": "focusout",
                    "args": ["{that}.populateFromMinute"]
                },
                "onReady.setToHour": {
                    "this": "{that}.dom.timeToHour",
                    "method": "focusout",
                    "args": ["{that}.populateToHour"]
                },
                "onReady.setToMinute": {
                    "this": "{that}.dom.timeToMinute",
                    "method": "focusout",
                    "args": ["{that}.populateToMinute"]
                },
                "onReady.addLeadingZeroFromHour": {
                    "this": "{that}.dom.timeFromHour",
                    "method": "keyup",
                    "args": ["{that}.addLeadingZeroFromHour"]
                },
                "onReady.addLeadingZeroFromMinute": {
                    "this": "{that}.dom.timeFromMinute",
                    "method": "keyup",
                    "args": ["{that}.addLeadingZeroFromMinute"]
                },
                "onReady.addLeadingZeroToHour": {
                    "this": "{that}.dom.timeToHour",
                    "method": "keyup",
                    "args": ["{that}.addLeadingZeroToHour"]
                },
                "onReady.addLeadingZeroToMinute": {
                    "this": "{that}.dom.timeToMinute",
                    "method": "keyup",
                    "args": ["{that}.addLeadingZeroToMinute"]
                },
                "onReady.setTimeErrorHeader": {
                    "this": "{that}.dom.timeErrorHeader",
                    "method": "text",
                    "args": ["{that}.msgLookup.timeErrorHeader"]
                },
                "onReady.setTimeErrorDescription": {
                    "this": "{that}.dom.timeErrorDescription",
                    "method": "text",
                    "args": ["{that}.msgLookup.timeErrorDescription"]
                },
                "onReady.setTimeBackButton": {
                    "this": "{that}.dom.timeBackButton",
                    "method": "val",
                    "args": ["{that}.msgLookup.back"]
                },
                "onReady.clickTimeBackButton": {
                    "this": "{that}.dom.timeBackButton",
                    "method": "click",
                    "args": ["{that}.clickTimeBackButton"]
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
                    "args": ["{gpiiSession}", "{that}.dom.contextRows", "{that}.options.markup.untitledSet", "{that}.msgLookup.untitledLabel", "{that}.msgLookup.untitledDescLabel", "{that}", "{that}.dom.setLabel", "{that}.options.selectors.untitledLabel", "{that}.options.selectors.untitledDescLabel", "{that}.options.selectors.contextRow", "{that}.dom.baseSetEditButton", "{that}.dom.baseSetPencilIcon"]
                },
                createUntitledBoxStyle: {
                    "funcName": "gpii.pmt.createUntitledBoxStyle",
                    "args": ["{that}"]
                },
                createUntitledBoxAria: {
                    "funcName": "gpii.pmt.createUntitledBoxAria",
                    "args": ["{that}","{that}.msgLookup.editText"]
                },
                hidePanels: {
                    "funcName": "gpii.pmt.hidePanels",
                    "args": ["{that}.dom.overlayPanel", "{that}.dom.modalPanel", "{that}.dom.setNameOverlayPanel", "{that}.dom.setNameModalPanel", "{that}.dom.timeOverlayPanel", "{that}.dom.timeModalPanel"]
                },
                clickUntitled: {
                    "funcName": "gpii.pmt.clickUntitled",
                    "args": ["{that}"]
                },
                clickCancelButton: {
                    "funcName": "gpii.pmt.clickCancelButton",
                    "args": ["{gpiiSession}", "{that}.dom.overlayPanel", "{that}.dom.modalPanel", "{that}.dom.addSetLink"]
                },
                clickDoneButton: {
                    "funcName": "gpii.pmt.clickDoneButton",
                    "args": ["{gpiiSession}", "{that}.dom.overlayPanel", "{that}.dom.modalPanel", "{that}.dom.notAppliedToAnyDevicesLabel", "{that}.dom.notAppliedAtAnyTimesLabel", "{that}.dom.untitledText", "{that}.options.selectors.untitledLabel", "{that}.options.selectors.untitledDescLabel", "{that}.dom.setLabel", "{that}.msgLookup.toLabel", "{that}.msgLookup.appliesToLabel", "{that}.msgLookup.devicesTextLabel", "{that}.dom.setNameOverlayPanel", "{that}.dom.setNameModalPanel", "{that}.dom.addSetLink", "{that}", "{that}.dom.timeOverlayPanel", "{that}.dom.timeModalPanel", "{that}.msgLookup.timeErrorHour", "{that}.msgLookup.timeErrorMinutes"]
                },
                enableTabConditions: {
                    "funcName": "gpii.pmt.enableTabConditions",
                    "args": ["{that}"]
                },
                enableTabShare: {
                    "funcName": "gpii.pmt.enableTabShare",
                    "args": ["{that}"]
                },
                emailValidation: {
                    "funcName": "gpii.pmt.emailValidation",
                    "args": ["{that}.dom.emailAddressLabel", "{that}.dom.emailCopyButton", "{that}.dom.copyIcon", "{that}.options.styles.disabled"]
                },
                clickEmailCopyButton: {
                    "funcName": "gpii.pmt.clickEmailCopyButton",
                    "args": ["{that}.dom.emailAddressLabel", "{that}.dom.enterMessageLabel", "{that}.msgLookup.emailSubject"]
                },
                selectDevice: {
                    "funcName": "gpii.pmt.selectDevice",
                    "args": ["{gpiiSession}", "{that}.options.selectors.selectDevice", "{that}.msgLookup.appliesToLabel", "{that}.msgLookup.devicesTextLabel", "{that}.dom.notAppliedToAnyDevicesLabel"]
                },
                selectTime: {
                    "funcName": "gpii.pmt.selectTime",
                    "args": ["{that}"]
                },
                populateFromHour: {
                    "funcName": "gpii.pmt.populateFromHourTime",
                    "args": ["{gpiiSession}", "{that}", "{that}.dom.timeFromHour", "{that}.dom.timeFromMinute", "{that}.dom.timeToHour", "{that}.dom.timeToMinute", "{that}.dom.notAppliedAtAnyTimesLabel", "{that}.msgLookup.toLabel", "{that}.dom.timeOverlayPanel", "{that}.dom.timeModalPanel", "{that}.dom.timeBackButton", "{that}.msgLookup.timeErrorHour"]
                },
                populateFromMinute: {
                    "funcName": "gpii.pmt.populateFromMinTime",
                    "args": ["{gpiiSession}", "{that}", "{that}.dom.timeFromHour", "{that}.dom.timeFromMinute", "{that}.dom.timeToHour", "{that}.dom.timeToMinute", "{that}.dom.notAppliedAtAnyTimesLabel", "{that}.msgLookup.toLabel", "{that}.dom.timeOverlayPanel", "{that}.dom.timeModalPanel", "{that}.dom.timeBackButton", "{that}.msgLookup.timeErrorMinutes"]
                },
                populateToHour: {
                    "funcName": "gpii.pmt.populateToHourTime",
                    "args": ["{gpiiSession}", "{that}", "{that}.dom.timeFromHour", "{that}.dom.timeFromMinute", "{that}.dom.timeToHour", "{that}.dom.timeToMinute", "{that}.dom.notAppliedAtAnyTimesLabel", "{that}.msgLookup.toLabel", "{that}.dom.timeOverlayPanel", "{that}.dom.timeModalPanel", "{that}.dom.timeBackButton", "{that}.msgLookup.timeErrorHour"]
                },
                populateToMinute: {
                    "funcName": "gpii.pmt.populateToMinTime",
                    "args": ["{gpiiSession}", "{that}", "{that}.dom.timeFromHour", "{that}.dom.timeFromMinute", "{that}.dom.timeToHour", "{that}.dom.timeToMinute", "{that}.dom.notAppliedAtAnyTimesLabel", "{that}.msgLookup.toLabel", "{that}.dom.timeOverlayPanel", "{that}.dom.timeModalPanel", "{that}.dom.timeBackButton", "{that}.msgLookup.timeErrorMinutes"]
                },
                editTime: {
                    "funcName": "gpii.pmt.editTime",
                    "args": ["{that}"]
                },
                editTimeWithKeyPress: {
                    "funcName": "gpii.pmt.editTimeWithKeyPress",
                    "args": ["{that}", "{arguments}.0"]
                },
                deleteTime: {
                    "funcName": "gpii.pmt.deleteTime",
                    "args": ["{that}", "{that}.dom.recordLine", "{that}.dom.notAppliedAtAnyTimesLabel", "{that}.msgLookup.notAppliedAtAnyTimesLabel"]
                },
                deleteTimeWithKeyPress: {
                    "funcName": "gpii.pmt.deleteTimeWithKeyPress",
                    "args": ["{that}", "{that}.dom.recordLine", "{that}.dom.notAppliedAtAnyTimesLabel", "{that}.msgLookup.notAppliedAtAnyTimesLabel", "{arguments}.0"]
                },
                clickSharingLink: {
                    "funcName": "gpii.pmt.enterShareTab",
                    "args": ["{that}.dom.enterMessageLabel", "{that}.msgLookup.enterMessageLabel", "{gpiiSession}", "{that}"]
                },
                clickAccount: {
                    "funcName": "gpii.pmt.clickAccount",
                    "args": []
                },
                clickBackButton: {
                    "funcName": "gpii.pmt.clickBackButton",
                    "args": ["{that}.dom.setNameOverlayPanel", "{that}.dom.setNameModalPanel", "{that}.dom.untitledText"]
                },
                initObjs: {
                    "funcName": "gpii.pmt.initObjs",
                    "args": ["{that}", "{gpiiSession}"]
                },
                clickBaseSetEditButton: {
                    "funcName": "gpii.pmt.clickBaseSetEditButton",
                    "args": ["{that}", "{gpiiSession}", "{that}.msgLookup.baseSetLabel", "{that}.options.markup.selectedIcon"]
                },
                clickSaveAndApplyButton: {
                    "funcName": "gpii.pmt.clickSaveAndApplyButton",
                    "args": ["{that}", "{gpiiSession}"]
                },
                clickTimeBackButton: {
                    "funcName": "gpii.pmt.clickTimeBackButton",
                    "args": ["{that}.dom.timeOverlayPanel", "{that}.dom.timeModalPanel", "{that}.dom.untitledText", "{that}.dom.timeFromHour", "{that}.dom.timeFromMinute", "{that}.dom.timeToHour", "{that}.dom.timeToMinute"]
                },
                addLeadingZeroFromHour: {
                    "funcName": "gpii.pmt.addLeadingZero",
                    "args": ["{that}.dom.timeFromHour", "{arguments}.0", "{that}.options.styles.invalidTime"]
                },
                addLeadingZeroFromMinute: {
                    "funcName": "gpii.pmt.addLeadingZero",
                    "args": ["{that}.dom.timeFromMinute", "{arguments}.0", "{that}.options.styles.invalidTime"]
                },
                addLeadingZeroToHour: {
                    "funcName": "gpii.pmt.addLeadingZero",
                    "args": ["{that}.dom.timeToHour", "{arguments}.0", "{that}.options.styles.invalidTime"]
                },
                addLeadingZeroToMinute: {
                    "funcName": "gpii.pmt.addLeadingZero",
                    "args": ["{that}.dom.timeToMinute", "{arguments}.0", "{that}.options.styles.invalidTime"]
                }
            },
            strings: {
                "mainVisibilitySwitch": "gpii_primarySchema_speakText",
                "extraVisibilitySwitch": "gpii_primarySchema_visualAlternativesMoreLess"
            }
        }
    });

    var sessionObj = null;
    var thatObj = null;
    gpii.pmt.clickAccount = function () {
        window.open("https://secureflowmanager.gpii.net/login","_blank");
    };

    gpii.pmt.clickSaveAndApplyButton = function (that, session) {
        gpii.pmt.SavePreferenceSets(that, session, session.options.currentSetId);
    };
    
    gpii.pmt.addLeadingZero = function (element, event, invalidTime) {
        var max = element.attr("max");
        var min = element.attr("min");
        var val = parseInt(element.val());
        if ((isNaN(val)) || ((val < min) || (val > max))){
            element.focus();
            if (!element.hasClass(invalidTime)){
                element.addClass(invalidTime);
            }
            return;
        }
        else{
            if (element.hasClass(invalidTime)){
                element.removeClass(invalidTime);
            }
        }
        switch(event.keyCode) {
            case 38: // arrow up
                if(val < max) {
                    element.val(val+1);
                    if (element.val() < 10)
                        element.val("0"+element.val());
                }
                break;
            case 40: // arrow down
                if(val > 0) {
                    element.val(val-1);
                    if (element.val() < 10)
                        element.val("0"+element.val());
                }
                break
            default: // a numeric key is pressed
                if ((element.val() < 10) && ((element.val()).length == 1)){
                    element.val("0"+element.val());
                }
                else {
                    element.val(val);
                    if ((element.val() < 10) && ((element.val()).length == 1)){
                        element.val("0"+element.val());
                    }
                }
                break;
        }
    };
    
    gpii.pmt.clickBaseSetEditButton = function (that, session, baseSetLabel, selectedIcon) {
        session.options.currentSetId = 0;
        gpii.pmt.SavePreferenceSets(that, session, session.options.previousSetId);
        var currentModel = session.options.modelSet[0];
        that.updateModel(JSON.parse(currentModel));
        that.locate("setLabel").text(baseSetLabel);

        var leftArrowIcon = that.locate("leftArrowIcon");
        leftArrowIcon.remove();
        var setDivs = that.locate("contextRow");
        fluid.each(setDivs, function (setDiv, index) {
            setDiv = $(setDiv);
            setDiv.removeClass(that.options.styles.selected);
            setDiv.addClass(that.options.styles.unSelected);
        });
        var baseSetEditButton = that.locate("baseSetEditButton");
        var currentDiv = baseSetEditButton.parent("div");
        if (currentDiv.hasClass(that.options.styles.unSelected)){
            currentDiv.removeClass(that.options.styles.unSelected);
            currentDiv.addClass(that.options.styles.selected);
            $(selectedIcon).insertBefore(baseSetEditButton);
        }
        sessionObj.options.previousSetId = 0;
    };

    gpii.pmt.enterShareTab = function (enterMessageLabelObj, enterMessageLabelTxt, session, that) {
        if (session.options.contextElements.setName === null){
            enterMessageLabelObj.text(enterMessageLabelTxt);
        }
        else{
            var savedSelections = fluid.copy(that.model);
            fluid.each(savedSelections, function (value, key) {
                if (fluid.get(that.rootModel, key) === value) {
                    delete savedSelections[key];
                }
            });
            var preferences = session.options.preferenceSet.slice(0);
            var contexts = session.options.context;
            var transformedModel = [];
            fluid.each(preferences, function (preference) {
                transformedModel.push(fluid.model.transform(JSON.parse(preference), gpii.prefs.commonTermsTransformationRules));
            });
            transformedModel.push(fluid.model.transform(savedSelections, gpii.prefs.commonTermsTransformationRules));

            var emailBody = {
                "contexts": {
                    "gpii-default": {
                        "name": "Default preferences",
                        "preferences": transformedModel[0]
                    }
                }
            };

            fluid.each(contexts, function (context, index) {
                context = JSON.parse(context);
                var enabled = context.enabled;
                if (enabled){
                    var name = context.setName;
                    var newSet = {
                        "newSet": {
                            "name": context.setName,
                            "preferences": transformedModel[index+1],
                            "conditions": [{
                                "type": "http://registry.gpii.net/conditions/timeInRange",
                                "from": context.fromTime,
                                "to": context.toTime,
                                "inputPath": "http://registry\\.gpii\\.net/common/environment/temporal\\.time"
                            }]
                        }
                    };
                    var tmp = JSON.stringify(newSet);
                    tmp = tmp.replace("newSet",name);
                    newSet = JSON.parse(tmp);
                    $.extend(emailBody.contexts, newSet);
                }
            });
            enterMessageLabelObj.text(JSON.stringify(emailBody));
        }
    };

    gpii.pmt.deleteTime = function (that, recordLine, notAppliedAtAnyTimesLabelObj, notAppliedAtAnyTimesLabelMsg) {
        var fromHour = that.dom.locate("timeFromHour");
        var fromMin = that.dom.locate("timeFromMinute");
        var toHour = that.dom.locate("timeToHour");
        var toMin = that.dom.locate("timeToMinute");
        fromHour.val("00");
        fromMin.val("00");
        toHour.val("00");
        toMin.val("00");
        fromHour.focus();
        
        recordLine.removeClass(that.options.styles.visible);
        recordLine.addClass(that.options.styles.invisible);
        notAppliedAtAnyTimesLabelObj.text(notAppliedAtAnyTimesLabelMsg);
    };

    gpii.pmt.deleteTimeWithKeyPress = function (that, recordLine, notAppliedAtAnyTimesLabelObj, notAppliedAtAnyTimesLabelMsg, event) {
        if ((event.keyCode == $.ui.keyCode.SPACE) || (event.keyCode == $.ui.keyCode.ENTER)){
            gpii.pmt.deleteTime(that, recordLine, notAppliedAtAnyTimesLabelObj, notAppliedAtAnyTimesLabelMsg);
        }
    };

    gpii.pmt.editTime = function (that) {
        var fromHour = that.dom.locate("timeFromHour");
        fromHour.focus();
    };

    gpii.pmt.editTimeWithKeyPress = function (that, event) {
        if ((event.keyCode == $.ui.keyCode.SPACE) || (event.keyCode == $.ui.keyCode.ENTER)){
            gpii.pmt.editTime(that);
        }
    };

    gpii.pmt.populateFromHourTime = function (sess, that, timeFromHour, timeFromMinute, timeToHour, timeToMinute, notAppliedAtAnyTimesLabel, toLabel, tPanel, tModal, timeBackButton, timeErrorHour) {
        var fromHour = timeFromHour.val();
        var timeErrorDescription = that.locate("timeErrorDescription");
        if ((isNaN(fromHour)) || (fromHour>23 || fromHour<0) || (fromHour.length==0)) {
            tPanel.show();
            tModal.show();
            timeErrorDescription.text(timeErrorHour);
            timeBackButton.focus();
        }
        else {
            notAppliedAtAnyTimesLabel.text(gpii.pmt.twoDigits(timeFromHour.val()) + ":" + gpii.pmt.twoDigits(timeFromMinute.val()) + toLabel + gpii.pmt.twoDigits(timeToHour.val()) + ":" + gpii.pmt.twoDigits(timeToMinute.val()));
            var rLine = that.dom.locate("recordLine");
            rLine.removeClass(that.options.styles.invisible);
            rLine.addClass(that.options.styles.visible);
        }
    };

    gpii.pmt.populateFromMinTime = function (sess, that, timeFromHour, timeFromMinute, timeToHour, timeToMinute, notAppliedAtAnyTimesLabel, toLabel, tPanel, tModal, timeBackButton, timeErrorMinutes) {
        var fromMin = timeFromMinute.val();
        var timeErrorDescription = that.locate("timeErrorDescription");
        if ((isNaN(fromMin)) || (fromMin>59 || fromMin<0) || (fromMin.length==0)) {
            tPanel.show();
            tModal.show();
            timeErrorDescription.text(timeErrorMinutes);
            timeBackButton.focus();
        }
        else {
            notAppliedAtAnyTimesLabel.text(gpii.pmt.twoDigits(timeFromHour.val()) + ":" + gpii.pmt.twoDigits(timeFromMinute.val()) + toLabel + gpii.pmt.twoDigits(timeToHour.val()) + ":" + gpii.pmt.twoDigits(timeToMinute.val()));
            var rLine = that.dom.locate("recordLine");
            rLine.removeClass(that.options.styles.invisible);
            rLine.addClass(that.options.styles.visible);
        }
    };

    gpii.pmt.populateToHourTime = function (sess, that, timeFromHour, timeFromMinute, timeToHour, timeToMinute, notAppliedAtAnyTimesLabel, toLabel, tPanel, tModal, timeBackButton, timeErrorHour) {
        var toHour = timeToHour.val();
        var timeErrorDescription = that.locate("timeErrorDescription");
        if ((isNaN(toHour)) || (toHour>23 || toHour<0) || (toHour.length==0)) {
            tPanel.show();
            tModal.show();
            timeErrorDescription.text(timeErrorHour);
            timeBackButton.focus();
        }
        else {
            notAppliedAtAnyTimesLabel.text(gpii.pmt.twoDigits(timeFromHour.val()) + ":" + gpii.pmt.twoDigits(timeFromMinute.val()) + toLabel + gpii.pmt.twoDigits(timeToHour.val()) + ":" + gpii.pmt.twoDigits(timeToMinute.val()));
            var rLine = that.dom.locate("recordLine");
            rLine.removeClass(that.options.styles.invisible);
            rLine.addClass(that.options.styles.visible);
        }
    };

    gpii.pmt.populateToMinTime = function (sess, that, timeFromHour, timeFromMinute, timeToHour, timeToMinute, notAppliedAtAnyTimesLabel, toLabel, tPanel, tModal, timeBackButton, timeErrorMinutes) {
        var toMin = timeToMinute.val();
        var timeErrorDescription = that.locate("timeErrorDescription");
        if ((isNaN(toMin)) || (toMin>59 || toMin<0) || (toMin.length==0)) {
            tPanel.show();
            tModal.show();
            timeErrorDescription.text(timeErrorMinutes);
            timeBackButton.focus();
        }
        else {
            notAppliedAtAnyTimesLabel.text(gpii.pmt.twoDigits(timeFromHour.val()) + ":" + gpii.pmt.twoDigits(timeFromMinute.val()) + toLabel + gpii.pmt.twoDigits(timeToHour.val()) + ":" + gpii.pmt.twoDigits(timeToMinute.val()));
            var rLine = that.dom.locate("recordLine");
            rLine.removeClass(that.options.styles.invisible);
            rLine.addClass(that.options.styles.visible);
        }
    };

    gpii.pmt.twoDigits = function (val){
        if (val.length === 0) {
            val = "00";
            return val;
        }
        else if (val.length === 1) {
            val = "0"+val;
            return val;
        }
        else if (val.length === 2) {
            return val;
        }
        else {
            val = "00";
            return val;
        }
    };

    gpii.pmt.selectDevice = function (sess, sDevice, appliesToLabel, devicesTextLabel, notAppliedToAnyDevicesLabel) {
        sDevice = sDevice + " option:selected";
        var sDeviceSelector = $(sDevice);
        var value = appliesToLabel + sDeviceSelector.val() + devicesTextLabel;
        notAppliedToAnyDevicesLabel.text(value);
    };
    
    gpii.pmt.clickEmailCopyButton = function (to, body, subject) {
        gpii.pmt.sendWithGmail({
            to: to.val(),
            subject: subject,
            body: body.val()//,
            //attachment : "sharing.js"
        });
    };

    gpii.pmt.emailValidation = function (emailAddressLabel, copyButton, copyIcon, disabled) {
        var emailValid = gpii.pmt.validateEmail(emailAddressLabel.val());
        if (emailValid){
            if (copyButton.hasClass(disabled)) {
                copyButton.removeClass(disabled);
                copyIcon.removeClass(disabled);
            }
        }
        else{
            if (!copyButton.hasClass(disabled)) {
                copyButton.addClass(disabled);
                copyIcon.addClass(disabled);
            }
        }
    };
    
    gpii.pmt.validateEmail = function (emailaddress) {
        var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (filter.test(emailaddress)) {
            return true;
        }
        else {
            return false;
        }
    };

    gpii.pmt.sendViaMailTo = function (opts) {
        var link = "mailto:" + opts.to +
        "&subject=" + opts.subject +
        "&body=" + opts.body;
        //+ "&attachment="+opts.attachment;
        window.location.href = link;
    };

    gpii.pmt.sendWithGmail = function (opts) {
        var str = "http://mail.google.com/mail/?view=cm&fs=1"+
                  "&to=" + opts.to +
                  "&su=" + opts.subject +
                  "&body=" + opts.body.replace(/\n/g,"%0A") +
                  "&ui=1";
        location.href = str;
    };
    
    gpii.pmt.enableTabConditions = function (that) {
        var tabCondition = that.dom.locate("tabConditions");
        var tabSharing = that.dom.locate("tabShare");
        var sharingEmail = that.dom.locate("sharingEmail");
        var contextHeader = that.dom.locate("contextHeader");
        var contextHeaderDevices = that.dom.locate("contextHeaderDevices");
        var contextHeaderTime = that.dom.locate("contextHeaderTime");

        if (tabCondition.hasClass(that.options.styles.deactiveTab)){
            tabCondition.removeClass(that.options.styles.deactiveTab);
            tabCondition.addClass(that.options.styles.activeTab);
            if (tabSharing.hasClass(that.options.styles.activeTab)){
                tabSharing.removeClass(that.options.styles.activeTab);
            }
            tabSharing.addClass(that.options.styles.deactiveTab);
        }
        contextHeader.show();
        sharingEmail.hide();
        if (that.dom.locate("baseSetDescription").hasClass(that.options.styles.invisible)){
            that.dom.locate("baseSetDescription").removeClass(that.options.styles.invisible);
            that.dom.locate("deleteSetLabel").removeClass(that.options.styles.invisible);
        }
        that.dom.locate("baseSetDescription").addClass(that.options.styles.visible);
        that.dom.locate("deleteSetLabel").addClass(that.options.styles.visible);
        contextHeaderDevices.show();
        contextHeaderTime.show();
    };

    gpii.pmt.enableTabShare = function (that) {
        var tabCondition = that.dom.locate("tabConditions");
        var tabSharing = that.dom.locate("tabShare");
        var sharingEmail = that.dom.locate("sharingEmail");
        var contextHeader = that.dom.locate("contextHeader");
        var contextHeaderDevices = that.dom.locate("contextHeaderDevices");
        var contextHeaderTime = that.dom.locate("contextHeaderTime");

        if (tabSharing.hasClass(that.options.styles.deactiveTab)){
            tabSharing.removeClass(that.options.styles.deactiveTab);
            tabSharing.addClass(that.options.styles.activeTab);
            if (tabCondition.hasClass(that.options.styles.activeTab)){
                tabCondition.removeClass(that.options.styles.activeTab);
            }
            tabCondition.addClass(that.options.styles.deactiveTab);
        }
        contextHeader.show();
        sharingEmail.show();
        if (that.dom.locate("baseSetDescription").hasClass(that.options.styles.visible)){
            that.dom.locate("baseSetDescription").removeClass(that.options.styles.visible);
            that.dom.locate("deleteSetLabel").removeClass(that.options.styles.visible);
        }
        that.dom.locate("baseSetDescription").addClass(that.options.styles.invisible);
        that.dom.locate("deleteSetLabel").addClass(that.options.styles.invisible);
        contextHeaderDevices.hide();
        contextHeaderTime.hide();
    };

    gpii.pmt.setBoxValues = function (contextDevice, contextTime, contextUntitled, untitledSelector, untitledDescSelector, setLabel, addSetLink, currentSetId) {
        var divSet = "#"+currentSetId;
        untitledSelector = divSet + " > " + untitledSelector;
        var untitledLabel = $(untitledSelector);
        untitledDescSelector =  divSet + " > " + untitledDescSelector;
        var untitledDescLabel = $(untitledDescSelector);
        untitledLabel.text(contextUntitled.val());
        untitledDescLabel.text(contextDevice.text()+", "+contextTime.text());
        setLabel.text(contextUntitled.val());
        addSetLink.focus();
    };

    gpii.pmt.SavePreferenceSets = function(that, session, index){
        // Store preferences so far.
        var model = fluid.copy(that.model);
        var savedSelections = fluid.copy(model);
        fluid.each(savedSelections, function (value, key) {
            if (fluid.get(that.rootModel, key) === value) {
                delete savedSelections[key];
            }
        });
        session.options.preferenceSet[index] = JSON.stringify(savedSelections);
        session.options.modelSet[index] = JSON.stringify(fluid.copy(model));
    };

    
    gpii.pmt.clickDoneButton = function (session, overlayPanel, modalPanel, contextDevice, contextTime, contextUntitled, untitledSelector, untitledDescSelector, setLabel, toLabel, appliesToLabel, devicesTextLabel, sPanel, sModal, addSetLink, that, tPanel, tModal, timeErrorHour, timeErrorMinutes) {
        var timeTemp = contextTime.text().split(toLabel);
        var deviceTemp = contextDevice.text().split(appliesToLabel);
        deviceTemp = deviceTemp[1].toString().split(devicesTextLabel);
        var fromHour = that.locate("timeFromHour").val();
        var fromMin = that.locate("timeFromMinute").val();
        var toHour = that.locate("timeToHour").val();
        var toMin = that.locate("timeToMinute").val();
        var timeBackButton = that.locate("timeBackButton");
        var timeErrorDescription = that.locate("timeErrorDescription");
        if ((isNaN(fromHour)) || (fromHour>23 || fromHour<0) || (fromHour.length==0)) {
            tPanel.show();
            tModal.show();
            timeErrorDescription.text(timeErrorHour);
            timeBackButton.focus();
            return false;
        }
        else if ((isNaN(fromMin)) || (fromMin>59 || fromMin<0) || (fromMin.length==0)) {
            tPanel.show();
            tModal.show();
            timeErrorDescription.text(timeErrorMinutes);
            timeBackButton.focus();
            return false;
        }
        else if ((isNaN(toHour)) || (toHour>23 || toHour<0) || (toHour.length==0)) {
            tPanel.show();
            tModal.show();
            timeErrorDescription.text(timeErrorHour);
            timeBackButton.focus();
            return false;
        }
        else if ((isNaN(toMin)) || (toMin>59 || toMin<0) || (toMin.length==0)) {
            tPanel.show();
            tModal.show();
            timeErrorDescription.text(timeErrorMinutes);
            timeBackButton.focus();
            return false;
        }

        var setFoundIndex = null;
        var setFound = false;
        var update = false;
        var contexts = session.options.context;
        fluid.each(contexts, function (context, index) {
            context = JSON.parse(context);
            var name = context.setName;
            var contextSetId = context.id;
            if (name === contextUntitled.val()){ // Search if the set name already exists
                setFound = true;
                setFoundIndex = contextSetId;
            }
            if (contextSetId == session.options.currentSetId){
                if (name !== null){
                    update = true;
                }
            }
        });
        if (!setFound){
            session.options.contextElements.fromTime = timeTemp[0];
            session.options.contextElements.toTime = timeTemp[1];
            session.options.contextElements.device = deviceTemp[0];
            session.options.contextElements.enabled = true;
            session.options.contextElements.setName = contextUntitled.val();
            session.options.contextElements.id = session.options.currentSetId;
            if (!update){
                if ((timeTemp[0].length === 5) && (timeTemp[1].length === 5)) {
                    session.options.context.push(JSON.stringify(session.options.contextElements));
                    gpii.pmt.setBoxValues(contextDevice, contextTime, contextUntitled, untitledSelector, untitledDescSelector, setLabel, addSetLink, session.options.currentSetId);
                }
            }
            else{
                if ((timeTemp[0].length === 5) && (timeTemp[1].length === 5)) {
                    session.options.context.splice(session.options.currentSetId-1, 1, JSON.stringify(session.options.contextElements));
                    gpii.pmt.setBoxValues(contextDevice, contextTime, contextUntitled, untitledSelector, untitledDescSelector, setLabel, addSetLink, session.options.currentSetId);
                }
            }
            overlayPanel.hide();
            modalPanel.hide();
        }
        else{
            if (!update){
                sPanel.show();
                sModal.show();
            }
            else{
                if (setFoundIndex === session.options.currentSetId){ // An update of the exisitng set
                    session.options.contextElements.fromTime = timeTemp[0];
                    session.options.contextElements.toTime = timeTemp[1];
                    session.options.contextElements.device = deviceTemp[0];
                    session.options.contextElements.enabled = true;
                    session.options.contextElements.setName = contextUntitled.val();
                    session.options.contextElements.id = session.options.currentSetId;
                    if ((timeTemp[0].length === 5) && (timeTemp[1].length === 5)) {
                        session.options.context.splice(session.options.currentSetId-1, 1, JSON.stringify(session.options.contextElements));
                        gpii.pmt.setBoxValues(contextDevice, contextTime, contextUntitled, untitledSelector, untitledDescSelector, setLabel, addSetLink, session.options.currentSetId);
                    }
                    overlayPanel.hide();
                    modalPanel.hide();
                }
                else{
                    sPanel.show();
                    sModal.show();
                }
            }
        }
    };

    gpii.pmt.clickCancelButton = function (sess, overlayPanel, modalPanel, addSetLink) {
        overlayPanel.hide();
        modalPanel.hide();
        addSetLink.focus();
    };

    gpii.pmt.clickUntitled = function (that) {
        var untitledHeader = that.dom.locate("untitledText");
        var baseSet = that.dom.locate("baseSetDescription");
        var deleteSet = that.dom.locate("deleteSetLabel");
        
        untitledHeader.addClass(that.options.styles.bgHeader);
        baseSet.addClass(that.options.styles.visible);
        deleteSet.addClass(that.options.styles.visible);
    };

    gpii.pmt.hidePanels = function (oPanel, mPanel, soPanel, smPanel, toPanel, tmPanel) {
        oPanel.hide();
        mPanel.hide();
        soPanel.hide();
        smPanel.hide();
        toPanel.hide();
        tmPanel.hide();
    };

    gpii.pmt.onEditClick = function (oPanel, mPanel, element) {
        oPanel.show();
        mPanel.show();
        var setDivs = $(".gpiic-prefsEditor-contextFrame-row");
        $(setDivs).each(function(index, value) { 
            if (index >= 0){
                $(this).removeClass("gpii-prefsEditor-contextFrame-row-selected");
                $(this).addClass("gpii-prefsEditor-contextFrame-row-unselected");
            }
        });
        sessionObj.options.currentSetId = $(element).parent("div").attr("id");
        var currentDiv = $(element).parent("div");
        if (currentDiv.hasClass("gpii-prefsEditor-contextFrame-row-unselected")){
            $(currentDiv).removeClass("gpii-prefsEditor-contextFrame-row-unselected");
        }
        if (currentDiv.hasClass("gpii-prefsEditor-contextFrame-row-selected") === false){
            $(".gpiic-prefsEditor-context-leftArrowIcon").remove();
            $("<span class=\'gpiic-prefsEditor-context-leftArrowIcon gpii-prefsEditor-adjusterIcons gpii-prefsEditor-context-leftArrowIcon\'></span>").insertBefore(element);
            currentDiv.addClass("gpii-prefsEditor-contextFrame-row-selected");
        }

        var contexts = sessionObj.options.context;
        var models = sessionObj.options.modelSet
        gpii.pmt.SavePreferenceSets(thatObj, sessionObj, sessionObj.options.previousSetId);
        if ((models.length >= sessionObj.options.currentSetId) && (contexts.length >= sessionObj.options.currentSetId)){
            // Update current model with need and preferences set
            var index = parseInt(sessionObj.options.currentSetId);
            var currentModel = sessionObj.options.modelSet[index];
            thatObj.updateModel(JSON.parse(currentModel));

            // Update current conditions set
            var currentContext = JSON.parse(contexts[index-1]);
            thatObj.locate("untitledText").val(currentContext.setName);
            thatObj.locate("timeFromHour").val((currentContext.fromTime).substring(0,2));
            thatObj.locate("timeFromMinute").val((currentContext.fromTime).substring(3,5));
            thatObj.locate("timeToHour").val((currentContext.toTime).substring(0,2));
            thatObj.locate("timeToMinute").val((currentContext.toTime).substring(3,5));
            thatObj.locate("selectDevice").val(currentContext.device);
            var value = thatObj.msgLookup.lookup("appliesToLabel") + currentContext.device + thatObj.msgLookup.lookup("devicesTextLabel");
            thatObj.locate("notAppliedToAnyDevicesLabel").text(value);
            var value = (currentContext.fromTime).substring(0,2) + ":" + (currentContext.fromTime).substring(3,5) + thatObj.msgLookup.lookup("toLabel") + (currentContext.toTime).substring(0,2) + ":" + (currentContext.toTime).substring(3,5);
            thatObj.locate("notAppliedAtAnyTimesLabel").text(value);

            // Update set name that lies at the bottom of PMT
            thatObj.locate("setLabel").text(currentContext.setName);
        }
        sessionObj.options.previousSetId = sessionObj.options.currentSetId;
    };

    gpii.pmt.createUntitledBoxAria = function (that, editText) {
        var editButton = that.dom.locate("contextEditButton");
        editButton.attr("aria-label", editText);
        editButton.val(editText);
    };

    gpii.pmt.createUntitledBoxStyle = function (that) {
        var contextRows = that.dom.locate("contextRow");
        var cRow;
        fluid.each(contextRows, function (contextRow) {
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

    gpii.pmt.initObjs = function(that, session) {
        thatObj = that;
        sessionObj = session;
    };
    
    gpii.pmt.createUntitledBox = function (session, contextRows, untitledSetMarkup, label, desc, that, setLabel, untitledSelector, untitledDescSelector, contextRow, baseSetEditButton, baseSetPencilIcon) {
        if (baseSetEditButton.hasClass(that.options.styles.invisible)){
            baseSetEditButton.removeClass(that.options.styles.invisible);
            baseSetEditButton.addClass(that.options.styles.visible);
            baseSetPencilIcon.removeClass(that.options.styles.invisible);
            baseSetPencilIcon.addClass(that.options.styles.visible);
        }

        var selectedIcon = that.dom.locate("leftArrowIcon");
        selectedIcon.remove();
        var pencilIcon = that.dom.locate("pencilIcon");
        var editButton = that.dom.locate("contextEditButton");
        contextRows.append(untitledSetMarkup);

        untitledSelector = untitledSelector + ":last";
        var untitledLabel = $(untitledSelector);
        untitledDescSelector = untitledDescSelector + ":last";
        var untitledDescLabel = $(untitledDescSelector);
        untitledLabel.text(label);
        untitledDescLabel.text(desc);
        setLabel.text(label);
        contextRow = contextRow + ":last";
        var contextRowElement = $(contextRow);
        contextRowElement.attr("id", session.options.maxSetId +1);
        
        // Store preferences so far
        var savedSelections = fluid.copy(that.model);
        fluid.each(savedSelections, function (value, key) {
            if (fluid.get(that.rootModel, key) === value) {
                delete savedSelections[key];
            }
        });

        var index = parseInt(session.options.currentSetId);
        session.options.preferenceSet[index] = JSON.stringify(savedSelections);
        session.options.modelSet[index] = JSON.stringify(fluid.copy(that.model));
        session.options.contextElements.id = session.options.maxSetId;
        session.options.contextElements.setName = null;
        session.options.maxSetId++;
        session.options.currentSetId++;
        session.options.previousSetId = session.options.currentSetId;
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
    
    gpii.pmt.clickBackButton = function (setOverlayPanel, setModalPanel, untitledText) {
        setOverlayPanel.hide();
        setModalPanel.hide();
        untitledText.focus();
    };

    gpii.pmt.clickTimeBackButton = function (timeOverlayPanel, timeModalPanel, untitledText, timeFromHour, timeFromMinute, timeToHour, timeToMinute) {
        timeOverlayPanel.hide();
        timeModalPanel.hide();
        var fromHour = timeFromHour.val();
        var fromMin = timeFromMinute.val();
        var toHour = timeToHour.val();
        var toMin = timeToMinute.val();
        if ((isNaN(fromHour)) || (fromHour>23 || fromHour<0) || (fromHour.length==0)) {
            timeFromHour.focus();
        }
        else if ((isNaN(fromMin)) || (fromMin>59 || fromMin<0) || (fromMin.length==0)) {
            timeFromMinute.focus();
        }
        else if ((isNaN(toHour)) || (toHour>23 || toHour<0) || (toHour.length==0)) {
            timeToHour.focus();
        }
        else if ((isNaN(toMin)) || (toMin>59 || toMin<0) || (toMin.length==0)) {
            timeToMinute.focus();
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
