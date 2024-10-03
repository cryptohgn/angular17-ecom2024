import { ProductStoreItem } from './productStoreItme';
import { Component, inject } from '@angular/core';
import { Product } from './product.types';
import { NgFor, CurrencyPipe, AsyncPipe } from '@angular/common';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, CurrencyPipe, StarRatingComponent, AsyncPipe, RouterLink],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],

})
export class ProductsComponent {
  products: Product[] = [];


  constructor( public productStore : ProductStoreItem  ) {
    
  }


  onRatingUpdated(newRating: number, product: Product) {
    product.ratings = newRating;
    console.log(`Nueva calificación para ${product.product_name}: ${newRating}`);
    
  }
}
