import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BandListComponent } from './band-list/band-list.component';
import { BandDetailComponent } from './band-list/band-detail/band-detail.component';
import { VenueListComponent } from './venue-list/venue-list.component';
import { VenueDetailComponent } from './venue-list/venue-detail/venue-detail.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { BandEditComponent } from './band-list/band-edit/band-edit.component';
import { VenueEditComponent } from './venue-list/venue-edit/venue-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BandListComponent,
    BandDetailComponent,
    VenueListComponent,
    VenueDetailComponent,
    HomePageComponent,
    BandEditComponent,
    VenueEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
