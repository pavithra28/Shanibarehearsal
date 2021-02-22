package com.pack.SpringBootAngulaeExcercise.dao;

import org.springframework.data.repository.CrudRepository;

import com.pack.SpringBootAngulaeExcercise.model.Employee;

public interface EmployeeRepository extends CrudRepository<Employee,Integer>{


}
