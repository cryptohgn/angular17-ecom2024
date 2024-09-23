import { Injectable } from '@angular/core';
import { Product } from '../components/products/product.types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {

  constructor(private httpClient: HttpClient) {

   }

   getAllProducts(query?: string): Observable<Product[] | any> {
    let url: string = 'http://localhost:5001/products';
    if (query){
      url += '?' + query
    }
    return  this.httpClient.get<Product[]>(url)

  }
}
