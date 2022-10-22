import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../interfaces/user';
import { apiBaseUrl } from './api.config';
import {HttpClient} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  isLoggedIn = new Subject<boolean>();
  loggedUser = new Subject<User>();

  constructor(private _httpClient: HttpClient, private _toastr : ToastrService, private _route : Router) { }


  public getUserInfo() {
    return "this is user info";
  }


  getLoggedIn(email:string , password:string){

    this._httpClient.post(`${apiBaseUrl}/auth/login`, {email: email, password: password}).subscribe(
      {
        next: (response:any) => {
          localStorage.setItem('token', response.content.tokens.accessToken.token);
          localStorage.setItem('expiresIn' , response.content.tokens.accessToken.expiresIn);
          localStorage.setItem('user', JSON.stringify(response.content.user));
          this._toastr.success('Login Successful');
          this.isLoggedIn.next(true);
          this.loggedUser.next(response.content.user);
          this._route.navigate(['/']);
        },
        error: () => {
          this._toastr.error("Login Failed, Invalid Credentials");
        }});
  };

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
            console.log(response);
            localStorage.setItem('token', response.content.tokens.accessToken.token);
            localStorage.setItem('expiresIn' , response.content.tokens.accessToken.expiresIn);
            localStorage.setItem('user', JSON.stringify(response.content.user));
            this._toastr.success('Registration Successful');
            this.isLoggedIn.next(true);
            this.loggedUser.next(response.content.user);
            this._route.navigate(['/']);
          },
          error: (error) => {
            this._toastr.error("Registration Failed, User Already Exists");
          }
        }
      );
    }

  // addToFavourate(email:string, stock:string){
  //   let user = this.userDetails.find(user => user.email === email);
  //   if(user){
  //     user.favourateStocks.push(stock);
  //     window.alert('Added')
  //     console.log(user.favourateStocks);
  //     return true;
  //   }
  //   window.alert("Please login first");
  //   return false;
  // }

  // getAllFavourate(email:string){
  //   let user = this.userDetails.find(user => user.email === email);
  //   console.log(user);
  //   console.log(email);
  //   return user?.favourateStocks;
  // }

  getLoggedInEmail(){
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.email;
  }



}
