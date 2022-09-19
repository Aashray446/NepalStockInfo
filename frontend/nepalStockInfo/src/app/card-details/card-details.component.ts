import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  @Input() name:string = "Name";
  @Input() url:string = "../../assets/images/upperhewakhola.jpg";
  @Input() category = "Category";

  constructor( private router: Router) {
    // route.params.subscribe(url => {
    //   this.goToDetails(this.name);
    // });
  }

  ngOnInit(): void {
    console.log(this.url);
  }



  goToDetails(shareName:string) {
    this.router.navigate(['/stock-Information', shareName]);
  }

}
