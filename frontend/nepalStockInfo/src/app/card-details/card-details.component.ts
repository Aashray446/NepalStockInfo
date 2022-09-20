import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor( private router: Router, private userService: UserServicesService) { }
    // route.params.subscribe(url => {
    //   this.goToDetails(this.name);
    // });

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      // see also
    //   this.router.navigateByUrl('/share-Information', { skipLocationChange: true }).then(() => {
    //     this.router.navigate(['/share-Information', this.name]);
    // });
    console.log("val", val);
    });
  }



  goToDetails(shareName:string) {
    // window.location.href = "/share-Information/" + shareName;
    this.router.navigate(['/share-Information', shareName]);
  }

  addToFav(name:string) {
    this.userService.addToFavourate(this.email,name);
  }

}
