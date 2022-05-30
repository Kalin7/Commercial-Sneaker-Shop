import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from '../interfaces';
import { HomeService } from '../service/home.service';
import { ProductService } from '../service/product.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products?: IProduct[] = [];
  brands?: string[] = [];
  availableSizes?: number[] = [];
  smallImages?: any;
  errorMessage?: any;
  currentProduct?: string;
  isMobile?: boolean = false;

  form = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email])
  })

  constructor(
    private sProduct: ProductService,
    private sHome: HomeService,
    private sUser: UserService
    ) { }

  ngOnInit() {
    this.getNewProduct();
    this.onResize();
  }

  onHover(currentProduct: string) {
    return this.sHome.onHover(this.products!, currentProduct);
  }

  onLeave() {
    return this.sHome.onLeave(this.products!)
  }

  prevProduct() {
    return this.sHome.previous(this.products!);
  }

  nextProduct () {
    return this.sHome.next(this.products!);
  }

  @HostListener('window:resize')
  onResize() {
    window.innerWidth < 768 ? this.isMobile = true : this.isMobile = false;
  }

  registerDiscount() {
    const email = this.form.get('email')?.value;
    this.sUser.registerClientDiscountRequest(email).subscribe();
  }

  getNewProduct() {
    this.sProduct.getProductsByRegisration()
        .subscribe({
          next: (res) => {
            this.products = res;
            this.brands = this.sHome.getBrands(res);
          }, 
          error: (err) => {
            console.log(err)
          }
        })
  }

}

