import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Params, Router, Routes } from '@angular/router';
import { SnackbarService } from '../../services/snackbar.service';
import { iproduct } from '../../model/product';
import { iCanDeactivate } from '../../model/candiactivated';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, iCanDeactivate {
productform!:FormGroup
productid!:string;
productdetail!:iproduct
iseditmode :boolean=false
  constructor(private _productservice : ProductService,
    private _router : Router,
    private _routes : ActivatedRoute,
    private _snackbar : SnackbarService
  ) { }

  ngOnInit(): void {
this.createform()
this.patchproduct()

   
  }

  onupdateproduct(){
    if(this.productform.valid){
      let update_product:iproduct={
        ...this.productform.value,
        productId:this.productid
      }
      this._productservice.productupdate(update_product)
      .subscribe({
        next:data=> {
          this.productform.reset()
          this.iseditmode=false
          this._snackbar.opensnackbar(data.msg)
          this._router.navigate(['/product', this.productid])
        },
        error:err=>{
          this._snackbar.opensnackbar(err)

        }
      })
    }
  }


  patchproduct(){
    this._routes.params
.subscribe((param:Params) => {
  this.productid=param['id']
  if(this.productid){
    this.iseditmode=true;
    this._productservice.FetchproductById(this.productid)
    .subscribe({
      next:data=> {
     this.productdetail=data
        this.productform.patchValue(data)
        if(this.productdetail.stockAvailable===0){
          this.productform.disable()
        }else{
           this.productform.enable()
        }
       
      },
      error:err=> {
        console.log(err);
        
      }
    })
  }
})
  }


  createform(){
        this.productform=new FormGroup({
      productName:new FormControl(null, Validators.required),
      productImage:new FormControl(null, Validators.required),
      description:new FormControl(null, Validators.required),
      stockAvailable:new FormControl(0),
      orderStatus:new FormControl('Inprogress')

    })
  }


  onsubmit(){
    if(this.productform.invalid){
      this.productform.markAllAsTouched()
    }else{
      let new_product:iproduct={
        ...this.productform.value,
        productId:Date.now().toString(),
        orderStatus:'Inprogress'

      }
      this._productservice.createaddproduct(new_product)
      .subscribe({
        next:data=> {
          this._snackbar.opensnackbar(data)
          this._router.navigate(['/product',new_product.productId])
        }
      })
    }
  }


  CanDeactivate () {
    if(this.productform.dirty && this.iseditmode){
      let conformation=confirm(`are you sure discart changes`)
      return conformation
    }
    return true
  }
}
