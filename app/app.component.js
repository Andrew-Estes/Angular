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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this._src = 'http://en.bcdn.biz/Images/2014/12/24/055c9ed0-af71-4971-a8b9-31a3687e6c2e.jpg';
        this._alt = 'funny dogs';
        this._needsBorder = true;
        this.isSuccess = true;
        this.isHidden = false;
        this.isFourColumns = true;
    }
    Object.defineProperty(AppComponent.prototype, "src", {
        get: function () { return this._src; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "alt", {
        get: function () { return this._alt; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "needsBorder", {
        get: function () { return this._needsBorder; },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root, .app-root, [app-root]',
            templateUrl: "app.component.2.html",
            styleUrls: ['app.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map