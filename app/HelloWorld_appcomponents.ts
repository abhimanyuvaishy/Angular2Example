import {Component,View} from "angular2/core";

@Component({
    selector:"hello-world"
})

@View({
    templateUrl:"app/templates/HelloWorld_apptemplates.html"
})

export class helloWorldComponent{
    Message:string='Welcome Abhimanyu Kumar';
}
