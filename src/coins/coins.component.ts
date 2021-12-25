import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'my-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class MyCoins {

  public myCoinsList: Coin[] = [];
  public name: String = 'MyCoins';

  constructor(private http: HttpClient) {
    console.log('begin');
    this.http.get('assets/coins.csv', { responseType: 'text' }).subscribe(
      {
        next: (data) => {
          let csvLine = data.split('\n');
          //console.log(csvLine);
          for (let i = 1; i < csvLine.length - 1; i++) {
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
          console.log('comp');
        },
      }
    );
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
