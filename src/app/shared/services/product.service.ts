import { Injectable } from '@angular/core';
import { iproduct, Ires } from '../model/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
productsList :Array<iproduct>= [
  {
    productId: 'PR101',
    productName: 'iPhone 16 Pro',
    productImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600',
    description: 'Apple flagship smartphone with A18 Pro chip and advanced camera.',
    stockAvailable: 0,
    orderStatus: 'Delivered'
  },
  {
    productId: 'PR102',
    productName: 'Samsung Galaxy S25',
    productImage: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600',
    description: 'Samsung premium Android smartphone with AMOLED display.',
    stockAvailable: 1,
    orderStatus: 'Dispatch'
  },
  {
    productId: 'PR103',
    productName: 'OnePlus 13',
    productImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600',
    description: 'OnePlus flagship phone with fast charging and smooth display.',
    stockAvailable: 0,
    orderStatus: 'Inprogress'
  },
  {
    productId: 'PR104',
    productName: 'Google Pixel 9',
    productImage: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600',
    description: 'Google Pixel with AI-powered camera and pure Android experience.',
    stockAvailable: 1,
    orderStatus: 'Delivered'
  },
  {
    productId: 'PR105',
    productName: 'Nothing Phone 3',
    productImage: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600',
    description: 'Nothing Phone with transparent design and Glyph interface.',
    stockAvailable: 1,
    orderStatus: 'Dispatch'
  },
  {
    productId: 'PR106',
    productName: 'Xiaomi 15 Ultra',
    productImage: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600',
    description: 'Xiaomi flagship with Leica camera and powerful performance.',
    stockAvailable: 0,
    orderStatus: 'Inprogress'
  }
];
  constructor() { }

  fetchproduct():Observable<Array<iproduct>>{
    return of(this.productsList)
  }

  FetchproductById(id:string):Observable<iproduct>{
    let product=this.productsList.find(p => (p.productId===id))!
    return of(product)
  }

  createaddproduct(product:iproduct):Observable<string>{
    this.productsList.push(product)
    return of(`Product added are ${product.productName} succefully`)
  }

  productupdate(product:iproduct):Observable<Ires<iproduct>>{
    let getindex=this.productsList.findIndex(p => (p.productId===product.productId))
    this.productsList[getindex]=product
    return of({
      msg:`product updated are ${product.productName} succefully `,
      data:product
    })
  }


  removerdproduct(productid:string):Observable<Ires<iproduct>>{
    let getindex=this.productsList.findIndex(p => (p.productId===productid))
    let r=this.productsList.splice(getindex, 1)

    return of({
      msg:`product Removed are ${r[0].productId} succefully`,
      data:r[0]
    })
  }
}
