import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class SignedOutGuard implements CanActivate {

  constructor(
    private nativeStorage: NativeStorage,
    private router: Router,
  ){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("Sign Out Guard");
      return this.nativeStorage.getItem('cookie')
      .then((data) => {
        console.log("Signed Out Cookie: ", data)
        if(!data.cookie || data.cookie == "-"){
            return true;
        } else{
          console.log("values: ", data.cookie)
          this.router.navigate(['/play']);
          return false;
        }
      }, (error) => {
        console.log("err: ", error)
        if(error.code == 2){
          this.nativeStorage.setItem('cookie', {cookie: "-"})
          .then(() => {
            console.log("Reset cookie!")
            this.router.navigate(['/sign-in']);
            return true;
          },
            error => console.error('Error storing item', error)
          );
        } else { return false;}
      }
      );
      // return true;
  }

}
