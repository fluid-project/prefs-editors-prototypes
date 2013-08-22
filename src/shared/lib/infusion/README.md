
The version of Infusion included in this folder was created using a custom build from commit

    b452d86d52e97c2e75ecd40cc42e145e68b5dd91

of the Infusion master branch

    https://github.com/fluid-project/infusion

using the command line

    ant -lib lib/rhino customBuild -Dinclude="uiOptions" -DnoMinify="true"

The following directories were stripped out of the build since they contain code that is included in the MyInfusion.js file:

    src/shared/lib/infusion/components/tableOfContents/js/
    src/shared/lib/infusion/components/tabs/
    src/shared/lib/infusion/components/uiOptions/js/
    src/shared/lib/infusion/framework/core/
    src/shared/lib/infusion/framework/renderer/
    src/shared/lib/infusion/lib/fastXmlPull/
    src/shared/lib/infusion/lib/jquery/core/
    src/shared/lib/infusion/lib/jquery/plugins/
    src/shared/lib/infusion/lib/jquery/ui/js/
    src/shared/lib/infusion/lib/json/