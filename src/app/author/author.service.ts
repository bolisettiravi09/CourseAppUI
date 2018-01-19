import { Author } from "./author";
import { Gender } from "./gender";

export class AuthorService {
  private authors:Author[]=[new Author(1,"Ravi","Teja",Gender.M,false),
  new Author(2,"Veera","Bolisetti",Gender.M,false),
  new Author(3,"Pirya","Kumar",Gender.F,false)]
  constructor() { }
  getAuthors(){
    return this.authors;
  }
  addAuthor(authors:Author){
this.authors.push(authors);
  }

}
