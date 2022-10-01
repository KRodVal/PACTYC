import { Component, OnInit } from '@angular/core';
import { InstrumentsService } from '../services/instruments.service';

@Component({
  selector: 'app-instrument-list',
  templateUrl: './instrument-list.page.html',
  styleUrls: ['./instrument-list.page.scss'],
})
export class InstrumentListPage implements OnInit {

  instruments: any = [];

  constructor(private instrumentService: InstrumentsService) { }

  ngOnInit() {
    this.getAllInstruments();
  }

  getAllInstruments() {
    this.instrumentService.getAllInstruments().subscribe(response => { this.instruments = response });
  }
}
