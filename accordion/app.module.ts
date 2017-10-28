import { NgModule }      from '@angular/core';
// import { NgModule, enableProdMode }  from '@angular/core';
// enableProdMode();

import { BrowserModule } from '@angular/platform-browser';

import { Accordion }  from './accordion.component';

@NgModule({
  imports:      [ BrowserModule  ],
  declarations: [ Accordion ],
  bootstrap:    [ Accordion ]
})
export class AppModule { }