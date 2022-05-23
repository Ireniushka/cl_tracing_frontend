import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateActPageRoutingModule } from './update-act-routing.module';

import { UpdateActPage } from './update-act.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateActPageRoutingModule
  ],
  declarations: [UpdateActPage]
})
export class UpdateActPageModule {}
