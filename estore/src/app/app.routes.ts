import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


export const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      {
        path: 'products',
        loadComponent: () => import('./components/products-gallery/products-gallery.component').then(m => m.ProductsGalleryComponent),
      },
      {
        path: 'product/:id',  // Corrección aquí
        loadComponent: () => import('./components/product-detail/product-detail.component').then(m => m.ProductDetailComponent),
      },
      {
        path: 'cart',  // Corrección aquí
        loadComponent: () => import('./components/cart/cart.component').then(m => m.CartComponent),
      }
    ]
  },
  { path: '', redirectTo: '/home/products', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

