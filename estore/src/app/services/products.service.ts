import { Injectable } from '@angular/core';
import { ProductListItems } from '../components/products/product.types';
import { products } from './../components/products/product.data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProdcutList(): ProductListItems[] | any {
    return products

  }
}
