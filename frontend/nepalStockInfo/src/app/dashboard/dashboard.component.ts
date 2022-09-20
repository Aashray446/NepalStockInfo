import { Component, OnInit } from '@angular/core';
import { UserServicesService } from '../services/user-services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public loggedEmail = this.userService.getLoggedInEmail();

  public myfavStocks = this.userService.getAllFavourate(this.loggedEmail);

  constructor(private userService:UserServicesService) { }

  ngOnInit(): void {

    this.myfavStocks = this.userService.getAllFavourate(this.loggedEmail);
  }




}
