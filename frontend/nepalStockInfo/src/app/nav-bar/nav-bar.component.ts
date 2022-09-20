import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public isLogged  : boolean = false;

  constructor() { }

  ngOnInit(): void {

    let user = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user') || '{}'));

    if(Object.entries(user).length !== 0 && user.constructor !== Object ){
      this.isLogged = true;
    }

  }

  logOut() {
    localStorage.removeItem('user');
    this.isLogged = false;
  }


}
