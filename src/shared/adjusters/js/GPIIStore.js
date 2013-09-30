gpii = fluid.registerNamespace("gpii");

(function ($, fluid) {

    // registering this typetag allows the framework to know we're in a particular environment
    fluid.staticEnvironment.gpiiPcp = fluid.typeTag("gpii.pcp");

    // fluid.registerNamespace("gpii.pcp");

    fluid.defaults("gpii.pcp.store", {
        gradeNames: ["fluid.uiOptions.dataSource", "autoInit"],
        invokers: {
            get: {
                funcName: "gpii.pcp.store.get",
                args: ["{store}.options.userToken", "{store}.options.defaultSiteSettings"]
            },
            set: {
                funcName: "gpii.pcp.store.set",
                args: ["{arguments}.0", "{store}.options.userToken", "{store}.options.dictionary"]
            }
        },

        // your Store can define whatever options you need
        userToken: "testToken",
        dictionary: {   // A simple map between uiOptions and GPII settings names
            /*textSize: "http://registry.gpii.org/common/fontSize",
            theme:    "http://registry.gpii.org/common/foregroundColor",*/
        }
    });

    // your get and save can be written however you need
    gpii.pcp.store.get = function (userToken, defaultSettings) {
        var savedSettings;

        // do an $.ajax(get...) to retrieve the saved settings from the server

        // if there are no saved settings, just return the defaults
        return savedSettings || defaultSettings;
    };

    gpii.pcp.store.set = function (settings, userToken, dict) {
        var gpiiSettings = {};

        fluid.each(settings, function(value, key) {
            if(key.indexOf("registry*gpii") !== -1) {
                key = "http://" + key.replace(/\*/g,'.');
                gpiiSettings[key] = value;
            }
        });

        $.ajax({
            type: "POST",
            url: "http://localhost:8081/user/userToken/update",

            // sending settings instead of gpiiSettings for testing purposes
            data: gpiiSettings
        });
    };

    // This demands block says:
    // "When 'gpii.pcp' is in the environment, use 'gpii.pcp.store' instead of the default."
    fluid.demands("fluid.uiOptions.store", ["fluid.uiEnhancer", "gpii.pcp"], {
        funcName: "gpii.pcp.store"
    });


})(jQuery, fluid);
