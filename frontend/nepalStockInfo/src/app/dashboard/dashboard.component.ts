import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ShareDetails } from '../interfaces/share-details';
import { SearchDetailsService } from '../services/search-details.service';
import { UserServicesService } from '../services/user-services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public myfavStocks: any;


  // public myfavStocks = this.userService.getAllFavourate(this.loggedEmail);

  constructor(private searchDetails : SearchDetailsService,  private _toastr: ToastrService) { }

  ngOnInit(): void {
  this.searchDetails.getFavourateStock().then((data) => {
    this.myfavStocks = data;
    console.log(this.myfavStocks);
  });
  }

  deleteFavStock(id:any) {
    this.searchDetails.removeFavourateStock(id).then((data) => {
      this._toastr.success("Removed from Favourites");
      this.ngOnInit();
    }).catch((err) => {
      this._toastr.show(err);
    });
  }
}
