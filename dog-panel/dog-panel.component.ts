import { Component } from '@angular/core';
import {Dog} from './model/dog';
import {MockDogs} from './model/dog-data';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl : `dog-panel.component.3.html`,
    styleUrls: ['dog-panel.component.css']
})
export class DogPanel {
  //  private _dog: Dog;
    private mockDogs : Dog[] = MockDogs.SIX;
    private panelStatus: string;

    onMessageFromDetail(event : any[]) {
        let message : string = event[0];
        let dogActedOn :Dog = event[1];
        let paidAmount : number = event[2];
        console.info('Received message', event[0], event[1]);
        this.panelStatus = message + ' of $' + paidAmount + ' for ' + dogActedOn.name;
    }
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