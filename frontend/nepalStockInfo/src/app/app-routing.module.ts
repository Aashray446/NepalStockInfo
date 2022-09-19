import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPagesComponent } from './category-pages/category-pages.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StockDisplayComponent } from './stock-display/stock-display.component';

const routes: Routes = [

  { path:'' , component: HomepageComponent },
  { path:'stock-Information/:name' , component: StockDisplayComponent },
  { path:'category/:category' , component: CategoryPagesComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
