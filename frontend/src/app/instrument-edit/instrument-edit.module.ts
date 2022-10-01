import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstrumentEditPageRoutingModule } from './instrument-edit-routing.module';

import { InstrumentEditPage } from './instrument-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstrumentEditPageRoutingModule
  ],
  declarations: [InstrumentEditPage]
})
export class InstrumentEditPageModule {}
