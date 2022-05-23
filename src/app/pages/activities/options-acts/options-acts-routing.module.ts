import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionsActsPage } from './options-acts.page';

const routes: Routes = [
  {
    path: '',
    component: OptionsActsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionsActsPageRoutingModule {}
