import { Injectable } from '@angular/core';
import { Product } from '../components/products/product.types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {

  constructor(private httpClient: HttpClient) {

   }

  getAllProdcuts(): Observable<Product[] | any> {
    return  this.httpClient.get<Product[]>('http://localhost:5001/products/')

  }
}
