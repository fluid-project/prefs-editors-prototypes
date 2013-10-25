
The version of Infusion included in this folder was created using a custom build from commit

    03927cf35e393ef467149a1c69eb4cd9d3bb0981

of the FLUID-5131 branch from

    https://github.com/jobara/infusion

using the command line

    ant -lib lib/rhino/ customBuild -Dinclude="preferences, enhancement" -DnoMinify="true"

The following directories were stripped out of the build since they contain code that is included in the MyInfusion.js file:

    src/shared/lib/infusion/components/slidingPanel
    src/shared/lib/infusion/components/tableOfContents/js/
    src/shared/lib/infusion/components/textfieldSlider
    src/shared/lib/infusion/framework/core/
    src/shared/lib/infusion/framework/enhancement/
    src/shared/lib/infusion/framework/preferences/js/
    src/shared/lib/infusion/framework/renderer/
    src/shared/lib/infusion/lib/fastXmlPull/
    src/shared/lib/infusion/lib/jquery/core/
    src/shared/lib/infusion/lib/jquery/plugins/
    src/shared/lib/infusion/lib/jquery/ui/js/
