import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Employee } from './employee';
import { Gender } from './gender';
import { Address } from './address';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],

})
export class EmployeeFormComponent implements OnInit {
  @ViewChild('employeeForm')
  employeeForm:NgForm;

  constructor(private empsrv: EmployeeService, private router: Router, private activateRoute: ActivatedRoute) { }
  employee: Employee = new Employee(0, '', '', '', 0, Gender.M, new Address('', '', '', ''), 0, true);
  routeParamSubscription: Subscription;

  ngOnInit() {
    this.routeParamSubscription = this.activateRoute.params.subscribe((params) => {
      if (params['id']) {
        this.employee = this.empsrv.getById(parseInt(params['id']));

      }

    });
  }
  hasFormChanged(){
    return this.employeeForm.dirty;
  }

  getKeys() {
    return Object.keys(Gender);
  }
  // routeMetoAddpage(aForm: NgForm) {
  //   console.log(aForm);
  //   if (this.employee.empID > 0) {
  //     aForm.value.empID = this.employee.empID;
  //   }
  //   this.empsrv.save(aForm.value);
  //   this.router.navigate(['employee/list']);

  // }




}
