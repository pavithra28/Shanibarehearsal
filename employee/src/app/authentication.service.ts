import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  uname:string;
  
  constructor() { }
 
  authenticate(username,password){
 
    //database logic
 
    if(username === "admin" && password === "password")
    {
      sessionStorage.setItem('username', username)
      return true;
    }else{
      return false;
    }
 
  }
 
  isUserLoggedIn(){
    let user=sessionStorage.getItem('username')
    this.uname=user;
    return !(user === null)
  }
 
  logout(){
    sessionStorage.removeItem('username')
  }
}