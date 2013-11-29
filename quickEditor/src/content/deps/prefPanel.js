(function ($, fluid) {       

    /**********************************************
     * Grade to be used for any preferences panel *
     **********************************************/
    fluid.defaults("fluid.uiOptions.prefPanel", {
        gradeNames: ["fluid.uiOptions.ant"],
        model: "{uiOptions}.model",
        applier: "{uiOptions}.applier",
        events: {
            onUIOptionsRefresh: "{uiOptions}.events.onUIOptionsRefresh"
        }
    });

})(jQuery, fluid);
