import { Injectable } from '@angular/core';
import { StoreItem } from './storeItem';
import { CategoryService } from '../services/category.service';
import { Category } from '../types/category.type';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CategoryStoreItem extends StoreItem<Category[]> {

  constructor(private categoryService: CategoryService) {
    super([]); 
  }

  async loadCategories() {
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.setValue(categories);
    });
  }

  get categories$(): Observable<Category[]> {
    return this.value$;
  }

  get topLevelCategories$(): Observable<Category[]> {
    return this.value$.pipe(
      map(categories => categories.filter(category => category.parent_category_id === null))
    );
  }
}
