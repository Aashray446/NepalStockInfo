import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
