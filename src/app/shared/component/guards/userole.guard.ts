import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { iproduct } from '../../model/product';

@Injectable({
  providedIn: 'root'
})
export class UseroleGuard implements CanActivate {
  private _authservice=inject(AuthService)
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     let staticdata: Array<string> =route.data['userRole']
     let logedinvalue =this._authservice.getuserole()!
     return staticdata.includes(logedinvalue)
    


  }
  
}
