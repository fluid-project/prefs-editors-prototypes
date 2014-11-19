
The version of Infusion included in this folder was created using a custom build from commit `f5d4f6ac978fe235baf0986b56edd7af6c0bd452`

of the Infusion master branch

<https://github.com/fluid-project/infusion>

using the command line

    grunt custom --source=true --include="preferences, overviewPanel" --name="prefsFramework"

The following directories were stripped out of the build since they contain code that is included in the infusion-prefsFramework.js file:

* README.md
* ReleaseNotes.md
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

Additionally, the testing framework from Infusion is used (tests/lib/infusion) and should be updated to a matching version. This directory is a copy of

https://github.com/fluid-project/infusion/tree/master/tests

The following directories were stripped out since they contain code that is not required:

* all-tests.html
* component-tests/
* framework-tests/
* manual-tests/
* node-tests/
* test-core/testTests/

