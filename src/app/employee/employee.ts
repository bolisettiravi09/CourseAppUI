import { Address } from "./address";
import { Gender } from "./gender";
export class Employee{
    constructor(public empID:number,public fName:string, public lName:string, public mName:string,
         public age:number, public gender:Gender,
    public address:Address, public salary:number,public newEmp:boolean){

    }

}
