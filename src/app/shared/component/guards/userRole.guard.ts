import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Iuser } from "../../model/user";
import { Observable } from "rxjs";
import { inject, Injectable } from "@angular/core";
import { UsersService } from "../../services/users.service";






@Injectable({
    providedIn:'root'
})



export class useroleguard implements Resolve <Iuser | Iuser[]>{
    private userservice =inject(UsersService)
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Iuser | Iuser[] | Observable<Iuser | Iuser[]> | Promise<Iuser | Iuser[]> {
        let userId=route.paramMap.get('id')
        if(userId){
return this.userservice.fetchById(userId)
        }else{
         return   this.userservice.FetchUser()
        }
    }

}