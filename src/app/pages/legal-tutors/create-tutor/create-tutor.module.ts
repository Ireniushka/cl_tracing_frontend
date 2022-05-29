import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateTutorPageRoutingModule } from './create-tutor-routing.module';

import { CreateTutorPage } from './create-tutor.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateTutorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CreateTutorPage]
})
export class CreateTutorPageModule {}
