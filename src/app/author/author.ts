import { Gender } from "./gender";

export class Author{
    constructor(public authorID:number,public fName:string,public lName:string,public gender:Gender,
        public newAuthor:boolean){

    }
}