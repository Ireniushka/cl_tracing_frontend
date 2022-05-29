import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TracingsPageRoutingModule } from './tracings-routing.module';

import { TracingsPage } from './tracings.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TracingsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TracingsPage]
})
export class TracingsPageModule {}
