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
    const storedCart: any = sessionStorage.getItem('cart');
    if (storedCart){
      super(JSON.parse(storedCart));
    } else {
    super({
      products: [],
      totalAmount: 0,
      totalProducts: 0,
    });
  }}

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
        { product: product, amount: Number(product.price), quantity: 1 },
      ];
    } else {
      cartProduct.quantity++;
      cartProduct.amount+=Number(product.price)
    }
    this.cart.totalAmount += Number(product.price);
    ++this.cart.totalProducts;
    console.log(this.cart.totalProducts)
    this.saveCart();
  }
  

  removeProduct(cartItem: CartItem): void{
    this.cart.products = this.cart.products.filter(
      (item) => item.product.id !== cartItem.product.id
    );
    this.cart.totalProducts -= cartItem.quantity;
    this.cart.totalAmount -= cartItem.amount;
    if (this.cart.totalProducts === 0 ){
      sessionStorage.clear();
    } else {
      this.saveCart();
    }
  }

  saveCart(): void {
    sessionStorage.clear();
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
  }

  decreaseProductQuantity(cartItem: CartItem): void{
    const cartProduct: CartItem | undefined = this.cart.products.find(
      (cartProduct)=> cartProduct.product.id === cartItem.product.id
    );
    if(cartProduct){
      if(cartProduct.quantity === 1) {
        this.removeProduct(cartItem)
      } else {
        cartProduct.quantity--;
        this.cart.totalAmount -= Number(cartItem.product.price)
        --this.cart.totalProducts;
        this.saveCart();
      }
    }
  }
}
