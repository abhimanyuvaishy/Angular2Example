System.register(["angular2/core", '../app/Services/calculateAge_appservice'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, calculateAge_appservice_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (calculateAge_appservice_1_1) {
                calculateAge_appservice_1 = calculateAge_appservice_1_1;
            }],
        execute: function() {
            //import {BrowserModule} from "angular2/platform/browser";
            AppComponent = (function () {
                function AppComponent(_ageService) {
                    this._ageService = _ageService;
                    this.Name = 'My First Angular 2 App';
                    this.userinfo = {};
                    this.userinfoList = [];
                }
                AppComponent.prototype.addData = function () {
                    this.userinfoList.push(this.userinfo);
                    this.calculateAg();
                    this.userinfo = {};
                };
                AppComponent.prototype.calculateAg = function () {
                    this._ageService.age = this.userinfo.age;
                    this.NewAge = this._ageService.GetTenTimesAge();
                };
                AppComponent.prototype.removeLine = function (userdata) {
                    var index = this.userinfoList.indexOf(userdata);
                    if (index !== -1) {
                        this.userinfoList.splice(index, 1);
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/templates/form_apptemplate.html',
                        providers: [calculateAge_appservice_1.CalculateAge]
                    }), 
                    __metadata('design:paramtypes', [calculateAge_appservice_1.CalculateAge])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=environment_app.component.js.map