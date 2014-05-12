
The version of Infusion included in this folder was created using a custom build from commit `cbf0d7d7fceef9c0dfef41a8f2c00daa51dfd74e`

of the Infusion master branch

<https://github.com/fluid-project/infusion>

using the command line

    grunt custom --source=true --include="preferences, overviewPanel" --name="prefsFramework"

The following directories were stripped out of the build since they contain code that is included in the infusion-prefsFramework.js file:

* src/shared/lib/infusion/components/overviewPanel/js/
* src/shared/lib/infusion/components/slidingPanel/
* src/shared/lib/infusion/components/tableOfContents/js/
* src/shared/lib/infusion/components/textfieldSlider/
* src/shared/lib/infusion/framework/core/
* src/shared/lib/infusion/framework/enhancement/
* src/shared/lib/infusion/framework/preferences/js/
* src/shared/lib/infusion/framework/renderer/
* src/shared/lib/infusion/lib/fastXmlPull/
* src/shared/lib/infusion/lib/jquery/core/
* src/shared/lib/infusion/lib/jquery/plugins/
* src/shared/lib/infusion/lib/jquery/ui/js/
* src/shared/lib/infusion/lib/json/