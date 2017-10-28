"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dog_data_1 = require("./model/dog-data");
var DogPanel = /** @class */ (function () {
    function DogPanel() {
        //  private _dog: Dog;
        this.mockDogs = dog_data_1.MockDogs.SIX;
        //  buyTemplate: string = `<div class="ad"><h1>Buy now!</h1>
        //  <p>Vet Pro is the only way to go!</p></div>`;
        //  delayedMessage: Promise<string> = new Promise((resolve, reject) => {setTimeout(() => resolve(this.buyTemplate), 4000);
        //  });
        //
        //  constructor() {
        //      this._dog = new Dog(1, 'Rover', 5, "mongrel", true);
        //      console.info('Created', this);
        //  }
        //  get dog() { return this._dog; }
        //  
        //  public payBill(event: MouseEvent) {
        //      console.info('payBill() recieved event', event );
        //      let dogIndex: number =
        //      event.target.parentElement.querySelector('#dogIndex').innerText;
        //      console.info('scraped Dog index = ', dogIndex);
        //      this.dog.balance = 0;
        //      console.info(this.dog);
        //  }
    }
    DogPanel.prototype.onMessageFromDetail = function (event) {
        var message = event[0];
        var dogActedOn = event[1];
        var paidAmount = event[2];
        console.info('Received message', event[0], event[1]);
        this.panelStatus = message + ' of $' + paidAmount + ' for ' + dogActedOn.name;
    };
    DogPanel = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            templateUrl: "dog-panel.component.3.html",
            styleUrls: ['dog-panel.component.css']
        })
    ], DogPanel);
    return DogPanel;
}());
exports.DogPanel = DogPanel;
//# sourceMappingURL=dog-panel.component.js.map