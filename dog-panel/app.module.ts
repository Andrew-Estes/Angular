import { NgModule }      from '@angular/core';
// import { NgModule, enableProdMode }  from '@angular/core';
// enableProdMode();

import { BrowserModule } from '@angular/platform-browser';

import { DogPanel }  from './dog-panel.component';
import {CurlyQuotesPipe} from './curlyquotes.pipe';
import {DogDetail} from './dog-detail.component';

@NgModule({
  imports:      [ BrowserModule  ],
  declarations: [ DogPanel, CurlyQuotesPipe, DogDetail ],
  bootstrap:    [ DogPanel ]
})
export class AppModule { }