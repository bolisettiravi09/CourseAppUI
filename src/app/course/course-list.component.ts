import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { Level } from './level';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],

})
export class CourseListComponent implements OnInit {
  courses: Array<Course> = [new Course(1, "Java", Level.Expert, 100, false),
  new Course(2, "Oracle", Level.Expert, 150, false),
  new Course(3, "Hadoop", Level.Intermediate, 200, false)];

  course: Course = new Course(-1, "", Level.Beginer, 0, true);

  constructor() { }

  ngOnInit() {
  }
  getcourseID() {
    let courseid = 0;
    for (let cse of this.courses) {
      if (cse.courseID > courseid) {
        courseid = cse.courseID;
      }

    }
    return courseid + 1;
  }
  getKeys() {
    return Object.keys(Level);
  }
  addCourse() {
    console.log(this.courses),
      this.course.courseID = this.getcourseID();
    this.courses.push(this.course)
    this.course = new Course(-1, "", Level.Intermediate, 0, true)

  }


}
