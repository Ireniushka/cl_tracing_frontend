import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionsTestPage } from './options-test.page';

const routes: Routes = [
  {
    path: '',
    component: OptionsTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionsTestPageRoutingModule {}
