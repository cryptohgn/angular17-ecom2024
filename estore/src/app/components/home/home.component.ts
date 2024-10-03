
import { MatSideNavComponent } from './../mat-side-nav/mat-side-nav.component';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CatNavigationComponent } from '../cat-navigation/cat-navigation.component';
import { ProductsComponent } from '../products/products.component';
import { CategoryStoreItem } from '../category/categoryStoreItems';
import { ProductStoreItem } from '../products/productStoreItme';
import { SearchKeyword } from '../../types/searchKeyword.type';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,CatNavigationComponent,MatSideNavComponent, ProductsComponent, RouterOutlet ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [ProductStoreItem]
})

export class HomeComponent {
  constructor(  categoriesStoreItem: CategoryStoreItem, private productStoreItem: ProductStoreItem){
    categoriesStoreItem.loadCategories();
    productStoreItem.loadProducts();
    
  }

  onSelectCategory(categoryId: number | any): void{
    this.productStoreItem.loadProducts('maincategoryid=' + categoryId)
  }

  onSearchKeyword(searhkeyword: SearchKeyword): void{
    this.productStoreItem.loadProducts('maincategoryid=' + searhkeyword.categoryId + '&keyword=' + searhkeyword.keyword)
  }
}
