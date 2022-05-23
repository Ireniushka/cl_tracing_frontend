import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewActPage } from './new-act.page';

const routes: Routes = [
  {
    path: '',
    component: NewActPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewActPageRoutingModule {}
