import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../../services/auth.service";








@Injectable({
    providedIn:'root'
})



export class authguard implements CanActivate{
     private _authservice =inject(AuthService)
     private _router =inject(Router)
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        

        if(!!this._authservice.gettoken()){
              return true
        }else{
          return  this._router.createUrlTree(['/'])
        }
    }

}