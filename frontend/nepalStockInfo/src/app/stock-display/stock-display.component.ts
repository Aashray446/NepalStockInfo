import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareDetails } from '../interfaces/share-details';
import { ShareDetailsService } from '../services/share-details.service';

@Component({
  selector: 'app-stock-display',
  templateUrl: './stock-display.component.html',
  styleUrls: ['./stock-display.component.css']
})
export class StockDisplayComponent implements OnInit {


  public shareDetails: ShareDetails;


  constructor( private stockDetails:ShareDetailsService, private route : ActivatedRoute,  private _activatedRoute: ActivatedRoute) {
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



}
