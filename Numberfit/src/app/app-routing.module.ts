import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'play',
    pathMatch: 'full'
  },
  {
    path: 'play',
    loadChildren: () => import('./play/play.module').then(m => m.HomePageModule)
  },
  {
    path: 'leaderboard',
    loadChildren: () => import('./leaderboard/leaderboard.module').then(m => m.HomePageModule)
  },
  {
    path: 'parents',
    loadChildren: () => import('./parents/parents.module').then(m => m.HomePageModule)
  },
  {
    path: 'sign-out',
    loadChildren: () => import('./sign-out/sign-out.module').then(m => m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
