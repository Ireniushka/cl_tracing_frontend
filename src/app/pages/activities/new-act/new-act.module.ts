import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewActPageRoutingModule } from './new-act-routing.module';

import { NewActPage } from './new-act.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewActPageRoutingModule
  ],
  declarations: [NewActPage]
})
export class NewActPageModule {}
