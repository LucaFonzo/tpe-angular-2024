import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly URL_API = "https://6646137a51e227f23aadad6a.mockapi.io/api/Products";
  http = inject(HttpClient);
  constructor() { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL_API);
  }
}
