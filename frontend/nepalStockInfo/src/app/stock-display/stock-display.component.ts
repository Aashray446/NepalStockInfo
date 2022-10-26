import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareDetails } from '../interfaces/share-details';
import { ShareDetailsService } from '../services/share-details.service';
import { webServerAddress } from '../services/server.config';
import { SearchDetailsService } from '../services/search-details.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-stock-display',
  templateUrl: './stock-display.component.html',
  styleUrls: ['./stock-display.component.css']
})
export class StockDisplayComponent implements OnInit {



  public shareDetails: ShareDetails;
  public webServerAddress = webServerAddress;

  constructor( private stockDetails:ShareDetailsService, private route : ActivatedRoute,  private _activatedRoute: ActivatedRoute, private searchDetails: SearchDetailsService, private _toastr: ToastrService) {
    this._activatedRoute.paramMap.subscribe(params => {
      this.ngOnInit();
  });
    let name = this.route.snapshot.paramMap.get('name') as string;
    this.shareDetails = this.stockDetails.getShareDetailsByName(name);
    console.log(this.shareDetails);
   }

  ngOnInit(): void {

    let name = this.route.snapshot.paramMap.get('name') as string;
    this.shareDetails = this.stockDetails.getShareDetailsByName(name);

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
