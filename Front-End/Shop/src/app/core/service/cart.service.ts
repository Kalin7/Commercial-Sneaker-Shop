import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  selectedProducts?: {}[] = [];
  selectedSize?: number[] = [];
  selectedColor: string[] = [];
  counter?: number;
  isPurchase?: boolean = false;
  constructor() { }

  getSlectedProduct(product: any) {
    product.size = this.selectedSize!.pop();
    product.color = this.selectedColor!.pop();
    this.selectedProducts?.push(product);
  }

  getSelectedSize(size: any) {
    this.selectedSize?.push(size);
  }

  getSelectedColor(color: any) {
    this.selectedColor.push(color);
  }

  getCounter() {
    this.counter = this.selectedProducts!.length;
    return this.counter;
  }
}
