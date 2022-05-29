import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePupilPageRoutingModule } from './update-pupil-routing.module';

import { UpdatePupilPage } from './update-pupil.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePupilPageRoutingModule,
    ComponentsModule
  ],
  declarations: [UpdatePupilPage]
})
export class UpdatePupilPageModule {}
