import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { iCanDeactivate } from "../../model/candiactivated";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";







@Injectable({
    providedIn:'root'
})




export class candiactivated implements CanDeactivate <iCanDeactivate> {

    canDeactivate(component: iCanDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        

        return component.CanDeactivate()
    }

}