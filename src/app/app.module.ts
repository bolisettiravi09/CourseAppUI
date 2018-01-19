import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';
import { CourseModule } from './course/course.module';
import { AuthorModule } from './author/author.module';
import { AuthorListComponent } from './author/author-list.component';
import { HomeComponent } from './home.component';
import { APP_ROUTING } from './app.routing';
import { NavbarComponent } from './navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
   
    
    

    
  ],
  imports: [
    BrowserModule,
    EmployeeModule,
    CourseModule,
    AuthorModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
