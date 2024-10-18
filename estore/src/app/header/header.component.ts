
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import { CategoryStoreItem } from '../components/category/categoryStoreItems';
import { NgFor,NgIf } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { CartStoreItem } from '../services/cart/cart.storItem';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule,NgFor,NgIf, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  constructor (public categoryStore: CategoryStoreItem, public cartStore: CartStoreItem){

  }
}
