import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayMultiPageRoutingModule } from './play-multi-routing.module';

import { PlayMultiPage } from './play-multi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayMultiPageRoutingModule
  ],
  declarations: [PlayMultiPage]
})
export class PlayMultiPageModule {}
