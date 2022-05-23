import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TracingPupilPageRoutingModule } from './tracing-pupil-routing.module';

import { TracingPupilPage } from './tracing-pupil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TracingPupilPageRoutingModule
  ],
  declarations: [TracingPupilPage]
})
export class TracingPupilPageModule {}
