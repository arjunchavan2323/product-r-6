import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { iproduct } from '../../model/product';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
productId!:string;
productObj!:iproduct
productArr!:Array<iproduct>
  constructor(private _productservice : ProductService,
    private _router : Router,
    private _routes : ActivatedRoute,
    private _snackbar : SnackbarService,
    
  ) { 
    this._routes.data
    .subscribe(res => {
      this.productObj=res['product']
      this.productId=this.productObj.productId
    })
  }

  ngOnInit(): void {
  // this.getcreatesingle()
  this._productservice.fetchproduct()
  .subscribe({
    next:data=>{
      this.productArr=data
    }
  })
  }

  getcreatesingle(){
      this._routes.params
    .subscribe((param:Params) => {
     this.productId=param['id']
     if(this.productId){
      this._productservice.FetchproductById(this.productId)
      .subscribe({
        next:data=> {
          this.productObj=data
        },
        error:err=> {
          console.log(err);
          
        }
      })
     }
    })
  }

  gotoform(){
   this._router.navigate(['/product', this.productId, 'edit'],{queryParamsHandling:'preserve'}) 
  }


  onremove(prodid:string){
    this._productservice.removerdproduct(prodid)
    .subscribe({
      next:data=> {
        this._snackbar.opensnackbar(data.msg)
        this._router.navigate(['/product',this.productArr[0].productId])
      },
      error:err=>{
        this._snackbar.opensnackbar(err)

      }
    })

  }

}
