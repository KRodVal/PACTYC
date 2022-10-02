import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { InstrumentsService } from './../services/instruments.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  instrumentForm : FormGroup;

  constructor(
    private router : Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private instrumentsService: InstrumentsService
  ) { 
    this.instrumentForm = this.formBuilder.group({
      model: [''],
      brand: ['']
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.instrumentForm.valid) {
      return false;
    } else {
      this.instrumentsService.createInstrument(this.instrumentForm.value)
      .subscribe((response) => {
        this.zone.run(() => {
          this.instrumentForm.reset();
          this.router.navigate(['/instrument-list']);
        })
      });
    }
  }
}
