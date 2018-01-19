import { Component, OnInit } from '@angular/core';
import { Author } from './author';
import { Gender } from './gender';
import { AuthorService } from './author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styles: [],
  
})

export class AuthorListComponent implements OnInit {
  authors:Author[]=this.authorService.getAuthors(); 

  constructor(private authorService:AuthorService) { }

  ngOnInit() {
  }
  addnewAuthor(){
    let author:Author=new Author(4,"Gopala","Krishna",Gender.M,true)
    this.authorService.addAuthor(author)
  }

}
