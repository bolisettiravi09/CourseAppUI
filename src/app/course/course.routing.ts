import { CoursePageComponent } from "./course-page.component";
import { CourseListComponent } from "./course-list.component";
import { CourseFormComponent } from "./course-form.component";
import { RouterModule } from "@angular/router";

const ROUTES= [
    {
        path: 'course', component: CoursePageComponent, children:
            [{ path: 'list', component: CourseListComponent },
            { path: 'form', component: CourseFormComponent},
            { path: 'form/:id', component: CourseFormComponent }]
    }
];
export const COURSE_ROUTING = RouterModule.forChild(ROUTES);