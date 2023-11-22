import { Component, OnInit } from '@angular/core';
import { Band } from './band.model';
import { BandService } from './band.service';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.css'],
  providers: [BandService]
})
export class BandListComponent implements OnInit {
  bands: Band[];
  band: Band;

  constructor(private bandService: BandService) {}

  ngOnInit() {
    this.bands = this.bandService.getBands();
    this.bandService.bandsChanged.subscribe(
      (bands: Band[]) => {
        this.bands = bands;
      }
    )

  }

}
