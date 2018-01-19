import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorListComponent } from './author-list.component';
import { DashboradComponent } from './dashborad.component';
import { AuthorService } from './author.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[AuthorListComponent,DashboradComponent],
  declarations: [AuthorListComponent, DashboradComponent],
  providers:[AuthorService]
})
export class AuthorModule { }
