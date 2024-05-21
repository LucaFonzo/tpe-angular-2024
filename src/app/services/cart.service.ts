import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cart: Product[] = [];
  private productSubject: BehaviorSubject<Product[]> = new BehaviorSubject(this._cart);
  public products: Observable<Product[]> = this.productSubject.asObservable();
  constructor() { }

  get() {
    return this.productSubject.value;
  }

  setProducts(p: Product[]) {
    this.productSubject.next(p);
  }

  add(p: Product) {
    const currentProducts = this.get();
    this.setProducts([...currentProducts, p]);
  }

  removeProduct(product: Product) {
    let currentProducts = this.get();
    currentProducts = currentProducts.filter(p => p.id != product.id)
    this.setProducts([...currentProducts]);
  }
}
