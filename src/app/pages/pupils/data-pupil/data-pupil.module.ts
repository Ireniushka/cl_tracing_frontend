import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataPupilPageRoutingModule } from './data-pupil-routing.module';

import { DataPupilPage } from './data-pupil.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataPupilPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DataPupilPage]
})
export class DataPupilPageModule {}
