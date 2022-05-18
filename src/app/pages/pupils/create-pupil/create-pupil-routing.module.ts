import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePupilPage } from './create-pupil.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePupilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePupilPageRoutingModule {}
