import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductListComponent} from './components/product-list/product-list.component';
import {CategoriesListComponent} from './components/categories-list/categories-list.component';
import {CryptoComponent} from './components/crypto/crypto.component';
import {PublicHolidayComponent} from './components/public-holiday/public-holiday.component';
import {ProductListComponentModule} from './components/product-list/product-list.component-module';
import {ProductsServiceModule} from './services/products.service-module';
import {CategoriesListComponentModule} from './components/categories-list/categories-list.component-module';
import {CategoriesListServiceModule} from './services/categories-list.service-module';
import {CryptoComponentModule} from './components/crypto/crypto.component-module';
import {CryptoServiceModule} from './services/crypto.service-module';
import {PublicHolidayComponentModule} from './components/public-holiday/public-holiday.component-module';
import {PublicHolidayServiceModule} from './services/public-holiday.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{path: 'products', component: ProductListComponent}, {
    path: 'categories-list',
    component: CategoriesListComponent
  }, {path: 'crypto', component: CryptoComponent}, {
    path: 'public-holiday',
    component: PublicHolidayComponent
  }, {path: 'checkbox-list', component: CategoriesListComponent}, {
    path: 'categories-menu',
    component: CategoriesListComponent
  }]), ProductListComponentModule, ProductsServiceModule, CategoriesListComponentModule, CategoriesListServiceModule, CryptoComponentModule, CryptoServiceModule, PublicHolidayComponentModule, PublicHolidayServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
