import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateTutorPage } from './update-tutor.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateTutorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateTutorPageRoutingModule {}
