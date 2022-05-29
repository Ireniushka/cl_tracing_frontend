import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePupilPageRoutingModule } from './create-pupil-routing.module';

import { CreatePupilPage } from './create-pupil.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePupilPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CreatePupilPage]
})
export class CreatePupilPageModule {}
