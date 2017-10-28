import { NgModule }      from '@angular/core';
// import { NgModule, enableProdMode }  from '@angular/core';
// enableProdMode();

import { BrowserModule } from '@angular/platform-browser';

import { ParentChildComponent, ChildComponent }  from './parent-child.component';

@NgModule({
  imports:      [ BrowserModule  ],
  declarations: [ ParentChildComponent, ChildComponent ],
  bootstrap:    [ ParentChildComponent ]
})
export class AppModule { }