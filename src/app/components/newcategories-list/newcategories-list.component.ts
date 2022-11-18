import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductModel} from '../../models/product.model';
import {CategoriesListService} from '../../services/categories-list.service';

@Component({
  selector: 'app-newcategories-list',
  styleUrls: ['./newcategories-list.component.scss'],
  templateUrl: './newcategories-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewcategoriesListComponent {
  readonly list$: Observable<ProductModel[]> = this._categoriesListService.getAll();

  constructor(private _categoriesListService: CategoriesListService) {
  }
}
