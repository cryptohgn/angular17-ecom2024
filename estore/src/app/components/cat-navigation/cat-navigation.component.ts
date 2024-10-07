import { Category } from './../../types/category.type';
import { CategoryStoreItem } from '../category/categoryStoreItems';
import { Component, Output, EventEmitter } from '@angular/core';
import { NgFor,NgIf } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { NavigationEnd, Router  } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-cat-navigation',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf],
  providers: [CategoryStoreItem],
  templateUrl: './cat-navigation.component.html',
  styleUrls: ['./cat-navigation.component.scss'] 
})

export class CatNavigationComponent {
  @Output()
  categoryClicked: EventEmitter<number> = new EventEmitter<number>();

  displayOption: boolean = true;

  topLevelCategories$: Observable<Category[]>;

  constructor(public categoryStoreItem: CategoryStoreItem, private router: Router) {

    router.events.pipe(filter(event =>event instanceof NavigationEnd)).subscribe(event => {
      this.displayOption = (event as NavigationEnd).url === 'home/products' ? true : false
    })
    
    categoryStoreItem.loadCategories();
    
    this.topLevelCategories$ = this.categoryStoreItem.topLevelCategories$;
  }

  onCategoryClick(category: Category): void{
    this.categoryClicked.emit(category.id)
  }

  goToHome() {
    window.location.reload() 
  }
}

  


 
