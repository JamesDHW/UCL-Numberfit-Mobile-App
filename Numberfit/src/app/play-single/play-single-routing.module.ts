import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaySinglePage } from './play-single.page';

const routes: Routes = [
  {
    path: '',
    component: PlaySinglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaySinglePageRoutingModule {}
