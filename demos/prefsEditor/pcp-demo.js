/*!
Cloud4all Preferences Management Tools

Copyright 2013 OCAD University
Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global demo:true, fluid, jQuery, navigator, gpii*/
/*jslint white: true, funcinvoke: true, undef: true, newcap: true, regexp: true, browser: true, forin: true, continue: true, maxerr: 100, indent: 4 */

var demo = demo || {};

(function ($, fluid) {

    fluid.defaults("fluid.prefs.builder", {
        gradeNames: ["fluid.eventedComponent", "fluid.prefs.auxBuilder", "autoInit"],
        progressiveCheckerOptions: {
            checks: [
                {
                    feature: "{gpii.os.isWindowsPlatform}",
                    contextName: "gpii.pcp.auxiliarySchema.windows"
                },
                {
                    feature: "{gpii.os.isLinuxPlatform}",
                    contextName: "gpii.pcp.auxiliarySchema.linux"
                }
            ]
        },
        mergePolicy: {
            auxSchema: "expandedAuxSchema"
        },
        assembledPrefsEditorGrade: {
            expander: {
                func: "fluid.prefs.builder.generateGrade",
                args: ["prefsEditor", "{that}.options.auxSchema.namespace", {
                    gradeNames: ["fluid.viewComponent", "autoInit", "fluid.prefs.assembler.prefsEd"],
                    componentGrades: "{that}.options.constructedGrades"
                }]
            }
        },
        assembledUIEGrade: {
            expander: {
                func: "fluid.prefs.builder.generateGrade",
                args: ["uie", "{that}.options.auxSchema.namespace", {
                    gradeNames: ["fluid.viewComponent", "autoInit", "fluid.prefs.assembler.uie"],
                    componentGrades: "{that}.options.constructedGrades"
                }]
            }
        },
        constructedGrades: {
            expander: {
                func: "fluid.prefs.builder.constructGrades",
                args: ["{that}.options.auxSchema", ["enactors", "messages", "panels", "rootModel", "templateLoader", "messageLoader", "templatePrefix", "messagePrefix"]]
            }
        },
        mappedDefaults: "{primaryBuilder}.options.schema.properties",
        components: {
            primaryBuilder: {
                type: "fluid.prefs.primaryBuilder",
                options: {
                    typeFilter: {
                        expander: {
                            func: "fluid.prefs.builder.parseAuxSchema",
                            args: "{builder}.options.auxiliarySchema"
                        }
                    }
                }
            }
        },
        distributeOptions: [{
            source: "{that}.options.primarySchema",
            removeSource: true,
            target: "{that > primaryBuilder}.options.primarySchema"
        }]
    });
    
    $(document).ready(function () {
        fluid.prefs.create("#gpiic-pcp", {
            build: {
                gradeNames: ["fluid.progressiveCheckerForComponent", "gpii.pcp.auxiliarySchema.common", "autoInit"],
                componentName: "fluid.prefs.builder",
                primarySchema: gpii.primarySchema
            },
            prefsEditor: {
                prefsEditorType: "gpii.prefsEditor",
                components: {
                    prefsEditorLoader: {
                        options: {
                            messagePrefix: "../../src/shared/adjusters/messages/" + gpii.prefs.i18n.getDefaultLanguage() + "/"
                        }
                    }
                }
            }
        });
    });

})(jQuery, fluid);
