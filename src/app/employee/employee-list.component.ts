import { Component, OnInit,Input } from '@angular/core';
import { Employee } from './employee';
import { Address } from './address';
import { Gender } from './gender';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent{
  employees:Employee[];

  constructor(private employeeservice:EmployeeService,private router:Router){
    this.employees=this.employeeservice.getEmployees();
  }
  
  handleEdit(id:number){
    
this.router.navigate(['employee/form',id]);

  }
  handleDelete(id:number){
this.employeeservice.delete(id);
  }
    
    
  
    ngOnInit() {
    }
   
    addEmployee(){
      this.router.navigate(['employee/form'])
    }
    

}

