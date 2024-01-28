import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuessMynumberPage } from './guess-mynumber.page';

const routes: Routes = [
  {
    path: '',
    component: GuessMynumberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuessMynumberPageRoutingModule {}
