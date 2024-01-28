import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuessMynumberPageRoutingModule } from './guess-mynumber-routing.module';

import { GuessMynumberPage } from './guess-mynumber.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuessMynumberPageRoutingModule
  ],
  declarations: [GuessMynumberPage]
})
export class GuessMynumberPageModule {}
