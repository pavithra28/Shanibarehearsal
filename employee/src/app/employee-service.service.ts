import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  private baseUrl='http://localhost:8080/api/employees';


  constructor(private http:HttpClient) { }
  createEmployee(employee:any):Observable<any>{
    return this.http.post(this.baseUrl,employee);
  }
  getEmployeesList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}

