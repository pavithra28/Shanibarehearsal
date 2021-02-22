import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:Observable<Employee[]>;

  constructor(private employeeservice:EmployeeServiceService,private route:Router) { }
  ngOnInit(): void {
    this.reloadData();
  }
  editcustomer(employee:Employee):void{
    console.log("ino edit");
    localStorage.setItem("id",employee.id.toString());
    this.route.navigate(["edit"]);
  }
  reloadData(){
    this.employees=this.employeeservice.getEmployeesList();
  }
  
    }

