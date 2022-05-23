import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewTracingPage } from './new-tracing.page';

const routes: Routes = [
  {
    path: '',
    component: NewTracingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewTracingPageRoutingModule {}
