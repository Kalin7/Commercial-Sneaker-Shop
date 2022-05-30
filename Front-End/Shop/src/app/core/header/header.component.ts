import { Component, HostListener, OnInit} from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  

  verticalPosition?: boolean = false;
  displayMenu?: boolean = false;
  cartCounter: number = 0;
  constructor(
    private sCart: CartService
  ) { }

  ngOnInit(): void {
    this.changeCounter();
    this.cartCounter = this.sCart.getCounter();
  }

  @HostListener('window:click')
  changeCounter() {
    this.cartCounter = this.sCart.getCounter();
  }

  @HostListener('window:scroll')
  getOffset() {
    window.scrollY > 0 ? this.verticalPosition = true : [
      this.verticalPosition = false, this.displayMenu = false];
  }
  
  showMenu() {
    this.displayMenu == false ? this.displayMenu = true : this.displayMenu = false;
  }
}
