System.register(['angular2/platform/browser', './app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            /*system.js handles extension (.js / .ts)*/
            /*initialize / load up function*/
            browser_1.bootstrap(app_component_1.AppComponent);
        }
    }
});
/*will look for selector and bind information from modules to it*/

//# sourceMappingURL=boot.js.map
