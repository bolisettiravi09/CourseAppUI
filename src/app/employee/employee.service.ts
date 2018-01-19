import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Gender } from './gender';
import { Address } from './address';



export class EmployeeService {
  
  constructor() { }
  private employees:Employee[]=[new Employee(1,'John','M','Smith',25,Gender.M,new Address('Temple','Texas','WestAdams','76504'),5000,false),
  new Employee(2,'Max','Joe','d',25,Gender.M,new Address('Temple','Texas','WestAdams','76504'),5000,false),
  new Employee(3,'Roy','Bu','Pad',25,Gender.M,new Address('Temple','Texas','WestAdams','76504'),5000,false)];
  getMaxId(){
    let maxId = -1;
    for(let emp of this.employees){
      if(emp.empID > maxId){
        maxId = emp.empID;
      }
    }
    return maxId + 1;
  }
  getById(id:number){
    
    return this.employees.find(Employee => Employee.empID==id);
  }

  getEmployees(){
    return this.employees;
  }
  delete(id:number){
    let index = this.employees.findIndex(e => e.empID === id);
    this.employees.splice(index,1)
  }

  save(emp:Employee){
    if(emp.empID === undefined){
      emp.empID=this.getMaxId();
      return this.employees.push(emp);
    }
    else{
      let index = this.employees.findIndex(e => e.empID === emp.empID);
      this.employees[index] = emp;
    }
   
  }



  

}
