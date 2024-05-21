import { Component, Input, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { Product } from '../../interfaces/Product';
import { CartService } from '../../services/cart.service';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule,RouterOutlet,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() title: string | undefined
  cart: Product[] = [];
  cartService = inject(CartService);
  constructor() {
    this.getCartItems();
    console.log(this.cart);
  }
  showCart() {
    document.querySelector('.cart-container')?.classList.toggle('active');
  }
  getCartItems() {
    this.cartService.products.subscribe(p => {
      this.cart = p;
    })
  }
  removeFromCart(p: Product) {
    this.cartService.removeProduct(p);
  }
}
