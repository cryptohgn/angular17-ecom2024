import { NgIf, AsyncPipe } from '@angular/common';
import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { ProductStoreItem } from '../products/productStoreItme';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../products/product.types';
import { map } from 'rxjs/operators';
import { MatIconModule } from '@angular/material/icon'
import { CartStoreItem } from '../../services/cart/cart.storItem';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, StarRatingComponent, NgIf, AsyncPipe, MatIconModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ProductStoreItem, ProductsService, CartStoreItem]
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<Product>;
  subscriptions: Subscription = new Subscription();

  constructor( private activatedRoute: ActivatedRoute, private productService: ProductsService, private cart: CartStoreItem ) {}

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (id) {
      this.product$ = this.productService.getProduct(id).pipe(
        map(products => products[0])  // Seleccionamos el primer producto del array
      );
    }
  }
  
  addToCart(product: Product): void {
    this.cart.addProduct(product); 
    console.log(product);
  }
}
