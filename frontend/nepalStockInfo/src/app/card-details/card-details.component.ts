import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServicesService } from '../services/user-services.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  public email = this.userService.getLoggedInEmail();

  @Input() name:string = "Name";
  @Input() url:string = "../../assets/images/upperhewakhola.jpg";
  @Input() category = "Category";

  constructor( private _activatedRoute: ActivatedRoute, private router : Router, private userService: UserServicesService) {

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

  addToFav(name:string) {
    // this.userService.addToFavourate(this.email,name);
  }

}
