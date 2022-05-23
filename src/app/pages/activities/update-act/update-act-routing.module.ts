import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateActPage } from './update-act.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateActPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateActPageRoutingModule {}
