import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchDetailsService } from '../services/search-details.service';
import { webServerAddress } from '../services/server.config';
import { ToastrService } from 'ngx-toastr';
import { UserServicesService } from '../services/user-services.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  public isLoggedIn:boolean;
  public webServerAddress = webServerAddress;
  @Input() name:string = "Name";
  @Input() url:string = "../../assets/images/upperhewakhola.jpg";
  @Input() category = "Category";
  @Input() id = 1;
  @Input() favId = 0;

  constructor( private _activatedRoute: ActivatedRoute, private _toastr : ToastrService, private router : Router, private searchDetails : SearchDetailsService, private UserService : UserServicesService) {
    this.isLoggedIn = false;
    this._activatedRoute.paramMap.subscribe(params => {
      this.ngOnInit();
  });
  }
    // route.params.subscribe(url => {
    //   this.goToDetails(this.name);
    // });

  ngOnInit(): void {

  }



  goToDetails(shareName:string) {
    // window.location.href = "/share-Information/" + shareName;
    this.router.navigate(['/share-Information', shareName]);
  }



  addToFav(id:any) {
   this.searchDetails.addFavourateStock(id).then((data) => {
      this._toastr.success("Added to Favourites");
    })
    .catch((err) => {
      if(err == null) {
        this._toastr.error("Please Login First");
        return
      }
      this._toastr.show(err);
    });
  }


}
