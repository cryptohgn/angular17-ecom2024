import { CartItem } from './../../types/cart.type';
import { Product } from './../products/product.types';
import { Component } from '@angular/core';
import { CartStoreItem } from '../../services/cart/cart.storItem';
import { MatIcon } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { NgFor, NgIf, AsyncPipe, CurrencyPipe } from '@angular/common';
import { StarRatingComponent } from '../star-rating/star-rating.component';

Router
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgIf, NgFor,AsyncPipe, CurrencyPipe,StarRatingComponent, MatIcon, MatCardModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
constructor(public cartStore : CartStoreItem, private route: Router){}

navigateToHome(): void{
  this.route.navigate(['home/products'])
}
onRatingUpdated(newRating: number, product: Product) {
  product.ratings = newRating;
  console.log(`Nueva calificación para ${product.product_name}: ${newRating}`);
  
}
updateQuantity($even: any, cartItem: CartItem ): void{
  if($even.target.innerText === '+'){
    this.cartStore.addProduct(cartItem.product)
  } else if ($even.target.innerText === '-'){
    this.cartStore.decreaseProductQuantity(cartItem)

  }
}

removeItem(cartItem: CartItem): void{
  this.cartStore.removeProduct(cartItem);
}

}
