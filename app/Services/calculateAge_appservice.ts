import { Injectable } from 'angular2/core';

@Injectable()

export class CalculateAge {
   public age: number;
    constructor() {}
    
     GetTenTimesAge(){
        return this.age*10;
    }
}