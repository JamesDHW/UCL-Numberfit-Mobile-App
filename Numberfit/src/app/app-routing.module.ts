import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SignedInGuard } from './signed-in.guard';
import { SignedOutGuard } from './signed-out.guard';
import { StudentListGuard } from './student-list.guard';

const routes: Routes = [
  { path: '',
    redirectTo: 'play',
    pathMatch: 'full' },

  { path: 'play',
    loadChildren: () => import('./play/play.module').then(m => m.HomePageModule),
    canActivate: [SignedInGuard],
  },

  { path: 'leaderboard',
    loadChildren: () => import('./leaderboard/leaderboard.module').then(m => m.HomePageModule),
    canActivate: [SignedInGuard],
   },

  { path: 'parents',
    loadChildren: () => import('./parents/parents.module').then(m => m.HomePageModule),
    canActivate: [SignedInGuard],
   },

  { path: 'sign-out',
    loadChildren: () => import('./sign-out/sign-out.module').then(m => m.HomePageModule),
    canActivate: [SignedInGuard], },

  { path: 'play-single/:subject',
    loadChildren: () => import('./play-single/play-single.module').then( m => m.PlaySinglePageModule),
    canActivate: [SignedInGuard], },

  { path: 'play-multi/:subject',
    loadChildren: () => import('./play-multi/play-multi.module').then( m => m.PlayMultiPageModule),
    canActivate: [SignedInGuard], },

  { path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule),
    canActivate: [SignedOutGuard], },

  { path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule),
    canActivate: [SignedOutGuard], },

  { path: 'subject-select/:gamemode',
    loadChildren: () => import('./subject-select/subject-select.module').then( m => m.SubjectSelectPageModule),
    canActivate: [SignedInGuard], },
  {
    path: 'student-list',
    loadChildren: () => import('./student-list/student-list.module').then( m => m.StudentListPageModule),
    canActivate: [SignedInGuard, StudentListGuard],
  },
  {
    path: 'my-account',
    loadChildren: () => import('./my-account/my-account.module').then( m => m.MyAccountPageModule),
    canActivate: [SignedInGuard],
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
