import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { iproduct } from "../../model/product";
import { Observable } from "rxjs";
import { inject, Injectable } from "@angular/core";
import { ProductService } from "../../services/product.service";



@Injectable({
    providedIn:'root'
})





export class productresolve implements Resolve<iproduct | iproduct []>{
    private _productservice=inject(ProductService)
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): iproduct | iproduct[] | Observable<iproduct | iproduct[]> | Promise<iproduct | iproduct[]> {
           let productid=route.paramMap.get('id')      
           if(productid){
          return   this._productservice.FetchproductById(productid)
           }else{
          return  this._productservice.fetchproduct()
           }
    }
    
}