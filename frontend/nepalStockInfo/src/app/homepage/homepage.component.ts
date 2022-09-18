import { Component, OnInit } from '@angular/core';
import { ShareDetails } from '../interfaces/share-details';
import { SearchDetailsService } from '../services/search-details.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public hideDrop = true;
  public shareNames:ShareDetails[] = [];

  constructor(private searchDetails:SearchDetailsService) {
   }

  ngOnInit(): void {
  }
  sendData(event:any) {
    console.log(event.target.value);

    if(event.target.value.length > 2){
      this.hideDrop = false;
      this.searchDetails.getShareName(event.target.value).subscribe((data)=>{
        this.shareNames = data;
        console.log(this.shareNames);
      });
    }
  }

}
