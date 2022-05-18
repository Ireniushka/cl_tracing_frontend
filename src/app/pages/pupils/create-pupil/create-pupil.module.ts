import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePupilPageRoutingModule } from './create-pupil-routing.module';

import { CreatePupilPage } from './create-pupil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePupilPageRoutingModule
  ],
  declarations: [CreatePupilPage]
})
export class CreatePupilPageModule {}
