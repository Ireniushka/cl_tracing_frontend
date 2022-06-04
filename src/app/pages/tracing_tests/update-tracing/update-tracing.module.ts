import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateTracingPageRoutingModule } from './update-tracing-routing.module';

import { UpdateTracingPage } from './update-tracing.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateTracingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [UpdateTracingPage]
})
export class UpdateTracingPageModule {}
