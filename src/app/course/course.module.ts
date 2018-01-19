import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { CoursePageComponent } from './course-page.component';
import { CourseFormComponent } from './course-form.component';
import { COURSE_ROUTING } from './course.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    COURSE_ROUTING
  ],
  declarations: [CourseListComponent,CourseFormComponent,CoursePageComponent],
  exports:[CourseListComponent]
})
export class CourseModule { }
