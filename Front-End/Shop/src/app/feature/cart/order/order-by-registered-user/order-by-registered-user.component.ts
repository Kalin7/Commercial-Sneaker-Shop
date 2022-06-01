import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/service/cart.service';
import { OrderService } from 'src/app/core/service/order.service';
import { StorageService } from 'src/app/core/service/storage.service';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-order-by-registered-user',
  templateUrl: './order-by-registered-user.component.html',
  styleUrls: ['./order-by-registered-user.component.css']
})
export class OrderByRegisteredUserComponent implements OnInit {

  form = new FormGroup({
    discount: new FormControl(null)
  });

  @Input() userId?: string;
  @Input() selectedProducts: string[] =  [];
  @Input() price?: number;
  user: any;
  error: any;
  order?: {};
  message?: string;
  isDiscount?: boolean = false;
  
  
  constructor(
    private sUser: UserService,
    private sOrder: OrderService,
    private sCart: CartService,

  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getPrice () {
    if (this.form.get('discount')?.value) {
      (this.price! -= this.price! * 0.05).toFixed(2);
    }
  }

  getUser() {
    this.sUser.getClientById(this.userId!)
        .subscribe({
          next: (res) => {
            this.user = res;
          },
          error: (err) => {
            this.error = err.message;
          }
        });
  }

   createOrderByLoggedInUser() {
    return {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      phone: this.user.phone,
      discount: this.form.get('discount')?.value,
      products: this.selectedProducts
    }
  }

  onSubmit() {

    this.order = this.createOrderByLoggedInUser();
    this.sOrder.sendClientOrder(this.order).subscribe({
      next: (res) => {
        this.message = res.msg;
        this.isDiscount = res.status;
        this.getPrice();
        this.form.reset();
 
      },
      error: (err) => {
        this.error = err;
      }
    });

    this.sCart.selectedProducts = [];
  }
}
