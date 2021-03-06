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
var dog_data_1 = require("./model/dog-data");
//dog-name ------------------------------------  optional child component
var DogName = /** @class */ (function () {
    function DogName() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DogName.prototype, "dogNameIn", void 0);
    DogName = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dog-name',
            styles: [
                '.dog-nameContainer {margin:.4rem; display: inline-block; text-align: right; }',
                '.dog-breed {font-size: .7rem; }'
            ],
            template: "\n    <div class='dog-nameContainer'>\n        <div class='dog-name'>{{dogNameIn.name | uppercase }}</div>\n        <div class='dog-breed'>{{dogNameIn.breed}}</div>\n    </div>\n"
        })
    ], DogName);
    return DogName;
}());
exports.DogName = DogName;
//dog-list   -----------------------------------  optional child component
var DogList = /** @class */ (function () {
    function DogList() {
    }
    __decorate([
        core_1.Input('dogsToChildAgain'),
        __metadata("design:type", Array)
    ], DogList.prototype, "dogsFromParent", void 0);
    DogList = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dog-list',
            templateUrl: 'doglist.component.html'
        })
    ], DogList);
    return DogList;
}());
exports.DogList = DogList;
//-first--------------------optional child component
var InputChild = /** @class */ (function () {
    function InputChild() {
    }
    __decorate([
        core_1.Input('dogsToChild'),
        __metadata("design:type", Array)
    ], InputChild.prototype, "dogsFromParent", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputChild.prototype, "childVariableIn", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputChild.prototype, "childTextin", void 0);
    InputChild = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'input-child',
            templateUrl: 'inputchild.component.html'
        })
    ], InputChild);
    return InputChild;
}());
exports.InputChild = InputChild;
//--------------------------------------------root        
var Inputs = /** @class */ (function () {
    function Inputs() {
        this.aNumber = 123;
        this.dogs = dog_data_1.MockDogs.SIX;
    }
    Inputs = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            templateUrl: "inputs.component.html",
            styleUrls: ['inputs.component.css']
        })
    ], Inputs);
    return Inputs;
}());
exports.Inputs = Inputs;
//# sourceMappingURL=inputs.component.js.map