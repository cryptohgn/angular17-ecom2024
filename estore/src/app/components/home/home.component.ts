import { Component } from '@angular/core';
import { MatSideNavComponent } from './../mat-side-nav/mat-side-nav.component';
import { CatNavigationComponent } from '../cat-navigation/cat-navigation.component';
import { HeaderComponent } from '../header/header.component';
import { ProductsComponent } from '../products/products.component';

import { CategoryStoreItem } from '../category/categoryStoreItems';
import { ProductStoreItem } from '../products/productStoreItme';

import { SearchKeyword } from '../../types/searchKeyword.type';

import { NavigationEnd,RouterOutlet, Router } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,CatNavigationComponent,MatSideNavComponent, ProductsComponent, RouterOutlet ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [ProductStoreItem]
})
export class HomeComponent {
  constructor(
    private  categoriesStoreItem: CategoryStoreItem, 
    private productStoreItem: ProductStoreItem,
    private router: Router
  ) {
    this.categoriesStoreItem.loadCategories();
    this.productStoreItem.loadProducts();
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        if ((event as NavigationEnd).url === '/home') {
          router.navigate(['/home/products']);
        }
      });
  }

  onSelectCategory(categoryId: number): void {
    this.productStoreItem.loadProducts('maincategoryid=' + categoryId);
  }

  onSearchKeyword(searchKeyword: SearchKeyword): void {
    this.productStoreItem.loadProducts(
      'maincategoryid=' +
        searchKeyword.categoryId +
        '&keyword=' +
        searchKeyword.keyword
    );
  }
}
