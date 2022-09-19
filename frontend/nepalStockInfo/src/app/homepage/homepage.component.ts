import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDetails } from '../interfaces/share-details';
import { SearchDetailsService } from '../services/search-details.service';
import { ShareDetailsService } from '../services/share-details.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public hideDrop = true;
  public shareNames:ShareDetails[] = [];

  constructor(private searchDetails:SearchDetailsService, private shareDetailService:ShareDetailsService, private router: Router) {
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
    }else {
      this.hideDrop = true;
    }
  }

  goToDetails(shareName:ShareDetails) {
    this.shareDetailService.setShareDetails(shareName);
    this.router.navigate(['/stock-Information', shareName.company]);
  }

}
