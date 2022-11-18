import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PublicHolidayModel} from '../models/public-holiday.model';

@Injectable()
export class PublicHolidayService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(list: any): Observable<PublicHolidayModel[]> {
    return this._httpClient.get<PublicHolidayModel[]>('https://date.nager.at/api/v2/publicholidays/2020/US');
  }
}
