"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var oeuvre_service_1 = require("./oeuvre.service");
var app_component_1 = require("./app.component");
var foo_component_1 = require("./foo.component");
var bio_component_1 = require("./bio.component");
var contact_component_1 = require("./contact.component");
var admin_component_1 = require("./admin.component");
var login_component_1 = require("./login.component");
var home_component_1 = require("./home.component");
var oeuvre_detail_component_1 = require("./oeuvre-detail.component");
var form_component_1 = require("./form.component");
var angular2_masonry_1 = require("angular2-masonry");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            angular2_masonry_1.MasonryModule,
            http_1.HttpModule,
            forms_1.FormsModule
        ],
        declarations: [app_component_1.AppComponent,
            foo_component_1.FooComponent,
            contact_component_1.ContactComponent,
            bio_component_1.BioComponent,
            admin_component_1.AdminComponent,
            login_component_1.LoginComponent,
            home_component_1.HomeComponent,
            oeuvre_detail_component_1.OeuvreComponent,
            form_component_1.FormComponent
        ],
        providers: [oeuvre_service_1.OeuvreService],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map