import { Component } from '@angular/core';
import {Dog} from './model/dog';
import {MockDogs} from './model/dog-data';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl : `dog-panel.component.1.html`,
    styleUrls: ['dog-panel.component.css']
})
export class DogPanel {
    private _dog: Dog;
    mockDogs : Dog[] = MockDogs.SIX;
    buyTemplate: string = `<div class="ad"><h1>Buy now!</h1>
    <p>Vet Pro is the only way to go!</p></div>`;
    delayedMessage: Promise<string> = new Promise((resolve, reject) => {setTimeout(() => resolve(this.buyTemplate), 4000);
    });

    constructor() {
        this._dog = new Dog(1, 'Rover', 5, "mongrel", true);
        console.info('Created', this);
    }
    get dog() { return this._dog; }
 }