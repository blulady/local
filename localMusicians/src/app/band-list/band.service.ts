import { EventEmitter, Injectable } from '@angular/core';
import { Band } from './band.model';

@Injectable({
  providedIn: 'root'
})
export class BandService {

  bandsChanged = new EventEmitter<Band[]>();
  bandSelected = new EventEmitter<Band>();

  private bands: Band[] = [
    new Band("Lady Dottie & The Diamonds", "a sloppy MC5 backing up a street-version Etta James.", "https://lastfm.freetls.fastly.net/i/u/770x0/dd1bf2dd78c5476ea5860152a499425c.jpg#dd1bf2dd78c5476ea5860152a499425c",
     ["Lady Dottie", "Isaiah Mitchel", "Dan Guevara", "Joe Guevara", "Stephen Ray",
     "Brian 'Nucci' Cantrell", "Nathan Beale"]),
     new Band("Lady Dottie & The Diamonds2", "a sloppy MC5 backing up a street-version Etta James.", "https://lastfm.freetls.fastly.net/i/u/770x0/dd1bf2dd78c5476ea5860152a499425c.jpg#dd1bf2dd78c5476ea5860152a499425c",
     ["Lady Dottie", "Isaiah Mitchel", "Dan Guevara", "Joe Guevara", "Stephen Ray",
     "Brian 'Nucci' Cantrell", "Nathan Beale"])
  ];

  getBands() {
    return this.bands.slice();
  }

  addBand(band: Band) {
    this.bands.push(band);
    this.bandsChanged.emit(this.bands.slice());
  }

  constructor() { }
}
