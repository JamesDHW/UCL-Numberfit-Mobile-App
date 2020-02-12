import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayMultiPage } from './play-multi.page';

const routes: Routes = [
  {
    path: '',
    component: PlayMultiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayMultiPageRoutingModule {}
