import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user';
import { apiBaseUrl } from './api.config';
import {HttpClient} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  private _isLoggedIn = new BehaviorSubject<boolean>(localStorage.getItem('loggedIn') ? true : false);
  private _loggedUser = new BehaviorSubject<User[]>(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '{}') : []);



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

  constructor(private _httpClient: HttpClient, private _toastr : ToastrService) { }


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

    const firstName = name.split(' ')[0];
    const lastName = name.split(' ')[1];

      let newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      }

      this._httpClient.post(`${apiBaseUrl}/auth/register`, newUser).subscribe(
        {
          next: (response:any) => {

          },
          error: (error) => {
            console.log(error);
          }
        }
      );
      return true;
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
