import {Component, View} from "angular2/core";
import {CORE_DIRECTIVES} from 'angular2/common';
//import {BrowserModule} from "angular2/platform/browser";

@Component({
   selector: 'my-app',
    templateUrl: 'app/templates/form_apptemplate.html'
})




export class AppComponent {
  Name:string='My First Angular 2 App';
  //firstName:string='';
  userinfo:any={};
  userinfoList:Array<any>=[];

  addData(){
   
    this.userinfoList.push(this.userinfo);
    this.userinfo={};
  }
  
  
}