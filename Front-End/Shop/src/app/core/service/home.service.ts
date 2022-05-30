import { HostListener, Injectable } from '@angular/core';
import { IProduct } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  changedProducts?: IProduct[];

  constructor() { }

  onHover(products: IProduct[], current: string) {
    
    products?.filter((product: IProduct) => {
      product._id == current ? product.hover = true : product.hover = false
    });
  };

  onLeave(products: IProduct[]) {
    products.map((product: IProduct) => {
      product.hover = false
    });
  };

  previous(products: IProduct[]) {
    const last = products.pop();
    products.unshift(last!);
  };

  next(products: IProduct[]) {
    const first = products.shift();
    products.push(first!);
  };

  getBrands(products: IProduct[]): string[] {
    const brands: string[] = [];
    products.map((p) => {
      brands.push(p.brand)
    })
    return brands;
  }

}
