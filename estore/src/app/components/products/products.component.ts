import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductListItems } from './product.types';
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
  products: ProductListItems[] = [];

  productService = inject(ProductsService);

  constructor() {
    this.products = this.productService.getProdcutList();
  }

  // Manejar la actualización del rating
  onRatingUpdated(newRating: number, product: ProductListItems) {
    product.ratings = newRating;
    console.log(`Nueva calificación para ${product.product_name}: ${newRating}`);
    // Aquí puedes agregar lógica para actualizar la calificación en una base de datos, si es necesario
  }
}
