var removeSpaces = function (str) {
    return str.split(" ").join("");
};

var determineControlType = function (valueSpace) {
    if (valueSpace === "boolean") {
        return "genericCheckbox";
    } else if (Array.isArray(valueSpace)) {
        return "genericDropdown";
    } else if (valueSpace.start !== undefined) {
        return "genericSlider";
    }

    fluid.fail("unsupported value space: " + JSON.stringify(valueSpace));
};

var transformPayload = function (preferences) {
    var result = {
        prefix: "deps/components/uiOptions/html/",
        distributeOptions: [{
            target: "{that > templateLoader}.options.templates",
            record: {
                uiOptions: "temp/pcpMainDialog.html",
                genericCheckbox: "deps/genericControls/html/genericCheckbox.html",
                genericDropdown: "deps/genericControls/html/genericDropdown.html",
                genericSlider: "deps/genericControls/html/genericSlider.html"
            }
        }, {
            target: "{that > uiOptionsLoader > uiOptions}",
            record: {
                selectors: {},
                components: {}
            }
        }]
    };

    for (var i = 0; i < preferences.length; ++i) {
        var currentPreference = preferences[i];
        var preferenceName = removeSpaces(currentPreference.preferenceName);
        var controlType = determineControlType(currentPreference.valueSpace);
        
        result.distributeOptions[1].record.selectors[preferenceName] = ".pcp-" + preferenceName;
        result.distributeOptions[1].record.components[preferenceName] = {
            // that should depend on the value space
            type: "gpii.pcp." + controlType,
            container: "{uiOptions}.dom." + preferenceName,
            createOnEvent: "onUIOptionsMarkupReady",
            options: currentPreference
        }
    }

    return result;
};


var uiOptionsInit = function (displayedPreferences) {
    var uiConfig = transformPayload(displayedPreferences);

    fluid.staticEnvironment.gpiiPcp = fluid.typeTag("gpii.pcp");

    fluid.pageEnhancer({});

    fluid.uiOptions.fullNoPreview("#pcpMainSettings", uiConfig);

    fluid.demands("fluid.uiOptions.textControls", ["fluid.uiOptions", "gpii.pcp"], {
        funcName: "fluid.emptySubcomponent"
    });

    fluid.demands("fluid.uiOptions.layoutControls", ["fluid.uiOptions", "gpii.pcp"], {
        funcName: "fluid.emptySubcomponent"
    });

    fluid.demands("fluid.uiOptions.linksControls", ["fluid.uiOptions", "gpii.pcp"], {
        funcName: "fluid.emptySubcomponent"
    });
};