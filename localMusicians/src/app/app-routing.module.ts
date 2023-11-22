import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { BandListComponent } from "./band-list/band-list.component";
import { BandDetailComponent } from "./band-list/band-detail/band-detail.component";
import { VenueListComponent } from "./venue-list/venue-list.component";
import { VenueDetailComponent } from "./venue-list/venue-detail/venue-detail.component";
import { BandEditComponent } from "./band-list/band-edit/band-edit.component";
import { VenueEditComponent } from "./venue-list/venue-edit/venue-edit.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: "full"},
  {path: 'home', component: HomePageComponent},
  {path: 'band-list', component: BandListComponent, children: [
    {path: ':id', component: BandDetailComponent},
    {path: ':id/edit', component: BandEditComponent}
  ]},
  {path: 'venue-list', component: VenueListComponent, children: [
    {path: ':id', component: VenueDetailComponent},
    {path: ':id/edit', component: VenueEditComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule{

}
