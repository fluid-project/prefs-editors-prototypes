var fluid = fluid || {};

(function ($, fluid) {
    
    // registering this typetag allows the framework to know we're in a particular environment
    fluid.staticEnvironment.gpiiPcp = fluid.typeTag("gpii.pcp");

    fluid.defaults("gpii.pcp.store", {
        // "fluid.uiOptions.store" is the base grade for any settings store
        gradeNames: ["fluid.uiOptions.store", "autoInit"],
        invokers: {
            fetch: {
                funcName: "gpii.pcp.store.fetch",
                args: ["{store}.options.userToken", "{store}.options.defaultSiteSettings"]
            },
            save: {
                funcName: "gpii.pcp.store.save",
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

    // your fetch and save can be written however you need
    gpii.pcp.store.fetch = function (userToken, defaultSettings) {
        var savedSettings;
        
        // do an $.ajax(get...) to retrieve the saved settings from the server
        
        // if there are no saved settings, just return the defaults
        return savedSettings || defaultSettings;
    };

    gpii.pcp.store.save = function (settings, userToken, dict) {
        var gpiiSettings = {};

        fluid.each(settings, function(value, key){
            if(key.indexOf("registry*gpii") !== -1) {
                key = "http://" + key.replace(/\*/g,'.');
                gpiiSettings[key] = value;
            }
        });

        $.ajax({
            type: "POST",
            url: "http://localhost:8081/user/" + userToken + "/update",
            
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