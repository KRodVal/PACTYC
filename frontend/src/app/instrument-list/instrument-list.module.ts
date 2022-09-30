import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstrumentListPageRoutingModule } from './instrument-list-routing.module';

import { InstrumentListPage } from './instrument-list.page';
import { CardComponent } from '../components/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstrumentListPageRoutingModule,
  ],
  declarations: [InstrumentListPage,CardComponent]
})
export class InstrumentListPageModule {}
