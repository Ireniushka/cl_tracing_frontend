import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionsTutorsPage } from './options-tutors.page';

const routes: Routes = [
  {
    path: '',
    component: OptionsTutorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionsTutorsPageRoutingModule {}
