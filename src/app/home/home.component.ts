import { Component, OnInit } from '@angular/core';
import { CommdataService } from '../commdata.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
  public TotalNumCoins = '0';
  /*
  message: string;

  constructor(private datasrv: CommdataService) {}


  ngOnInit() {
    this.datasrv.currentMessage.subscribe(
      messasge => this.message = message
    );
  }
*/
}
