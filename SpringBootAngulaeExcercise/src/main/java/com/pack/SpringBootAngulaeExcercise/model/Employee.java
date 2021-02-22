package com.pack.SpringBootAngulaeExcercise.model;




import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

 

 

@Entity
@Table(name="employee")
public class Employee {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
    private String name;
    private Double salary;
    private Date dob;
    @Column(name="gender")
    @Enumerated(EnumType.STRING)
    private Gender gender;
    public Employee(long id, String name, Double salary, Date dob, Gender gender) {
        super();
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.dob = dob;
        this.gender = gender;
    }
    
    
    public Employee(String name, Double salary, Date dob, Gender gender) {
        super();
        this.name = name;
        this.salary = salary;
        this.dob = dob;
        this.gender = gender;
    }

 


    public Employee() {
        super();
    }
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Double getSalary() {
        return salary;
    }
    public void setSalary(Double salary) {
        this.salary = salary;
    }
    public Date getDob() {
        return dob;
    }
    public void setDob(Date dob) {
        this.dob = dob;
    }
    public Gender getGender() {
        return gender;
    }
    public void setGender(Gender gender) {
        this.gender = gender;
    }
    
    
    

 

}