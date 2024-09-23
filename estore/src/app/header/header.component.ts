
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import { CategoryStoreItem } from '../components/category/categoryStoreItems';
import { NgFor } from '@angular/common';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule,NgFor, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor (public categoryStore: CategoryStoreItem){

  }
}
