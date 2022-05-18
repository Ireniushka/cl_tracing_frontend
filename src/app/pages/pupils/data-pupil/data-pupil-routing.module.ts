import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataPupilPage } from './data-pupil.page';

const routes: Routes = [
  {
    path: '',
    component: DataPupilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataPupilPageRoutingModule {}
