import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private searchDetails : SearchDetailsService) {

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
