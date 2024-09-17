import { ChangeDetectionStrategy, Component, signal, OnDestroy } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { CategoryStoreItem } from '../../share/categoryStoreItems';
import { Category } from './../../types/category.type';
import { NgFor } from '@angular/common';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-mat-side-nav',
  standalone: true,
  imports: [MatExpansionModule, NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mat-side-nav.component.html',
  styleUrls: ['./mat-side-nav.component.scss'] 
})
export class MatSideNavComponent implements OnDestroy {
  
  categories: Category[] = [];
  subscriptions: Subscription = new Subscription(); 

  constructor( categoryStore : CategoryStoreItem) { 
    this.subscriptions.add(
      categoryStore.categories$.subscribe(categories => {
      this.categories = categories
    })
    )}

    getCategories(parentCategoryId?: number): Category[] {
      return this.categories.filter((category) =>
        parentCategoryId
          ? category.parent_category_id === parentCategoryId
          : category.parent_category_id === null
      );
    }
  
    ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    }

  }


