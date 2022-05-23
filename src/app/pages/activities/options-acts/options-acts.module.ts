import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionsActsPageRoutingModule } from './options-acts-routing.module';

import { OptionsActsPage } from './options-acts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionsActsPageRoutingModule
  ],
  declarations: [OptionsActsPage]
})
export class OptionsActsPageModule {}
