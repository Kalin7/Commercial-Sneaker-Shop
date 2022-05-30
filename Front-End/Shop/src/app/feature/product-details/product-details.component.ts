
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faHome, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { IProduct } from 'src/app/core/interfaces';
import { CartService } from 'src/app/core/service/cart.service';
import { ProductService } from 'src/app/core/service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productId?: string;
  product?: IProduct;
  choosenSize?: number;
  choosenColor?: string;
  counter?: number = 0;
  error?: string;

  constructor(
    private sProduct: ProductService,
    private sCart: CartService,
    private router: Router,
    private route: ActivatedRoute,
    library: FaIconLibrary
    ) {
    library.addIcons(
      faHome,
      faCartPlus
    )
   }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    this.getProduct();
  
  }

  getColorValue(event: any) {
    return this.sCart.getSelectedColor(event.target.textContent);
  }

  getSizeValue(event: any) {
    return this.sCart.getSelectedSize(event.target.value);
  }

  addToCart() {
    this.counter!++;
    this.sCart.getSlectedProduct(this.product!);
  }

  getProduct () {
    this.sProduct.getProductById(this.productId!)
        .subscribe({
          next: (res) => {
            this.product = res
          },
          error: (err) => {
            this.error = err.message;
          }
        })

  }

}
