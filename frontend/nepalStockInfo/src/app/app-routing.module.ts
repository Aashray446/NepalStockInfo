import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { StockDisplayComponent } from './stock-display/stock-display.component';

const routes: Routes = [

  { path:'' , component: HomepageComponent },
  { path:'stock-Information/:name' , component: StockDisplayComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
