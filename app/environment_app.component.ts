import {Component, View} from "angular2/core";
import {CORE_DIRECTIVES} from 'angular2/common';
import{CalculateAge} from '../app/Services/calculateAge_appservice';

//import {BrowserModule} from "angular2/platform/browser";

@Component({
   selector: 'my-app',
    templateUrl: 'app/templates/form_apptemplate.html',
    providers:[CalculateAge]
    
})




export class AppComponent {


  constructor(private _ageService:CalculateAge){

  }
  Name:string='My First Angular 2 App';
  userinfo:any={};
  userinfoList:Array<any>=[];
  NewAge:number;

  addData(){
   
    this.userinfoList.push(this.userinfo);
    this.calculateAg();
    this.userinfo={};
  }

  calculateAg(): void {
    this._ageService.age=this.userinfo.age;
    this.NewAge = this._ageService.GetTenTimesAge();
  }
  removeLine(userdata){
     let index: number = this.userinfoList.indexOf(userdata);
    if (index !== -1) {
        this.userinfoList.splice(index, 1);
 // this.userinfoList.splice(userdata);
 
  }
  
  
}
}