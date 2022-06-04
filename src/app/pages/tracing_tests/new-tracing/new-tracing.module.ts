import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewTracingPageRoutingModule } from './new-tracing-routing.module';

import { NewTracingPage } from './new-tracing.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewTracingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NewTracingPage]
})
export class NewTracingPageModule {}
