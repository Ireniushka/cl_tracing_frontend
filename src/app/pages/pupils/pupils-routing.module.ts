import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PupilsPage } from './pupils.page';

const routes: Routes = [
  {
    path: '',
    component: PupilsPage
  },
  {
    path: 'create-pupil',
    loadChildren: () => import('./create-pupil/create-pupil.module').then( m => m.CreatePupilPageModule)
  },
  {
    path: 'data-pupil',
    loadChildren: () => import('./create-pupil/create-pupil.module').then( m => m.CreatePupilPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PupilsPageRoutingModule {}
