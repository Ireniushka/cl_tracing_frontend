import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateActPageRoutingModule } from './update-act-routing.module';

import { UpdateActPage } from './update-act.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateActPageRoutingModule,
    ComponentsModule
  ],
  declarations: [UpdateActPage]
})
export class UpdateActPageModule {}
