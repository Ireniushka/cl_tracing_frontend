import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'options-pupils',
    loadChildren: () => import('./pages/pupils/options-pupil/options-pupil.module').then( m => m.OptionsPupilPageModule)
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
    path: 'new-tracing-act/:id',
    loadChildren: () => import('./pages/tracing-activities/new-tracing/new-tracing.module').then( m => m.NewTracingPageModule)
  },
  {
    path: 'update-tracing-act/:id',
    loadChildren: () => import('./pages/tracing-activities/update-tracing/update-tracing.module').then( m => m.UpdateTracingPageModule)
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
    path: 'tracings/:id',
    loadChildren: () => import('./pages/pupils/tracings/tracings.module').then( m => m.TracingsPageModule)
  },
  {
    path: 'data-tutor/:id',
    loadChildren: () => import('./pages/legal-tutors/data-tutor/data-tutor.module').then( m => m.DataTutorPageModule)
  },
  {
    path: 'create-tutor',
    loadChildren: () => import('./pages/legal-tutors/create-tutor/create-tutor.module').then( m => m.CreateTutorPageModule)
  },
  {
    path: 'data-pupil/:id',
    loadChildren: () => import('./pages/pupils/data-pupil/data-pupil.module').then( m => m.DataPupilPageModule)
  },
  {
    path: 'create-pupil',
    loadChildren: () => import('./pages/pupils/create-pupil/create-pupil.module').then( m => m.CreatePupilPageModule)
  },
  {
    path: 'update-tutor/:id',
    loadChildren: () => import('./pages/legal-tutors/update-tutor/update-tutor.module').then( m => m.UpdateTutorPageModule)
  },
  {
    path: 'update-pupil/:id',
    loadChildren: () => import('./pages/pupils/update-pupil/update-pupil.module').then( m => m.UpdatePupilPageModule)
  },
  {
    path: 'new-tracing-test/:id',
    loadChildren: () => import('./pages/tracing_tests/new-tracing/new-tracing.module').then( m => m.NewTracingPageModule)
  },
  {
    path: 'update-tracing-test/:id',
    loadChildren: () => import('./pages/tracing_tests/update-tracing/update-tracing.module').then( m => m.UpdateTracingPageModule)
  },





  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
