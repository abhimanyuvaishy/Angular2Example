System.register(["angular2/platform/browser", "./HelloWorld_appcomponents"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, HelloWorld_appcomponents_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (HelloWorld_appcomponents_1_1) {
                HelloWorld_appcomponents_1 = HelloWorld_appcomponents_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(HelloWorld_appcomponents_1.helloWorldComponent);
        }
    }
});
//# sourceMappingURL=helloworld_main.js.map