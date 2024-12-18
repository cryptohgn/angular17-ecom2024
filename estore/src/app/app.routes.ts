import { UserSignupComponent } from './components/users/user-signup/user-signup.component';
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
      ,
      {
        path: 'signup',  // Corrección aquí
        loadComponent: () => import('./components/users/user-signup/user-signup.component').then(m => m.UserSignupComponent),
      }
    ]
  },
  { path: '', redirectTo: '/home/products', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

