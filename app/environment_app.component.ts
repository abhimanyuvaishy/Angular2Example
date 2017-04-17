import {Component, View} from "angular2/core";

@Component({
   selector: 'my-app'
})

@View({
  template: '<h2>{{Name}}</h2>'
})

export class AppComponent {
  Name:string='My First Angular 2 App';
  
}