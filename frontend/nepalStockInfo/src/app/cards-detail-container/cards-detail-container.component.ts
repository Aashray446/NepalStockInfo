import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareDetails } from '../interfaces/share-details';
import { SearchDetailsService } from '../services/search-details.service';

@Component({
  selector: 'app-cards-detail-container',
  templateUrl: './cards-detail-container.component.html',
  styleUrls: ['./cards-detail-container.component.css']
})
export class CardsDetailContainerComponent implements OnInit {

  @Input() filterOption:string = "hydropower";

  public shareDetails: ShareDetails[] = [];

  constructor(private searchDetails : SearchDetailsService,         private _activatedRoute: ActivatedRoute
    ) {

    this._activatedRoute.paramMap.subscribe(params => {
      this.ngOnInit();
  });


   }

  ngOnInit(): void {


    if (this.filterOption == "all") {
      this.shareDetails = this.searchDetails.shareDetails;
    }
    else {

      this.shareDetails = this.searchDetails.getShareDetailsByCategory(this.filterOption);

    }

  }



}
