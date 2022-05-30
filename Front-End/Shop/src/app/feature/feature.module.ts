import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeatureRoutingModule } from './feature-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './cart/order/order.component';


@NgModule({
  declarations: [
    ProductDetailsComponent,
    CartComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FeatureRoutingModule,
    FontAwesomeModule
  ],
  exports: [
    ProductDetailsComponent,
    CartComponent
  ]
})
export class FeatureModule { }
