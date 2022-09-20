import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  private isLoggedIn = new BehaviorSubject<boolean>(localStorage.getItem('loggedIn') ? true : false);
  private loggedUser = new BehaviorSubject<User[]>(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '{}') : []);

  public userDetails:User[] = [
    {
      id: 1,
      name: "Rajesh",
      email: "rajesh@gmail.com",
      password: "123456",
      confirmPassword: "123456",
      favourateStocks: []
    },

    {
      id: 2,
      name: "Sujan",
      email: "sujan@gmail.com",
      password: "123456",
      confirmPassword: "123456",
      favourateStocks: []
    },
  ]

  constructor() { }


  public getUserInfo() {
    return "this is user info";
  }

  getLoggedIn(email:string , password:string){
    let user = this.userDetails.find(user => user.email === email && user.password === password);
    //store user into local storage
    console.log(user);
    if(user){
    localStorage.setItem('user', JSON.stringify(user));
    return true;
    }
    return false;
  }

  getRegister(name:string, email:string, password:string, confirmPassword:string){
    let user = this.userDetails.find(user => user.email === email);
    if(user){
      return false;
    }else{
      let newUser = {
        id: this.userDetails.length + 1,
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        favourateStocks: []
      }
      this.userDetails.push(newUser);
      return true;
    }

  }

  addToFavourate(email:string, stock:string){
    let user = this.userDetails.find(user => user.email === email);
    if(user){
      user.favourateStocks.push(stock);
      window.alert('Added')
      console.log(user.favourateStocks);
      return true;
    }
    window.alert("Please login first");
    return false;
  }

  getAllFavourate(email:string){
    let user = this.userDetails.find(user => user.email === email);
    console.log(user);
    console.log(email);
    return user?.favourateStocks;
  }

  getLoggedInEmail(){
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.email;
  }




}
