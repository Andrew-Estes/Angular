import { NgModule }      from '@angular/core';
// import { NgModule, enableProdMode }  from '@angular/core';
// enableProdMode();

import { BrowserModule } from '@angular/platform-browser';

import { DogPanel }  from './dog-panel.component';
import {CurlyQuotesPipe} from './curlyquotes.pipe';

@NgModule({
  imports:      [ BrowserModule  ],
  declarations: [ DogPanel, CurlyQuotesPipe ],
  bootstrap:    [ DogPanel ]
})
export class AppModule { }