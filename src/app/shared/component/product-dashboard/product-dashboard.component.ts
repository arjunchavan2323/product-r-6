import { Component, OnInit } from '@angular/core';
import { iproduct } from '../../model/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
productArr!:Array<iproduct>
  constructor(private _productservice : ProductService,
    private _router : Router,
    private _routes : ActivatedRoute
  ) {
    this.productArr=this._routes.snapshot.data['product']
     this._router.navigate(['/product', this.productArr[0].productId])
   }

  ngOnInit(): void {
    // this._productservice.fetchproduct()
    // .subscribe({
    //   next:data=> {
    //     this.productArr=data
    // this._router.navigate(['/product', this.productArr[0].productId])
    //   }
    // })
  }


  trackp(index:number, prod:iproduct){
    return prod.productId
  }

}
