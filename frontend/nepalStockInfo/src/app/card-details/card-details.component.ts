import { Component, OnInit, Input } from '@angular/core';
import { ShareDetails } from '../interfaces/share-details';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  @Input() name:String = "Name";
  @Input() url:String = "https://www.nepalstock.com/company";
  constructor(  ) {
  }

  ngOnInit(): void {
    console.log(this.url);
  }

}
