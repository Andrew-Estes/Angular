import { NgModule }      from '@angular/core';
// import { NgModule, enableProdMode }  from '@angular/core';
// enableProdMode();

import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { Form }  from './form.component';
import { NameAddressForm }  from './name-address.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule  ],
  declarations: [ Form, NameAddressForm ],
  bootstrap:    [ Form ]
})
export class AppModule { }