import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataTutorPage } from './data-tutor.page';

const routes: Routes = [
  {
    path: '',
    component: DataTutorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataTutorPageRoutingModule {}
