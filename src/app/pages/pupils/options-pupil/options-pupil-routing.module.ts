import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionsPupilPage } from './options-pupil.page';

const routes: Routes = [
  {
    path: '',
    component: OptionsPupilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionsPupilPageRoutingModule {}
