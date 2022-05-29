import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TracingsPage } from './tracings.page';

const routes: Routes = [
  {
    path: '',
    component: TracingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TracingsPageRoutingModule {}
