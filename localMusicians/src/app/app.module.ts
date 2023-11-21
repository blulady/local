import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BandListComponent } from './band-list/band-list.component';
import { BandDetailComponent } from './band-list/band-detail/band-detail.component';
import { VenueListComponent } from './venue-list/venue-list.component';
import { VenueDetailComponent } from './venue-list/venue-detail/venue-detail.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BandListComponent,
    BandDetailComponent,
    VenueListComponent,
    VenueDetailComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
