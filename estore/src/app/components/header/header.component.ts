import { CategoryStoreItem } from './../category/categoryStoreItems';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { NgFor, NgIf, AsyncPipe } from '@angular/common';
import { SearchKeyword } from '../../types/searchKeyword.type';
import { Observable } from 'rxjs';
import { Category } from '../../types/category.type';
import {  RouterModule } from '@angular/router';
import { CartStoreItem } from '../../services/cart/cart.storItem';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule,NgFor, NgIf,AsyncPipe, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [CategoryStoreItem, CartStoreItem]
})

export class HeaderComponent {

  topLevelCategories$: Observable<Category[]>;

  displayOptions: boolean = true;
  
  constructor(public categoryStoreItem: CategoryStoreItem, public cartStore:CartStoreItem ) {    
    
    categoryStoreItem.loadCategories();
    
    this.topLevelCategories$ = this.categoryStoreItem.topLevelCategories$;
  }


  @Output()
  searchClicked: EventEmitter<SearchKeyword> = new EventEmitter;

  onSearchClicked(keyword: string, categoryId: string) : void{
    this.searchClicked.emit({
      categoryId: categoryId,
      keyword: keyword,
    })
  }
  
  goToHome() {
    window.location.reload() 
  }
  
}
