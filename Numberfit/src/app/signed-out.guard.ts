import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignedOutGuard implements CanActivate {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router,
  ){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.angularFireAuth.authState.pipe(
        map((auth)=>{
          if(auth){
            this.router.navigate(["/sign-in"]);
            return false;
          } else{
            return true;
          };
        }
      )
    );
  }

}
