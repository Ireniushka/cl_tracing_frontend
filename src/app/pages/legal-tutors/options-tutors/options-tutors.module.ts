import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionsTutorsPageRoutingModule } from './options-tutors-routing.module';

import { OptionsTutorsPage } from './options-tutors.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionsTutorsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [OptionsTutorsPage]
})
export class OptionsTutorsPageModule {}
