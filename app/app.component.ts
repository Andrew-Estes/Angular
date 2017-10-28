import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'app-root, .app-root, [app-root]',
    templateUrl: `app.component.2.html`,
    styleUrls: ['app.component.css']
})
export class AppComponent {
  private _src: string;
  private _alt: string;
  private _needsBorder: boolean;
  private isSuccess: boolean;
  private isHidden: boolean;
  private isFourColumns: boolean;
 
  constructor() {

     this._src = 'http://en.bcdn.biz/Images/2014/12/24/055c9ed0-af71-4971-a8b9-31a3687e6c2e.jpg';
     this._alt = 'funny dogs';
     this._needsBorder = true;
     this.isSuccess = true;
     this.isHidden = false;
     this.isFourColumns = true;
  }
  get src(): string { return this._src;}
  get alt(): string { return this._alt;}
  get needsBorder(): boolean { return this._needsBorder} 
 }
