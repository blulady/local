import { Component, OnInit, Input } from '@angular/core';
import { Band } from '../band.model';
import { BandService } from '../band.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.css']
})
export class BandDetailComponent implements OnInit {
  band: Band;
  id: number;
  constructor(private bandService: BandService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.band = this.bandService.getBand(this.id);
      }
    );
  }

}
