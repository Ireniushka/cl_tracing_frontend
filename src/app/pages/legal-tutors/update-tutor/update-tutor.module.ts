import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateTutorPageRoutingModule } from './update-tutor-routing.module';

import { UpdateTutorPage } from './update-tutor.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateTutorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [UpdateTutorPage]
})
export class UpdateTutorPageModule {}
