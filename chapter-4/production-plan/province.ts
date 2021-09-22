import { Producer } from "./producer";

export class Province {
  private _name: string;
  private _producers: Array<Producer>;
  private _demand: number = 0;
  private _price: number = 0;
  constructor(name: string) {
    this._name = name;
    this._producers = [];
  }
  get name() {
    return this._name;
  }
  addProducer(producer: Producer) {
    this._producers.push(producer);
  }
  get producerCount() {
    return this._producers.length;
  }
  get producers() {
    return this._producers;
  }
  set demand(val: number) {
    this._demand = val;
  }
  get demand() {
    return this._demand;
  }
  set price(val: number) {
    this._price = val;
  }
  get price() {
    return this._price;
  }
  get shortfall() {
    return this._demand - this.totalProduction();
  }
  get profit() {
    return this._price * this.totalProduction() - this.totalFullRevenue();
  }
  private totalFullRevenue() {
    let totalFullRevenue = 0;
    for (let producer of this._producers) {
      totalFullRevenue += producer.fullRevenue;
    }
    return totalFullRevenue;
  }
  private totalProduction() {
    let totalProduction = 0;
    for (let producer of this._producers) {
      totalProduction += producer.production;
    }
    return totalProduction;
  }
}