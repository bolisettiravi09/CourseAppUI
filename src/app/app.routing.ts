import { HomeComponent } from "./home.component";
import {RouterModule, ROUTES} from  "@angular/router";
import { EmployeePageComponent } from "./employee/employee-page.component";
// const ROUTES=[
//     {path:'',component:HomeComponent},
//     {path:'firstname',component:AuthorListComponent},
//     {path: 'dashboard',component:DashboradComponent},
//     {path:'**',component:HomeComponent}
// ];

// export const APP_ROUTING = RouterModule.forRoot(ROUTES);
// const ROUTES=[
//     {path:'',component:HomeComponent},
//     {path:'employee', loadChildren:'app/employee/employee.module#EmployeeModule'},
//     {path:'**',component:HomeComponent}
// ];

// export const APP_ROUTINGEMPLOYEE = RouterModule.forRoot(ROUTES);
const ROUTESCOURSE=[
    {path:'',component:HomeComponent},
    {path:'course', loadChildren:'app/course/course.module#CourseModule'},
    {path:'**',component:HomeComponent}
];

export const APP_ROUTINGCOURSE = RouterModule.forRoot(ROUTES);