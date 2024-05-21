import { Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: '', component: ProductsListComponent },
  { path: 'about', component: AboutComponent },
  {path: 'home', component: ProductsListComponent}
];
