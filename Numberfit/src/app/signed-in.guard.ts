import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class SignedInGuard implements CanActivate {

  constructor(
    private nativeStorage: NativeStorage,
    private router: Router,
    ){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("Sign In Guard");
      return this.nativeStorage.getItem('cookie')
      .then((data) => {
        console.log("Signed In Cookie: ", data)
        if(data.cookie && data.cookie != "-"){
            return true;
        } else{
          this.router.navigate(['/sign-in']);
          return false;
        }
      }, (error) => {
        console.log("err: ", error)
        this.router.navigate(['/sign-in']);
        return false;
      }
      );
  }

}
