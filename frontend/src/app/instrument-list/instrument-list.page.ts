import { Component, OnInit } from '@angular/core';
import { InstrumentsService } from '../services/instruments.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdatePage } from '../update/update.page';

@Component({
  selector: 'app-instrument-list',
  templateUrl: './instrument-list.page.html',
  styleUrls: ['./instrument-list.page.scss'],
})
export class InstrumentListPage implements OnInit {

  instruments: any = [];

  constructor(
    private instrumentService: InstrumentsService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    
  }

  ionViewDidEnter() {
    this.instrumentService.getAllInstruments().subscribe(response => { this.instruments = response });
  }

  removeInstrument(instrument) {
    if (window.confirm('Are you sure?')) {
      this.instrumentService.deleteInstrument(instrument.id).subscribe(() => {
        this.ionViewDidEnter();
      })
    }
  }

  passID(instrument) {
    this.instrumentService.tempid = instrument.id;
  }
}
