import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'coindetail',
  templateUrl: './coin.component.html',
})
export class CoinDetailComponent {
  name: String = 'Coin Detail';
  CoinId: string;

  constructor(route: ActivatedRoute) {
    this.CoinId = route.snapshot.params['id'];
  }
}
