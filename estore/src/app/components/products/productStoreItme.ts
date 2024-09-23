import { Product } from './product.types';
import { StoreItem } from "../../share/storeItem";
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductStoreItem extends StoreItem<Product[]>{

    constructor(private productService: ProductsService){
        super([])
    }


    async loadProducts(query?: string) {
        this.productService.getAllProducts(query).subscribe((products)=>
        this.setValue(products))
    }

    get products$(): Observable<Product[]> {
        return this.value$
    } 
}