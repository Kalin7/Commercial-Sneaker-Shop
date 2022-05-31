import { Component, HostListener, OnInit, DoCheck} from '@angular/core';
import { CartService } from '../service/cart.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  

  verticalPosition?: boolean = false;
  displayMenu?: boolean = false;
  isLoggedIn?: string;
  cartCounter: number = 0;
  constructor(
    private sCart: CartService,
    private sStorage: StorageService,
  ) { }
    
  ngDoCheck() {
    this.isLoggedIn = this.sStorage.getStorage()!;
  }
  
  ngOnInit(): void {
    this.changeContent();
    this.cartCounter = this.sCart.getCounter();
    this.isLoggedIn = this.sStorage.getStorage()!;
  }

  @HostListener('window:click')
  changeContent() {
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

  onLogout() {
    this.sStorage.clearStorage();
  }
}

