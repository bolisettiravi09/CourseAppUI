import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-page',
 template: '<p>Employee Page</p><router-outlet></router-outlet>',
  styles: [],
 
})
export class EmployeePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
