import { Component } from '@angular/core';
import { ProductStoreItem } from '../products/productStoreItme';
import { ProductsComponent } from '../products/products.component';
import { MatSideNavComponent } from "../mat-side-nav/mat-side-nav.component";

@Component({
  selector: 'app-products-gallery',
  standalone: true,
  imports: [MatSideNavComponent, ProductsComponent],
  templateUrl: './products-gallery.component.html',
  styleUrl: './products-gallery.component.scss'
})
export class ProductsGalleryComponent {

  constructor(private productStoreItem: ProductStoreItem){}

  onSelectSubCategory(subCategoryId: number): void{
    this.productStoreItem.loadProducts('subcategoryid=' + subCategoryId)
  }

}
