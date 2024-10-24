
import { Cart, CartItem } from '../../types/cart.type';
import { Product } from '../../components/products/product.types';
import { Observable,BehaviorSubject  } from 'rxjs';
import { StoreItem } from '../../share/storeItem';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',  // Aseguramos que el servicio sea singleton y accesible globalmente
})


export class CartStoreItem extends StoreItem<Cart> {
  private cartSubject: BehaviorSubject<Cart>;
  constructor() {
    super({
      products: [],
      totalAmount: 0,
      totalProducts: 0,
    });
  }

  get cart$(): Observable<Cart> {
    return this.value$;
  }

  get cart(): Cart {
    return this.value;
  }

  addProduct(product: Product): void {
    const cartProduct: CartItem | undefined = this.cart.products.find(
      (cartProduct) => cartProduct.product.id === product.id
    );

    if (!cartProduct) {
      this.cart.products = [
        ...this.cart.products,
        { product: product, amount: product.price, quantity: 1 },
      ];
    } else {
      cartProduct.quantity++;
    }
    this.cart.totalAmount += Number(product.price);
    ++this.cart.totalProducts;
    console.log(this.cart.totalProducts)
  }
  
}
