import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataTutorPageRoutingModule } from './data-tutor-routing.module';

import { DataTutorPage } from './data-tutor.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataTutorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DataTutorPage]
})
export class DataTutorPageModule {}
