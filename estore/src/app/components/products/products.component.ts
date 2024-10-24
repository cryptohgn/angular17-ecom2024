import { ProductStoreItem } from './productStoreItme';
import { Component, inject } from '@angular/core';
import { Product } from './product.types';
import { NgFor, CurrencyPipe, AsyncPipe } from '@angular/common';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCardActions } from '@angular/material/card';
import { CartStoreItem } from '../../services/cart/cart.storItem';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, CurrencyPipe, StarRatingComponent, AsyncPipe, RouterLink, MatCardActions, MatIconModule, MatButtonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: []
})
export class ProductsComponent {
  products: Product[] = [];

  constructor( public productStore : ProductStoreItem, private cartStore: CartStoreItem  ) {
    
  }

  onRatingUpdated(newRating: number, product: Product) {
    product.ratings = newRating;
    console.log(`Nueva calificación para ${product.product_name}: ${newRating}`);
    
  }
  addToCart(product: Product): void {
    this.cartStore.addProduct(product); 
  }
}
