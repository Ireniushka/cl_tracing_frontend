import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionsTestPageRoutingModule } from './options-test-routing.module';

import { OptionsTestPage } from './options-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionsTestPageRoutingModule
  ],
  declarations: [OptionsTestPage]
})
export class OptionsTestPageModule {}
