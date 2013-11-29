var fluid = require("universal");
var gpii = fluid.registerNamespace("gpii");
var pcp = fluid.registerNamespace("gpii.pcp");

var fs = require("fs");
var jsdom = require("jsdom");

//pcp.genericTemplatesDirectory = "";

pcp.removeSpaces = function (str) {
    return str.split(" ").join("");
};

pcp.generateOnloadJavaScript = function (displayedPreferences) {
    var indexTemplateSource = fs.readFileSync(pcp.prefix + "/content/deps/pcp_templates/index.html", "utf8");

    jsdom.env({
        html: indexTemplateSource,
        scripts: ["http://code.jquery.com/jquery.js"],
        done: function (errors, domWindow) {
            var $ = domWindow.$;

            $("body").attr("onload", "uiOptionsInit(" + JSON.stringify(displayedPreferences) + ")");
            $(".jsdom").remove();

            var output = $("html").html();
            fs.writeFileSync(pcp.prefix + "/content/index.html", output);
        }
    });
};

pcp.generateMainDialog = function (displayedPreferences) {
    var mainDialogTemplateSource = fs.readFileSync(pcp.prefix + "/content/deps/pcp_templates/pcpMainDialog.html", "utf8");

    jsdom.env({
        html: mainDialogTemplateSource,
        scripts: ["http://code.jquery.com/jquery.js"],
        done: function (errors, domWindow) {
            var $ = domWindow.$;

            for (var i = 0; i < displayedPreferences.length; ++i) {
                var prefClass = "pcp-" + pcp.removeSpaces(displayedPreferences[i].preferenceName);
                var div = "<div class=\"" + prefClass + " fl-uiOptions-layout fl-col-flex\"> </div>"
                $(".fl-uiOptions-category").append(div);
            }

            var output = $("body").html();
            fs.writeFileSync(pcp.prefix + "/content/temp/pcpMainDialog.html", output);
        }
    });
};

pcp.generateHTML = function (displayedPreferences) {
    pcp.generateMainDialog(displayedPreferences);
    pcp.generateOnloadJavaScript(displayedPreferences);
};