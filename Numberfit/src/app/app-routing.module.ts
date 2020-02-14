import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
    redirectTo: 'play',
    pathMatch: 'full' },

  { path: 'play',
    loadChildren: () => import('./play/play.module').then(m => m.HomePageModule) },

  { path: 'leaderboard',
    loadChildren: () => import('./leaderboard/leaderboard.module').then(m => m.HomePageModule) },

  { path: 'parents',
    loadChildren: () => import('./parents/parents.module').then(m => m.HomePageModule) },

  { path: 'sign-out',
    loadChildren: () => import('./sign-out/sign-out.module').then(m => m.HomePageModule) },

  { path: 'play-single',
    loadChildren: () => import('./play-single/play-single.module').then( m => m.PlaySinglePageModule) },

  { path: 'play-multi',
    loadChildren: () => import('./play-multi/play-multi.module').then( m => m.PlayMultiPageModule) },

  { path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule) },

  { path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule) },

  { path: 'subject-select',
    loadChildren: () => import('./subject-select/subject-select.module').then( m => m.SubjectSelectPageModule) },

  { path: 'subject-select/:gamemode',
    loadChildren: () => import('./subject-select/subject-select.module').then( m => m.SubjectSelectPageModule) }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
