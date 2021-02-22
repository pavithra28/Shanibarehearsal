import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee:Employee=new Employee();
  submitted=false;
    constructor(private employeeservice:EmployeeServiceService) { }
  
    ngOnInit(): void {
    }
    onsubmit(){
      this.save();
    }
    save() {
      this.employeeservice.createEmployee(this.employee)
      .subscribe(
            data =>{
          console.log(data);
          this.submitted=true;
        },
        error =>console.log(error));
        this.employee=new Employee();
      }
      newemployee():void{
        this.submitted=false;
        this.employee=new Employee();
      }
  
  }

