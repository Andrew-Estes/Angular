import { NgModule }      from '@angular/core';
// import { NgModule, enableProdMode }  from '@angular/core';
// enableProdMode();

import { BrowserModule } from '@angular/platform-browser';

import { FormComponent }  from './basic.component';

@NgModule({
  imports:      [ BrowserModule  ],
  declarations: [ FormComponent ],
  bootstrap:    [ FormComponent ]
})
export class AppModule { }