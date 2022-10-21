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
    //call service to login user
    this.userService.getLoggedIn(form.value.email, form.value.password);
  }

}
