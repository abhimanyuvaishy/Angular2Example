import { Pipe,PipeTransform} from 'angular2/core';
import {IuserInfo} from '../app/contracts/IUserInfo';

@Pipe({name:'sortArray'})

export class sortArraypipe implements PipeTransform{
public filterBy:string;
transform(arrayData:any[]){
    this.filterBy=this.filterBy?this.filterBy.toLocaleLowerCase():null;
return this.filterBy?arrayData.filter((userInfo:IuserInfo)=>userInfo.firstName.toLocaleLowerCase().indexOf(this.filterBy)!==-1):arrayData;
}
}
