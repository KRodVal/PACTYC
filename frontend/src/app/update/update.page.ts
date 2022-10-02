import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { InstrumentsService } from '../services/instruments.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})

export class UpdatePage implements OnInit {

  updateInstrumentFg: FormGroup;
  id: any;

  constructor(
    private instrumentService: InstrumentsService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = instrumentService.tempid;
  }

  ngOnInit() {
    this.fetchInstrument(this.id);
    this.updateInstrumentFg = this.formBuilder.group({
      model: [''],
      brand: ['']
    })
  }

  fetchInstrument(id) {
    this.instrumentService.getInstrument(id).subscribe((data) => {
      this.updateInstrumentFg.setValue({
       model: data['model'],
       brand: data['brand']
      });
    });
  }

  onSubmit() {
    if (!this.updateInstrumentFg.valid) {
      return false;
    } else {
      this.instrumentService.updateInstrument(this.id, this.updateInstrumentFg.value)
      .subscribe(() => {
        this.updateInstrumentFg.reset();
        this.router.navigate(['/instrument-list']);
      })
    }
  }

}
