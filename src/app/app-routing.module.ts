import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductListComponent} from './components/product-list/product-list.component';
import {CategoriesListComponent} from './components/categories-list/categories-list.component';
import {CryptoComponent} from './components/crypto/crypto.component';
import {ProductListComponentModule} from './components/product-list/product-list.component-module';
import {ProductsServiceModule} from './services/products.service-module';
import {CategoriesListComponentModule} from './components/categories-list/categories-list.component-module';
import {CategoriesListServiceModule} from './services/categories-list.service-module';
import {CryptoComponentModule} from './components/crypto/crypto.component-module';
import {CryptoServiceModule} from './services/crypto.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{path: 'products', component: ProductListComponent}, {
    path: 'categories-list',
    component: CategoriesListComponent
  }, {
    path: 'crypto',
    component: CryptoComponent
  }]), ProductListComponentModule, ProductsServiceModule, CategoriesListComponentModule, CategoriesListServiceModule, CryptoComponentModule, CryptoServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
