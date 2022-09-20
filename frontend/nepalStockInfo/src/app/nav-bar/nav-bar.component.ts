import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public isLogged  : boolean = false;

  constructor(private route: Router) {
    this.route.events.subscribe(params => {
      this.ngOnInit();
  });
   }

  ngOnInit(): void {

    let user = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user') || '{}'));


    if(Object.entries(user.value).length !==0 ){
      this.isLogged = true;
    }

  }

  logOut() {
    localStorage.removeItem('user');
    this.isLogged = false;
  }


}
