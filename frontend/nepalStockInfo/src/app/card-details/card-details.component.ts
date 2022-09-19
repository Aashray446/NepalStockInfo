import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  @Input() name:String = "Name";
  @Input() url:String = "../../assets/images/upperhewakhola.jpg";
  @Input() category = "Category";

  constructor( private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.url);
  }


  goToDetails(shareName:string) {
    this.router.navigate(['/stock-Information', shareName]);
  }

}
