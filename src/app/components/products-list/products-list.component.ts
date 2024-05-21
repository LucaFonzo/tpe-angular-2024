import { Component, inject } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { ProductsService } from '../../services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  products: Product[] = [];
  productService = inject(ProductsService);
  cartService = inject(CartService);
  constructor() {
    this.getAll();
    console.log(this.products);
  }

  getAll() {
    this.productService.getAll().subscribe(p => {
      this.products = p;
    });
  }

  addCart(p: Product) {
    this.cartService.add(p);
  }
}
