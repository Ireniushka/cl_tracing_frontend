import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyProfilePage } from './my-profile.page';

const routes: Routes = [
  {
    path: '',
    component: MyProfilePage
  },
  // {
  //   path: 'password',
  //   loadChildren: () => import('./pages/legal-tutors/options-tutors/options-tutors.module').then( m => m.OptionsTutorsPageModule)
  // },
  // {
  //   path: 'e-mail',
  //   loadChildren: () => import('./pages/legal-tutors/options-tutors/options-tutors.module').then( m => m.OptionsTutorsPageModule)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyProfilePageRoutingModule {}
