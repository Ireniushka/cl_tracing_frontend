import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePupilPage } from './update-pupil.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePupilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePupilPageRoutingModule {}
