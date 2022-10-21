import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StockDisplayComponent } from './stock-display/stock-display.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { FooterComponent } from './footer/footer.component';
import { CardsDetailContainerComponent } from './cards-detail-container/cards-detail-container.component';
import { CategoryPagesComponent } from './category-pages/category-pages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavBarComponent,
    StockDisplayComponent,
    StockListComponent,
    CardDetailsComponent,
    FooterComponent,
    CardsDetailContainerComponent,
    CategoryPagesComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ContactComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
