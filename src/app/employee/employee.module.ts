import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmployeeFormComponent } from './employee-form.component';
import { EmployeeService } from './employee.service';
import { EmployeePageComponent } from './employee-page.component';
import { EMPLOYEE_ROUTING } from './employee.routing';
import { EmpGuard } from '../../guards/emp.guard';
import { LeavingGuard } from '../../guards/empleaving.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EMPLOYEE_ROUTING
  ],
  providers: [EmployeeService, EmpGuard, LeavingGuard],
  exports: [],
  declarations: [EmployeeListComponent, EmployeeFormComponent, EmployeePageComponent]
})
export class EmployeeModule { }
