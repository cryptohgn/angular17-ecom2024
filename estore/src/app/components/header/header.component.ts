import { CategoryStoreItem } from './../category/categoryStoreItems';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { NgFor, AsyncPipe } from '@angular/common';
import { SearchKeyword } from '../../types/searchKeyword.type';
import { Observable } from 'rxjs';
import { Category } from '../../types/category.type';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule,NgFor, AsyncPipe, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [CategoryStoreItem]
})

export class HeaderComponent {

  topLevelCategories$: Observable<Category[]>;

  displayOptions: boolean = true;
  
  constructor(public categoryStoreItem: CategoryStoreItem) {    
    
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
