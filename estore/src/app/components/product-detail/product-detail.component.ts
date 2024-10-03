
import { ChangeDetectionStrategy,Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { ProductStoreItem } from '../products/productStoreItme';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, StarRatingComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ProductStoreItem]
})
export class ProductDetailComponent {

  constructor( public productStore : ProductStoreItem  ) {
    
  }
}
