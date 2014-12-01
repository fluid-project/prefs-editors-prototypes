/*!
Copyright 2013 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/gpii/universal/LICENSE.txt
*/

(function ($, fluid) {
    "use strict";

    fluid.registerNamespace("gpii.adjuster");

    fluid.defaults("gpii.adjuster.textfieldStepper", {
        gradeNames: ["gpii.textfieldStepper", "fluid.prefs.modelRelay", "fluid.prefs.msgLookup", "autoInit"],
        members: {
            messageResolver: "{prefsEditorLoader}.msgResolver"
        },
        strings: {
            plusText: "{that}.msgLookup.textPlus",
            minusText: "{that}.msgLookup.textMinus"
        }
    });

    /*
     * A grade component used by components that has gpii.adjuster.textfieldStepper as a sub-component.
     * This component is to ensure the template for gpii.adjuster.textfieldStepper is loaded before it gets
     * instantiated. To use this component:
     * 1. Add gpii.adjuster.stepperConnections as a grade for the component that has gpii.adjuster.textfieldStepper
     *    as a sub-component;
     * 2. Pass in the location of the gpii.adjuster.textfieldStepper template into the option "stepperTemplate",
     *    for example, define in the auxiliary schema;
     * 3. Make sure sub-component gpii.adjuster.textfieldStepper has these options:
     *    onCreateEvent: "onCreateStepper",
     *    resources: "{parent}.options.stepperResources"
     *
     */
    fluid.defaults("gpii.adjuster.stepperConnections", {
        gradeNames: ["fluid.rendererComponent", "autoInit"],
        stepperTemplate: "../html/textfieldStepperTemplate.html",
        events: {
            onCreateStepper: null
        },
        listeners: {
            "onDomBind.fetchResources": {
                listener: "fluid.fetchResources",
                args: ["{that}.options.stepperResources", "{that}.events.onCreateStepper.fire"]
            }
        },
        stepperResources: {
            template: {
                forceCache: true,
                url: "{that}.options.stepperTemplate"
            }
        }
    });

})(jQuery, fluid);
