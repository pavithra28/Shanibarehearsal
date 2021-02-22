package com.pack.SpringBootAngulaeExcercise.controller;
import java.util.ArrayList;
import java.util.List;

 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pack.SpringBootAngulaeExcercise.dao.EmployeeRepository;
import com.pack.SpringBootAngulaeExcercise.model.Employee;

 


 


@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api")
public class EmployeeController {
    @Autowired
    EmployeeRepository repository;
    
    @PostMapping(value = "/employees")
    public ResponseEntity<Employee> postEmployee(@RequestBody Employee employee)  {
        try {
            Employee _employee = repository.save(new Employee(employee.getName(),employee.getSalary(),employee.getDob(),employee.getGender()));
            return new ResponseEntity<>(_employee, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
        }

 

    }
    @GetMapping("/employees")
    public ResponseEntity<List<Employee>>getAllEmployees(){
        List<Employee> employees=new ArrayList<Employee>();
        try {
            repository.findAll().forEach(employees::add);
            if(employees.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);

 

            }
            return new ResponseEntity<>(employees,HttpStatus.OK);
        }catch(Exception e) {
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

 

 

}