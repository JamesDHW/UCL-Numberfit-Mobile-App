import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubjectSelectPageRoutingModule } from './subject-select-routing.module';

import { SubjectSelectPage } from './subject-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubjectSelectPageRoutingModule
  ],
  declarations: [SubjectSelectPage]
})
export class SubjectSelectPageModule {}
