import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TracingPupilPage } from './tracing-pupil.page';

const routes: Routes = [
  {
    path: '',
    component: TracingPupilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TracingPupilPageRoutingModule {}
