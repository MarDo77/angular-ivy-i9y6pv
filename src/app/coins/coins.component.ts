import { Component, Input  } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//import { CommdataService } from '../commdata.service';

@Component({
  selector: 'mycoins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css'],
})
export class MyCoinsComponent {
  public myCoinsList: Coin[] = [];
  public name: String = 'MyCoins';
  @Input() TotalNumCoins: Number = 0;
  //message: string;

  //constructor(private http: HttpClient, private datasrv: CommdataService) {
  constructor(private http: HttpClient) {
      let i = 0;
    console.log('begin');
    this.http.get('assets/coins.csv', { responseType: 'text' }).subscribe({
      next: (data) => {
        let csvLine = data.split('\n');
        //console.log(csvLine);
        for (i = 1; i < csvLine.length; i++) {
          let csvCell = csvLine[i].split(';');
          this.myCoinsList.push(
            new Coin(csvCell[0], csvCell[1], parseInt(csvCell[2]), csvCell[3])
          );
        }
      },
      error: (err) => {
        console.log('an err = ' + err);
      },
      complete: () => {
        console.log('comp' + (i - 1));
        this.TotalNumCoins = i - 1;
      },
    });
  }
}
export class Coin {
  Id: String;
  Value: String;
  Year: Number;
  MinceId: String;

  constructor(Id: String, Value: String, Year: Number, MinceId: String) {
    this.Id = Id;
    this.Value = Value;
    this.Year = Year;
    this.MinceId = MinceId;

    console.log('>' + this.Id);
  }
}
