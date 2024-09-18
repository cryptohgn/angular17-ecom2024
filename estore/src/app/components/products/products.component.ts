import { ProductsService } from './../../services/products.service';
import { Component, inject } from '@angular/core';
import { Product } from './product.types';
import { NgFor, CurrencyPipe } from '@angular/common';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, CurrencyPipe, StarRatingComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductsService]
})
export class ProductsComponent {
  products: Product[] = [];


  constructor( private productsService : ProductsService  ) {
    productsService.getAllProdcuts().subscribe(products => this.products = products) 
  }


  onRatingUpdated(newRating: number, product: Product) {
    product.ratings = newRating;
    console.log(`Nueva calificación para ${product.product_name}: ${newRating}`);
    
  }
}
