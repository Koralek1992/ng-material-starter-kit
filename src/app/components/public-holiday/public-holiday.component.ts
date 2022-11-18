import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {PublicHolidayModel} from '../../models/public-holiday.model';
import {PublicHolidayService} from '../../services/public-holiday.service';

@Component({
  selector: 'app-public-holiday',
  styleUrls: ['./public-holiday.component.scss'],
  templateUrl: './public-holiday.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicHolidayComponent {
  readonly list$: Observable<PublicHolidayModel[]> = this._publicHolidayService.getAll(undefined);

  constructor(private _publicHolidayService: PublicHolidayService) {
  }
}
