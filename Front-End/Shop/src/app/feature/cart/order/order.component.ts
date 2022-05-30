import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/service/cart.service';
import { OrderService } from 'src/app/core/service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  
  @Input() products: string[] = [];

  form = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, Validators.required),
    discount: new FormControl(null)
  });

  order!: {};
  message?: string = undefined;
  errors?: {};
  constructor(
    private sOrder: OrderService,
    private sCart: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  createOrder () {
    return {
      firstName: this.form.get('firstName')!.value,
      lastName: this.form.get('lastName')!.value,
      email: this.form.get('email')!.value,
      phone: this.form.get('phone')!.value,
      discount: this.form.get('discount')?.value,
      products: this.products
    }
  }

  onSubmit() {
    this.order = this.createOrder();
    this.sOrder.sendClientOrder(this.order).subscribe({
      next: (res) => {
        this.message = res.msg;
      },
      error: (err) => {
        this.errors = err;
      }
    });
    this.form.reset();
    this.sCart.selectedProducts = [];

  } 

}
