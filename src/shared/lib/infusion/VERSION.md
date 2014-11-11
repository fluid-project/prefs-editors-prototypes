
The version of Infusion included in this folder was created using a custom build from commit `3543061c61bdd42c1a08206773cc3dda68ea1173`

of the Infusion master branch

<https://github.com/fluid-project/infusion>

using the command line

    grunt custom --source=true --include="preferences, overviewPanel" --name="prefsFramework"

The following directories were stripped out of the build since they contain code that is included in the infusion-prefsFramework.js file:

* src/shared/lib/infusion/src/components/overviewPanel/js/
* src/shared/lib/infusion/src/components/slidingPanel/
* src/shared/lib/infusion/src/components/tableOfContents/js/
* src/shared/lib/infusion/src/components/textfieldSlider/
* src/shared/lib/infusion/src/framework/core/js/
* src/shared/lib/infusion/src/framework/enhancement/
* src/shared/lib/infusion/src/framework/preferences/js/
* src/shared/lib/infusion/src/framework/renderer/
* src/shared/lib/infusion/src/lib/fastXmlPull/
* src/shared/lib/infusion/src/lib/jquery/core/
* src/shared/lib/infusion/src/lib/jquery/plugins/
* src/shared/lib/infusion/src/lib/jquery/ui/js/
* src/shared/lib/infusion/src/lib/json/