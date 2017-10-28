import { Component, ViewEncapsulation } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'ignored-stuff',
    templateUrl : `ignoring-child.html`,
})
export class IgnoringChild{ }
@Component({
    moduleId: module.id,
    selector: 'unorganized-stuff',
    templateUrl : `organizing-child.html`, 
        styles: ['p{color: cadetblue; font-weight: bold; font-size: 1.3rem}'],
        encapsulation: ViewEncapsulation.None
})
export class OrganizingChild{ }
@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl : `children.component.html`,
    styleUrls: ['children.component.css']
})
export class Children {
   
 }
 