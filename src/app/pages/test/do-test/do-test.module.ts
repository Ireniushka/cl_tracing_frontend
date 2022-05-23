import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoTestPageRoutingModule } from './do-test-routing.module';

import { DoTestPage } from './do-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoTestPageRoutingModule
  ],
  declarations: [DoTestPage]
})
export class DoTestPageModule {}
