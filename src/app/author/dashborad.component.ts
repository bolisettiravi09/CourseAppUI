import { Component, OnInit } from '@angular/core';
import { AuthorService } from './author.service';
import { Author } from './author';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styles: [],
  
 
})
export class DashboradComponent implements OnInit {
  authors:Author[]=this.as.getAuthors(); 
  constructor(private as:AuthorService ) { }

  ngOnInit() {
  }

}
