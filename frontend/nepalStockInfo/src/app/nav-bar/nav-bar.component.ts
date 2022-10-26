import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServicesService } from '../services/user-services.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public isLogged  : boolean = false;

  constructor(private route: Router, private _userService : UserServicesService) { }

  ngOnInit(): void {

    if(localStorage.getItem('token')) {
      this.isLogged = true;
    }

    this._userService.isLoggedIn.subscribe( (value) => {
      this.isLogged = value;
    } )
   }

  logOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this._userService.isLoggedIn.next(false);
  }


}
