import { Component, OnInit } from '@angular/core';
import { InstrumentsService } from '../services/instruments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instrument-list',
  templateUrl: './instrument-list.page.html',
  styleUrls: ['./instrument-list.page.scss'],
})
export class InstrumentListPage implements OnInit {

  instruments: any = [];

  constructor(private instrumentService: InstrumentsService) { }

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
}
