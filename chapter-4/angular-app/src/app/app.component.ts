import { Component } from '@angular/core';
import { Producer } from './production-plan/producer';
import { Province } from './production-plan/province';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Production plan';
  provinces: Array<Province> = [];
  dest = '10';
  ngOnInit() {
    const asia = new Province("Asia");
    asia.demand = 30;
    asia.price = 20;
    const byzantium = new Producer("Byzantium");
    byzantium.cost = 10;
    byzantium.production = 9;
    const attalia = new Producer("Attalia");
    attalia.cost = 12;
    attalia.production = 10;
    const sinope = new Producer("Sinope");
    sinope.cost = 10;
    sinope.production = 6;
    asia.addProducer(byzantium);
    asia.addProducer(attalia);
    asia.addProducer(sinope);
    this.provinces.push(asia);
  }
}
