import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionsPupilPageRoutingModule } from './options-pupil-routing.module';

import { OptionsPupilPage } from './options-pupil.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionsPupilPageRoutingModule,
    ComponentsModule
  ],
  declarations: [OptionsPupilPage]
})
export class OptionsPupilPageModule {}
