import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];

  constructor(private employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
    
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  
  /*private setPseudoDataTest(){ 
    //test
     this.employees = [{
        "id": 1,
        "firstName": "Igor",
        "lastName": "Bal",
        "emailId": "igor.@gmx.de"
      },
      {
        "id": 2,
        "firstName": "Igor",
        "lastName": "Bal",
        "emailId": "igor.@gmx.de"
      }
    ];
  }*/

}
