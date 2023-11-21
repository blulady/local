import { Component, OnInit, Input } from '@angular/core';
import { Band } from '../band.model';
import { BandService } from '../band.service';

@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.css']
})
export class BandDetailComponent implements OnInit {
  @Input() band: Band;

  constructor(private bandService: BandService) {}

  ngOnInit(): void {

  }

  onSelected() {
    this.bandService.bandSelected.emit(this.band);
  }

}
