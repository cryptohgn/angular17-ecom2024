import { Category } from './../../types/category.type';
import { CategoryStoreItem } from '../category/categoryStoreItems';
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cat-navigation',
  standalone: true,
  imports: [AsyncPipe, NgFor],
  providers: [CategoryStoreItem],
  templateUrl: './cat-navigation.component.html',
  styleUrls: ['./cat-navigation.component.scss'] 
})

export class CatNavigationComponent {

  topLevelCategories$: Observable<Category[]>;

  constructor(public categoryStoreItem: CategoryStoreItem) {
    
    categoryStoreItem.loadCategories();

    
    this.topLevelCategories$ = this.categoryStoreItem.topLevelCategories$;
  }
}

  


 
