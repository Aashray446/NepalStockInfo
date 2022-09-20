import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServicesService } from '../services/user-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public showErrorMessages: string = 'none';
  public errorMessage: String = '';

  constructor(private userService: UserServicesService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

    this.showErrorMessages = 'none';
    this.errorMessage = '';

    if(form.status == 'INVALID') {
      this.showErrorMessages = 'block';
      this.errorMessage = 'Please fill all the fields';
      return;
    }

    //call service to login user
    if(!this.userService.getLoggedIn(form.value.email, form.value.password)) {
      //redirect to home page
      this.errorMessage = 'Invalid email or password';
      this.showErrorMessages = 'block';
      return;
    }

    this.router.navigate(['/dashboard']);

  }

}
