import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/core/service/cart.service';
import { OrderService } from 'src/app/core/service/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  addedProducts!: any;
  productId: string[] = [];
  size?: number[];
  color: string[] = [];
  totalPrice: number = 0;
  submited: boolean = false;

  constructor(library: FaIconLibrary,
    private sCart: CartService,
    private sOrder: OrderService,
    private router: Router,
  ) {
    library.addIcons(
      faCartPlus,
    )
   }

  ngOnInit(): void {
    this.addProduct();
    this.getTotalPrice();
  }

  addProduct () {
    this.addedProducts = this.sCart.selectedProducts;
    this.size = this.sCart.selectedSize!;
    this.color = this.sCart.selectedColor;
  }

  removeProduct(event: any, size: number) {
    let i;
    this.addedProducts.map((product:any) => {
      if (product._id === event.target.id && product.size == size) {
        i = this.addedProducts.indexOf(product);
        this.totalPrice -= product.price;
      }
    });
    this.addedProducts.splice(i, 1);
    
    this.router.navigate(['/cart']);
  }

  getTotalPrice () {
    this.addedProducts?.forEach((product:any) => {
      this.totalPrice += product.price
    });
  }

  onSubmit() {
    this.submited = true;
   
    this.addedProducts.forEach((product:any) => {
      this.productId.push(product._id);
    });
  }

}
