"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n\n    <div class=\"section no-pad-bot\" >\n    <div class=\"container\">\n      <br><br>\n      <h1 style=\"z-index: 2;\" class=\"header center orange-text\">Starter Template</h1>\n      <div class=\"row center\">\n        <h5 class=\"header col s12 light\">A modern responsive front-end framework based on Material Design</h5>\n      </div>\n      <div class=\"row center\">\n        <a routerLink=\"/oeuvre\" id=\"download-button\" class=\"btn-large waves-effect waves-light black\">Bienvenue sur le site d'Edouard Wolton</a>\n      </div>\n      <br><br>\n\n    </div>\n  </div>\n  <video id=\"myvid\" autoplay loop controls>\n  <source src=\"vid/edouardmonte.mp4\" type=\"video/mp4\">\n  Your browser does not support the video tag.\n  </video>\n\n  ",
        styleUrls: ['app/home.component.css']
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map