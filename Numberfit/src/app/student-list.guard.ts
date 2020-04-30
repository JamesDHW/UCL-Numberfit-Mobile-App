import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Injectable }    from '@angular/core';
import { Observable }    from 'rxjs';
import { Router }        from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentListGuard implements CanActivate {

  constructor(
    private nativeStorage: NativeStorage,
    private router: Router,
    ){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // return true;
      return this.nativeStorage.getItem('user')
      .then((data) => {
        // console.log("Signed In Cookie: ", data)
        if(data.teacher){
          // Allow to view student list page
          return true;
        } else{
          this.router.navigate(['/parents',"none"]);
          return false;
        }
      }, (error) => {
        console.log("err: ", error)
        this.router.navigate(['/parents',"none"]);
        return false;
      }
      );
  }

}
