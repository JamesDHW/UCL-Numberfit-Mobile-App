import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaySinglePageRoutingModule } from './play-single-routing.module';

import { PlaySinglePage } from './play-single.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaySinglePageRoutingModule
  ],
  declarations: [PlaySinglePage]
})
export class PlaySinglePageModule {}
