import { NgModule }      from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { Children, OrganizingChild, IgnoringChild }  from './children.component';

@NgModule({
  imports:      [ BrowserModule  ],
  declarations: [ Children, OrganizingChild, IgnoringChild ],
  bootstrap:    [ Children ]
})
export class AppModule { }