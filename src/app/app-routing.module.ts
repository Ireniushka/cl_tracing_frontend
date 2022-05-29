import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  // <{
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },>
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'options-pupils',
    loadChildren: () => import('./pages/pupils/options-pupil/options-pupil.module').then( m => m.OptionsPupilPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'options-tutors',
    loadChildren: () => import('./pages/legal-tutors/options-tutors/options-tutors.module').then( m => m.OptionsTutorsPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./pages/profile/my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
  {
    path: 'new-tracing',
    loadChildren: () => import('./pages/tracing-activities/new-tracing/new-tracing.module').then( m => m.NewTracingPageModule)
  },
  {
    path: 'update-tracing',
    loadChildren: () => import('./pages/tracing-activities/update-tracing/update-tracing.module').then( m => m.UpdateTracingPageModule)
  },
  {
    path: 'tracing-pupil/:id',
    loadChildren: () => import('./pages/tracing-activities/tracing-pupil/tracing-pupil.module').then( m => m.TracingPupilPageModule)
  },
  {
    path: 'options-acts',
    loadChildren: () => import('./pages/activities/options-acts/options-acts.module').then( m => m.OptionsActsPageModule)
  },
  {
    path: 'new-act',
    loadChildren: () => import('./pages/activities/new-act/new-act.module').then( m => m.NewActPageModule)
  },
  {
    path: 'update-act',
    loadChildren: () => import('./pages/activities/update-act/update-act.module').then( m => m.UpdateActPageModule)
  },
  {
    path: 'options-test',
    loadChildren: () => import('./pages/test/options-test/options-test.module').then( m => m.OptionsTestPageModule)
  },
  {
    path: 'do-test',
    loadChildren: () => import('./pages/test/do-test/do-test.module').then( m => m.DoTestPageModule)
  },
  {
    path: 'tracings',
    loadChildren: () => import('./pages/pupils/tracings/tracings.module').then( m => m.TracingsPageModule)
  },
  {
    path: 'data-tutor',
    loadChildren: () => import('./pages/legal-tutors/data-tutor/data-tutor.module').then( m => m.DataTutorPageModule)
  },
  {
    path: 'create-tutor',
    loadChildren: () => import('./pages/legal-tutors/create-tutor/create-tutor.module').then( m => m.CreateTutorPageModule)
  },



  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
