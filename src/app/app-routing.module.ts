import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoriesListComponentModule } from './components/categories-list/categories-list.component-module';
import { CategoriesListServiceModule } from './services/categories-list.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent }, { path: 'categories-list', component: CategoriesListComponent }]), ProductListComponentModule, ProductsServiceModule, CategoriesListComponentModule, CategoriesListServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
