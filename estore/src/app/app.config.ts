import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { CategoryService } from './components/category/category.service';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ProductsService } from './services/products.service';
import { CartStoreItem } from './services/cart/cart.storItem';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideAnimationsAsync(), 
    provideAnimationsAsync(), 
    provideHttpClient(withFetch()), 
    provideAnimationsAsync(),
    CategoryService,
    ProductsService,
    CartStoreItem
  ]
};

