import {Level} from './level';
export class Course{
    constructor(public courseID:number,public courseName:string, 
       public level:Level,public price:number,public newCourse:boolean){


    }
}