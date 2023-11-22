import { Component, OnInit } from '@angular/core';
import { Venue } from './venue.model';

@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.css']
})
export class VenueListComponent implements OnInit {
  venues: Venue[] = [
    new Venue('Til Two Club', '4746 El Cajon Blvd','Sandiegotiltwoclub@gmail.com', '4pm - 2am', 'https://media.sandiegoreader.com/img/places/two_t800.png?90232451fbcadccc64a17de7521d859a8f88077d'),
    new Venue('The Tower Bar', '4757 University Ave','thetowerbar@gmail.com', '4pm - 2am', 'https://www.thetowerbar.com/wp-content/uploads/towerlogobw-948x1024.jpg')
  ];

  constructor() {

  }

  ngOnInit() {

  }

}
