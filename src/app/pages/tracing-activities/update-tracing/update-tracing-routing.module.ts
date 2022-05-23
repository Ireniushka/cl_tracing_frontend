import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateTracingPage } from './update-tracing.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateTracingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateTracingPageRoutingModule {}
