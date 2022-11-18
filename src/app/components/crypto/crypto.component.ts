import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {CryptoService} from '../../services/crypto.service';
import {CryptoModel} from "../../models/crypto.model";

@Component({
  selector: 'app-crypto',
  styleUrls: ['./crypto.component.scss'],
  templateUrl: './crypto.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoComponent {
  readonly listTemplate$: Observable<CryptoModel[]> = this._cryptoService.getAll();

  constructor(private _cryptoService: CryptoService) {
  }
}
