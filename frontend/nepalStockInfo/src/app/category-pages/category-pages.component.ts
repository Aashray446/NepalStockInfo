import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-pages',
  templateUrl: './category-pages.component.html',
  styleUrls: ['./category-pages.component.css']
})
export class CategoryPagesComponent implements OnInit {

  public filter = "all";

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.ngOnInit();
  });

   }

  ngOnInit(): void {
    this.filter = this.route.snapshot.paramMap.get('category') as string;
    console.log(this.filter)
  }

}
