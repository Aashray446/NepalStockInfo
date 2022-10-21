import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { UserServicesService } from '../services/user-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public errorMessage: string = 'this wrro';
  public showErrorMessages: string = 'none';
  constructor(private userService: UserServicesService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){

    this.showErrorMessages = 'none';
    this.errorMessage = '';

    if(form.status == 'INVALID') {
      this.showErrorMessages = 'block';
      this.errorMessage = 'Please fill all the fields';
      return;
    }

    if(form.value.password !== form.value.confirmPassword){
      this.showErrorMessages = 'block';
      this.errorMessage = 'Password and Confirm Password does not match';
      return;
    }

    //call service to register user
    let user:User = {
      id : 0,
      name: form.value.name,
      email: form.value.email,
      password: form.value.password,
      confirmPassword: form.value.confirmPassword,
      favourateStocks: []
    }

    if(   this.userService.getRegister(user.name, user.email, user.password, user.confirmPassword)) {
      this.router.navigate(['/']);
      return;
    }
  }

}
