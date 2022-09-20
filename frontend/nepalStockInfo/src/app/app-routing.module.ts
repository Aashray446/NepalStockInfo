import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CategoryPagesComponent } from './category-pages/category-pages.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StockDisplayComponent } from './stock-display/stock-display.component';

const routes: Routes = [

  { path:'' , component: HomepageComponent },
  { path:'stock-Information/:name' , component: StockDisplayComponent },
  { path:'category/:category' , component: CategoryPagesComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '' }



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
