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

    fluid.registerNamespace("gpii.pmt");

    fluid.defaults("gpii.pmt.contextPanel.renderer", {
        gradeNames: ["fluid.rendererComponent", "fluid.prefs.msgLookup", "autoInit"],
        events: {
            onReady: {
                events: {
                    onCreate: "onCreate",
                    afterRender: "afterRender"
                },
                args: "{that}"
            }
        },
        listeners: {
            "afterRender.render": "gpii.pmt.contextPanel.showTemplate",
            "afterRender.clickUntitled": {
                "this": "{that}.dom.untitledLabel",
                "method": "click",
                "args": ["{that}.clickUntitled"]
            }
        },
        invokers: {
            clickUntitled: {
                "funcName": "gpii.pmt.contextPanel.clickUntitled",
                "args": ["{that}"]
            }
        },
        styles: {
            visible: "gpii-context-visible",
            invisible: "gpii-context-invisible",
            bgHeader: "gpii-context-header-bg-pressed"
        },
        selectors: {
            conditionsTabLabel: ".gpiic-context-conditions-label",
            shareTabLabel: ".gpiic-context-share-label",
            baseSetLabel: ".gpiic-context-baseset-label",
            deleteSetLabel: ".gpiic-context-deleteset-label",
            notAppliedToAnyDevicesLabel: ".gpiic-context-devices-notapplied-label",
            addNewDeviceLabel: ".gpiic-context-devices-add-new-label",
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
            addNewTimeLabel: ".gpiic-context-time-add-new-label",
            toLabel: ".gpiic-context-time-to-label",
            appliesToLabel: ".gpiic-context-device-applies-label",
            devicesTextLabel: ".gpiic-context-devices-label",
            cancelButton: ".gpiic-context-cancelButton",
            doneButton: ".gpiic-context-doneButton",
            linkCopyLabel: ".gpiic-link-copy-label",
            downloadCopyLabel: ".gpiic-download-copy-label",
            emailCopyLabel: ".gpiic-email-copy-label",
            untitledLabel: ".gpiic-context-header-untitled",
            emailAddressLabel: ".gpiic-enter-email-address-input",
            enterMessageLabel: ".gpiic-enter-message-input"
        },
        protoTree: {
            conditionsTabLabel: {messagekey: "conditionsTabLabel"},
            shareTabLabel: {messagekey: "shareTabLabel"},
            baseSetLabel: {messagekey: "baseSetLabel"},
            deleteSetLabel: {messagekey: "deleteSetLabel"},
            notAppliedToAnyDevicesLabel: {messagekey: "notAppliedToAnyDevicesLabel"},
            addNewDeviceLabel: {messagekey: "addNewDeviceLabel"},
            devicesLabel: {messagekey: "devicesLabel"},
            allLabel: {messagekey: "allLabel"},
            desktopLabel: {messagekey: "desktopLabel"},
            laptopLabel: {messagekey: "laptopLabel"},
            tabletLabel: {messagekey: "tabletLabel"},
            phoneLabel: {messagekey: "phoneLabel"},
            kioskLabel: {messagekey: "kioskLabel"},
            bankMachineLabel: {messagekey: "bankMachineLabel"},
            otherLabel: {messagekey: "otherLabel"},
            notAppliedAtAnyTimesLabel: {messagekey: "notAppliedAtAnyTimesLabel"},
            timeLabel: {messagekey: "timeLabel"},
            addNewTimeLabel: {messagekey: "addNewTimeLabel"},
            toLabel: {messagekey: "toLabel"},
            appliesToLabel: {messagekey: "appliesToLabel"},
            devicesTextLabel: {messagekey: "devicesTextLabel"},
            cancelButton: {messagekey: "cancelLabel"},
            doneButton: {messagekey: "doneLabel"},
            linkCopyLabel: {messagekey: "linkCopyLabel"},
            downloadCopyLabel: {messagekey: "downloadCopyLabel"},
            emailCopyLabel: {messagekey: "emailCopyLabel"},
            untitledLabel: {messagekey: "untitledLabel"},
            emailAddressLabel: {messagekey: "emailAddressLabel"},
            enterMessageLabel: {messagekey: "enterMessageLabel"}
        },
        strings: {
        }
    });

    fluid.defaults("gpii.pmt.contextPanel", {
        gradeNames: ["fluid.viewComponent", "autoInit"],
        components: {
            templateLoader: {
                type: "fluid.prefs.resourceLoader",
                options: {
                    templates: {
                        context: "../../src/context/html/contextPanelTemplate.html"
                    },
                    events: {
                        onResourcesLoaded: "{contextPanel}.events.onContextTemplatesLoaded"
                    }
                }
            },
            messageLoader: {
                type: "fluid.prefs.resourceLoader",
                options: {
                    templates: {
                        context: "../../src/context/messages/en/context.json"
                    },
                    events: {
                        onResourcesLoaded: "{contextPanel}.events.onContextMessagesLoaded"
                    }
                }
            },
            contextRenderer: {
                type: "gpii.pmt.contextPanel.renderer",
                container: "{that}.container",
                createOnEvent: "onResourcesReady",
                options: {
                    parentBundle: "{contextPanel}.msgResolver",
                    resources: {
                        template: "{templateLoader}.resources.context"
                    }
                }
            }
        },
        events: {
            onContextTemplatesLoaded: null,
            onContextMessagesLoaded: null,
            onMsgResolverReady: null,
            onResourcesReady: {
                events: {
                    templates: "onContextTemplatesLoaded",
                    messages: "onContextMessagesLoaded",
                    resolver: "onMsgResolverReady"
                },
                args: ["{that}"]
            }
        },
        distributeOptions: [{
            source: "{that}.options.contextPanelRenderer",
            removeSource: true,
            target: "{that > contextPanelRenderer}.options"
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
            "onContextMessagesLoaded.createMsgResolver": {
                funcName: "gpii.pmt.contextPanel.createMsgResolver",
                args: ["{arguments}.0", "{that}"]
            }
        }
    });
    
    gpii.pmt.contextPanel.createMsgResolver = function (messageResources, that) {
        var completeMessage;
        fluid.each(messageResources, function (oneResource) {
            var message = JSON.parse(oneResource.resourceText);
            completeMessage = $.extend({}, completeMessage, message);
        });
        that.msgResolver = fluid.messageResolver({messageBase: completeMessage});
        that.events.onMsgResolverReady.fire();
    };
    
    gpii.pmt.contextPanel.showTemplate = function (that) {
        fluid.fetchResources(that.options.resources, function () {
            that.refreshView();
        });
    };

    gpii.pmt.contextPanel.clickUntitled = function (that) {
        var untitledHeader = that.dom.locate("untitledLabel");
        var baseSet = that.dom.locate("baseSetLabel");
        var deleteSet = that.dom.locate("deleteSetLabel");
        
        untitledHeader.addClass(that.options.styles.bgHeader);
        baseSet.addClass(that.options.styles.visible);
        deleteSet.addClass(that.options.styles.visible);
    };

})(jQuery, fluid);
