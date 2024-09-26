import { Injectable } from '@angular/core';
import { Category } from '../../types/category.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
Observable
@Injectable()
export class CategoryService {

  constructor(public httpClient: HttpClient) { }
  data!:any;

  getAllCategories(): Observable<Category[]>{
   return this.data = this.httpClient.get<Category[]>(
    'http://localhost:5001/productcategories'
   )
   console.log('data', this.data)
  }


  
}
